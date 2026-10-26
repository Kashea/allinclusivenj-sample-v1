import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { services, siteInfo, testimonials } from "@/content/site";

export const metadata: Metadata = {
  title: "About All Inclusive Construction & Building",
  description: "Meet the woman-owned residential construction team based in Branchburg, NJ, and learn about its project approach, experience and community involvement.",
  alternates: { canonical: "/about/" },
};

const portrait = "https://allinclusivenj.com/wp-content/uploads/2026/06/Geraldine.jpg";

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper-deep py-16 sm:py-24">
        <div className="container-shell">
          <nav aria-label="Breadcrumb" className="mb-8 text-[10px] text-muted"><Link className="text-forest no-underline" href="/">Home</Link><span className="mx-2">/</span>About</nav>
          <p className="eyebrow">Built on experience. Led with care.</p>
          <h1 className="display-title mt-5 max-w-4xl text-[clamp(3.25rem,7vw,6.5rem)]">Good work is personal.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">All Inclusive Construction &amp; Building is a woman-owned residential construction business based in Branchburg, New Jersey. We bring more than 20 years of general contracting experience to homes across the region.</p>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="image-frame relative aspect-[4/5]"><Image alt="Geraldine Smith, owner of All Inclusive Construction & Building" className="object-cover" fill priority sizes="(max-width: 1024px) 90vw, 40vw" src={portrait} /></div>
            <div className="absolute -bottom-4 -right-2 bg-forest px-5 py-4 text-white sm:-right-6 sm:px-7"><p className="m-0 font-display text-2xl">Geraldine Smith</p><p className="mb-0 mt-1 text-[9px] uppercase tracking-[0.16em] text-white/65">Owner &amp; leader</p></div>
          </div>
          <div className="max-w-xl">
            <p className="eyebrow">Woman-owned · Branchburg, NJ</p>
            <h2 className="display-title mt-5 text-4xl sm:text-5xl">A company shaped by craftsmanship and connection.</h2>
            <p className="mt-6 text-sm leading-7 text-muted">With a wide range of residential experience—from kitchens and bathrooms to additions, decks and custom work—the team takes time to understand each home and the people who live in it.</p>
            <p className="mt-4 text-sm leading-7 text-muted">Owner Geraldine Smith has been active in New Jersey&apos;s home-building and remodeling community, including leadership and volunteer roles with the Metropolitan Builders &amp; Contractors Association, Professional Women in Building and the National Association of Home Builders.</p>
            <div className="mt-8 grid grid-cols-2 gap-5 border-y border-ink/10 py-5">
              <div><p className="m-0 font-display text-3xl text-forest">20+</p><p className="mb-0 mt-1 text-xs text-muted">years of general contracting experience</p></div>
              <div><p className="m-0 font-display text-3xl text-forest">NJ + PA</p><p className="mb-0 mt-1 text-xs text-muted">contractor registrations</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1fr] lg:gap-20">
            <div><p className="eyebrow">What we bring together</p><h2 className="display-title mt-5 text-4xl sm:text-5xl">One considered approach to a lot of home.</h2><p className="mt-5 text-sm leading-6 text-muted">The company’s public project mix covers core rooms, structural changes and outdoor living. For each inquiry, we confirm scope and location before the next step.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.slice(0, 4).map((service) => <Link className="group border border-ink/10 p-5 no-underline transition hover:border-forest/40 hover:bg-paper" href={service.path} key={service.slug}><p className="eyebrow !text-[9px]">{service.eyebrow}</p><h3 className="display-title mt-4 text-2xl text-ink">{service.name}</h3><p className="mb-4 mt-2 text-sm leading-6 text-muted">{service.lead}</p><span className="inline-flex items-center gap-2 text-xs font-semibold text-forest">Explore <Icon className="h-4 w-4 transition group-hover:translate-x-1" name="arrow-right" /></span></Link>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
          <div><p className="eyebrow">What clients remember</p><h2 className="display-title mt-5 text-4xl sm:text-5xl">Clear communication matters.</h2><p className="mt-5 text-sm leading-6 text-muted">A few words from homeowners we have worked with.</p></div>
          <div className="space-y-4">
            {testimonials.slice(0, 3).map((testimonial) => <figure className="m-0 border border-ink/10 bg-white p-6 sm:p-8" key={testimonial.name}><blockquote className="m-0 font-display text-xl leading-8 text-ink">“{testimonial.quote}”</blockquote><figcaption className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">{testimonial.name} · {testimonial.source} · {testimonial.service}</figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="bg-forest py-14 text-white sm:py-16">
        <div className="container-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="eyebrow !text-[#d1bb8d]">Based in {siteInfo.location}</p><h2 className="display-title mt-4 text-3xl text-white sm:text-4xl">Let’s make a good plan for your home.</h2></div><Link className="button-primary !border-white !bg-white !text-forest" href="/contact/">Meet the team <Icon className="h-4 w-4" name="arrow-right" /></Link></div>
      </section>
    </>
  );
}
