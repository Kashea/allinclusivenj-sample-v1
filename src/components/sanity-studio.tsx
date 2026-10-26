"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../sanity.config";

/** Keep Studio plugins, schemas and hooks out of the React server bundle. */
export function SanityStudio() {
  return <NextStudio config={config} />;
}
