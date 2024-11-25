import { NextResponse } from "next/server";
import { headers } from "next/headers";
import pool from "../../../lib/db";
import { logRequest } from "../../../lib/middlewares/logRequester";
import { isRateLimited } from "../../../lib/middlewares/rateLimiter";
import { validateSession } from "../../../lib/middlewares/sessionValidator";

export async function POST(request) {
  try {
    const headersList = headers();
    const ip =
      headersList.get("cf-connecting-ip") ||
      headersList.get("x-forwarded-for") ||
      headersList.get("x-real-ip") ||
      "unknown";

    const { pageUrl } = await request.json();
    const createdAt = Date.now();
    const oneDayAgo = createdAt - 24 * 60 * 60 * 1000; // 24 hours ago

    // Check if this IP has been logged within the last 24 hours
    const [existingIp] = await pool.query(
      "SELECT * FROM userips WHERE ip = ? AND createdAt > ? LIMIT 1",
      [ip, oneDayAgo],
    );

    // If this IP has not been logged within the last 24 hours, log it
    if (!existingIp.length) {
      console.debug("New IP logged:", { ip, pageUrl, createdAt });

      await pool.query(
        "INSERT INTO userips (ip, createdAt, pageUrl) VALUES (?, ?, ?)",
        [ip, createdAt, pageUrl],
      );

      return NextResponse.json(
        {
          success: true,
          message: "New IP logged successfully",
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "IP already logged within 24 hours",
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

export async function GET(request) {
  try {
    const headersList = headers();
    const ip =
      headersList.get("cf-connecting-ip") ||
      headersList.get("x-forwarded-for") ||
      headersList.get("x-real-ip") ||
      "unknown";

    const sessionKey = request.headers.get("sessionKey");
    if (!sessionKey) {
      return NextResponse.json(
        {
          success: false,
          message: "No session key provided",
        },
        { status: 401 },
      );
    }

    // Validate session
    const isValidSession = await validateSession(sessionKey, ip);
    if (!isValidSession) {
      // Check rate limit for failed attempts
      const isLimited = await isRateLimited(ip, "admin_userips_unauthorized");
      if (isLimited) {
        return NextResponse.json(
          {
            success: false,
            message: "Too many unauthorized attempts. Please try again later.",
            nextAvailable: new Date(Date.now() + 60 * 60 * 1000),
          },
          { status: 429 },
        );
      }

      // Log the failed attempt
      await logRequest(ip, "admin_userips_unauthorized");

      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired session",
        },
        { status: 401 },
      );
    }

    // Fetch the IP and page access data
    const [rows] = await pool.query("SELECT * FROM userips ORDER BY id DESC");

    console.log("Fetched IP data:", rows);

    return NextResponse.json(
      {
        success: true,
        data: rows,
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
