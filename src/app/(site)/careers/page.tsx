import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers at All Inclusive Construction & Building",
  description: "Learn about construction career opportunities with All Inclusive Construction & Building in Branchburg, New Jersey.",
  alternates: { canonical: "/careers/" },
};

export default function CareersPage() {
  const subject = encodeURIComponent("Career inquiry — All Inclusive Construction & Building");

  return (
    <>
      <section className="bg-paper-deep py-16 sm:py-24">
        <div className="container-shell">
          <nav aria-label="Breadcrumb" className="mb-8 text-[10px] text-muted"><Link className="text-forest no-underline" href="/">Home</Link><span className="mx-2">/</span>Careers</nav>
          <p className="eyebrow">Build good things with good people</p>
          <h1 className="display-title mt-5 max-w-4xl text-[clamp(3.25rem,7vw,6.5rem)]">Bring your craft to the work.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">All Inclusive Construction &amp; Building is a residential construction business based in Branchburg, New Jersey. Reach out to ask about current opportunities with the team.</p>
        </div>
      </section>
      <section className="section-space bg-paper">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
          <div><p className="eyebrow">Current openings</p><h2 className="display-title mt-5 text-4xl sm:text-5xl">Ask us what’s available.</h2><p className="mt-6 text-sm leading-6 text-muted">We are always glad to hear from skilled, reliable people. Openings change through the year, so email us to ask what is available right now.</p><a className="button-primary mt-7" href={`mailto:${siteInfo.email}?subject=${subject}`}>Email a career inquiry <Icon className="h-4 w-4" name="arrow-up-right" /></a></div>
          <div className="border border-ink/10 bg-white p-6 sm:p-9">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.17em] text-brass">The kind of role we hire for</p>
            <h3 className="display-title mt-4 text-3xl">Experienced carpenter</h3>
            <p className="mt-4 text-sm leading-6 text-muted">A typical carpentry role calls for five or more years of experience across residential carpentry, general construction, paint, decks, fences, kitchens, bathrooms, flooring and tile.</p>
            <h4 className="mb-3 mt-8 text-[10px] font-bold uppercase tracking-[0.15em] text-ink">Experience we value</h4>
            <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
              {["Fine and rough carpentry", "Drywall, paint, tile and finish work", "Comfort communicating with homeowners", "Teamwork across active job sites", "Familiarity with construction tools", "Reliable transportation and valid license"].map((item) => <li className="flex items-start gap-2 text-xs leading-5 text-muted" key={item}><Icon className="mt-0.5 h-4 w-4 shrink-0 text-brass" name="check" />{item}</li>)}
            </ul>
            <p className="mb-0 mt-7 border-t border-ink/10 pt-5 text-xs leading-5 text-muted">Ask us about current pay, benefits and time-off details when you get in touch.</p>
          </div>
        </div>
      </section>
      <section className="bg-forest py-14 text-white"><div className="container-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="eyebrow !text-[#d1bb8d]">Branchburg, NJ</p><h2 className="display-title mt-4 text-3xl text-white sm:text-4xl">A good team starts with a conversation.</h2></div><a className="button-primary !border-white !bg-white !text-forest" href={`mailto:${siteInfo.email}?subject=${subject}`}>Get in touch <Icon className="h-4 w-4" name="arrow-right" /></a></div></section>
    </>
  );
}
