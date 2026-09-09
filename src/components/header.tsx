"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./logo";
import { bookUrl, locationNav, nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-xs focus:text-white"
      >
        Skip to main content
      </a>

      {/* Top Announcement Bar */}
      <div className="hidden border-b border-slate-800 bg-slate-900 text-slate-300 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[0.68rem] font-bold text-emerald-400 border border-emerald-500/30">
              ★ 4.9 Rating
            </span>
            <span>{site.topBar}</span>
          </div>
          <div className="flex items-center gap-5 text-slate-300">
            <span>GDC Registered Dentists</span>
            <span className="h-3 w-px bg-slate-700" />
            <a href={`mailto:${site.email}`} className="transition hover:text-white">
              {site.email}
            </a>
            <span className="h-3 w-px bg-slate-700" />
            <a href={site.phoneHref} className="font-bold text-white transition hover:text-emerald-400">
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Standard Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-xs"
            : "bg-white border-slate-100"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6">
          <Logo compact={scrolled} />

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                    active
                      ? "text-slate-900 bg-slate-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Clinics Dropdown */}
            <div className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1 rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                  locationNav.some((l) => l.href === pathname)
                    ? "text-slate-900 bg-slate-100"
                    : "text-slate-600 group-hover:text-slate-900 group-hover:bg-slate-50"
                }`}
                aria-haspopup="true"
              >
                Clinics
                <svg viewBox="0 0 10 6" className="h-1.5 w-2.5 opacity-70" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="invisible absolute right-0 top-full z-50 w-72 translate-y-2 pt-1 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
                  {locationNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3.5 py-2.5 transition hover:bg-slate-50"
                    >
                      <span className="block text-xs font-bold text-slate-900">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-[0.72rem] text-slate-500">
                        {item.href === "/south-kensington"
                          ? "20 Old Brompton Road, SW7 3DL"
                          : "5 Ave Maria Lane, EC4M 7AQ"}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={bookUrl}
              rel="noopener"
              className="hidden rounded-lg bg-emerald-600 px-4.5 py-2 text-xs font-semibold text-white shadow-2xs transition hover:bg-emerald-700 md:inline-flex"
            >
              Book Consultation
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 xl:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-all ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-4 rounded bg-current transition-opacity ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-all ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {open ? (
          <div className="border-t border-slate-200 bg-white px-4 py-4 xl:hidden">
            <div className="grid gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-1 border-t border-slate-100" />
              <p className="px-3 text-[0.62rem] font-bold uppercase tracking-wider text-slate-400">
                Clinics
              </p>
              {locationNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <a
                  href={site.phoneHref}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-center text-xs font-semibold text-slate-800"
                >
                  {site.phone}
                </a>
                <a
                  href={bookUrl}
                  rel="noopener"
                  className="rounded-lg bg-emerald-600 px-4 py-2 text-center text-xs font-semibold text-white"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}


