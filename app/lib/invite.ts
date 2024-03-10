import { sql } from '@vercel/postgres';
export async function fetchInviteList() {
  try {
    const data = await sql`SELECT * FROM invite`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchInviteDetail(id: any) {
  try {
    const data = await sql`SELECT * FROM invite where company_id = ${id}`;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchInviteConditionList(city: any, input: any) {
  console.log(city, input);
  try {
    if (city && input) {
      const data =
        await sql`SELECT * FROM invite where district = ${city} and post_name like ${input}`;
      return data.rows;
    }
    if(city) {
      const data =
        await sql`SELECT * FROM invite where district = ${city}`;
      return data.rows;
    }
    if(input) {
      let a = "%" + input + "%";
      const data =
        await sql`SELECT * FROM invite where post_name like ${a}`;
      return data.rows;
    }
    return fetchInviteList();
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
