import { Pool } from "pg"

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "istech",
  password: "tu_password",
  port: 5432,
})