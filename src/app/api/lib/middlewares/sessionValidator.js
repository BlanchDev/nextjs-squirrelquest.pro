import pool from "../db";

export async function validateSession(sessionKey, ip) {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM adminsessions WHERE sessionKey = ? AND ip = ? AND isDeleted = 0",
      [sessionKey, ip],
    );
    return rows.length > 0;
  } catch (error) {
    console.error("Session validation error:", error);
    return false;
  }
}
