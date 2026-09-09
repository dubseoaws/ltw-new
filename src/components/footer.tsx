"use client";

import Link from "next/link";
import Logo from "./logo";
import {
  clinics,
  footerCityHours,
  footerHours,
  footerQuickLinks,
  footerServices,
  newsletter,
  regulated,
  site,
} from "@/lib/site";


function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  const cls =
    "text-xs sm:text-sm text-slate-300 transition-colors duration-150 hover:text-emerald-400 hover:underline underline-offset-4";
  return external ? (
    <a href={href} className={cls} rel="noopener">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-200">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative border-t border-slate-800">
      <div className="container-x border-b border-slate-800 py-10 lg:py-12">
        <div className="grid gap-8 rounded-xl border border-slate-800 bg-slate-800/40 p-6 lg:grid-cols-2 lg:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {regulated.heading}
            </p>
            <p className="mt-2.5 max-w-lg text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">{regulated.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {regulated.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  rel="noopener nofollow"
                  target="_blank"
                  className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-slate-700 hover:border-slate-600"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-slate-800 lg:pl-8">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {newsletter.eyebrow}
            </p>
            <h3 className="mt-2 text-lg sm:text-xl font-bold">{newsletter.heading}</h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">{newsletter.body}</p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Enter your email address..."
                className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-emerald-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-emerald-600"
              >
                {newsletter.cta}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-8 py-10 lg:py-12 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-slate-400">{site.footerIntro}</p>
          <div className="mt-4 flex gap-2.5">
            <a
              href={site.social.facebook}
              rel="noopener nofollow"
              target="_blank"
              aria-label="Follow us on Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 text-slate-300 transition hover:border-slate-500 hover:text-white hover:bg-slate-800"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8z" />
              </svg>
            </a>
            <a
              href={site.social.instagram}
              rel="noopener nofollow"
              target="_blank"
              aria-label="Follow us on Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 text-slate-300 transition hover:border-slate-500 hover:text-white hover:bg-slate-800"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9a3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 5.05a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 7.84a3.09 3.09 0 1 1 0-6.18 3.09 3.09 0 0 1 0 6.18Zm6.05-8.03a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <ColumnTitle>Quick Links</ColumnTitle>
          <ul className="space-y-2">
            {footerQuickLinks.map((l) => (
              <li key={l.label}>
                <FooterLink href={l.href}>{l.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ColumnTitle>Our Services</ColumnTitle>
          <ul className="space-y-2">
            {footerServices.map((l) => (
              <li key={l.label}>
                <FooterLink href={l.href}>{l.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ColumnTitle>Get In Touch</ColumnTitle>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            <li>
              <a href={site.phoneHref} className="font-semibold text-emerald-400 hover:underline">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-emerald-400">
                {site.email}
              </a>
            </li>
            <li className="pt-1 leading-relaxed text-slate-400">
              {clinics.southKensington.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </li>
          </ul>
          <div className="mt-5">
            <ColumnTitle>Opening Hours</ColumnTitle>
            <ul className="space-y-1 text-xs text-slate-400">
              {footerHours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <ColumnTitle>City of London</ColumnTitle>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
            {clinics.cityOfLondon.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <ul className="mt-3 space-y-1 text-xs text-slate-400">
            {footerCityHours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1.5">
            <p className="font-medium text-slate-300">{site.copyright}</p>
            <p className="max-w-3xl leading-relaxed text-slate-500">{site.cqcLine}</p>
            <p className="max-w-3xl leading-relaxed text-slate-500">{site.resultsDisclaimer}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/terms"
              className="hover:text-emerald-400"
            >
              Terms &amp; Conditions
            </a>
            <span className="h-3 w-px bg-slate-800" />
            <a
              href="/privacy"
              className="hover:text-emerald-400"
            >
              Privacy Policy
            </a>
            <span className="h-3 w-px bg-slate-800" />
            <span>
              Designed &amp; developed by{" "}
              <a
                href={site.credit.href}
                rel="noopener nofollow"
                target="_blank"
                className="text-emerald-400 font-semibold hover:underline"
              >
                {site.credit.label}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

