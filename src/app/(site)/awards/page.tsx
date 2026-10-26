import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { awards } from "@/content/site";
import { getSanityAwards } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description: "Explore the residential construction and remodeling awards listed by All Inclusive Construction & Building.",
  alternates: { canonical: "/awards/" },
};

export default async function AwardsPage() {
  const cmsAwards = await getSanityAwards();
  const entries = cmsAwards?.length
    ? cmsAwards.map((award) => ({
        year: award.year ? String(award.year) : "",
        title: award.title || "Recognition",
        organization: award.awardingOrganization || "",
        image: award.image?.asset?.url,
        alt: award.altText || award.image?.alt || award.title || "Award recognition",
      }))
    : awards.map((award) => ({ ...award, alt: `${award.title} recognition listed by All Inclusive Construction` }));

  return (
    <>
      <section className="bg-paper-deep py-16 sm:py-24">
        <div className="container-shell">
          <nav aria-label="Breadcrumb" className="mb-8 text-[10px] text-muted"><Link className="text-forest no-underline" href="/">Home</Link><span className="mx-2">/</span>Awards</nav>
          <p className="eyebrow">A little recognition along the way</p>
          <h1 className="display-title mt-5 max-w-4xl text-[clamp(3.25rem,7vw,6.5rem)]">Work worth celebrating.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">All Inclusive Construction &amp; Building is proud of the project awards and industry recognition below.</p>
        </div>
      </section>
      <section className="section-space bg-paper">
        <div className="container-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((award) => (
            <article className="overflow-hidden border border-ink/10 bg-white" key={`${award.year}-${award.title}`}>
              {award.image ? <div className="image-frame relative aspect-[4/3]"><Image alt={award.alt} className="object-cover" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src={award.image} /></div> : <div className="grid aspect-[4/3] place-items-center bg-moss"><span className="font-display text-6xl text-forest">{award.year}</span></div>}
              <div className="p-6">
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.17em] text-brass">{award.year}</p>
                <h2 className="display-title mt-3 text-2xl text-ink">{award.title}</h2>
                <p className="mb-0 mt-3 text-sm leading-6 text-muted">{award.organization}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-forest py-14 text-white sm:py-16">
        <div className="container-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="eyebrow !text-[#d1bb8d]">Built with intention</p><h2 className="display-title mt-4 text-3xl text-white sm:text-4xl">The best recognition is a home that works beautifully.</h2></div><Link className="button-primary !border-white !bg-white !text-forest" href="/portfolio/">See the project gallery <Icon className="h-4 w-4" name="arrow-right" /></Link></div>
      </section>
    </>
  );
}
