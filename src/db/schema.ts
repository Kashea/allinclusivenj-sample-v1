import {
  boolean,
  index,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * Private project inquiries. Public pages and editorial content live in Sanity;
 * only contact submissions are persisted in PostgreSQL.
 */
export const contactLeads = pgTable(
  "contact_leads",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 120 }).notNull(),
    email: varchar("email", { length: 254 }).notNull(),
    phone: varchar("phone", { length: 40 }),
    projectType: varchar("project_type", { length: 80 }).notNull(),
    location: varchar("location", { length: 120 }),
    budget: varchar("budget", { length: 80 }),
    timeline: varchar("timeline", { length: 80 }),
    hasPlans: boolean("has_plans"),
    message: text("message"),
    consent: boolean("consent").notNull(),
    sourcePath: varchar("source_path", { length: 300 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("contact_leads_created_at_idx").on(table.createdAt),
    index("contact_leads_email_idx").on(table.email),
  ],
);

export type ContactLead = typeof contactLeads.$inferSelect;
export type NewContactLead = typeof contactLeads.$inferInsert;
