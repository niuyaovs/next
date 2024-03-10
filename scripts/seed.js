const { db } = require('@vercel/postgres');
const { users, invite, comment } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        telephone TEXT NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        unit VARCHAR(255) NOT NULL,
        type TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        // const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (user_id, user_name, telephone, password, unit, type)
        VALUES (${user.user_id}, ${user.user_name}, ${user.telephone}, ${user.password}, ${user.unit},  ${user.type})
        ON CONFLICT (user_id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedInvite(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS invite (
        company_id TEXT PRIMARY KEY,
        company_name VARCHAR(255) NOT NULL,
        post_name TEXT NOT NULL,
        post_abstract VARCHAR(255) NOT NULL,
        post_duty VARCHAR(255) NOT NULL,
        post_require VARCHAR(255) NOT NULL,
        more VARCHAR(255) NOT NULL,
        comment_id_list VARCHAR(255) NOT NULL,
        district VARCHAR(255) NOT NULL,
        discription VARCHAR(255) NOT NULL,
        user_id TEXT NOT NULL,
        comment_id TEXT,
        education TEXT NOT NULL,
        prize TEXT NOT NULL
      );
    `;

    console.log(`Created "invite" table`);

    const insertedInvite = await Promise.all(
      invite.map(async (user) => {
        // const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO invite (company_id, company_name, post_name, post_abstract,post_duty,post_require,more,district, discription, user_id, comment_id, education, prize,comment_id_list)
        VALUES (${user.company_id}, ${user.company_name}, ${user.post_name},  ${user.post_abstract}, ${user.post_duty}, ${user.post_require}, ${user.more}, ${user.district}, ${user.discription},  ${user.user_id}, ${user.comment_id}, ${user.education},  ${user.prize},  ${user.comment_id_list})
        ON CONFLICT (company_id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedInvite.length} invite`);

    return {
      createTable,
      invite: insertedInvite,
    };
  } catch (error) {
    console.error('Error seeding invite:', error);
    throw error;
  }
}

async function seedComment(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS comment (
        comment_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        comment VARCHAR(255) NOT NULL,
        comment_time VARCHAR(255) NOT NULL UNIQUE,
        company_id TEXT NOT NULL,
        user_id TEXT NOT NULL,
        user_name TEXT NOT NULL,
        answer_id_list VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "comment" table`);

    const insertedComment = await Promise.all(
      comment.map(async (user) => {
        // const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO comment (comment_id, comment, comment_time, company_id, user_id, user_name, answer_id_list)
        VALUES (${user.comment_id}, ${user.comment}, ${user.comment_time}, ${user.company_id}, ${user.user_id},  ${user.user_name},  ${user.answer_id_list})
        ON CONFLICT (comment_id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedComment.length} comment`);

    return {
      createTable,
      comment: insertedComment,
    };
  } catch (error) {
    console.error('Error seeding comment:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedInvite(client);
  // await seedComment(client)

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
