import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { ProjectGallery } from "@/components/project-gallery";
import { getSanityProjects } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Residential Project Portfolio",
  description: "Browse kitchen, bathroom, home addition and outdoor living project photography from All Inclusive Construction & Building.",
  alternates: { canonical: "/portfolio/" },
};

export default async function PortfolioPage() {
  const cmsProjects = await getSanityProjects();
  return (
    <>
      <section className="bg-paper-deep py-16 sm:py-24">
        <div className="container-shell">
          <nav aria-label="Breadcrumb" className="mb-8 text-[10px] text-muted"><Link className="text-forest no-underline" href="/">Home</Link><span className="mx-2">/</span>Portfolio</nav>
          <p className="eyebrow">A selection of the work</p>
          <h1 className="display-title mt-5 max-w-4xl text-[clamp(3.25rem,7vw,6.5rem)]">Projects made for real life.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">Explore residential photography from All Inclusive Construction &amp; Building across kitchens, bathrooms, additions and outdoor projects.</p>
        </div>
      </section>
      <section className="section-space bg-paper">
        <div className="container-shell">
          <ProjectGallery cmsProjects={cmsProjects || undefined} />
        </div>
      </section>
      <section className="bg-forest py-14 text-white sm:py-16">
        <div className="container-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="eyebrow !text-[#d1bb8d]">Inspired by something you saw?</p><h2 className="display-title mt-4 text-3xl text-white sm:text-4xl">Let’s talk about what could work in your home.</h2></div><Link className="button-primary !border-white !bg-white !text-forest" href="/contact/">Start a conversation <Icon className="h-4 w-4" name="arrow-right" /></Link></div>
      </section>
    </>
  );
}
