import { defineArrayMember, defineField, defineType } from "sanity";

const seoFields = [
  defineField({ name: "metaTitle", title: "Meta title", type: "string", validation: (rule) => rule.max(65) }),
  defineField({ name: "metaDescription", title: "Meta description", type: "text", rows: 3, validation: (rule) => rule.max(170) }),
  defineField({ name: "canonicalUrl", title: "Canonical URL override", type: "url" }),
  defineField({ name: "socialImage", title: "Social sharing image", type: "image", options: { hotspot: true } }),
  defineField({ name: "noIndex", title: "Hide from search engines", type: "boolean", initialValue: false }),
];

const portableTextMembers = [
  defineArrayMember({ type: "block" }),
  defineArrayMember({
    type: "image",
    options: { hotspot: true },
    fields: [defineField({ name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required() })],
  }),
];

export const seoType = defineType({
  name: "seo",
  title: "Search and social metadata",
  type: "object",
  fields: seoFields,
});

export const ctaType = defineType({
  name: "cta",
  title: "Call to action",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "Link", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "variant", title: "Style", type: "string", options: { list: ["primary", "secondary", "text"] } }),
  ],
});

export const faqItemType = defineType({
  name: "faqItem",
  title: "FAQ item",
  type: "object",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", rows: 4, validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: "question", subtitle: "answer" } },
});

export const galleryItemType = defineType({
  name: "galleryItem",
  title: "Gallery image",
  type: "object",
  fields: [
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (rule) => rule.required() }),
    defineField({ name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "caption", title: "Caption", type: "string" }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Kitchen", "Bathroom", "Addition", "Outdoor", "Other"] } }),
    defineField({ name: "sourceUrl", title: "Original source URL", type: "url" }),
  ],
  preview: { select: { title: "caption", media: "image" } },
});

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "brandName", title: "Brand name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "legalName", title: "Legal name", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "phone", title: "Public phone", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "email", title: "Public email", type: "string", validation: (rule) => rule.required().email() }),
    defineField({ name: "headquarters", title: "Headquarters", type: "string" }),
    defineField({ name: "serviceAreaSummary", title: "Approved service-area summary", type: "text", rows: 3 }),
    defineField({ name: "njRegistration", title: "New Jersey registration", type: "string" }),
    defineField({ name: "paRegistration", title: "Pennsylvania registration", type: "string" }),
    defineField({ name: "socialLinks", title: "Social links", type: "array", of: [defineArrayMember({ type: "url" })] }),
    defineField({ name: "footerNote", title: "Footer note", type: "string" }),
    defineField({ name: "defaultSeo", title: "Default SEO", type: "seo" }),
  ],
  preview: { select: { title: "brandName", subtitle: "headquarters" } },
});

