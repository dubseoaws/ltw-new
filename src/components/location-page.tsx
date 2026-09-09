import Image from "next/image";
import Accordion, { type FaqItem } from "@/components/accordion";
import BeforeAfterSlider from "@/components/before-after-slider";
import Button from "@/components/button";
import {
  AreasGrid,
  CtaBand,
  HoursCard,
  PageHero,
  PricePanel,
  ProcessSteps,
  TickCardGrid,
  TeamStrip,
} from "@/components/blocks";
import { Check, Section, SectionHeading } from "@/components/ui";
import {
  clinicalCare,
  homeResults,
  homeTeam,
  howItWorks,
  locationPackage,
  site,
} from "@/lib/site";

type Clinic = {
  slug: string;
  label: string;
  lines: readonly string[];
  note: string;
  mapUrl: string;
  hours: readonly (readonly [string, string])[];
  hoursNote: string;
};

export type LocationContent = {
  eyebrow: string;
  h1a: string;
  h1b: string;
  lead: string;
  badges: readonly string[];
  stats: readonly { value: string; label: string }[];
  notice?: { title: string; body: string };
  resultsHeading: string;
  resultsSub: string;
  resultsNote: string;
  aboutHeading: string;
  aboutBody: readonly string[];
  whyHeading: string;
  why: readonly { title: string; body: string }[];
  insideHeading: string;
  insideSub: string;
  insideImages: readonly { src: string; alt: string }[];
  travelHeading: string;
  travelSub: string;
  travel: readonly { title: string; body: string; meta: string }[];
  travelExtra?: readonly { title: string; lines: readonly string[] }[];
  areasHeading: string;
  areasSub: string;
  areas: readonly string[];
  crossClinic: { eyebrow: string; title: string; body: string; cta: string; href: string };
  careHeading: string;
  careSub: string;
  teamHeading: string;
  teamSub: string;
  pricingHeading: string;
  pricingSub: string;
  howHeading: string;
  howSub: string;
  hoursHeading: string;
  reviewsHeading: string;
  reviewsSub: string;
  faqHeading: string;
  faqs: readonly FaqItem[];
  ctaHeading: string;
  ctaSub: string;
  ctaNote: string;
};

