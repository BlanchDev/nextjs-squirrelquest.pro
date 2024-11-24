import { NextResponse } from "next/server";
import { headers } from "next/headers";
import pool from "../lib/middlewares/db";

const MAX_REQUESTS = 5; // 5 requests per hour

// Rate limit control
async function isRateLimited(ip) {
  try {
    const [rows] = await pool.query(
      `SELECT COUNT(*) as requestCount FROM contacts WHERE ip = ? AND createdTime > ?`,
      [ip, Date.now() - 60 * 60 * 1000], // Last 1 hour
    );

    console.debug("Rate limit check:", {
      ip,
      requestCount: rows[0].requestCount,
      limit: MAX_REQUESTS,
    });

    return rows[0].requestCount >= MAX_REQUESTS;
  } catch (error) {
    console.error("Rate limit check error:", error);
    return false;
  }
}

export async function POST(request) {
  try {
    const headersList = headers();
    const ip =
      headersList.get("cf-connecting-ip") ||
      headersList.get("x-forwarded-for") ||
      headersList.get("x-real-ip") ||
      "unknown";

    // Rate limit control
    const isLimited = await isRateLimited(ip);
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
    const createdTime = Date.now();
    await pool.query(
      "INSERT INTO contacts (fullname, mailorphone, msg, createdTime, ip) VALUES (?, ?, ?, ?, ?)",
      [fullname, mailorphone, msg, createdTime, ip],
    );

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 },
    );
  }
}
