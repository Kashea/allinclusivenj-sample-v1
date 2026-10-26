import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PublicSiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <a className="sr-only-focusable fixed left-4 top-4 z-[100] rounded-md bg-white px-4 py-3 font-semibold text-ink shadow-lg" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
