import Link from "next/link";
import { Icon } from "@/components/icons";

export default function SiteNotFound() {
  return (
    <section className="grid min-h-[65vh] place-items-center bg-paper px-5 py-20 text-center">
      <div className="max-w-2xl">
        <p className="eyebrow">Page not found</p>
        <h1 className="display-title mt-5 text-6xl sm:text-8xl">A small detour.</h1>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-muted">That address may have changed. Explore a service, see the work, or get in touch with the All Inclusive team.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link className="button-primary" href="/">Back to home <Icon className="h-4 w-4" name="arrow-right" /></Link><Link className="button-secondary" href="/portfolio/">View projects</Link><Link className="button-secondary" href="/contact/">Contact</Link></div>
      </div>
    </section>
  );
}