export const homePageType = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 4 }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroImageAlt", title: "Hero image alternative text", type: "string" }),
    defineField({ name: "primaryCta", title: "Primary CTA", type: "cta" }),
    defineField({ name: "secondaryCta", title: "Secondary CTA", type: "cta" }),
    defineField({ name: "proofPoints", title: "Proof points", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "featuredServices", title: "Featured services", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "service" }] })] }),
    defineField({ name: "featuredProjects", title: "Featured projects", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "project" }] })] }),
    defineField({ name: "testimonialReferences", title: "Featured testimonials", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "testimonial" }] })] }),
    defineField({ name: "featuredArticles", title: "Featured articles", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "article" }] })] }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
});

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "text", rows: 4 }),
    defineField({ name: "owner", title: "Owner / leadership profile", type: "reference", to: [{ type: "person" }] }),
    defineField({ name: "body", title: "Company story", type: "array", of: portableTextMembers }),
    defineField({ name: "approvedAffiliations", title: "Owner-approved affiliations", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "testimonialReferences", title: "Approved testimonials", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "testimonial" }] })] }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
});

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Service name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "URL slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "legacyPath", title: "Legacy public path", type: "string" }),
    defineField({ name: "shortDescription", title: "Card summary", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroAlt", title: "Hero image alternative text", type: "string" }),
    defineField({ name: "introHeading", title: "Intro heading", type: "string" }),
    defineField({ name: "intro", title: "Intro copy", type: "array", of: portableTextMembers }),
    defineField({ name: "scopeItems", title: "Service scope", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "processSteps", title: "Project-specific process steps", type: "array", of: [defineArrayMember({ type: "object", fields: [defineField({ name: "title", type: "string" }), defineField({ name: "description", type: "text", rows: 3 })] })] }),
    defineField({ name: "faq", title: "Frequently asked questions", type: "array", of: [defineArrayMember({ type: "faqItem" })] }),
    defineField({ name: "projectReferences", title: "Related projects", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "project" }] })] }),
    defineField({ name: "testimonialReferences", title: "Related testimonials", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "testimonial" }] })] }),
    defineField({ name: "serviceAreaReferences", title: "Approved service areas", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "serviceArea" }] })] }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current", media: "heroImage" } },
});

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Project title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "URL slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "serviceCategory", title: "Service category", type: "string", options: { list: ["Kitchen", "Bathroom", "Addition", "Outdoor", "Other"] }, validation: (rule) => rule.required() }),
    defineField({ name: "locationLabel", title: "Approved public location label", type: "string", description: "Only use a town when the owner confirms it is safe and accurate." }),
    defineField({ name: "summary", title: "Short summary", type: "text", rows: 3 }),
    defineField({ name: "challenge", title: "Client goal / project challenge", type: "text", rows: 4 }),
    defineField({ name: "approach", title: "Project approach", type: "array", of: portableTextMembers }),
    defineField({ name: "result", title: "Result", type: "text", rows: 4, description: "Keep factual; avoid unverified performance or value claims." }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "coverAlt", title: "Cover image alternative text", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "gallery", title: "Project gallery", type: "array", of: [defineArrayMember({ type: "galleryItem" })] }),
    defineField({ name: "completionDate", title: "Completion date", type: "date" }),
    defineField({ name: "featured", title: "Feature on site", type: "boolean", initialValue: false }),
    defineField({ name: "approvedForMarketing", title: "Photo and story approved for marketing", type: "boolean", initialValue: false, validation: (rule) => rule.required() }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: { select: { title: "title", subtitle: "serviceCategory", media: "coverImage" } },
});

export const articleType = defineType({
  name: "article",
  title: "Article or company news",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "URL slug", type: "slug", options: { source: "title", maxLength: 110 }, validation: (rule) => rule.required() }),
    defineField({ name: "legacyPath", title: "Legacy WordPress path", type: "string" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (rule) => rule.max(280) }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroAlt", title: "Hero image alternative text", type: "string" }),
    defineField({ name: "body", title: "Article body", type: "array", of: portableTextMembers, validation: (rule) => rule.required() }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "person" }] }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Planning", "Kitchen design", "Bathroom design", "Company news"] } }),
    defineField({ name: "sourceUrl", title: "External source URL", type: "url" }),
    defineField({ name: "publishedAt", title: "Publication date", type: "datetime" }),
    defineField({ name: "updatedAt", title: "Last editorial review", type: "date" }),
    defineField({ name: "relatedServices", title: "Related services", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "service" }] })] }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: { select: { title: "title", subtitle: "publishedAt", media: "heroImage" } },
});

export const awardType = defineType({
  name: "award",
  title: "Award or recognition",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Award title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "year", title: "Year", type: "number", validation: (rule) => rule.required().integer() }),
    defineField({ name: "awardingOrganization", title: "Awarding organization", type: "string" }),
    defineField({ name: "projectLabel", title: "Approved project label", type: "string" }),
    defineField({ name: "image", title: "Award image", type: "image", options: { hotspot: true } }),
    defineField({ name: "altText", title: "Alternative text", type: "string" }),
    defineField({ name: "sourceUrl", title: "Verification source", type: "url" }),
    defineField({ name: "verified", title: "Details checked with owner/source", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "title", subtitle: "year", media: "image" } },
});

export const testimonialType = defineType({
  name: "testimonial",
  title: "Client testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Approved quote", type: "text", rows: 5, validation: (rule) => rule.required() }),
    defineField({ name: "attribution", title: "Approved attribution", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "source", title: "Source", type: "string" }),
    defineField({ name: "sourceUrl", title: "Review/source URL", type: "url" }),
    defineField({ name: "serviceReference", title: "Related service", type: "reference", to: [{ type: "service" }] }),
    defineField({ name: "permissionConfirmed", title: "Permission/quotation use checked", type: "boolean", initialValue: false, validation: (rule) => rule.required() }),
    defineField({ name: "featured", title: "Feature on site", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "attribution", subtitle: "source" } },
});

