"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./logo";
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
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Logo compact={scrolled} />

          <nav ref={desktopNav} className="hidden items-center gap-1 xl:flex" aria-label="Primary">
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
                    className={`flex min-h-11 items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                      item.items.some((s) => s.href === pathname) || openMenu === item.label
                        ? "text-slate-900 bg-slate-100"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={openMenu === item.label}
                  >
                    {item.label}
                    <svg viewBox="0 0 10 6" className="h-1.5 w-2.5 opacity-70" aria-hidden="true">
                      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    hidden={openMenu !== item.label}
                    className="absolute left-0 top-full z-50 w-60 pt-1"
                  >
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          aria-current={pathname === sub.href ? "page" : undefined}
                          onClick={() => setOpenMenu(null)}
                          className={`block min-h-11 rounded-lg px-3.5 py-3 text-sm font-semibold transition hover:bg-slate-50 ${
                            pathname === sub.href ? "text-slate-900 bg-slate-50" : "text-slate-700"
                          }`}
                        >
                          {sub.label}
                          {LOCATION_ADDRESS[sub.href] ? (
                            <span className="mt-0.5 block text-[0.72rem] font-normal text-slate-500">
                              {LOCATION_ADDRESS[sub.href]}
                            </span>
                          ) : null}
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
                  className={`flex min-h-11 items-center rounded-lg px-2.5 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                    pathname === item.href
                      ? "text-slate-900 bg-slate-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={bookUrl}
              rel="noopener"
              className="hidden min-h-11 items-center rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-2xs transition hover:bg-emerald-800 md:inline-flex"
            >
              Book Consultation
            </a>
            <button
              ref={menuButton}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 xl:hidden"
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
          <nav id="mobile-navigation" aria-label="Primary" className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-slate-200 bg-white px-4 py-4 xl:hidden">
            <div className="grid gap-1">
              {nav.map((item) =>
                "items" in item ? (
                  <div key={item.label} className="grid gap-1">
                    <p className="px-3 pt-2 text-[0.62rem] font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        aria-current={pathname === sub.href ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className="min-h-11 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-800"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className="min-h-11 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-800"
                  >
                    {item.label}
                  </Link>
                ),
              )}
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
          </nav>
        ) : null}
      </header>
    </>
  );
}


