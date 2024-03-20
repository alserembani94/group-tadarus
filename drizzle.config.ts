import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/schema/*",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.TURSO_DATABASE_URL!,
  }
} satisfies Config;