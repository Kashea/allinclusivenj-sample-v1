import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

type Database = ReturnType<typeof drizzle>;

type DatabaseConnection = {
  url: string;
  pool: Pool;
  db: Database;
};

const globalForDb = globalThis as typeof globalThis & {
  __allInclusiveDatabaseConnection?: DatabaseConnection;
};

export class DatabaseConfigurationError extends Error {
  constructor() {
    super(
      "Database storage is not configured. Set DATABASE_URL in .env.local to enable contact inquiries. The public website can run without it.",
    );
    this.name = "DatabaseConfigurationError";
  }
}

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL?.trim());
}

function getConnection(): DatabaseConnection {
  // Read configuration only when a request actually uses the database. Next.js
  // imports route modules during `next build`, even for dynamic API routes.
  const url = process.env.DATABASE_URL?.trim();
  if (!url) throw new DatabaseConfigurationError();

  const existing = globalForDb.__allInclusiveDatabaseConnection;
  if (existing?.url === url) return existing;

  const connectionPool = new Pool({
    connectionString: url,
    max: 5,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
  });

  const connection = {
    url,
    pool: connectionPool,
    db: drizzle(connectionPool),
  };

  globalForDb.__allInclusiveDatabaseConnection = connection;
  return connection;
}

/**
 * Keep the existing `import { db } from "@/db"` API while avoiding an eager
 * environment check or connection during route collection and static builds.
 * Methods are bound to the real client so Drizzle's instance state is retained.
 */
function lazyClient<T extends object>(resolve: () => T): T {
  return new Proxy({} as T, {
    get(_target, property) {
      const client = resolve();
      const value = Reflect.get(client, property, client);
      return typeof value === "function" ? value.bind(client) : value;
    },
  });
}

export const db = lazyClient<Database>(() => getConnection().db);
export const pool = lazyClient<Pool>(() => getConnection().pool);
