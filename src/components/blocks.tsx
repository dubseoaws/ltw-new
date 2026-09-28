import Image from "next/image";
import Accordion from "./accordion";
import BeforeAfterSlider from "./before-after-slider";
import Button from "./button";
import ClinicMap from "./clinic-map";
import GoogleReviewsCarousel from "./google-reviews-carousel";
import { CqcIcon, GdcIcon } from "./reg-icons";
import { Check, Section, SectionHeading, TickList } from "./ui";
import { googleRating, googleReviews } from "@/lib/reviews";
import {
  bookUrl,
  clinics,
  faqPage,
  heroStats,
  home,
  homeResults,
  homeTeam,
  reviewsBlock,
  site,
} from "@/lib/site";

/* --------------------------------------------------------------- page hero */

export function PageHero({
  eyebrow,
  titleTop,
  titleBottom,
  lead,
  badges,
  stats,
  children,
}: {
  eyebrow: string;
  titleTop?: string;
  titleBottom: string;
  lead: string;
  badges?: readonly string[];
  stats?: readonly { value: string; label: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="hero-dark relative isolate overflow-hidden text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 hero-grid-dark" />
        <div className="absolute -top-44 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-emerald-400/12 blur-[140px]" />
        <div className="absolute -bottom-56 left-[-12%] h-[32rem] w-[32rem] rounded-full bg-teal-300/10 blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
      </div>

      <div className="container-x relative pt-16 pb-14 lg:pt-20 lg:pb-16">
        <div
          className={
            children
              ? "grid items-center gap-12 lg:grid-cols-12 lg:gap-12"
              : "mx-auto max-w-3xl text-center"
          }
        >
          <div className={`min-w-0 ${children ? "lg:col-span-5" : "flex flex-col items-center"}`}>
            <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-px w-8 bg-gradient-to-r from-emerald-400/20 to-emerald-300" />
              {eyebrow}
            </span>

            <h1 className="mt-5 font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.015em] text-white [hyphens:none] sm:text-[2.3rem] lg:text-[2.4rem] xl:text-[2.6rem]">
              {titleTop ? <span className="block text-white/95">{titleTop}</span> : null}
              <span className="hero-title-light block">{titleBottom}</span>
            </h1>

            <p
              className={`mt-6 max-w-[46ch] text-[0.975rem] leading-[1.85] font-normal text-slate-300/90 lg:text-base ${
                children ? "" : "mx-auto"
              }`}
            >
              {lead}
            </p>

            {badges?.length ? (
              <ul
                className={`mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 ${
                  children ? "" : "justify-center"
                }`}
              >
                {badges.map((b) => (
                  <li key={b} className="inline-flex items-center gap-2 text-[0.8rem] font-medium text-slate-300">
                    {b.includes("CQC") ? (
                      <CqcIcon className="h-4 w-4 text-emerald-300" />
                    ) : b.includes("GDC") ? (
                      <GdcIcon className="h-4 w-4 text-emerald-300" />
                    ) : (
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    )}
                    {b.replace(/^\u2713\s*/, "")}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className={`mt-9 flex flex-wrap items-center gap-3 ${children ? "" : "justify-center"}`}>
              <Button
                href={bookUrl}
                tone="emerald"
                size="lg"
                className="shadow-xl shadow-emerald-950/40 hover:shadow-2xl"
              >
                Book Consultation
              </Button>
              <Button
                href={site.phoneHref}
                tone="ghost"
                size="lg"
                className="border-white/20 backdrop-blur hover:border-white/40"
              >
                {site.phone}
              </Button>
            </div>
          </div>

          {children ? (
            <div className="relative min-w-0 w-full lg:col-span-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-emerald-400/15 via-transparent to-teal-300/15 blur-3xl"
              />
              <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/50 backdrop-blur">
                {children}
              </div>
            </div>
          ) : null}
        </div>

        {stats?.length ? (
          <dl
            className={`mt-14 grid grid-cols-2 gap-y-8 border-t border-white/10 pt-8 ${
              stats.length === 3 ? "sm:grid-cols-3" : stats.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-4"
            }`}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-1 ${i > 0 ? "sm:border-l sm:border-white/10 sm:pl-8" : ""}`}
              >
                <dt className="font-display text-[1.6rem] font-bold leading-none tracking-[-0.01em] text-white lg:text-[1.85rem]">
                  {s.value}
                </dt>
                <dd className="mt-2.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- info cards */

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: readonly { title: string; body: string }[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`mt-8 grid gap-5 ${
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((item, i) => (
        <article
          key={item.title}
          className="slick-card p-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/70">
              0{i + 1}
            </span>
          </div>
          <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 font-normal">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function TickCardGrid({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex gap-3.5 rounded-xl border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <Check className="h-3.5 w-3.5" />
          </span>
          <div>
            <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600 font-normal">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------- team cards */

export function TeamStrip({
  members,
  heading,
  sub,
  eyebrow,
  className = "bg-slate-50/70 border-y border-slate-200/80",
}: {
  members: readonly {
    name: string;
    gdc: string;
    image: string;
    video?: { mp4: string; webm: string };
  }[];
  heading: string;
  sub?: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <Section className={className} id="team">
      <SectionHeading eyebrow={eyebrow} title={heading} sub={sub} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m) => (
          <article
            key={m.name}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition-all hover:border-slate-300 hover:shadow-md"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
              {m.video ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={m.name}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                >
                  <source src={m.video.webm} type="video/webm" />
                  <source src={m.video.mp4} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-103"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-slate-900">{m.name}</h3>
              <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                <GdcIcon className="h-3.5 w-3.5" />
                {m.gdc}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button href="/dentists" tone="outline" size="md">
          Meet the Full Team →
        </Button>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------ steps / how */

export function ProcessSteps({
  steps,
}: {
  steps: readonly { n: string; title: string; body: string }[];
}) {
  return (
    <div className={`mt-10 grid gap-6 sm:grid-cols-2 ${steps.length === 4 ? "lg:grid-cols-4" : steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-3"}`}>
      {steps.map((s) => (
        <div
          key={s.n}
          className="min-w-0 border-t border-slate-300 pt-5"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-50 font-bold text-emerald-800 text-xs border border-emerald-200">
            {s.n}
          </span>
          <h3 className="mt-3.5 text-base font-semibold text-slate-900">{s.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600 font-normal">{s.body}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ price panel */

export function PricePanel({
  eyebrow,
  title,
  price,
  items,
  note,
  disclaimer,
  ctaLabel,
  ctaHref,
  className = "mt-10",
}: {
  eyebrow: string;
  title: string;
  price: string;
  items: readonly string[];
  note: string;
  disclaimer?: string;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-lg overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-900/5 ${className}`}>
      <div className="bg-slate-900 px-6 py-7 text-center text-white relative">
        <p className="inline-block rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-500/30">
          ★ {eyebrow}
        </p>
        <h3 className="mt-2.5 text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{price}</p>
      </div>
      <div className="p-6">
        <TickList items={items} />
        <div className="mt-6">
          <Button href={ctaHref} tone="emerald" size="lg" className="w-full">
            {ctaLabel}
          </Button>
        </div>
        <p className="mt-3 text-center text-xs font-semibold text-emerald-800 bg-emerald-50 py-2 px-3 rounded-md border border-emerald-200/60">{note}</p>
        {disclaimer ? (
          <p className="mt-3 text-center text-xs text-slate-500 leading-relaxed">{disclaimer}</p>
        ) : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- hours card */

export function HoursCard({
  heading,
  hours,
  note,
}: {
  heading: string;
  hours: readonly (readonly [string, string])[];
  note: string;
}) {
  return (
    <div className="flex h-full w-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-5 sm:p-6 shadow-2xs">
      <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">{heading}</h3>
      <dl className="mt-3 grow divide-y divide-slate-100">
        {hours.map(([day, time]) => (
          <div key={day} className="flex flex-wrap items-center justify-between gap-2 py-2.5">
            <dt className="text-sm font-medium text-slate-800">{day}</dt>
            <dd
              className={`text-sm tabular-nums ${
                time === "Closed" ? "text-slate-500 font-normal" : "font-semibold text-emerald-800"
              }`}
            >
              {time}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-relaxed text-slate-600">
        {note}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------- areas grid */

export function AreasGrid({ areas }: { areas: readonly string[] }) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-2">
      {areas.map((a) => (
        <span
          key={a}
          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-white"
        >
          {a}
        </span>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------- cta band */

export function CtaBand({
  heading,
  sub,
  note,
  primaryHref = bookUrl,
  primaryLabel = "Book an Appointment",
}: {
  heading: string;
  sub: string;
  note?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="bg-slate-900 py-12 lg:py-16 text-white relative overflow-hidden">
      <div className="container-x relative text-center">
        <h2 className="mx-auto max-w-2xl font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300 font-normal">{sub}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={primaryHref} tone="emerald" size="md">
            {primaryLabel}
          </Button>
          <Button href={site.phoneHref} tone="ghost" size="md">
            {site.phone}
          </Button>
        </div>
        {note ? <p className="mt-4 text-xs text-slate-400 font-medium">{note}</p> : null}
      </div>
    </section>
  );
}

/* -------------------------------------------------------- google reviews */

export function GoogleReviews({ className = "bg-white" }: { className?: string }) {
  const hasReviews = googleReviews.length > 0;

  return (
    <Section className={className} id="reviews">
      <h2 className="text-center font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.25rem]">
        {googleRating.heading}
      </h2>

      <div className="mt-8 flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display text-5xl font-bold leading-none tracking-tight text-slate-900">
            {googleRating.score}
          </span>
          <span className="flex flex-col gap-1">
            <span className="flex gap-0.5 text-amber-400" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.1 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" />
                </svg>
              ))}
            </span>
            <span className="text-sm text-slate-600">
              {googleRating.count} reviews on <span className="font-semibold text-slate-800">Google</span>
            </span>
          </span>
        </div>

        <a
          href={googleRating.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-2xs transition hover:bg-blue-700"
        >
          {googleRating.buttonLabel}
        </a>
      </div>

      <GoogleReviewsCarousel />

      {hasReviews ? null : (
        <>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {s.value}
                </dt>
                <dd className="mt-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-slate-500">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-center text-sm font-medium text-slate-600">{reviewsBlock.cta}</p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button href={bookUrl} tone="emerald" size="md">
              {reviewsBlock.ctaLabel}
            </Button>
            {[clinics.southKensington, clinics.cityOfLondon].map((clinic) => (
              <Button key={clinic.slug} href={clinic.mapUrl} tone="outline" size="md">
                {clinic.label} — {reviewsBlock.linkLabel}
              </Button>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}

/* --------------------------------------------------------- smile gallery */

export function SmileGalleryStrip({
  className = "bg-slate-50 border-y border-slate-200",
}: {
  className?: string;
}) {
  return (
    <Section className={className}>
      <SectionHeading
        eyebrow={faqPage.transformationsEyebrow}
        title={faqPage.transformationsHeading}
        sub={faqPage.transformationsSub}
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {homeResults.map((r) => (
          <figure
            key={r.before}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition hover:border-slate-300 hover:shadow-md"
          >
            <BeforeAfterSlider
              {...r}
              compact
              className="rounded-none border-0 shadow-none"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <figcaption className="flex flex-1 flex-col gap-2 p-4">
              <span className="text-sm font-bold leading-snug text-slate-900">{r.title}</span>
              <span className="mt-auto flex items-center justify-between gap-2">
                <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-700">
                  {r.meta}
                </span>
                <span className="text-xs font-medium text-slate-500">Drag to compare</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs font-normal text-slate-500">
        {faqPage.transformationsNote}
      </p>

      <div className="mt-6 flex justify-center">
        <Button href="/smile-gallery" tone="slate" size="md">
          View Smile Gallery
        </Button>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ faqs */

export function FaqSection({
  items = faqPage.items,
  heading = faqPage.heading,
  sub = faqPage.sub,
  className = "bg-white",
  showLink = true,
}: {
  items?: readonly { q: string; a: string }[];
  heading?: string;
  sub?: string;
  className?: string;
  showLink?: boolean;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Section className={className} id="faqs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SectionHeading eyebrow="FAQs" title={heading} sub={sub} />
      <div className="mx-auto mt-8 max-w-3xl">
        <Accordion items={items} />
      </div>
      {showLink ? (
        <div className="mt-6 flex justify-center">
          <Button href="/faqs" tone="outline" size="md">
            See all FAQs
          </Button>
        </div>
      ) : null}
    </Section>
  );
}

/* ------------------------------------------------------------- locations */

export function LocationsSection({
  className = "bg-white border-t border-slate-200",
  eyebrow = "Locations",
  heading = "Visit Our London Clinics",
  sub = site.topBar,
}: {
  className?: string;
  eyebrow?: string;
  heading?: string;
  sub?: string;
}) {
  const list = [clinics.southKensington, clinics.cityOfLondon];

  const schema = list.map((clinic) => ({
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: `${site.name} — ${clinic.label}`,
    url: `${site.url}/${clinic.slug}`,
    telephone: site.phone,
    email: site.email,
    hasMap: clinic.mapUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.lines[0],
      addressLocality: clinic.lines[1],
      addressRegion: "London",
      postalCode: clinic.lines[2].split(" ").slice(-2).join(" "),
      addressCountry: "GB",
    },
  }));

  return (
    <Section className={className} id="locations">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SectionHeading eyebrow={eyebrow} title={heading} sub={sub} />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {list.map((clinic) => (
          <article key={clinic.slug} className="flex min-w-0 flex-col gap-4">
            <ClinicMap clinic={clinic} aspect="aspect-16/10" showAddress={false} />
            <div className="flex flex-1 flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900">{clinic.label}</h3>
              <address className="mt-1 text-sm leading-relaxed text-slate-600 not-italic">
                {clinic.lines.join(", ")}
              </address>
              <p className="mt-1 text-xs font-semibold text-emerald-800">{clinic.note}</p>

              <dl className="mt-4 divide-y divide-slate-100 border-t border-slate-100 pt-1">
                {clinic.hours.map(([day, time]) => (
                  <div key={day} className="flex items-center justify-between gap-2 py-1.5">
                    <dt className="text-xs font-medium text-slate-700">{day}</dt>
                    <dd
                      className={`text-xs tabular-nums ${
                        time === "Closed" ? "text-slate-400" : "font-semibold text-emerald-800"
                      }`}
                    >
                      {time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">{clinic.hoursNote}</p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <Button href={`/${clinic.slug}`} tone="emerald" size="sm">
                  {clinic.label} Clinic →
                </Button>
                <Button href={clinic.mapUrl} tone="outline" size="sm">
                  Get Directions →
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold">
        <a href={site.phoneHref} className="text-slate-800 transition hover:text-emerald-700">
          {site.phone}
        </a>
        <a href={`mailto:${site.email}`} className="text-slate-800 transition hover:text-emerald-700">
          {site.email}
        </a>
      </div>
    </Section>
  );
}

/* ------------------------------------------- shared trust / SEO sections */

export type TrustSection = "results" | "team" | "faqs" | "reviews" | "locations";

/**
 * Renders the sitewide proof → expertise → FAQ → reviews → local-SEO block in a
 * consistent order. Pass `skip` for sections a page already renders itself.
 */
export function PageTrustSections({
  skip = [],
  faqs,
  faqHeading,
  faqSub,
  showFaqLink,
}: {
  skip?: readonly TrustSection[];
  faqs?: readonly { q: string; a: string }[];
  faqHeading?: string;
  faqSub?: string;
  showFaqLink?: boolean;
}) {
  const show = (s: TrustSection) => !skip.includes(s);
  let light = true;
  const band = () => {
    const cls = light ? "bg-white" : "bg-slate-50 border-y border-slate-200";
    light = !light;
    return cls;
  };

  return (
    <>
      {show("results") ? <SmileGalleryStrip className={band()} /> : null}
      {show("team") ? (
        <TeamStrip
          members={homeTeam}
          heading={home.teamHeading}
          eyebrow="Our clinicians"
          className={band()}
        />
      ) : null}
      {show("faqs") ? (
        <FaqSection
          className={band()}
          items={faqs}
          heading={faqHeading}
          sub={faqs ? (faqSub ?? "") : faqSub}
          showLink={showFaqLink ?? !faqs}
        />
      ) : null}
      {show("reviews") ? <GoogleReviews className={band()} /> : null}
      {show("locations") ? <LocationsSection className={band()} /> : null}
    </>
  );
}



