import path from "path";
import { Pool } from "pg";
import { migrate } from "postgres-migrations";

export const pool = new Pool();

export async function migrateDatabase() {
  const client = await pool.connect();
  await migrate({ client }, path.resolve(__dirname, "migrations"))
}