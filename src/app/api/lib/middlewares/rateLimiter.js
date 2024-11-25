import pool from "../db";

export async function isRateLimited(ip, event, limit = 5) {
  try {
    const [rows] = await pool.query(
      `SELECT COUNT(*) as requestCount FROM requestlist WHERE ip = ? AND createdAt > ? AND reqevent = ?`,
      [ip, Date.now() - 60 * 60 * 1000, event],
    );

    return rows[0].requestCount >= limit;
  } catch (error) {
    return false;
  }
}
