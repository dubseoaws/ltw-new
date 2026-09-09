import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { bookUrl, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.footerIntro,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.footerIntro,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B132B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen antialiased bg-white text-slate-900 selection:bg-teal-700 selection:text-white">
        <Header />
        <main id="main">{children}</main>
        <Footer />

        {/* Floating Mobile Sticky Conversion Bar */}
        <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 flex items-center justify-between gap-2.5 md:hidden shadow-lg">
          <a
            href={site.phoneHref}
            className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-slate-300" aria-hidden="true">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Clinic
          </a>
          <a
            href={bookUrl}
            rel="noopener"
            className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-teal-600 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-teal-700"
          >
            Book Consultation →
          </a>
        </div>
      </body>
    </html>
  );
}



