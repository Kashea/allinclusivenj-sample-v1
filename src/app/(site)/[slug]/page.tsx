import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { PortableContent } from "@/components/portable-content";
import { legalPageContent, locationPages, services, siteInfo, type ServicePage } from "@/content/site";
import { getSanityLandingPage, getSanityLegalPage, getSanityService } from "@/sanity/lib/queries";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allinclusivenj.com";

type RouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...locationPages.map((page) => ({ slug: page.slug })),
    ...Object.keys(legalPageContent).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (service) {
    const cms = await getSanityService(slug);
    return {
      title: cms?.title || service.seoTitle,
      description: cms?.shortDescription || service.seoDescription,
      alternates: { canonical: service.path },
    };
  }

  const location = locationPages.find((item) => item.slug === slug);
  const locationCms = await getSanityLandingPage(slug);
  if (location || locationCms?.title) {
    return {
      title: locationCms?.title || location?.title || "Residential remodeling in New Jersey",
      description: location?.lead || `Residential remodeling and construction in ${locationCms?.title || "Central New Jersey"}.`,
      alternates: { canonical: location?.path || `/${slug}/` },
    };
  }

  const legal = legalPageContent[slug];
  const legalCms = await getSanityLegalPage(slug);
  if (legal || legalCms?.title) {
    const title = legalCms?.title || legal?.title || "Policy information";
    return {
      title,
      description: `${title} for All Inclusive Construction & Building.`,
      alternates: { canonical: `/${slug}/` },
      robots: legalCms?.seoNoIndex || (legal?.needsReview && !legalCms?.body?.length) ? { index: false, follow: true } : undefined,
    };
  }

  return { title: "Page not found" };
}