export default function LocationPage({
  content: c,
  clinic,
  bookHref,
}: {
  content: LocationContent;
  clinic: Clinic;
  bookHref: string;
}) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: `${site.name} — ${clinic.label}`,
    telephone: site.phone,
    email: site.email,
    url: `${site.url}/${clinic.slug}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.lines[0],
      addressLocality: clinic.lines[1],
      addressRegion: "London",
      postalCode: clinic.lines[2].split(" ").slice(-2).join(" "),
      addressCountry: "GB",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />

      <PageHero
        eyebrow={c.eyebrow}
        titleTop={c.h1a}
        titleBottom={c.h1b}
        lead={c.lead}
        badges={c.badges}
        stats={c.stats}
      >
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
          <Image
            src={c.insideImages[0].src}
            alt={c.insideImages[0].alt}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="mt-4 rounded-lg bg-white p-4 shadow-2xs border border-slate-200">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            {clinic.label}
          </p>
          <address className="mt-1 text-sm font-semibold text-slate-800 not-italic">
            {clinic.lines.join(", ")}
          </address>
          <p className="mt-1 text-xs text-slate-500 font-normal">{clinic.note}</p>
        </div>
      </PageHero>

      {c.notice ? (
        <div className="bg-amber-50 border-y border-amber-200 py-4">
          <div className="container-x flex flex-col items-center gap-1 text-center">
            <p className="text-sm font-semibold text-amber-900">{c.notice.title}</p>
            <p className="max-w-3xl text-sm leading-relaxed text-amber-800 font-normal">{c.notice.body}</p>
          </div>
        </div>
      ) : null}

      {/* ------------------------------------------------------- RESULTS */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Before & after" title={c.resultsHeading} sub={c.resultsSub} />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {homeResults.map((r) => (
            <figure key={r.before}>
              <BeforeAfterSlider {...r} />
              <figcaption className="mt-3 flex items-center justify-between px-1">
                <span className="text-sm font-bold text-slate-900">{r.title}</span>
                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                  {r.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-slate-500 font-normal">{c.resultsNote}</p>
      </Section>

      {/* --------------------------------------------------------- ABOUT */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-center">
          <SectionHeading eyebrow="The clinic" title={c.aboutHeading} align="left" />
          <div className="space-y-4">
            {c.aboutBody.map((p) => (
              <p key={p.slice(0, 40)} className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={bookHref} tone="emerald" size="md">
                Book Consultation
              </Button>
              <Button href={clinic.mapUrl} tone="outline" size="md">
                Get Directions →
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------------- WHY */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Why here" title={c.whyHeading} />
        <TickCardGrid items={c.why} />
      </Section>

      {/* -------------------------------------------------------- INSIDE GALLERY */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <SectionHeading eyebrow="Take a look" title={c.insideHeading} sub={c.insideSub} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {c.insideImages.map((im) => (
            <div key={im.src} className="relative aspect-4/3 overflow-hidden rounded-lg border border-slate-200 shadow-2xs">
              <Image
                src={im.src}
                alt={im.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-103"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------------- TRAVEL */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Getting here" title={c.travelHeading} sub={c.travelSub} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.travel.map((t) => (
            <div
              key={t.title}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-2xs"
            >
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                {t.meta}
              </p>
              <h3 className="mt-2 text-base font-bold text-slate-900">{t.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 font-normal">{t.body}</p>
            </div>
          ))}
        </div>

        {c.travelExtra?.length ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {c.travelExtra.map((x) => (
              <div key={x.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-2xs">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {x.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {x.lines.map((l) => (
                    <li key={l} className="flex gap-2 text-sm text-slate-700 font-medium">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
      </Section>

      {/* --------------------------------------------------------- AREAS */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <SectionHeading eyebrow="Coverage" title={c.areasHeading} sub={c.areasSub} />
        <AreasGrid areas={c.areas} />

        <div className="mt-10 overflow-hidden rounded-xl bg-slate-900 p-8 text-center text-white lg:p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            {c.crossClinic.eyebrow}
          </p>
          <h3 className="mt-2 text-xl font-bold sm:text-2xl">
            {c.crossClinic.title}
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 font-normal">
            {c.crossClinic.body}
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={c.crossClinic.href} tone="emerald" size="md">
              {c.crossClinic.cta}
            </Button>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------- CARE */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Clinical standards" title={c.careHeading} sub={c.careSub} />
        <TickCardGrid items={clinicalCare} />
      </Section>

      {/* ---------------------------------------------------------- TEAM */}
      <TeamStrip members={homeTeam} heading={c.teamHeading} sub={c.teamSub} eyebrow="Your dentists" />

      {/* ------------------------------------------------------- PRICING */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Pricing" title={c.pricingHeading} sub={c.pricingSub} />
        <PricePanel
          eyebrow={locationPackage.eyebrow}
          title={locationPackage.title}
          price={locationPackage.price}
          items={locationPackage.items}
          note={locationPackage.note}
          disclaimer={locationPackage.disclaimer}
          ctaLabel="Book Your Consultation"
          ctaHref={bookHref}
        />
      </Section>

      {/* --------------------------------------------------------- STEPS */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <SectionHeading eyebrow="The process" title={c.howHeading} sub={c.howSub} />
        <ProcessSteps steps={howItWorks} />
      </Section>

      {/* --------------------------------------------------------- HOURS */}
      <Section className="bg-white">
        <SectionHeading eyebrow={clinic.label} title={c.hoursHeading} />
        <div className="mt-8">
          <HoursCard
            heading={clinic.lines.join(", ")}
            hours={clinic.hours}
            note={clinic.hoursNote}
          />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={site.phoneHref} tone="outline" size="md">
            {site.phone}
          </Button>
          <Button href={clinic.mapUrl} tone="outline" size="md">
            Get Directions →
          </Button>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-lg border border-slate-200 bg-slate-50 p-6 text-center shadow-2xs">
          <h3 className="text-lg font-bold text-slate-900">{c.reviewsHeading}</h3>
          <p className="mt-2 text-sm text-slate-600 font-normal">{c.reviewsSub}</p>
        </div>
      </Section>

      {/* ---------------------------------------------------------- FAQS */}
      <Section className="bg-slate-50 border-t border-slate-200">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQs" title={c.faqHeading} align="left" />
          <Accordion items={c.faqs} />
        </div>
      </Section>

      <CtaBand
        heading={c.ctaHeading}
        sub={c.ctaSub}
        note={c.ctaNote}
        primaryHref={bookHref}
        primaryLabel="Book Your Consultation"
      />
    </>
  );
}

