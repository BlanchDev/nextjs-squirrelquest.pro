import { NextResponse } from "next/server";
import { headers } from "next/headers";
import pool from "../lib/db";
import { isRateLimited } from "../lib/middlewares/rateLimiter";
import { logRequest } from "../lib/middlewares/logRequester";

export async function POST(request) {
  try {
    const headersList = headers();
    const ip =
      headersList.get("cf-connecting-ip") ||
      headersList.get("x-forwarded-for") ||
      headersList.get("x-real-ip") ||
      "unknown";

    // Rate limit control
    const isLimited = await isRateLimited(ip, "contact_form_submission");
    if (isLimited) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
          nextAvailable: new Date(Date.now() + 60 * 60 * 1000),
        },
        { status: 429 },
      );
    }

    const { fullname, mailorphone, msg } = await request.json();

    // Validations...
    if (!fullname || !mailorphone || !msg) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 },
      );
    }

    if (fullname.length > 50 || mailorphone.length > 50 || msg.length > 500) {
      return NextResponse.json(
        {
          success: false,
          message: "Input length exceeds limits",
        },
        { status: 400 },
      );
    }

    // Save the message
    const createdAt = Date.now();
    await pool.query(
      "INSERT INTO contacts (fullname, mailorphone, msg, createdAt, ip) VALUES (?, ?, ?, ?, ?)",
      [fullname, mailorphone, msg, createdAt, ip],
    );

    // Log the request
    await logRequest(ip, "contact_form_submission");

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 },
    );
  }
}
