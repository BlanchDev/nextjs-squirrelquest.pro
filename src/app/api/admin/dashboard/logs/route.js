import { NextResponse } from "next/server";
import { headers } from "next/headers";
import pool from "../../../lib/db";
import { isRateLimited } from "../../../lib/middlewares/rateLimiter";
import { validateSession } from "../../../lib/middlewares/sessionValidator";
import { logRequest } from "../../../lib/middlewares/logRequester";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
      const isLimited = await isRateLimited(ip, "admin_logs_unauthorized");
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
      await logRequest(ip, "admin_logs_unauthorized");

      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired session",
        },
        { status: 401 },
      );
    }

    // Fetch contacts data
    const [logs] = await pool.query(
      "SELECT * FROM requestlist ORDER BY id DESC",
    );

    // Log the successful access
    // await logRequest(ip, "admin_logs_view");

    return NextResponse.json(
      {
        success: true,
        logs,
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
