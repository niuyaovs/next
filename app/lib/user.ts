import { sql } from '@vercel/postgres';
export async function fetchUserInfo() {
  try {
    const data = await sql`SELECT telephone, password, user_name FROM users`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}