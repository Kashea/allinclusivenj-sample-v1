import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Match Next.js local environment precedence. Existing shell variables win.
config({ path: ".env.local", quiet: true });
config({ path: ".env", quiet: true });

const databaseUrl = process.env.DATABASE_URL?.trim();

if (!databaseUrl) {
  throw new Error(
    "Schema setup requires DATABASE_URL. Add your PostgreSQL connection string to .env.local, then run npx drizzle-kit push again. You can run the website with npm run dev without a database.",
  );
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  dbCredentials: { url: databaseUrl },
});
