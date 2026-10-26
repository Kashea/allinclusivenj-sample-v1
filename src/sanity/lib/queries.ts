import type { PortableTextBlock } from "@portabletext/types";
import { fetchSanity } from "./client";

export type SanityImage = {
  asset?: { url?: string };
  alt?: string;
};

export type SanityFaq = { question: string; answer: string };

export type SanityHomePage = {
  headline?: string;
  eyebrow?: string;
  intro?: string;
  heroImage?: SanityImage;
  heroImageAlt?: string;
  primaryCta?: { label?: string; href?: string };
  secondaryCta?: { label?: string; href?: string };
  proofPoints?: string[];
};

export type SanityService = {
  title?: string;
  slug?: { current?: string };
  shortDescription?: string;
  introHeading?: string;
  intro?: PortableTextBlock[];
  heroImage?: SanityImage;
  heroAlt?: string;
  scopeItems?: string[];
  faq?: SanityFaq[];
};

export type SanityLandingPage = {
  title?: string;
  slug?: { current?: string };
  eyebrow?: string;
  intro?: PortableTextBlock[];
  heroImage?: SanityImage;
  heroAlt?: string;
  sections?: { heading?: string; body?: PortableTextBlock[]; image?: SanityImage; imageAlt?: string }[];
};

export type SanityAboutPage = {
  headline?: string;
  intro?: string;
  body?: PortableTextBlock[];
  approvedAffiliations?: string[];
};

export type SanityLegalPage = {
  title?: string;
  body?: PortableTextBlock[];
  seoNoIndex?: boolean;
  lastReviewedAt?: string;
};

export type SanitySiteSettings = {
  brandName?: string;
  phone?: string;
  email?: string;
  headquarters?: string;
  serviceAreaSummary?: string;
  njRegistration?: string;
  paRegistration?: string;
};

export type SanityArticle = {
  title?: string;
  slug?: { current?: string };
  excerpt?: string;
  category?: string;
  heroImage?: SanityImage;
  heroAlt?: string;
  body?: PortableTextBlock[];
  sourceUrl?: string;
  publishedAt?: string;
};

export type SanityProject = {
  _id: string;
  title?: string;
  slug?: { current?: string };
  serviceCategory?: string;
  summary?: string;
  coverImage?: SanityImage;
  coverAlt?: string;
};

export type SanityAward = {
  _id: string;
  title?: string;
  year?: number;
  awardingOrganization?: string;
  image?: SanityImage;
  altText?: string;
};

const homePageQuery = `*[_type == "homePage"][0]{
  headline,
  eyebrow,
  intro,
  heroImage{alt, asset->{url}},
  heroImageAlt,
  primaryCta{label, href},
  secondaryCta{label, href},
  proofPoints
}`;

const serviceQuery = `*[_type == "service" && slug.current == $slug][0]{
  title,
  slug,
  shortDescription,
  introHeading,
  intro,
  heroImage{alt, asset->{url}},
  heroAlt,
  scopeItems,
  faq[]{question, answer}
}`;

const landingPageQuery = `*[_type == "landingPage" && slug.current == $slug][0]{
  title,
  slug,
  eyebrow,
  intro,
  heroImage{alt, asset->{url}},
  heroAlt,
  sections[]{heading, body, image{alt, asset->{url}}, imageAlt}
}`;

const aboutPageQuery = `*[_type == "aboutPage"][0]{
  headline,
  intro,
  body,
  approvedAffiliations
}`;

const legalPageQuery = `*[_type == "legalPage" && slug.current == $slug][0]{
  title,
  body,
  seoNoIndex,
  lastReviewedAt
}`;

const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  brandName,
  phone,
  email,
  headquarters,
  serviceAreaSummary,
  njRegistration,
  paRegistration
}`;

const articleQuery = `*[_type == "article" && slug.current == $slug][0]{
  title,
  slug,
  excerpt,
  category,
  heroImage{alt, asset->{url}},
  heroAlt,
  body,
  sourceUrl,
  publishedAt
}`;

const articleIndexQuery = `*[_type == "article" && defined(publishedAt)] | order(publishedAt desc){
  title,
  slug,
  excerpt,
  category,
  heroImage{alt, asset->{url}},
  heroAlt,
  publishedAt
}`;

const projectIndexQuery = `*[_type == "project" && approvedForMarketing == true] | order(featured desc, _updatedAt desc){
  _id,
  title,
  slug,
  serviceCategory,
  summary,
  coverImage{alt, asset->{url}},
  coverAlt
}`;

const awardIndexQuery = `*[_type == "award" && verified == true] | order(year desc){
  _id,
  title,
  year,
  awardingOrganization,
  image{alt, asset->{url}},
  altText
}`;

export function getSanityHomePage() {
  return fetchSanity<SanityHomePage>(homePageQuery, {}, ["sanity-content", "home-page"]);
}

export function getSanityService(slug: string) {
  return fetchSanity<SanityService>(serviceQuery, { slug }, ["sanity-content", `service-${slug}`]);
}

export function getSanityLandingPage(slug: string) {
  return fetchSanity<SanityLandingPage>(landingPageQuery, { slug }, ["sanity-content", `landing-page-${slug}`]);
}

export function getSanityAboutPage() {
  return fetchSanity<SanityAboutPage>(aboutPageQuery, {}, ["sanity-content", "about-page"]);
}

export function getSanityLegalPage(slug: string) {
  return fetchSanity<SanityLegalPage>(legalPageQuery, { slug }, ["sanity-content", `legal-page-${slug}`]);
}

export function getSanitySiteSettings() {
  return fetchSanity<SanitySiteSettings>(siteSettingsQuery, {}, ["sanity-content", "site-settings"]);
}

export function getSanityArticle(slug: string) {
  return fetchSanity<SanityArticle>(articleQuery, { slug }, ["sanity-content", `article-${slug}`]);
}

export function getSanityArticles() {
  return fetchSanity<SanityArticle[]>(articleIndexQuery, {}, ["sanity-content", "article-index"]);
}

export function getSanityProjects() {
  return fetchSanity<SanityProject[]>(projectIndexQuery, {}, ["sanity-content", "project-index"]);
}

export function getSanityAwards() {
  return fetchSanity<SanityAward[]>(awardIndexQuery, {}, ["sanity-content", "award-index"]);
}
