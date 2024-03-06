import { sql } from '@vercel/postgres';
import { UserInfo } from './definitions';
export async function fetchUserInfo() {
  try {
    const data = await sql<UserInfo>`SELECT telephone, password, name FROM users`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}