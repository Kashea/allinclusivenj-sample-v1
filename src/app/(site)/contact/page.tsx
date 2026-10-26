import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact All Inclusive Construction & Building",
  description: "Tell All Inclusive Construction about your kitchen, bathroom, home addition or outdoor project in Branchburg and nearby Central NJ.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-paper-deep py-16 sm:py-24">
        <div className="container-shell">
          <nav aria-label="Breadcrumb" className="mb-8 text-[10px] text-muted"><Link className="text-forest no-underline" href="/">Home</Link><span className="mx-2">/</span>Contact</nav>
          <p className="eyebrow">Your project starts with a conversation</p>
          <h1 className="display-title mt-5 max-w-4xl text-[clamp(3.25rem,7vw,6.5rem)]">Tell us what you have in mind.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">Share a few details about your home and your goals. The team will follow up to discuss next steps and whether the project is a fit.</p>
        </div>
      </section>
      <section className="section-space bg-paper">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">Get in touch</p>
            <h2 className="display-title mt-5 text-4xl sm:text-5xl">We’re here to listen.</h2>
            <div className="mt-8 space-y-5 border-y border-ink/10 py-6">
              <div className="flex items-start gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-moss text-forest"><Icon className="h-4 w-4" name="phone" /></span><div><p className="m-0 text-[9px] font-bold uppercase tracking-[0.16em] text-muted">Call or text</p><a className="mt-1 inline-block text-lg font-medium text-ink no-underline hover:text-forest" href={`tel:${siteInfo.phoneHref}`}>{siteInfo.phone}</a></div></div>
              <div className="flex items-start gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-moss text-forest"><Icon className="h-4 w-4" name="arrow-up-right" /></span><div><p className="m-0 text-[9px] font-bold uppercase tracking-[0.16em] text-muted">Email</p><a className="mt-1 inline-block text-sm font-medium text-ink no-underline hover:text-forest" href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></div></div>
              <div className="flex items-start gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-moss text-forest"><Icon className="h-4 w-4" name="pin" /></span><div><p className="m-0 text-[9px] font-bold uppercase tracking-[0.16em] text-muted">Based in</p><p className="mb-0 mt-1 text-sm text-ink">{siteInfo.location}<br />{siteInfo.region}</p></div></div>
            </div>
            <p className="mt-6 text-xs leading-5 text-muted">Please share only the details needed to help us understand your project. For questions about the information submitted, see our <Link className="font-semibold text-forest underline underline-offset-2" href="/privacy-policy/">privacy policy</Link>.</p>
            <div className="mt-8 bg-forest p-6 text-white"><p className="eyebrow !text-[#d1bb8d]">Not ready for a form?</p><p className="mb-0 mt-4 font-display text-2xl">A quick call is a good place to begin.</p><a className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-white no-underline hover:text-[#d1bb8d]" href={`tel:${siteInfo.phoneHref}`}>Call {siteInfo.phone} <Icon className="h-4 w-4" name="arrow-up-right" /></a></div>
          </aside>
          <div className="border border-ink/10 bg-white p-6 sm:p-9 lg:p-10">
            <p className="eyebrow">Project inquiry</p>
            <h2 className="display-title mt-4 text-3xl sm:text-4xl">A few details help us get started.</h2>
            <p className="mb-8 mt-4 text-sm leading-6 text-muted">Fields marked with an asterisk are required. This form sends your request to the team for follow-up.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
