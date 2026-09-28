"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./logo";
import { GdcIcon } from "./reg-icons";
import { bookUrl, nav, site } from "@/lib/site";

const LOCATION_ADDRESS: Record<string, string> = {
  "/south-kensington": "20 Old Brompton Road, SW7 3DL",
  "/city-of-london": "5 Ave Maria Lane, EC4M 7AQ",
};

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const desktopNav = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open && !openMenu) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      if (open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open, openMenu]);

  useEffect(() => {
    if (!openMenu) return;
    const closeOnOutside = (event: PointerEvent) => {
      if (!desktopNav.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", closeOnOutside);
    return () => document.removeEventListener("pointerdown", closeOnOutside);
  }, [openMenu]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setOpenMenu(null);
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
      <div className="relative hidden overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-300 lg:block">
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="container-x flex h-10 items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[0.68rem] font-bold tracking-wide text-emerald-300">
              <span className="text-[0.75rem] leading-none">★</span> 4.9 Rating
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span className="tracking-wide text-slate-400">{site.topBar}</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 tracking-wide text-slate-400">
              <GdcIcon className="h-3.5 w-3.5 text-emerald-400" />
              GDC Registered Dentists
            </span>
            <span className="h-3 w-px bg-white/10" />
            <a
              href={`mailto:${site.email}`}
              className="text-slate-300 underline-offset-4 transition hover:text-white hover:underline"
            >
              {site.email}
            </a>
            <span className="h-3 w-px bg-white/10" />
            <a
              href={site.phoneHref}
              className="group inline-flex items-center gap-1.5 font-bold text-white transition hover:text-emerald-300"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 transition group-hover:scale-125" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Standard Header */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-200/70 bg-white/80 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.45)] backdrop-blur-xl supports-backdrop-filter:bg-white/70"
            : "border-slate-100 bg-white"
        }`}
      >
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-600/25 to-transparent" />
        <div
          className={`container-x flex items-center justify-between gap-4 transition-all duration-300 ${
            scrolled ? "h-[4.25rem]" : "h-20"
          }`}
        >
          <Logo compact={scrolled} />

          <nav ref={desktopNav} className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {nav.map((item) =>
              "items" in item ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu((v) => (v === item.label ? null : v))}
                >
                  <button
                    type="button"
                    onClick={() => setOpenMenu((v) => (v === item.label ? null : item.label))}
                    className={`group relative flex min-h-11 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200 after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-px after:origin-left after:rounded-full after:bg-gradient-to-r after:from-emerald-500 after:to-emerald-700 after:transition-transform after:duration-300 ${
                      item.items.some((s) => s.href === pathname) || openMenu === item.label
                        ? "text-slate-900 after:scale-x-100"
                        : "text-slate-600 hover:text-slate-900 after:scale-x-0 hover:after:scale-x-100"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={openMenu === item.label}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 10 6"
                      className={`h-1.5 w-2.5 opacity-60 transition-transform duration-200 ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    hidden={openMenu !== item.label}
                    className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2.5"
                  >
                    <div className="animate-nav-pop relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 p-2 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.45)] ring-1 ring-slate-900/5 backdrop-blur-xl">
                      <span className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          aria-current={pathname === sub.href ? "page" : undefined}
                          onClick={() => setOpenMenu(null)}
                          className={`group flex min-h-11 items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-all duration-200 ${
                            pathname === sub.href
                              ? "bg-emerald-50/80 text-emerald-900"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <span className="min-w-0">
                            {sub.label}
                            {LOCATION_ADDRESS[sub.href] ? (
                              <span className="mt-0.5 block text-[0.72rem] font-normal text-slate-500">
                                {LOCATION_ADDRESS[sub.href]}
                              </span>
                            ) : null}
                          </span>
                          <span
                            aria-hidden="true"
                            className="shrink-0 text-xs text-emerald-700 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                          >
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`relative flex min-h-11 items-center rounded-full px-3.5 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200 after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-px after:origin-left after:rounded-full after:bg-gradient-to-r after:from-emerald-500 after:to-emerald-700 after:transition-transform after:duration-300 ${
                    pathname === item.href
                      ? "text-slate-900 after:scale-x-100"
                      : "text-slate-600 hover:text-slate-900 after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={site.phoneHref}
              className="hidden min-h-11 items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-emerald-200 hover:bg-emerald-50/60 hover:text-emerald-900 xl:inline-flex"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-600" />
              {site.phone}
            </a>
            <a
              href={bookUrl}
              rel="noopener"
              className="group relative hidden min-h-11 items-center overflow-hidden rounded-full bg-gradient-to-b from-emerald-600 to-emerald-800 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(4,120,87,0.9)] ring-1 ring-emerald-900/10 transition-all duration-200 hover:shadow-[0_14px_30px_-12px_rgba(4,120,87,0.95)] hover:brightness-110 md:inline-flex"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Book Consultation</span>
            </a>
            <button
              ref={menuButton}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-200 xl:hidden ${
                open
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
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
          <>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
              className="animate-nav-fade fixed inset-0 z-40 cursor-default bg-slate-950/30 backdrop-blur-xs xl:hidden"
            />
            <nav
              id="mobile-navigation"
              aria-label="Primary"
              className="animate-nav-slide relative z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-slate-200/80 bg-white/95 px-4 pb-5 pt-4 shadow-[0_28px_60px_-28px_rgba(15,23,42,0.5)] backdrop-blur-xl xl:hidden"
            >
              <div className="grid gap-2.5">
                {nav.map((item) =>
                  "items" in item ? (
                    <div
                      key={item.label}
                      className="grid gap-1 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-2"
                    >
                      <p className="flex items-center gap-2 px-3 pt-1.5 pb-0.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-slate-400">
                        {item.label}
                        <span className="h-px flex-1 bg-slate-200" />
                      </p>
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          aria-current={pathname === sub.href ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          className="flex min-h-11 items-center justify-between gap-3 rounded-xl bg-white px-3.5 py-3 text-sm font-semibold text-slate-700 shadow-2xs transition active:scale-[0.99] aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-900"
                        >
                          <span className="min-w-0">
                            {sub.label}
                            {LOCATION_ADDRESS[sub.href] ? (
                              <span className="mt-0.5 block text-[0.72rem] font-normal text-slate-500">
                                {LOCATION_ADDRESS[sub.href]}
                              </span>
                            ) : null}
                          </span>
                          <span aria-hidden="true" className="shrink-0 text-xs text-slate-400">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className="flex min-h-11 items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 text-sm font-semibold text-slate-800 shadow-2xs transition active:scale-[0.99] aria-[current=page]:border-emerald-200 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-900"
                    >
                      {item.label}
                      <span aria-hidden="true" className="shrink-0 text-xs text-slate-400">
                        →
                      </span>
                    </Link>
                  ),
                )}

                <div className="mt-2 grid gap-2.5 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3 sm:grid-cols-2">
                  <a
                    href={site.phoneHref}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800"
                  >
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    {site.phone}
                  </a>
                  <a
                    href={bookUrl}
                    rel="noopener"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-b from-emerald-600 to-emerald-800 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(4,120,87,0.9)]"
                  >
                    Book Consultation
                  </a>
                  <p className="text-center text-[0.7rem] font-medium text-slate-500 sm:col-span-2">
                    {site.topBar}
                  </p>
                </div>
              </div>
            </nav>
          </>
        ) : null}
      </header>
    </>
  );
}


