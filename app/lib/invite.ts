import { sql } from '@vercel/postgres';
export async function fetchInviteList() {
  try {
    const data = await sql`SELECT * FROM invite`;
    console.log('data.', data.rows)
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}