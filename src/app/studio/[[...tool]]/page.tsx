import Link from "next/link";
import { SanityStudio } from "@/components/sanity-studio";
import type { Metadata } from "next";
import { isSanityConfigured } from "@/sanity/env";

export const metadata: Metadata = {
  title: "Content Studio | All Inclusive Construction & Building",
  robots: { index: false, follow: false },
};

export const dynamic = "force-static";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f5f2eb] px-6 py-16 text-[#21362e]">
        <section className="max-w-xl rounded-3xl border border-[#d8d4c9] bg-white p-8 shadow-sm sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#967746]">Content workspace</p>
          <h1 className="mt-4 font-serif text-4xl">Connect your Sanity project</h1>
          <p className="mt-5 leading-7 text-[#5d675f]">
            The Studio is ready for the client project. Add the Sanity project ID and dataset to the deployment environment, then reload this route.
          </p>
          <p className="mt-6 rounded-xl bg-[#f4f2ec] p-4 font-mono text-sm leading-6 text-[#40534a]">
            NEXT_PUBLIC_SANITY_PROJECT_ID<br />
            NEXT_PUBLIC_SANITY_DATASET
          </p>
          <Link className="mt-8 inline-flex rounded-full bg-[#244236] px-6 py-3 text-sm font-semibold text-white" href="/">
            Return to website
          </Link>
        </section>
      </main>
    );
  }

  return <SanityStudio />;
}
