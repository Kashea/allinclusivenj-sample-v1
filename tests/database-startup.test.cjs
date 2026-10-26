const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { createRequire } = require("node:module");
const path = require("node:path");
const { test } = require("node:test");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");

// Compile the real server modules in isolation, without Next.js loading the
// sandbox's .env file. This reproduces a fresh download with no DATABASE_URL.
function loadTypeScript(relativePath, aliases = {}) {
  const filename = path.join(root, relativePath);
  const { outputText } = ts.transpileModule(readFileSync(filename, "utf8"), {
    fileName: filename,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  });
  const result = { exports: {} };
  const nativeRequire = createRequire(filename);
  const localRequire = (specifier) =>
    Object.prototype.hasOwnProperty.call(aliases, specifier)
      ? aliases[specifier]
      : nativeRequire(specifier);

  const run = new Function("exports", "require", "module", "__filename", "__dirname", outputText);
  run(result.exports, localRequire, result, filename, path.dirname(filename));
  return result.exports;
}

function leadRequest(payload) {
  return new Request("http://localhost:3000/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

const validLead = {
  name: "Startup regression test",
  email: "startup@example.test",
  projectType: "Kitchen remodel",
  consent: true,
  sourcePath: "/contact/",
};

test("database-backed routes are safe in an unconfigured download", async (t) => {
  const originalDatabaseUrl = process.env.DATABASE_URL;
  delete process.env.DATABASE_URL;

  t.after(async () => {
    const connection = globalThis.__allInclusiveDatabaseConnection;
    if (connection) {
      await connection.pool.end();
      delete globalThis.__allInclusiveDatabaseConnection;
    }
    if (originalDatabaseUrl === undefined) delete process.env.DATABASE_URL;
    else process.env.DATABASE_URL = originalDatabaseUrl;
  });

  let database;
  let leads;
  let health;

  await t.test("importing the database module does not need a URL", () => {
    assert.doesNotThrow(() => {
      database = loadTypeScript("src/db/index.ts");
    });
    assert.equal(database.isDatabaseConfigured(), false);
    assert.equal(globalThis.__allInclusiveDatabaseConnection, undefined);
  });

  await t.test("whitespace is not treated as a configured database", () => {
    process.env.DATABASE_URL = "   ";
    assert.equal(database.isDatabaseConfigured(), false);
    delete process.env.DATABASE_URL;
  });

  await t.test("configuration is checked only when a database method is used", () => {
    assert.throws(() => database.db.execute, database.DatabaseConfigurationError);
    assert.equal(globalThis.__allInclusiveDatabaseConnection, undefined);
  });

  await t.test("Next.js can import both API route modules without credentials", () => {
    const schema = loadTypeScript("src/db/schema.ts");
    const aliases = { "@/db": database, "@/db/schema": schema };
    assert.doesNotThrow(() => {
      leads = loadTypeScript("src/app/api/leads/route.ts", aliases);
      health = loadTypeScript("src/app/api/health/route.ts", aliases);
    });
    assert.equal(globalThis.__allInclusiveDatabaseConnection, undefined);
  });

  await t.test("readiness identifies missing storage without crashing", async () => {
    const response = await health.GET();
    const body = await response.json();
    assert.equal(response.status, 503);
    assert.equal(body.ok, false);
    assert.equal(body.database, "not_configured");
  });

  await t.test("valid inquiries are not falsely accepted without storage", async () => {
    const response = await leads.POST(leadRequest(validLead));
    const body = await response.json();
    assert.equal(response.status, 503);
    assert.equal(body.code, "CONTACT_STORAGE_NOT_CONFIGURED");
    assert.match(body.error, /not been saved/);
    assert.equal(globalThis.__allInclusiveDatabaseConnection, undefined);
  });

  await t.test("malformed request objects return validation errors", async () => {
    for (const payload of [null, [], "invalid", {}]) {
      const response = await leads.POST(leadRequest(payload));
      assert.equal(response.status, 400);
    }
  });

  await t.test("a lazy client retains Drizzle query construction and method binding", () => {
    process.env.DATABASE_URL = "postgresql://test:test@127.0.0.1:1/startup_regression";
    assert.equal(database.isDatabaseConfigured(), true);
    const { contactLeads } = loadTypeScript("src/db/schema.ts");
    const query = database.db.insert(contactLeads).values({
      name: validLead.name,
      email: validLead.email,
      projectType: validLead.projectType,
      consent: true,
    }).toSQL();
    assert.match(query.sql, /insert into "contact_leads"/);
    assert.ok(query.params.includes(validLead.email));
    // Constructing a query must not connect to the intentionally unused port.
    assert.equal(database.pool.totalCount, 0);
  });
});
