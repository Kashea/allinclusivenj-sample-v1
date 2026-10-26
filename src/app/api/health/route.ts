import { db, isDatabaseConfigured } from "@/db";
import { sql } from "drizzle-orm";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!isDatabaseConfigured()) {
    return Response.json(
      {
        ok: false,
        database: "not_configured",
        message:
          "The website can run without a database. Set DATABASE_URL in .env.local to enable inquiry storage and database readiness.",
      },
      { status: 503 },
    );
  }

  try {
    await db.execute(sql`select 1`);
    return Response.json({ ok: true, database: "connected" });
  } catch {
    return Response.json(
      {
        ok: false,
        database: "unavailable",
        message: "The configured database is not reachable. Check the PostgreSQL service and connection settings.",
      },
      { status: 503 },
    );
  }
}
