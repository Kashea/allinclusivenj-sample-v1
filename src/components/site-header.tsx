"use client";

import { useState } from "react";
import Link from "next/link";
import { services, siteInfo } from "@/content/site";
import { Icon } from "@/components/icons";

const navLinks = [
  { label: "Our work", href: "/portfolio/" },
  { label: "About", href: "/about/" },
  { label: "Insights", href: "/news/" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-forest text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-[11px] font-medium tracking-[0.09em] sm:px-8">
          <p className="m-0 hidden sm:block">BRANCHBURG BASED · SOMERSET COUNTY &amp; CENTRAL NJ</p>
          <p className="m-0 sm:hidden">BASED IN BRANCHBURG, NJ</p>
          <a className="inline-flex shrink-0 items-center gap-2 text-white no-underline hover:text-[#d8c39a]" href={`tel:${siteInfo.phoneHref}`}>
            <Icon className="h-3.5 w-3.5" name="phone" />
            <span>{siteInfo.phone}</span>
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
          <Link aria-label="All Inclusive Construction & Building home" className="group flex min-w-0 items-center gap-3 no-underline" href="/">
            <span className="grid h-11 w-11 shrink-0 place-items-center border border-forest text-[13px] font-semibold tracking-[-0.08em] text-forest transition group-hover:bg-forest group-hover:text-paper" aria-hidden="true">
              AI<span className="ml-0.5 text-brass">.</span>
            </span>
            <span className="min-w-0">
              <span className="block whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.13em] text-ink sm:text-[13px]">All Inclusive</span>
              <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.18em] text-muted sm:text-[10px]">Construction &amp; Building</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-1.5 py-3 text-[13px] font-medium text-ink transition hover:text-brass [&::-webkit-details-marker]:hidden">
                Services <Icon className="h-3.5 w-3.5 transition group-open:rotate-180" name="chevron-down" />
              </summary>
              <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-sm border border-ink/10 bg-white p-2 shadow-[0_18px_40px_rgba(32,45,37,0.13)]" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>
                {services.slice(0, 4).map((service) => (
                  <Link className="block px-4 py-3 text-sm text-ink no-underline transition hover:bg-paper hover:text-forest" href={service.path} key={service.slug}>
                    {service.name}
                  </Link>
                ))}
                <Link className="block border-t border-ink/10 px-4 py-3 text-sm text-ink no-underline transition hover:bg-paper hover:text-forest" href="/your-trusted-general-contractor-in-central-nj/">
                  General contracting
                </Link>
              </div>
            </details>
            {navLinks.map((link) => (
              <Link className="text-[13px] font-medium text-ink no-underline transition hover:text-brass" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Link className="rounded-full bg-forest px-5 py-3 text-[12px] font-semibold text-white no-underline transition hover:bg-ink" href="/contact/">
              Request a consultation
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a aria-label="Call All Inclusive Construction" className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-forest" href={`tel:${siteInfo.phoneHref}`}>
              <Icon className="h-4 w-4" name="phone" />
            </a>
            <button
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-transparent text-ink"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              <Icon className="h-5 w-5" name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-ink/10 bg-paper px-5 pb-6 pt-3 lg:hidden" id="mobile-navigation">
            <p className="mb-2 mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Services</p>
            {services.slice(0, 4).map((service) => (
              <Link className="block border-b border-ink/10 py-3 text-[15px] text-ink no-underline" href={service.path} key={service.slug} onClick={() => setMenuOpen(false)}>
                {service.name}
              </Link>
            ))}
            <Link className="block border-b border-ink/10 py-3 text-[15px] text-ink no-underline" href="/your-trusted-general-contractor-in-central-nj/" onClick={() => setMenuOpen(false)}>
              General contracting
            </Link>
            {navLinks.map((link) => (
              <Link className="block border-b border-ink/10 py-3 text-[15px] text-ink no-underline" href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link className="mt-5 inline-flex rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white no-underline" href="/contact/" onClick={() => setMenuOpen(false)}>
              Request a consultation
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
