"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { siteInfo } from "@/content/site";

type SubmissionState = "idle" | "submitting" | "success" | "error";

const labelClass = "mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink";

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setNotice("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const hasPlans = data.get("hasPlans");
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      projectType: String(data.get("projectType") || ""),
      location: String(data.get("location") || ""),
      budget: String(data.get("budget") || ""),
      timeline: String(data.get("timeline") || ""),
      hasPlans: hasPlans === "yes" ? true : hasPlans === "no" ? false : null,
      message: String(data.get("message") || ""),
      consent: data.get("consent") === "on",
      website: String(data.get("website") || ""),
      sourcePath: window.location.pathname,
    };

    try {
      const response = await fetch("/api/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) throw new Error(result.error || "We could not send your request. Please try again.");
      form.reset();
      setState("success");
      setNotice(result.message || "Thanks for reaching out. Your project inquiry has been received.");
    } catch (error) {
      setState("error");
      setNotice(error instanceof Error ? error.message : "Something went wrong. Please call or email our team.");
    }
  }

  if (state === "success") {
    return (
      <div aria-live="polite" className="border border-forest/20 bg-moss/55 p-7 sm:p-9" role="status">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white"><Icon className="h-5 w-5" name="check" /></span>
        <h2 className="mt-5 font-display text-3xl font-normal tracking-[-0.04em]">Thank you for getting in touch.</h2>
        <p className="mb-0 mt-3 max-w-lg text-sm leading-6 text-muted">{notice}</p>
        <button className="mt-6 text-sm font-semibold text-forest underline underline-offset-4" onClick={() => setState("idle")} type="button">
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="lead-name">Your name <span aria-hidden="true" className="text-brass">*</span></label>
          <input autoComplete="name" className="form-field" id="lead-name" maxLength={120} name="name" placeholder="Name" required />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-email">Email address <span aria-hidden="true" className="text-brass">*</span></label>
          <input autoComplete="email" className="form-field" id="lead-email" maxLength={254} name="email" placeholder="you@example.com" required type="email" />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-phone">Phone number</label>
          <input autoComplete="tel" className="form-field" id="lead-phone" maxLength={40} name="phone" placeholder="(000) 000-0000" type="tel" />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-project-type">What are you planning? <span aria-hidden="true" className="text-brass">*</span></label>
          <select className="form-field" defaultValue="" id="lead-project-type" name="projectType" required>
            <option disabled value="">Choose a project type</option>
            <option value="Kitchen remodel">Kitchen remodel</option>
            <option value="Bathroom remodel">Bathroom remodel</option>
            <option value="Home addition">Home addition</option>
            <option value="Deck or porch">Deck or porch</option>
            <option value="Other residential project">Other residential project</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-location">Project town or ZIP</label>
          <input autoComplete="postal-code" className="form-field" id="lead-location" maxLength={120} name="location" placeholder="Where is the project?" />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-timeline">When are you hoping to begin?</label>
          <select className="form-field" defaultValue="" id="lead-timeline" name="timeline">
            <option value="">Select a timeframe</option>
            <option value="Exploring options">I am exploring options</option>
            <option value="Within 3 months">Within 3 months</option>
            <option value="3 to 6 months">3–6 months</option>
            <option value="6 months or more">6 months or more</option>
            <option value="Flexible">I am flexible</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-budget">Budget notes (optional)</label>
          <input className="form-field" id="lead-budget" maxLength={80} name="budget" placeholder="A range or planning note" />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-plans">Do you have plans or drawings?</label>
          <select className="form-field" defaultValue="unsure" id="lead-plans" name="hasPlans">
            <option value="unsure">Not sure yet</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="lead-message">A little about the project</label>
        <textarea className="form-field min-h-32 resize-y" id="lead-message" maxLength={4000} name="message" placeholder="What would you like to change about your home?" rows={5} />
      </div>

      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="lead-website">Leave this field empty</label>
        <input autoComplete="off" id="lead-website" name="website" tabIndex={-1} />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-muted" htmlFor="lead-consent">
        <input className="mt-1 h-4 w-4 shrink-0 accent-[#28473a]" id="lead-consent" name="consent" required type="checkbox" />
        <span>I agree that All Inclusive Construction &amp; Building may use the information I provide to respond to this project inquiry. Please see the <Link className="font-semibold text-forest underline underline-offset-2" href="/privacy-policy/">privacy policy</Link>. <span aria-hidden="true" className="text-brass">*</span></span>
      </label>

      {state === "error" && <p aria-live="assertive" className="m-0 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">{notice}</p>}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button className="button-primary w-full cursor-pointer disabled:cursor-wait disabled:opacity-65 sm:w-auto" disabled={state === "submitting"} type="submit">
          {state === "submitting" ? "Sending your inquiry…" : "Send project inquiry"}
          {state !== "submitting" && <Icon className="h-4 w-4" name="arrow-right" />}
        </button>
        <p className="m-0 max-w-xs text-xs leading-5 text-muted">Prefer to talk? <a className="font-semibold text-forest underline underline-offset-2" href={`tel:${siteInfo.phoneHref}`}>Call {siteInfo.phone}</a></p>
      </div>
    </form>
  );
}
