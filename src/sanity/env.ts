export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const sanityStudioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "/studio";
export const sanityApiVersion = "2026-02-01";
export const isSanityConfigured = Boolean(sanityProjectId);
