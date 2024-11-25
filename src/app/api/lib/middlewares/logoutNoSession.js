import pool from "../db";
import { logRequest } from "./logRequester";

export default async function logoutNoSession(sessionKey, ip) {
  // Mark the session as deleted
  const [result] = await pool.query(
    "UPDATE adminsessions SET isDeleted = 1 WHERE (sessionKey = ? OR ip = ?) AND isDeleted = 0",
    [sessionKey, ip],
  );

  await logRequest(ip, "admin_autologout_success");

  return result.affectedRows > 0;
}
