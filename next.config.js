/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    POSTGRES_URL:
      'postgres://default:juOx5XsnHaz0@ep-long-hill-a48v3c1g-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
    POSTGRES_PRISMA_URL:
      'postgres://default:juOx5XsnHaz0@ep-long-hill-a48v3c1g-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15',
    POSTGRES_URL_NO_SSL:
      'postgres://default:juOx5XsnHaz0@ep-long-hill-a48v3c1g-pooler.us-east-1.aws.neon.tech:5432/verceldb',
    POSTGRES_URL_NON_POOLING:
      'postgres://default:juOx5XsnHaz0@ep-long-hill-a48v3c1g.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
    POSTGRES_USER: 'default',
    POSTGRES_HOST: 'ep-long-hill-a48v3c1g-pooler.us-east-1.aws.neon.tech',
    POSTGRES_PASSWORD: 'juOx5XsnHaz0',
    POSTGRES_DATABASE: 'verceldb',
  },
};

module.exports = nextConfig;
