import Image from "next/image";
import Accordion from "./accordion";
import BeforeAfterSlider from "./before-after-slider";
import Button from "./button";
import GoogleReviewsCarousel from "./google-reviews-carousel";
import { Check, Eyebrow, Section, SectionHeading, TickList } from "./ui";
import { googleRating, googleReviews } from "@/lib/reviews";
import {
  bookUrl,
  clinics,
  faqPage,
  heroStats,
  homeResults,
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
    <section className="bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9]/50 to-[#FFFFFF] border-b border-slate-200/80 relative overflow-hidden py-12 lg:py-16">
      {/* Soft Ambient Light Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-[350px] w-[350px] rounded-full bg-slate-900/5 blur-[100px]" />

      <div className="container-x relative">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.15fr]">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>

            <h1 className="mt-4 font-display text-3xl leading-[1.14] font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem]">
              {titleTop ? <span className="block">{titleTop}</span> : null}
              <span className="block text-emerald-800">{titleBottom}</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 font-normal">{lead}</p>

            {badges?.length ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <li
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={bookUrl} tone="emerald" size="md">
                Book Consultation
              </Button>
              <Button href={site.phoneHref} tone="outline" size="md">
                {site.phone}
              </Button>
            </div>

            {stats?.length ? (
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-slate-200/80 pt-6 sm:grid-cols-4">
                {stats.map((s, i) => (
                  <div key={s.label} className={i > 0 ? "sm:border-l sm:border-slate-200/80 sm:pl-5" : ""}>
                    <dt className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {s.value}
                    </dt>
                    <dd className="mt-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-slate-500">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          <div className="relative w-full">{children}</div>
        </div>
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
}: {
  members: readonly { name: string; gdc: string; image: string }[];
  heading: string;
  sub?: string;
  eyebrow?: string;
}) {
  return (
    <Section className="bg-slate-50/70 border-y border-slate-200/80">
      <SectionHeading eyebrow={eyebrow} title={heading} sub={sub} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m) => (
          <article
            key={m.name}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition-all hover:border-slate-300 hover:shadow-md"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
              <Image
                src={m.image}
                alt={m.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-103"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-slate-900">{m.name}</h3>
              <p className="mt-1 inline-block text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
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
    <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
      {steps.map((s) => (
        <div
          key={s.n}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:border-slate-300"
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
}: {
  eyebrow: string;
  title: string;
  price: string;
  items: readonly string[];
  note: string;
  disclaimer?: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="mx-auto mt-10 max-w-lg overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
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
    <div className="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
      <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">{heading}</h3>
      <dl className="mt-3 divide-y divide-slate-100">
        {hours.map(([day, time]) => (
          <div key={day} className="flex items-center justify-between py-2">
            <dt className="text-xs font-semibold text-slate-800">{day}</dt>
            <dd
              className={`text-xs ${
                time === "Closed" ? "text-slate-400 font-normal" : "font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60"
              }`}
            >
              {time}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 rounded-md bg-slate-50 border border-slate-200 px-3 py-2 text-center text-xs font-medium text-slate-700">
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
            <Button href={clinics.southKensington.mapUrl} tone="outline" size="md">
              {reviewsBlock.linkLabel}
            </Button>
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


