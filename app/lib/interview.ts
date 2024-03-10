import { sql } from '@vercel/postgres';
export async function fetchInterviewList(user_id: any) {
  try {
    const data = await sql`SELECT * FROM interview where interview_person_id = ${user_id}`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
