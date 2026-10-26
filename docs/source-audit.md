# All Inclusive Construction & Building — source-site audit

**Source reviewed:** [allinclusivenj.com](https://allinclusivenj.com/)  
**Purpose:** Rebuild inventory and content direction for a Next.js App Router + TypeScript + Tailwind + Sanity site.  
**Important:** This is a public-site crawl and content-planning document, not a legal review or a claim that every source page is production-ready. The route list comes from the live WordPress XML sitemaps, supplemented by public search discovery. Check the live sitemap again immediately before cutover because WordPress content can change.

## 1. What the business is

The source site is for **All Inclusive Construction & Building**, a Branchburg, New Jersey residential general contractor and remodeling company. It is not a wedding venue. The site describes a woman-owned business led by Geraldine Smith, 20+ years of contracting experience, residential kitchen and bathroom remodels, additions, decks/porches, and a wider range of home-improvement work.

### Public business data located

| Field | Source value | Migration note |
| --- | --- | --- |
| Public name | All Inclusive Construction & Building | Use one consistent brand form in header, schema, and footer. |
| Structured-data legal name | All Inclusive Construction and Building LLC | Confirm legal suffix and punctuation with owner. |
| Base | Branchburg, NJ | No street address was returned on the public pages reviewed. Do not invent one. |
| Main contact | 732-484-9008 | Contact page and homepage structured data use this number. |
| Email | allinclusivenj@gmail.com | Display only if the owner confirms it remains current. |
| NJ registration | 13VH09398200 | Listed in site footer; validate before production. |
| PA registration | PA182975 | Listed in site footer; validate before production. |
| Insurance | Source footer says fully insured; About page says registered/insured in NJ and PA | Keep language only after confirmation of the current policy and jurisdictions. |
| Experience | 20+ years | Source homepage/About page. Confirm the preferred wording and year count before publishing. |
| Ownership | Certified woman-owned business | Source About page. Confirm the current certification name and status. |
| Service region | Somerset County / Central NJ; some source pages also mention Hunterdon, Morris, Middlesex, Essex, Mercer, Northampton PA, and a broader NJ/PA range | The source pages conflict. Publish only a client-approved service-area list. |

## 2. Sitemap and route inventory

The sitemap index exposed these source maps:

- [Sitemap index](https://allinclusivenj.com/sitemap_index.xml)
- [Page sitemap](https://allinclusivenj.com/page-sitemap.xml)
- [Post sitemap](https://allinclusivenj.com/post-sitemap.xml)
- [WordPress block-pattern collection sitemap](https://allinclusivenj.com/gblocks_pattern_collections-sitemap.xml)
- [Author sitemap](https://allinclusivenj.com/author-sitemap.xml)
- [Robots.txt](https://allinclusivenj.com/robots.txt) points crawlers to the sitemap index and blocks `/wp-admin/` and `/wp-login.php`.

### Pages in `page-sitemap.xml`

| Source route | Page purpose and source content | Recommended treatment |
| --- | --- | --- |
| `/` | Home; Branchburg/Somerset County positioning, awards, services, process, testimonial, blog cards, contact CTAs | Rebuild as the main conversion landing page. Lead with actual project photography, trust, clear service choices, and one primary consultation action. |
| `/kitchen-remodels/` | Kitchen layouts, cabinets, countertops, storage, material choices, process, Richard L. review | Preserve URL. Remove repeated copy and kitchen-vs-bath keyword mismatches. Link to approved kitchen projects. |
| `/bathroom-remodels/` | Primary/guest/powder rooms, showers, tubs, vanities, storage, lighting, accessibility and process; Clare D. review | Preserve URL. Organize around planning, scope and durable details; do not promise outcomes that are not backed by project facts. |
| `/residential-additions/` | Room/family-room/home-office additions, structural work, permits, materials; Fiona M. review | Preserve URL. Explain feasibility and coordination without implying every addition is buildable on every lot. |
| `/decks/` | Custom decks and porches; wood/composite options, railings/lighting, outdoor living; Lori P. review | Preserve URL. Add verified material, location, and project data as Sanity project records become available. |
| `/your-trusted-general-contractor-in-central-nj/` | Broad Central NJ contractor page; interior work, additions, exterior improvements, project management, process and FAQ | Preserve valuable route, substantially rewrite for helpfulness. Avoid unsupported or duplicated region coverage claims. |
| `/portfolio/` | Gallery divided into Bathroom Remodels, Kitchen Remodels, Home Additions/Builds/Renovations, and Decks/Fences/Porches | Preserve URL; build a filterable, accessible project gallery. Most old images lack project names, location, scope, completion date, and meaningful source alt text; do not fabricate that metadata. |
| `/about/` | Woman-owned business, Geraldine Smith, industry roles/affiliations, service scope, process, testimonials and service area | Preserve URL. Use an approved leadership bio and source-checked credential/affiliation list. |
| `/awards/` | 2021–2023 awards and 2023 Remodeler of Year recognition; homepage also shows a 2024 award badge | Preserve URL. Import each award with the year, exact title, awarding organization, project label, and image; confirm the 2024 badge details before naming it. |
| `/careers/` | Full-time experienced carpenter, 5+ years of experience, local job range and listed benefits/qualifications | Preserve URL. Replace the old customer-project form with a distinct job-application/contact action and owner-approved job status. Do not present the old opening as current without reconfirmation. |
| `/contact/` | Consultation lead page; phone/email and a project inquiry form | Preserve URL. Use a short accessible form, consent notice, clear privacy link, success/error state, and no false response-time promise. |
| `/home-remodeling-in-branchburg/` | Local landing page with kitchens, baths, basements, exterior work and a five-step process | Preserve URL. Rewrite with genuine Branchburg context, only confirmed services, and unique project proof; remove duplicated photo galleries and keyword stuffing. |
| `/home-remodeling-home-improvement-services-in-somerset-county-nj/` | Broad Somerset County landing page with kitchen, bath, additions, basement, interior, exterior, roofing/siding/window copy | Preserve URL while validating the actual scope. The page currently makes a much broader service claim set than the core service pages. |
| `/accessibility-statement/` | Accessibility statement says partially conformant to WCAG 2.1 AA and lists feedback contact details | Preserve route. Review statement against the rebuilt site and current testing. The phone number conflicts with the main contact number. |
| `/privacy-policy/` | Sitemap entry exists; public page fetch returned only footer/registration content, not a complete policy body | Preserve route; import the actual approved policy from the client/legal owner. Never replace with invented legal text. |
| `/terms-conditions/` | Sitemap entry exists; public page fetch returned only footer/registration content, not complete terms | Preserve route; import approved terms and have them reviewed. |
| `/cookie-policy/` | Sitemap entry exists; public page fetch returned only footer/registration content, not complete cookie policy | Preserve route; import approved wording and align it with actual analytics/cookie behavior. |

The page sitemap also listed the above page media assets. Last-modified timestamps in the sitemap are not necessarily original publication dates.

### Posts in `post-sitemap.xml`

The post sitemap contains `/news/` plus these eight article slugs. Keep the existing public article URLs and move their structured editorial content into Sanity. The sitemap last-modified timestamps should not be presented as original publish dates without checking WordPress post metadata.

| Source article | Source themes | Rewrite direction |
| --- | --- | --- |
| `/second-story-addition-vs-moving-to-a-bigger-home-whats-the-right-choice-for-you/` | Need for more space, feasibility, financing/moving trade-offs, zoning and structure | Make this a decision guide, separate general information from project-specific advice, link to additions, and avoid broad financial claims. |
| `/renovate-or-move-the-3-factors-to-consider-all-inclusive-construction/` | Location, budget, timing, lifestyle, pros/cons and decision checklist | Keep the useful framework, update market-sensitive claims and avoid pretending the contractor gives independent financial advice. |
| `/home-renovation-trends-in-nj-for-2026-what-homeowners-are-asking-for-now/` | Spa bathrooms, practical kitchens, multi-use rooms and personalization | Rework as evergreen, editorially useful inspiration. Confirm the year and claims before retaining a date-based headline. |
| `/what-nj-homeowners-want-in-a-modern-kitchen-2026-guide/` | Workflow, storage, integrated appliances and flexible kitchen use | Remove repeated trend language; emphasize needs-led design and link to the kitchen service and genuine projects. |
| `/geraldine-smith-with-congressman-josh-gottheimer-nj-5/` | Geraldine Smith's NAHB/industry visit and meeting with Congressman Josh Gottheimer | Keep as a company-news entry with the original external source link and approved photo. |
| `/nahb-emerging-leaders-talk-housing-with-lawmakers-on-capitol-hill/` | NAHB Leadership Orientation and housing policy advocacy | Preserve the external NAHB source link; do not paraphrase legislative claims without checking the original article. |
| `/kitchen-remodeling-costs-in-new-jersey-what-homeowners-should-know/` | Cost drivers: cabinetry, finishes, layout, appliances, kitchen size; why generic averages mislead | Preserve the educational intent. Do not publish numerical price ranges unless the client approves sourced, dated local ranges. |
| `/7-smart-design-ideas-for-small-bathroom-remodels-in-nj/` | Layout, storage, finishes, focal point, lighting, waterproofing, ventilation | Keep as evergreen practical advice; include a qualified professional note where code/permitting advice appears. |

### Discovered non-sitemap WordPress routes

- `/category/uncategorized/`: an archive with no distinct user purpose; redirect to `/news/` after checking analytics/backlinks.
- `/author/seoteam/` and `/author/kyleyondermooncreative-com/`: author archives from the WordPress author sitemap; review inbound links and contractual attribution before redirecting.
- `/gblocks_pattern_collections/local-patterns/`: WordPress internal block-pattern content; do not migrate as a public marketing page. A reviewed 410 or redirect is preferable to accidental indexing.

## 3. Source media, reviews, and proof

The current gallery is image-rich but mainly uses filename-based or generic alternative text. The source site exposes four portfolio groups: bathroom remodels, kitchen remodels, additions/builds/renovations, and decks/fences/porches. The complete visible image URL inventory from those groups is recorded in `docs/source-media-inventory.yaml`. Some images appear in more than one source group; deduplicate by asset identity during import and retain a source URL field on each Sanity asset/project.

Before migration, confirm client ownership/licensing for all photographs, identify the strongest hero image, and ask the owner to map photos to project location, scope, year, and before/after sequence. Until those facts are confirmed, display only safe category labels such as “Kitchen remodel” rather than invented town, budget, timing, materials, or project results.

Public source testimonials include (among others) Kelly H. (kitchen), Clare D. (bathroom), Richard L. (kitchen), Fiona M. (fence/addition interest), and Lori P. (handrails). Several are attributed to Houzz. Use only the approved quote excerpt and attribution, link to its source when permission allows, and record `permissionConfirmed` in Sanity. Do not add review stars/schema from first-party testimonials.

Awards content exposed on the source `/awards/` page:

- 2023 Remodeler of Year — Metropolitan Builders and Contractors Association.
- 2023 Best Outdoor Living Space — deck, Easton, PA.
- 2023 Best Bathroom Renovation — Branchburg, NJ.
- 2023 Best Special Feature Space — music studio, Watchung, NJ.
- 2022 Best Outdoor Living Space — deck with custom bench seating, Branchburg, NJ.
- 2021 Best Addition ($250k+) — Bridgewater, NJ.
- 2021 Best Accessibility Renovation — Middletown, NJ.
- Homepage displays a 2024 award badge without a verified category in the page text. Confirm its exact title and organization before use.

## 4. Competitor cross-check (public pages)

This comparison is about messaging and useful site patterns, not a claim that the competitors are direct equivalents or a request to copy their language.

| Competitor | Publicly visible positioning/features | Implication for this rebuild |
| --- | --- | --- |
| [Skydell Contracting](https://www.skydell.com/) | Somerset/Union local presence; specializes in kitchens and baths; emphasizes project photos, phone CTA and service towns. Its public homepage says it has operated since 1988. | Make service selection and project gallery easy to reach; do not invent the client's operating date or claim the same narrow specialty. |
| [Symmetrical Wolf](https://www.symmetricalwolf.com/county/somerset-county-nj/branchburg-nj) | Dedicated Branchburg landing page, explicit stages from inquiry to construction, trust credentials, local context, owner introduction, and consultation CTA. | Use a concise project roadmap and strong Branchburg relevance. Only publish the client's own schedule, warranty, credentials and local facts. |
| [Bellari](https://www.bellarinj.com/) | Broad product-led remodeler with a Branchburg showroom, long company history, service cards, project imagery, testimonials and promotions. | Keep the site visually rich and proof-forward, but do not claim a showroom, financing, discounts or manufacturer relationships for All Inclusive unless verified. |
| [Magnolia Home Remodeling Group](https://magnoliahomeremodeling.com/service-areas/somerset-county-nj/branchburg/general-contractor/) | Town-specific general-contractor pages spanning interior and exterior work. | Keep the high-value existing local URLs, but make their content genuinely useful and not interchangeable town-name SEO pages. |

### Recommended positioning

> **Thoughtful renovations. Built around the way you live.**

Use authentic differentiators available in the source: woman-owned leadership, local Branchburg roots, 20+ years of experience, award history, a broad residential project portfolio, and project stories from actual customers. Make **Request a consultation** and **View the work** the primary/secondary CTAs. Do not make unsupported superiority, “best contractor,” license, warranty, financing, price, or completion-time promises.

## 5. Editorial and conversion fixes

1. **Remove keyword stuffing and crossed-up image alt text.** The kitchen page repeatedly labels kitchen imagery as bathroom contractor content and vice versa. Alt text should describe the actual photo, not a search phrase.
2. **Remove duplicated process sections and repeated paragraphs.** Most service pages reproduce the same process and large gallery several times. Create one shared process component and service-specific content.
3. **Replace generic copy with useful project detail.** Add challenges, scope, selection logic and result only when the client can verify them.
4. **Build clear service entry points.** Give kitchens, baths, additions and decks their own route and portfolio filter, then connect each page to relevant projects and FAQs.
5. **Improve the lead journey.** A short, accessible project form should ask for contact details, project type, location, scope, timing, and optional budget/plans. Store leads privately in PostgreSQL, not Sanity. Connect an email provider and anti-spam/rate limiting before launch.
6. **Unify contact information.** The main contact page says `732-484-9008`; the accessibility page lists `732-365-4654`. Confirm the accessibility feedback number and publish one canonical public number where appropriate.
7. **Reconcile service geography.** Core pages say Somerset/Central NJ; other pages list Middlesex, Hunterdon, Morris, Essex, Mercer, Northampton PA and broader regions. Publish only towns/counties the company actively serves.
8. **Check current careers status.** The source lists a full-time experienced carpenter opening, five years' experience and benefits. Treat it as historical until the owner confirms it is open.
9. **Review legal pages.** The public fetch returned only a footer for privacy, cookie and terms routes. Obtain the full approved legal copy, review the new form/data use, and keep every legacy path.
10. **Protect search equity.** Keep current service, location, portfolio, contact, about, awards and article URLs. Add a canonical sitemap, correct redirects, unique titles/descriptions, breadcrumbs, and page-specific OG metadata.

## 6. Proposed homepage content structure

1. Header with service navigation, phone, and a visible consultation CTA.
2. Hero: one concise promise, Branchburg/Somerset County context, primary consultation CTA, project-gallery CTA, and real client project photo.
3. Proof strip: woman-owned, 20+ years, NJ/PA registration/insurance (only after validation), award/association proof (only as current and approved).
4. Four core service cards: kitchen remodels, bathroom remodels, home additions, decks/porches.
5. Selected work: filterable photography with truthful category labels and links to project detail only when metadata exists.
6. Process: discovery, planning, proposal, build, walkthrough—use wording that reflects actual practice.
7. About/leadership feature introducing Geraldine Smith with approved biography.
8. Attributed client quote with source and permission status.
9. Service-area summary focused on confirmed coverage.
10. Latest useful article cards, followed by a strong consultation CTA and contact details.

## 7. Source-of-truth and launch checklist

- The root `architecture.yaml` defines the Next.js/Sanity/Drizzle target architecture and all route mappings.
- `docs/source-media-inventory.yaml` records image URLs visible in the source portfolio groups; it is an import checklist, not proof of photo rights or a finished project catalog.
- `architecture.yaml` maps private contact inquiries to PostgreSQL and public/editable content to Sanity.
- Before launch, compare the newly crawled WordPress sitemaps with the route map again, confirm all redirect targets, verify contact/registration/award facts with the client, import complete legal pages, check CMS draft preview, and test a real lead notification end to end.
