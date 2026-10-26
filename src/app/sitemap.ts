import type { MetadataRoute } from "next";
import { articles, locationPages, services } from "@/content/site";
import { getSanityArticles } from "@/sanity/lib/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allinclusivenj.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    "/",
    "/portfolio/",
    "/about/",
    "/awards/",
    "/careers/",
    "/contact/",
    "/news/",
    ...services.map((service) => service.path),
    ...locationPages.map((page) => page.path),
  ];
  const cmsArticles = await getSanityArticles();
  const articleSlugs = cmsArticles?.length
    ? cmsArticles.map((article) => article.slug?.current).filter((slug): slug is string => Boolean(slug))
    : articles.map((article) => article.slug);
  const paths = [...new Set([...staticPaths, ...articleSlugs.map((slug) => `/news/${slug}/`)])];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: path.startsWith("/news/") ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/contact/" ? 0.8 : 0.7,
  }));
}
