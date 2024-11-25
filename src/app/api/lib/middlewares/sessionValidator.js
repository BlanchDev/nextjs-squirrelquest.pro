import pool from "../db";
import logoutNoSession from "./logoutNoSession";

export async function validateSession(sessionKey, ip) {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM adminsessions WHERE sessionKey = ? AND ip = ? AND isDeleted = 0",
      [sessionKey, ip],
    );
    if (rows.length === 0) {
      await logoutNoSession(sessionKey, ip);
      return false;
    }
    return true;
  } catch (error) {
    await logoutNoSession(sessionKey, ip);
    return false;
  }
}
