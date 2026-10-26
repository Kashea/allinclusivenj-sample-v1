import "server-only";

import { createClient } from "next-sanity";
import {
  isSanityConfigured,
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
  sanityStudioUrl,
} from "../env";

export const sanityClient =
  isSanityConfigured && sanityProjectId
    ? createClient({
        projectId: sanityProjectId,
        dataset: sanityDataset,
        apiVersion: sanityApiVersion,
        useCdn: true,
        stega: { studioUrl: sanityStudioUrl },
      })
    : null;

export async function fetchSanity<T>(
  query: string,
  params: Record<string, string | number | boolean> = {},
  tags: string[] = ["sanity-content"],
): Promise<T | null> {
  if (!sanityClient) return null;

  try {
    return await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 300, tags },
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Sanity query failed; using local content fallback.", error);
    }
    return null;
  }
}
