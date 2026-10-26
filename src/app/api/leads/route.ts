import { db, isDatabaseConfigured } from "@/db";
import { contactLeads } from "@/db/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  location?: unknown;
  budget?: unknown;
  timeline?: unknown;
  hasPlans?: unknown;
  message?: unknown;
  consent?: unknown;
  sourcePath?: unknown;
  website?: unknown;
};

function readString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return Response.json({ error: "Please check the form and try again." }, { status: 400 });
    }
    payload = parsed as LeadPayload;
  } catch {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  // Quietly accept the request without storing it when the hidden spam field is filled.
  if (readString(payload.website, 200)) {
    return Response.json({ message: "Thanks for reaching out. Your inquiry has been received." }, { status: 202 });
  }

  const name = readString(payload.name, 120);
  const email = readString(payload.email, 254).toLowerCase();
  const phone = readString(payload.phone, 40);
  const projectType = readString(payload.projectType, 80);
  const location = readString(payload.location, 120);
  const budget = readString(payload.budget, 80);
  const timeline = readString(payload.timeline, 80);
  const message = readString(payload.message, 4000);
  const sourcePath = readString(payload.sourcePath, 300);
  const consent = payload.consent === true;
  const hasPlans = typeof payload.hasPlans === "boolean" ? payload.hasPlans : null;

  if (!name || !email || !projectType || !consent) {
    return Response.json(
      { error: "Please provide your name, email, project type, and consent before sending." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!isDatabaseConfigured()) {
    return Response.json(
      {
        code: "CONTACT_STORAGE_NOT_CONFIGURED",
        error:
          "Online inquiries are not available yet. Your request has not been saved. Please call 732-484-9008 or email allinclusivenj@gmail.com instead.",
      },
      { status: 503 },
    );
  }

  try {
    await db.insert(contactLeads).values({
      name,
      email,
      phone: phone || null,
      projectType,
      location: location || null,
      budget: budget || null,
      timeline: timeline || null,
      hasPlans,
      message: message || null,
      consent,
      sourcePath: sourcePath.startsWith("/") ? sourcePath : "/contact/",
    });

    return Response.json({ message: "Thanks for reaching out. Your inquiry has been received." }, { status: 201 });
  } catch {
    return Response.json(
      {
        code: "CONTACT_STORAGE_UNAVAILABLE",
        error:
          "We could not save your inquiry just now. Please call 732-484-9008 or email allinclusivenj@gmail.com instead.",
      },
      { status: 503 },
    );
  }
}
