import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { articles } from "@/content/site";
import { getSanityArticles } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "News & Home Remodeling Insights",
  description: "Project-planning ideas, home remodeling guidance and company updates from All Inclusive Construction & Building in New Jersey.",
  alternates: { canonical: "/news/" },
};

export default async function NewsPage() {
  const cmsArticles = await getSanityArticles();
  const posts = cmsArticles?.length
    ? cmsArticles.filter((post) => post.slug?.current).map((post) => ({
        slug: post.slug?.current || "",
        title: post.title || "Home remodeling insights",
        excerpt: post.excerpt || "Ideas and notes from All Inclusive Construction & Building.",
        category: post.category || "Insights",
        image: post.heroImage?.asset?.url || articles[0].image,
        imageAlt: post.heroAlt || post.heroImage?.alt || post.title || "Home remodeling article image",
      }))
    : articles;

  return (
    <>
      <section className="bg-paper-deep py-16 sm:py-24">
        <div className="container-shell">
          <nav aria-label="Breadcrumb" className="mb-8 text-[10px] text-muted"><Link className="text-forest no-underline" href="/">Home</Link><span className="mx-2">/</span>News &amp; insights</nav>
          <p className="eyebrow">Ideas for living well at home</p>
          <h1 className="display-title mt-5 max-w-4xl text-[clamp(3.25rem,7vw,6.5rem)]">A little inspiration for what’s next.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">Practical notes on project planning, kitchens, bathrooms, additions and the people behind the work.</p>
        </div>
      </section>
      <section className="section-space bg-paper">
        <div className="container-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article className="group lift-card bg-white" key={post.slug}>
              <Link aria-label={`Read: ${post.title}`} className="block no-underline" href={`/news/${post.slug}/`}>
                <div className="image-frame relative aspect-[16/10]"><Image alt={post.imageAlt} className="object-cover" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src={post.image} /></div>
                <div className="p-5 sm:p-6">
                  <p className="m-0 text-[9px] font-bold uppercase tracking-[0.16em] text-brass">{post.category}</p>
                  <h2 className="display-title mt-3 text-2xl text-ink">{post.title}</h2>
                  <p className="mb-0 mt-3 text-sm leading-6 text-muted">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-forest">Read article <Icon className="h-4 w-4 transition group-hover:translate-x-1" name="arrow-right" /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-forest py-14 text-white sm:py-16"><div className="container-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="eyebrow !text-[#d1bb8d]">Planning something at home?</p><h2 className="display-title mt-4 text-3xl text-white sm:text-4xl">Bring your questions to the people who do the work.</h2></div><Link className="button-primary !border-white !bg-white !text-forest" href="/contact/">Talk to our team <Icon className="h-4 w-4" name="arrow-right" /></Link></div></section>
    </>
  );
}
