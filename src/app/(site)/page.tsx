import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { ProjectGallery } from "@/components/project-gallery";
import { articles, featuredServices, siteInfo, testimonials } from "@/content/site";
import { getSanityHomePage, getSanityProjects } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Home Remodeling in Branchburg, NJ",
  description:
    "Thoughtful kitchen and bathroom remodels, home additions and outdoor projects from a woman-owned construction team based in Branchburg, NJ.",
  alternates: { canonical: "/" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allinclusivenj.com";
const homePhoto = "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-124.jpg";
const ownerPhoto = "https://allinclusivenj.com/wp-content/uploads/2026/06/Geraldine.jpg";

export default async function HomePage() {
  const [cmsHome, cmsProjects] = await Promise.all([getSanityHomePage(), getSanityProjects()]);
  const headline = cmsHome?.headline || "Better spaces for the way you live.";
  const intro = cmsHome?.intro || "Thoughtful remodeling, additions and outdoor projects—rooted in Branchburg and shaped around the home you already love.";
  const heroImage = cmsHome?.heroImage?.asset?.url || homePhoto;
  const heroAlt = cmsHome?.heroImageAlt || cmsHome?.heroImage?.alt || "Residential home project by All Inclusive Construction & Building";
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteInfo.name,
    url: siteUrl,
    telephone: siteInfo.phone,
    email: siteInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Branchburg",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    areaServed: ["Somerset County, New Jersey", "Central New Jersey"],
    knowsAbout: ["Kitchen remodeling", "Bathroom remodeling", "Residential additions", "Deck construction"],
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} type="application/ld+json" />

      <section className="relative overflow-hidden bg-forest text-white">
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute inset-y-0 right-0 w-[55%]">
            <Image alt={heroAlt} className="object-cover object-center" fill priority sizes="55vw" src={heroImage} />
            <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-forest/10" />
          </div>
        </div>
        <div className="container-shell relative grid min-h-[690px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow !text-[#d1bb8d]">Woman-owned · Branchburg, New Jersey</p>
            <h1 className="display-title mt-7 max-w-[12ch] text-[clamp(3.25rem,7vw,6.5rem)] text-white">{headline}</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">{intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary !border-white !bg-white !text-forest hover:!border-[#e5d7b9] hover:!bg-[#e5d7b9]" href={cmsHome?.primaryCta?.href || "/contact/"}>
                {cmsHome?.primaryCta?.label || "Plan your project"}
                <Icon className="h-4 w-4" name="arrow-right" />
              </Link>
              <Link className="button-secondary !border-white/45 !text-white hover:!border-white hover:!bg-white hover:!text-forest" href={cmsHome?.secondaryCta?.href || "/portfolio/"}>
                {cmsHome?.secondaryCta?.label || "Explore our work"}
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/20 pt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55">
              <span className="inline-flex items-center gap-2"><Icon className="h-4 w-4 text-[#d1bb8d]" name="pin" /> Somerset County &amp; nearby Central NJ</span>
              <span>20+ years of experience</span>
            </div>
          </div>
          <div className="relative lg:hidden">
            <div className="image-frame relative aspect-[4/3] overflow-hidden">
              <Image alt={heroAlt} className="object-cover" fill priority sizes="(max-width: 1024px) 100vw, 50vw" src={heroImage} />
            </div>
            <span className="absolute bottom-4 left-4 bg-paper px-4 py-2 text-[9px] font-bold uppercase tracking-[0.17em] text-forest">Built around the way you live</span>
          </div>
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 hidden h-40 w-40 translate-x-1/3 translate-y-1/3 rounded-full border border-white/10 lg:block" aria-hidden="true" />
      </section>

      <section aria-label="Company credentials" className="border-b border-ink/10 bg-paper">
        <div className="container-shell grid grid-cols-2 gap-y-6 py-7 sm:grid-cols-4 sm:py-8">
          {[
            { headline: "20+ years", subline: "General contracting experience" },
            { headline: "Woman-owned", subline: "Led by Geraldine Smith" },
            { headline: "NJ + PA", subline: "Registered and insured*" },
            { headline: "Award-winning", subline: "Residential project work" },
          ].map((fact) => (
            <div className="border-ink/10 px-3 first:pl-0 sm:border-r sm:px-6 sm:last:border-r-0" key={fact.headline}>
              <p className="m-0 font-display text-xl tracking-[-0.03em] text-forest sm:text-2xl">{fact.headline}</p>
              <p className="mb-0 mt-1 text-[10px] leading-4 text-muted sm:text-xs">{fact.subline}</p>
            </div>
          ))}
        </div>
        <p className="container-shell -mt-3 pb-3 text-[9px] text-muted">*Registration numbers are listed in the site footer. Insurance details are available on request.</p>
      </section>

      <section className="section-space bg-paper">
        <div className="container-shell">
          <div className="grid items-end gap-6 md:grid-cols-[1fr_0.6fr]">
            <div>
              <p className="eyebrow">Considered from the start</p>
              <h2 className="display-title mt-5 max-w-2xl text-4xl sm:text-5xl lg:text-6xl">Your home, with more room to feel like yours.</h2>
            </div>
            <div className="max-w-md md:justify-self-end">
              <p className="mb-5 text-sm leading-6 text-muted">A renovation should make daily life feel easier. We help you plan the details, understand the scope and bring the pieces together with care.</p>
              <Link className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-forest no-underline hover:text-brass" href="/about/">Get to know us <Icon className="h-4 w-4" name="arrow-up-right" /></Link>
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, index) => (
              <Link className="group lift-card overflow-hidden border border-ink/10 bg-white no-underline" href={service.path} key={service.slug}>
                <div className="image-frame relative aspect-[4/3]">
                  <Image alt={service.imageAlt} className="object-cover" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" src={service.image} />
                  <span className="absolute left-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-paper/95 text-[10px] font-bold text-forest">0{index + 1}</span>
                </div>
                <div className="p-5">
                  <p className="eyebrow !text-[9px]">{service.eyebrow}</p>
                  <h3 className="display-title mt-3 text-2xl text-ink">{service.name}</h3>
                  <p className="mb-5 mt-3 text-sm leading-6 text-muted">{service.lead}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-forest">Explore service <Icon className="h-4 w-4 transition group-hover:translate-x-1" name="arrow-right" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-paper-deep">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">A look at the work</p>
              <h2 className="display-title mt-5 max-w-2xl text-4xl sm:text-5xl lg:text-6xl">Made for the home it belongs to.</h2>
            </div>
            <Link className="button-secondary self-start md:self-auto" href="/portfolio/">View the portfolio <Icon className="h-4 w-4" name="arrow-up-right" /></Link>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-muted">A selection of kitchen, bathroom, addition and outdoor projects from the company&apos;s project gallery.</p>
          <div className="mt-9"><ProjectGallery compact cmsProjects={cmsProjects || undefined} /></div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="image-frame relative aspect-[4/5]">
              <Image alt="Geraldine Smith, owner of All Inclusive Construction & Building" className="object-cover object-center" fill sizes="(max-width: 1024px) 90vw, 40vw" src={ownerPhoto} />
            </div>
            <div className="absolute -bottom-5 -right-3 max-w-[220px] bg-forest px-5 py-4 text-white sm:-right-7 sm:px-7 sm:py-5">
              <p className="m-0 font-display text-2xl">Geraldine Smith</p>
              <p className="mb-0 mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/65">Owner · All Inclusive Construction</p>
            </div>
          </div>
          <div className="max-w-xl">
            <p className="eyebrow">People make the project</p>
            <h2 className="display-title mt-5 text-4xl sm:text-5xl lg:text-6xl">A personal approach to building better.</h2>
            <p className="mt-6 text-base leading-7 text-muted">All Inclusive Construction &amp; Building is a woman-owned business based in Branchburg, New Jersey. Geraldine Smith and the team bring more than 20 years of general contracting experience to projects across the home.</p>
            <p className="mt-4 text-sm leading-6 text-muted">From a first conversation through the finishing details, we believe good work begins with listening, clear expectations and respect for the home.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-primary" href="/about/">Our story <Icon className="h-4 w-4" name="arrow-up-right" /></Link>
              <Link className="button-secondary" href="/awards/">Awards &amp; recognition</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">The way we work</p>
            <h2 className="display-title mt-5 text-4xl sm:text-5xl">A clear path from idea to done.</h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-muted">Every home and project is different. A thoughtful process keeps decisions connected to your goals from the first conversation to the final walkthrough.</p>
          </div>
          <ol className="mt-12 grid list-none gap-0 p-0 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Listen", "Talk through the home, priorities and what you hope to change."],
              ["02", "Plan", "Review the space, project scope, selections and next steps."],
              ["03", "Prepare", "Set expectations around the work, schedule and coordination."],
              ["04", "Build", "Carry out the approved project with communication along the way."],
              ["05", "Walk through", "Review the completed work together before wrapping up."],
            ].map(([number, title, description]) => (
              <li className="relative border-t border-ink/15 py-6 pr-5 sm:border-l sm:border-t-0 sm:pl-5 sm:first:border-l-0 lg:py-0" key={number}>
                <span className="font-display text-3xl text-brass">{number}</span>
                <h3 className="mb-0 mt-4 text-[13px] font-semibold text-ink">{title}</h3>
                <p className="mb-0 mt-2 text-xs leading-5 text-muted">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-forest py-16 text-white sm:py-20">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.3fr_1fr_0.35fr]">
          <div className="hidden h-20 w-20 place-items-center rounded-full border border-white/30 text-[#d1bb8d] lg:grid"><Icon className="h-9 w-9" name="spark" /></div>
          <div>
            <p className="eyebrow !text-[#d1bb8d]">In their words</p>
            <blockquote className="m-0 mt-5 font-display text-2xl leading-[1.3] tracking-[-0.03em] sm:text-3xl lg:text-4xl">“{testimonials[0].quote}”</blockquote>
            <p className="mb-0 mt-6 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/60">{testimonials[0].name} · {testimonials[0].source} · {testimonials[0].service}</p>
          </div>
          <Link className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white no-underline hover:text-[#d1bb8d]" href="/contact/">Start a conversation <Icon className="h-4 w-4" name="arrow-right" /></Link>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.65fr_1fr]">
          <div>
            <p className="eyebrow">Close to home</p>
            <h2 className="display-title mt-5 text-4xl sm:text-5xl">Rooted in Branchburg. Focused on the details.</h2>
            <p className="mt-6 text-sm leading-6 text-muted">All Inclusive Construction &amp; Building is based in Branchburg, New Jersey. The company describes its core reach as Somerset County and nearby Central New Jersey communities. Let us know where your project is so we can confirm availability.</p>
            <Link className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-forest no-underline hover:text-brass" href="/home-remodeling-in-branchburg/">Home remodeling in Branchburg <Icon className="h-4 w-4" name="arrow-up-right" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link className="group border border-ink/10 bg-white p-6 no-underline transition hover:border-forest/40" href="/home-remodeling-home-improvement-services-in-somerset-county-nj/">
              <p className="eyebrow">Local service</p>
              <h3 className="display-title mt-5 text-2xl text-ink">Somerset County</h3>
              <p className="mb-5 mt-3 text-sm leading-6 text-muted">Residential remodeling, additions and outdoor projects in the company&apos;s local service area.</p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-forest">Explore service area <Icon className="h-4 w-4 transition group-hover:translate-x-1" name="arrow-right" /></span>
            </Link>
            <div className="flex flex-col justify-between bg-moss p-6">
              <div>
                <p className="eyebrow">Built around your home</p>
                <p className="mb-0 mt-5 font-display text-2xl leading-tight text-ink">Good work starts with a conversation about what matters to you.</p>
              </div>
              <Link className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-forest no-underline" href="/contact/">Tell us about your project <Icon className="h-4 w-4" name="arrow-up-right" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-paper-deep">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Notes from the field</p>
              <h2 className="display-title mt-5 text-4xl sm:text-5xl">Ideas for your next chapter at home.</h2>
            </div>
            <Link className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-forest no-underline hover:text-brass" href="/news/">All insights <Icon className="h-4 w-4" name="arrow-up-right" /></Link>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {articles.slice(6, 8).concat(articles.slice(2, 3)).map((article) => (
              <Link className="group lift-card bg-white no-underline" href={`/news/${article.slug}/`} key={article.slug}>
                <div className="image-frame relative aspect-[16/10]">
                  <Image alt={article.imageAlt} className="object-cover" fill sizes="(max-width: 768px) 100vw, 33vw" src={article.image} />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="m-0 text-[9px] font-bold uppercase tracking-[0.17em] text-brass">{article.category}</p>
                  <h3 className="display-title mt-3 text-2xl text-ink">{article.title}</h3>
                  <p className="mb-0 mt-3 text-sm leading-6 text-muted">{article.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-forest">Read the article <Icon className="h-4 w-4 transition group-hover:translate-x-1" name="arrow-right" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper py-16 sm:py-24">
        <div className="container-shell relative">
          <div className="relative overflow-hidden bg-[#e7e2d5] px-6 py-12 sm:px-12 sm:py-16 lg:px-20">
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-forest/10" aria-hidden="true" />
            <div className="absolute -right-5 -top-14 h-52 w-52 rounded-full border border-forest/10" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <p className="eyebrow">Your next project starts here</p>
              <h2 className="display-title mt-5 text-4xl sm:text-5xl lg:text-6xl">Let’s talk about the home you love.</h2>
              <p className="mt-5 max-w-xl text-sm leading-6 text-muted">Tell us what you are considering, where the project is and what you would like to change. We’ll take it from there.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link className="button-primary" href="/contact/">Request a consultation <Icon className="h-4 w-4" name="arrow-right" /></Link>
                <a className="button-secondary" href={`tel:${siteInfo.phoneHref}`}>Call {siteInfo.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
