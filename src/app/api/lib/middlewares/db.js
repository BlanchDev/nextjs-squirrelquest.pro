import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const db = mysql.createPool({
  host: process.env.API_MYSQL_DB_HOST,
  user: process.env.API_MYSQL_DB_USER,
  password: process.env.API_MYSQL_DB_PASSWORD,
  database: process.env.API_MYSQL_DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: true,
  },
});

export default db;