export const serviceAreaType = defineType({
  name: "serviceArea",
  title: "Service area",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Town, county or region", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "URL slug", type: "slug", options: { source: "name" }, validation: (rule) => rule.required() }),
    defineField({ name: "county", title: "County", type: "string" }),
    defineField({ name: "region", title: "Region", type: "string" }),
    defineField({ name: "intro", title: "Local introduction", type: "array", of: portableTextMembers }),
    defineField({ name: "serviceReferences", title: "Available services", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "service" }] })] }),
    defineField({ name: "faq", title: "Local FAQs", type: "array", of: [defineArrayMember({ type: "faqItem" })] }),
    defineField({ name: "coverageConfirmed", title: "Coverage confirmed by the business", type: "boolean", initialValue: false, validation: (rule) => rule.required() }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: { select: { title: "name", subtitle: "county" } },
});

export const personType = defineType({
  name: "person",
  title: "Person / team member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "portrait", title: "Portrait", type: "image", options: { hotspot: true } }),
    defineField({ name: "portraitAlt", title: "Portrait alternative text", type: "string" }),
    defineField({ name: "bio", title: "Approved biography", type: "array", of: portableTextMembers }),
    defineField({ name: "credentials", title: "Verified credentials", type: "array", of: [defineArrayMember({ type: "string" })] }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "portrait" } },
});

export const landingPageType = defineType({
  name: "landingPage",
  title: "Service-area or editorial landing page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "URL slug", type: "slug", options: { source: "title", maxLength: 110 }, validation: (rule) => rule.required() }),
    defineField({ name: "legacyPath", title: "Legacy path", type: "string" }),
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "array", of: portableTextMembers }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroAlt", title: "Hero alternative text", type: "string" }),
    defineField({ name: "sections", title: "Page sections", type: "array", of: [defineArrayMember({ type: "object", fields: [defineField({ name: "heading", type: "string" }), defineField({ name: "body", type: "array", of: portableTextMembers }), defineField({ name: "image", type: "image", options: { hotspot: true } }), defineField({ name: "imageAlt", type: "string" })] })] }),
    defineField({ name: "faq", title: "FAQs", type: "array", of: [defineArrayMember({ type: "faqItem" })] }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current", media: "heroImage" } },
});

export const careerPageType = defineType({
  name: "careerPage",
  title: "Careers page",
  type: "document",
  fields: [
    defineField({ name: "intro", title: "Introduction", type: "text", rows: 4 }),
    defineField({ name: "openRoles", title: "Open roles", type: "array", of: [defineArrayMember({ type: "object", fields: [defineField({ name: "title", type: "string" }), defineField({ name: "status", type: "string", options: { list: ["open", "closed", "on-hold"] } }), defineField({ name: "description", type: "array", of: portableTextMembers }), defineField({ name: "requirements", type: "array", of: [defineArrayMember({ type: "string" })] })] })] }),
    defineField({ name: "benefits", title: "Benefits", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "applicationEmail", title: "Application email", type: "string" }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
});

export const legalPageType = defineType({
  name: "legalPage",
  title: "Legal page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "URL slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "body", title: "Approved legal content", type: "array", of: portableTextMembers, validation: (rule) => rule.required() }),
    defineField({ name: "lastReviewedAt", title: "Last reviewed", type: "date" }),
    defineField({ name: "reviewedBy", title: "Reviewed by", type: "string" }),
    defineField({ name: "seoNoIndex", title: "Noindex until approved", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "title", subtitle: "lastReviewedAt" } },
});

export const schemaTypes = [
  seoType,
  ctaType,
  faqItemType,
  galleryItemType,
  siteSettingsType,
  homePageType,
  aboutPageType,
  serviceType,
  projectType,
  articleType,
  awardType,
  testimonialType,
  serviceAreaType,
  personType,
  landingPageType,
  careerPageType,
  legalPageType,
];
