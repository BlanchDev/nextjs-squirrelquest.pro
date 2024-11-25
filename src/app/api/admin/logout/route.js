import { NextResponse } from "next/server";
import { headers } from "next/headers";
import pool from "../../lib/db";
import dotenv from "dotenv";
import { isRateLimited } from "../../lib/middlewares/rateLimiter";
import { logRequest } from "../../lib/middlewares/logRequester";

dotenv.config();

export async function POST(request) {
  try {
    const headersList = headers();
    const ip =
      headersList.get("cf-connecting-ip") ||
      headersList.get("x-forwarded-for") ||
      headersList.get("x-real-ip") ||
      "unknown";

    // Rate limit control
    const isLimited = await isRateLimited(ip, "admin_logout_attempt");
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

    const { sessionKey } = await request.json();

    // Mark the session as deleted
    const [result] = await pool.query(
      "UPDATE adminsessions SET isDeleted = 1 WHERE (sessionKey = ? OR ip = ?) AND isDeleted = 0",
      [sessionKey, ip],
    );

    if (result.affectedRows > 0) {
      // Log the successful logout
      await logRequest(ip, "admin_logout_success");
      localStorage.removeItem("sessionKey");

      return NextResponse.json(
        {
          success: true,
          message: "Logout successful, session marked as deleted",
        },
        { status: 200 },
      );
    } else {
      localStorage.removeItem("sessionKey");
      return NextResponse.json(
        {
          success: false,
          message: "Session not found or already deleted",
        },
        { status: 404 },
      );
    }
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
