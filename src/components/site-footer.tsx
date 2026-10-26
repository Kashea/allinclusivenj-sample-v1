import Link from "next/link";
import { services, siteInfo } from "@/content/site";
import { Icon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.15fr_0.75fr_0.75fr_1fr] md:gap-8">
          <div className="max-w-xs">
            <Link aria-label={`${siteInfo.name} home`} className="inline-flex items-center gap-3 text-white no-underline" href="/">
              <span aria-hidden="true" className="grid h-11 w-11 place-items-center border border-white/55 text-sm font-semibold tracking-[-0.08em]">AI<span className="ml-0.5 text-brass">.</span></span>
              <span>
                <span className="block text-[12px] font-semibold uppercase tracking-[0.13em]">All Inclusive</span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-white/60">Construction &amp; Building</span>
              </span>
            </Link>
            <p className="mt-6 text-sm leading-6 text-white/65">
              Thoughtful residential remodeling and construction, rooted in Branchburg, New Jersey.
            </p>
            <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-white/55">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brass" name="pin" />
              {siteInfo.region}
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brass">Services</h2>
            <ul className="m-0 list-none space-y-3 p-0">
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}><Link className="text-sm text-white/75 no-underline transition hover:text-white" href={service.path}>{service.name}</Link></li>
              ))}
              <li><Link className="text-sm text-white/75 no-underline transition hover:text-white" href="/your-trusted-general-contractor-in-central-nj/">General contracting</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brass">Explore</h2>
            <ul className="m-0 list-none space-y-3 p-0">
              <li><Link className="text-sm text-white/75 no-underline transition hover:text-white" href="/portfolio/">Our work</Link></li>
              <li><Link className="text-sm text-white/75 no-underline transition hover:text-white" href="/about/">About us</Link></li>
              <li><Link className="text-sm text-white/75 no-underline transition hover:text-white" href="/awards/">Awards</Link></li>
              <li><Link className="text-sm text-white/75 no-underline transition hover:text-white" href="/news/">News &amp; insights</Link></li>
              <li><Link className="text-sm text-white/75 no-underline transition hover:text-white" href="/careers/">Careers</Link></li>
              <li><Link className="text-sm text-white/75 no-underline transition hover:text-white" href="/contact/">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brass">Start a conversation</h2>
            <a className="mb-3 flex items-center gap-2 text-lg text-white no-underline transition hover:text-brass" href={`tel:${siteInfo.phoneHref}`}>
              <Icon className="h-4 w-4 text-brass" name="phone" /> {siteInfo.phone}
            </a>
            <a className="text-sm text-white/75 no-underline transition hover:text-white" href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
            <Link className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-xs font-semibold text-white no-underline transition hover:border-white hover:bg-white hover:text-ink" href="/contact/">
              Tell us about your project <Icon className="h-4 w-4" name="arrow-up-right" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6 text-[10px] leading-5 text-white/45 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="m-0">NJ Registration {siteInfo.njRegistration} · PA Registration {siteInfo.paRegistration}</p>
            <p className="mt-1">Based in Branchburg, NJ · Serving confirmed areas of Somerset County &amp; Central NJ</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link className="text-white/55 no-underline hover:text-white" href="/privacy-policy/">Privacy</Link>
            <Link className="text-white/55 no-underline hover:text-white" href="/terms-conditions/">Terms</Link>
            <Link className="text-white/55 no-underline hover:text-white" href="/cookie-policy/">Cookies</Link>
            <Link className="text-white/55 no-underline hover:text-white" href="/accessibility-statement/">Accessibility</Link>
            <span>© {new Date().getFullYear()} All Inclusive</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