function ServicePageView({ page, cms }: { page: ServicePage; cms: Awaited<ReturnType<typeof getSanityService>> }) {
  const title = cms?.title || page.title;
  const lead = cms?.shortDescription || page.lead;
  const image = cms?.heroImage?.asset?.url || page.image;
  const imageAlt = cms?.heroAlt || cms?.heroImage?.alt || page.imageAlt;
  const faq = cms?.faq?.length ? cms.faq : page.faq;
  const areas = cms?.scopeItems?.length ? cms.scopeItems : page.sections.flatMap((section) => section.bullets || []).slice(0, 8);

  return (
    <>
      <section className="relative overflow-hidden bg-forest text-white">
        <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Image alt={imageAlt} className="object-cover" fill priority sizes="52vw" src={image} />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
        </div>
        <div className="container-shell relative grid min-h-[560px] items-center gap-10 py-16 lg:grid-cols-[1fr_0.75fr] lg:py-20">
          <div className="max-w-2xl">
            <nav aria-label="Breadcrumb" className="mb-7 text-[10px] text-white/55">
              <Link className="text-white/70 no-underline hover:text-white" href="/">Home</Link><span className="mx-2">/</span><span>{page.name}</span>
            </nav>
            <p className="eyebrow !text-[#d1bb8d]">{page.eyebrow} · Branchburg, NJ</p>
            <h1 className="display-title mt-5 text-[clamp(2.8rem,6vw,5.4rem)] text-white">{title}</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75">{lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary !border-white !bg-white !text-forest hover:!bg-[#e5d7b9]" href="/contact/">Discuss your project <Icon className="h-4 w-4" name="arrow-right" /></Link>
              <Link className="button-secondary !border-white/40 !text-white hover:!bg-white hover:!text-forest" href="/portfolio/">See the work</Link>
            </div>
          </div>
          <div className="image-frame relative aspect-[4/3] lg:hidden">
            <Image alt={imageAlt} className="object-cover" fill priority sizes="(max-width: 1024px) 100vw, 52vw" src={image} />
          </div>
          <div aria-hidden="true" className="hidden lg:block" />
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper">
        <div className="container-shell grid grid-cols-2 gap-5 py-7 sm:grid-cols-4">
          {[
            ["20+ years", "general contracting experience"],
            ["Woman-owned", "led by Geraldine Smith"],
            ["Based in", "Branchburg, New Jersey"],
            ["Built around", "your home and priorities"],
          ].map(([titleText, note]) => <div key={titleText}><p className="m-0 font-display text-xl text-forest">{titleText}</p><p className="mb-0 mt-1 text-[10px] leading-4 text-muted">{note}</p></div>)}
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">{page.name}</p>
            <h2 className="display-title mt-5 text-4xl sm:text-5xl">{cms?.introHeading || page.introHeading}</h2>
            <Link className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-forest no-underline hover:text-brass" href="/contact/">Plan a conversation <Icon className="h-4 w-4" name="arrow-up-right" /></Link>
          </div>
          <div className="space-y-5 text-sm leading-7 text-muted">
            {cms?.intro?.length ? <PortableContent value={cms.intro} /> : page.intro.map((paragraph) => <p className="m-0" key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      {areas.length > 0 && (
        <section className="section-space bg-white">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
            <div>
              <p className="eyebrow">The details matter</p>
              <h2 className="display-title mt-5 text-4xl sm:text-5xl">A scope shaped around the space.</h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-muted">Every home is different. The first step is learning what matters most and how the existing space can support the plan.</p>
            </div>
            <ul className="m-0 grid list-none gap-x-7 gap-y-4 p-0 sm:grid-cols-2">
              {areas.map((item) => <li className="flex items-start gap-3 border-b border-ink/10 pb-4 text-sm text-ink" key={item}><Icon className="mt-0.5 h-4 w-4 shrink-0 text-brass" name="check" />{item}</li>)}
            </ul>
          </div>
        </section>
      )}

      {!cms?.intro?.length && page.sections.map((section, index) => (
        <section className={index % 2 === 0 ? "section-space bg-paper-deep" : "section-space bg-paper"} key={section.heading}>
          <div className="container-shell grid gap-8 md:grid-cols-[0.6fr_1fr] md:gap-20">
            <div><p className="eyebrow">{String(index + 1).padStart(2, "0")} · {page.name}</p><h2 className="display-title mt-5 text-3xl sm:text-4xl">{section.heading}</h2></div>
            <div className="space-y-5 text-sm leading-7 text-muted">
              {section.paragraphs.map((paragraph) => <p className="m-0" key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul className="m-0 list-disc space-y-2 pl-5 text-ink">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </div>
          </div>
        </section>
      ))}

      {(cms?.faq?.length || page.faq.length) > 0 && (
        <section className="section-space bg-paper">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.65fr_1fr] lg:gap-20">
            <div><p className="eyebrow">Good to know</p><h2 className="display-title mt-5 text-4xl sm:text-5xl">A few questions, answered.</h2><p className="mt-5 text-sm leading-6 text-muted">Every project has its own details. If your question is specific to your home, our team is happy to talk it through.</p></div>
            <div className="divide-y divide-ink/15 border-y border-ink/15">
              {faq.map((item) => <details className="group py-5" key={item.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {item.question}<span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/15 text-forest transition group-open:rotate-45"><Icon className="h-4 w-4" name="plus" /></span>
                </summary>
                <p className="mb-0 mt-4 max-w-2xl pr-10 text-sm leading-6 text-muted">{item.answer}</p>
              </details>)}
            </div>
          </div>
        </section>
      )}

      <section className="bg-forest py-14 text-white sm:py-18">
        <div className="container-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div><p className="eyebrow !text-[#d1bb8d]">All Inclusive Construction &amp; Building · {siteInfo.location}</p><h2 className="display-title mt-4 max-w-2xl text-3xl text-white sm:text-4xl">Ready to talk about your {page.name.toLowerCase()} project?</h2></div>
          <Link className="button-primary shrink-0 !border-white !bg-white !text-forest hover:!bg-[#e5d7b9]" href="/contact/">Request a consultation <Icon className="h-4 w-4" name="arrow-right" /></Link>
        </div>
      </section>
    </>
  );
}

function LocationPageView({ page, cms }: { page: (typeof locationPages)[number]; cms?: Awaited<ReturnType<typeof getSanityLandingPage>> }) {
  const title = cms?.title || page.title;
  const eyebrow = cms?.eyebrow || page.eyebrow;
  const image = cms?.heroImage?.asset?.url || page.image;
  const imageAlt = cms?.heroAlt || cms?.heroImage?.alt || page.imageAlt;
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-white">
        <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block"><Image alt={imageAlt} className="object-cover" fill priority sizes="48vw" src={image} /><div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/55 to-transparent" /></div>
        <div className="container-shell relative grid min-h-[520px] items-center gap-10 py-16 lg:grid-cols-[1fr_0.7fr]">
          <div className="max-w-2xl"><nav aria-label="Breadcrumb" className="mb-7 text-[10px] text-white/55"><Link className="text-white/70 no-underline" href="/">Home</Link><span className="mx-2">/</span><span>Service area</span></nav><p className="eyebrow !text-[#d1bb8d]">{eyebrow} · New Jersey</p><h1 className="display-title mt-5 text-[clamp(2.8rem,6vw,5.2rem)] text-white">{title}</h1><p className="mt-6 max-w-xl text-base leading-7 text-white/75">{page.lead}</p><Link className="button-primary mt-8 !border-white !bg-white !text-forest hover:!bg-[#e5d7b9]" href="/contact/">Talk about your project <Icon className="h-4 w-4" name="arrow-right" /></Link></div>
          <div className="image-frame relative aspect-[4/3] lg:hidden"><Image alt={imageAlt} className="object-cover" fill priority sizes="(max-width: 1024px) 100vw, 48vw" src={image} /></div><div aria-hidden="true" className="hidden lg:block" />
        </div>
      </section>
      {cms?.intro?.length ? <section className="section-space bg-paper"><div className="container-shell max-w-4xl"><PortableContent value={cms.intro} /></div></section> : null}
      {cms?.sections?.length ? cms.sections.map((section, index) => <section className={index % 2 === 0 ? "section-space bg-paper-deep" : "section-space bg-paper"} key={`${section.heading || "section"}-${index}`}><div className="container-shell grid gap-8 md:grid-cols-[0.65fr_1fr] md:gap-20"><div><p className="eyebrow">{eyebrow}</p><h2 className="display-title mt-5 text-3xl sm:text-4xl">{section.heading}</h2></div><div>{section.body?.length ? <PortableContent value={section.body} /> : null}</div></div></section>) : page.sections.map((section, index) => <section className={index === 0 ? "section-space bg-paper" : "section-space bg-paper-deep"} key={section.heading}><div className="container-shell grid gap-8 md:grid-cols-[0.65fr_1fr] md:gap-20"><div><p className="eyebrow">{page.eyebrow}</p><h2 className="display-title mt-5 text-3xl sm:text-4xl">{section.heading}</h2></div><div className="text-sm leading-7 text-muted">{section.paragraphs.map((paragraph) => <p className="mb-4 last:mb-0" key={paragraph}>{paragraph}</p>)}</div></div></section>)}
      <section className="bg-forest py-14 text-white"><div className="container-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><h2 className="display-title m-0 text-3xl sm:text-4xl">Let’s find out if your project is a fit.</h2><Link className="button-primary !border-white !bg-white !text-forest" href="/contact/">Contact our team <Icon className="h-4 w-4" name="arrow-right" /></Link></div></section>
    </>
  );
}

export default async function ContentLandingPage({ params }: RouteProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (service) {
    const cms = await getSanityService(slug);
    return <ServicePageView cms={cms} page={service} />;
  }

  // A published Sanity service can be rendered on its slug without a local fixture.
  const cmsService = await getSanityService(slug);
  if (cmsService?.title) {
    const fallback: ServicePage = {
      slug,
      path: `/${slug}/`,
      name: cmsService.title,
      eyebrow: "Residential remodeling",
      title: cmsService.title,
      lead: cmsService.shortDescription || "Thoughtful residential work planned around your home and priorities.",
      image: cmsService.heroImage?.asset?.url || "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-124.jpg",
      imageAlt: cmsService.heroAlt || cmsService.heroImage?.alt || "Residential construction project",
      introHeading: cmsService.introHeading || "A thoughtful plan for your home.",
      intro: [],
      sections: [],
      faq: [],
      seoTitle: cmsService.title,
      seoDescription: cmsService.shortDescription || "Residential remodeling in Somerset County and Central New Jersey.",
    };
    return <ServicePageView cms={cmsService} page={fallback} />;
  }

  const location = locationPages.find((item) => item.slug === slug);
  const locationCms = await getSanityLandingPage(slug);
  if (location || locationCms?.title) {
    // A published Sanity landing page can be rendered on its slug without a local fixture.
    const page = location || {
      slug,
      path: `/${slug}/`,
      eyebrow: locationCms?.eyebrow || "Service area",
      title: locationCms?.title || "Residential remodeling in New Jersey",
      lead: `Residential remodeling and construction in ${locationCms?.title || "Central New Jersey"}.`,
      image: locationCms?.heroImage?.asset?.url || "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-124.jpg",
      imageAlt: locationCms?.heroAlt || locationCms?.heroImage?.alt || "Residential construction project",
      sections: [],
    };
    return <LocationPageView cms={locationCms} page={page} />;
  }

  const legal = legalPageContent[slug];
  const legalCms = await getSanityLegalPage(slug);
  if (legalCms?.title && legalCms.body?.length) {
    return (
      <section className="section-space bg-paper">
        <div className="container-shell max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-[10px] text-muted"><Link className="text-forest no-underline" href="/">Home</Link><span className="mx-2">/</span>Policies</nav>
          <h1 className="display-title text-5xl sm:text-6xl">{legalCms.title}</h1>
          <div className="mt-8"><PortableContent value={legalCms.body} /></div>
          <p className="mt-8 border-t border-ink/10 pt-5 text-xs leading-5 text-muted">Questions? Contact <a className="font-semibold text-forest" href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>.</p>
        </div>
      </section>
    );
  }
  if (legal) {
    return (
      <section className="section-space bg-paper">
        <div className="container-shell max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-[10px] text-muted"><Link className="text-forest no-underline" href="/">Home</Link><span className="mx-2">/</span>Policies</nav>
          {legal.needsReview && <p className="mb-5 inline-flex rounded-full bg-[#eee7d8] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#765d32]">Draft · client review required before launch</p>}
          <h1 className="display-title text-5xl sm:text-6xl">{legal.title}</h1>
          <div className="mt-8 space-y-5 text-sm leading-7 text-muted">{legal.body.map((paragraph) => <p className="m-0" key={paragraph}>{paragraph}</p>)}</div>
          <p className="mt-8 border-t border-ink/10 pt-5 text-xs leading-5 text-muted">Questions? Contact <a className="font-semibold text-forest" href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>.</p>
        </div>
      </section>
    );
  }

  notFound();
}
