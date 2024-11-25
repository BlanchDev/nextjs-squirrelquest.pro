import pool from "../db";

export async function logRequest(ip, event) {
  try {
    await pool.query(
      "INSERT INTO requestlist (ip, createdAt, reqevent) VALUES (?, ?, ?)",
      [ip, Date.now(), event],
    );
  } catch (error) {
    console.error("Request logging error:", error);
  }
}
