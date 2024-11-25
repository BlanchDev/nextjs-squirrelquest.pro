import { NextResponse } from "next/server";
import { headers } from "next/headers";
import pool from "../../lib/db";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { isRateLimited } from "../../lib/middlewares/rateLimiter";
import { logRequest } from "../../lib/middlewares/logRequester";

dotenv.config();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function POST(request) {
  try {
    const headersList = headers();
    const ip =
      headersList.get("cf-connecting-ip") ||
      headersList.get("x-forwarded-for") ||
      headersList.get("x-real-ip") ||
      "unknown";

    // Rate limit control
    const isLimited = await isRateLimited(ip, "admin_login_attempt");
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

    const { password, sessionKey } = await request.json();

    // Check if sessionKey exists and matches the IP
    const [sessionRows] = await pool.query(
      "SELECT * FROM adminsessions WHERE sessionKey = ? AND ip = ? AND isDeleted = 0",
      [sessionKey, ip],
    );

    if (sessionRows.length > 0) {
      return NextResponse.json(
        {
          success: true,
          message: "Session validated successfully",
        },
        { status: 200 },
      );
    }

    // Validate admin password
    if (password !== ADMIN_PASSWORD) {
      // Log the failed attempt
      await logRequest(ip, "admin_login_attempt");

      return NextResponse.json(
        {
          success: false,
          message: "Invalid password",
        },
        { status: 401 },
      );
    }

    // Log the successful login
    await logRequest(ip, "admin_login_success");

    // Check if IP exists in admin sessions
    const [ipSessionRows] = await pool.query(
      "SELECT * FROM adminsessions WHERE ip = ? AND isDeleted = 0",
      [ip],
    );

    if (ipSessionRows.length > 0) {
      // Update the sessionKey for the existing IP
      const newSessionKey = uuidv4();
      await pool.query(
        "UPDATE adminsessions SET sessionKey = ?, createdAt = ? WHERE ip = ? AND isDeleted = 0",
        [newSessionKey, Date.now(), ip],
      );

      return NextResponse.json(
        {
          success: true,
          message: "Admin login successful, session key updated",
          sessionKey: newSessionKey,
        },
        { status: 200 },
      );
    }

    // Create a new session if IP does not exist
    const newSessionKey = uuidv4();
    await pool.query(
      "INSERT INTO adminsessions (sessionKey, ip, createdAt, isDeleted) VALUES (?, ?, ?, ?)",
      [newSessionKey, ip, Date.now(), 0],
    );

    return NextResponse.json(
      {
        success: true,
        message: "Admin login successful",
        sessionKey: newSessionKey,
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
