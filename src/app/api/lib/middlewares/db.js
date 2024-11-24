import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = createPool({
  host: process.env.NEXT_PUBLIC_MYSQL_DB_HOST,
  user: process.env.NEXT_PUBLIC_MYSQL_DB_USER,
  password: process.env.NEXT_PUBLIC_MYSQL_DB_PASSWORD,
  database: process.env.NEXT_PUBLIC_MYSQL_DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
