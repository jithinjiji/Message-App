import { Pool } from "pg";

export const pool = new Pool()

// Configure the newly connected client to use the current schema.
pool.on("connect", client => {
  client.query(`SET SCHEMA 'message_service'`);
});

type ParamType = string|number|boolean;

export async function query(text: string, params?: ParamType[]) {
  const result = await pool.query(text, params);
  return result;
}