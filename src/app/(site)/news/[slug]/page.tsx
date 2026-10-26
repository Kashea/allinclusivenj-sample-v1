import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { PortableContent } from "@/components/portable-content";
import { articles, services } from "@/content/site";
import { getSanityArticle } from "@/sanity/lib/queries";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allinclusivenj.com";

type ArticleRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const fallback = articles.find((article) => article.slug === slug);
  const cmsArticle = await getSanityArticle(slug);
  const title = cmsArticle?.title || fallback?.title;
  const excerpt = cmsArticle?.excerpt || fallback?.excerpt;
  if (!title) return { title: "Article not found" };

  return {
    title,
    description: excerpt,
    alternates: { canonical: `/news/${slug}/` },
    openGraph: { type: "article", title, description: excerpt },
  };
}

export default async function ArticlePage({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const fallback = articles.find((article) => article.slug === slug);
  const cmsArticle = await getSanityArticle(slug);
  if (!fallback && !cmsArticle?.title) notFound();

  const title = cmsArticle?.title || fallback?.title || "Home remodeling insight";
  const category = cmsArticle?.category || fallback?.category || "Insights";
  const excerpt = cmsArticle?.excerpt || fallback?.excerpt || "Ideas from All Inclusive Construction & Building.";
  const image = cmsArticle?.heroImage?.asset?.url || fallback?.image || articles[0].image;
  const imageAlt = cmsArticle?.heroAlt || cmsArticle?.heroImage?.alt || fallback?.imageAlt || title;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    image,
    mainEntityOfPage: new URL(`/news/${slug}/`, baseUrl).toString(),
    publisher: { "@type": "Organization", name: "All Inclusive Construction & Building", url: baseUrl },
    ...(cmsArticle?.publishedAt ? { datePublished: cmsArticle.publishedAt } : {}),
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} type="application/ld+json" />
      <article>
        <header className="bg-paper-deep pb-12 pt-12 sm:pb-16 sm:pt-16">
          <div className="container-shell max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-8 text-[10px] text-muted"><Link className="text-forest no-underline" href="/">Home</Link><span className="mx-2">/</span><Link className="text-forest no-underline" href="/news/">News &amp; insights</Link><span className="mx-2">/</span><span>{category}</span></nav>
            <p className="eyebrow">{category}</p>
            <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.8rem,6.5vw,5.8rem)]">{title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted sm:text-lg">{excerpt}</p>
          </div>
        </header>
        <div className="container-shell max-w-5xl">
          <div className="image-frame relative -mt-1 aspect-[16/8] sm:mt-8"><Image alt={imageAlt} className="object-cover" fill priority sizes="(max-width: 1024px) 100vw, 80vw" src={image} /></div>
        </div>
        <div className="container-shell grid max-w-5xl gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_250px] lg:gap-20">
          <div className="space-y-8">
            {cmsArticle?.body?.length ? <PortableContent value={cmsArticle.body} /> : fallback?.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="display-title mb-4 text-3xl text-ink sm:text-4xl">{section.heading}</h2>
                <div className="space-y-4 text-sm leading-7 text-muted">{section.paragraphs.map((paragraph) => <p className="m-0" key={paragraph}>{paragraph}</p>)}</div>
                {section.bullets && <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              </section>
            ))}
            {cmsArticle?.sourceUrl && <p className="border-l-2 border-brass pl-4 text-sm leading-6 text-muted">Read the original source: <a className="font-semibold text-forest underline underline-offset-2" href={cmsArticle.sourceUrl} rel="noreferrer" target="_blank">{cmsArticle.sourceUrl}</a></p>}
            {fallback?.sourceLink && <p className="border-l-2 border-brass pl-4 text-sm leading-6 text-muted">Further reading: <a className="font-semibold text-forest underline underline-offset-2" href={fallback.sourceLink.href} rel="noreferrer" target="_blank">{fallback.sourceLink.label}</a></p>}
          </div>
          <aside className="h-fit border border-ink/10 bg-white p-6 lg:sticky lg:top-32">
            <p className="eyebrow !text-[9px]">Talk it through</p>
            <h2 className="display-title mt-4 text-2xl">Every home has its own story.</h2>
            <p className="mb-5 mt-3 text-xs leading-5 text-muted">If you are considering a remodel, addition or outdoor project, start with a conversation about your home.</p>
            <Link className="button-primary w-full !px-4 !text-xs" href="/contact/">Discuss a project <Icon className="h-4 w-4" name="arrow-right" /></Link>
            <p className="mb-0 mt-5 border-t border-ink/10 pt-4 text-[10px] leading-5 text-muted">Related services</p>
            <ul className="m-0 mt-2 list-none space-y-2 p-0">{services.slice(0, 4).map((service) => <li key={service.slug}><Link className="text-xs font-medium text-forest no-underline hover:underline" href={service.path}>{service.name}</Link></li>)}</ul>
          </aside>
        </div>
      </article>
    </>
  );
}
