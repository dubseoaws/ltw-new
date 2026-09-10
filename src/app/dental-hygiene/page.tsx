import type { Metadata } from "next";
import {
  CtaBand,
  FaqSection,
  FeatureGrid,
  GoogleReviews,
  HoursCard,
  PageHero,
  SmileGalleryStrip,
} from "@/components/blocks";
import Button from "@/components/button";
import { Check, Section, SectionHeading, TickList } from "@/components/ui";
import { dentalHygienePage as page } from "@/lib/pages";
import { bookUrl, clinics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Hygienist South Kensington",
  description: page.lead,
  alternates: { canonical: "/dental-hygiene" },
};

function PriceCard({ p }: { p: (typeof page.prices)[number] }) {
  return (
    <article
      className={`flex flex-col rounded-xl border bg-white p-6 shadow-2xs ${
        p.featured ? "border-emerald-600 ring-1 ring-emerald-600/20" : "border-slate-200"
      }`}
    >
      <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
      <p className="mt-0.5 text-xs text-slate-500">{p.sub}</p>

      <p className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-3xl font-bold tracking-tight text-slate-900">
          {p.price}
        </span>
        {p.was ? <span className="text-sm text-slate-400 line-through">{p.was}</span> : null}
        {p.unit ? <span className="text-xs font-medium text-slate-500">{p.unit}</span> : null}
      </p>

      <ul className="mt-4 grid gap-2">
        {p.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-emerald-200/80 bg-emerald-50 text-emerald-700">
              <Check className="h-2.5 w-2.5" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex-1" />
      <Button href={bookUrl} tone={p.featured ? "emerald" : "outline"} className="w-full">
        {p.cta}
      </Button>
      {p.note ? <p className="mt-2 text-center text-xs text-slate-500">{p.note}</p> : null}
    </article>
  );
}

export default function DentalHygienePage() {
  const sk = clinics.southKensington;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} titleBottom={page.h1} lead={page.lead}>
        <div className="mx-auto w-full max-w-md rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center shadow-2xs">
          <span className="inline-flex rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
            {page.offerEyebrow}
          </span>
          <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {page.offerHeading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{page.offerSub}</p>
          <div className="mt-5">
            <Button href={bookUrl} size="lg">
              {page.offerCta}
            </Button>
          </div>
          <p className="mt-3 text-xs text-slate-600">{page.offerNote}</p>
        </div>
      </PageHero>

      <Section className="bg-white">
        <SectionHeading
          eyebrow={page.pricingEyebrow}
          title={page.pricingHeading}
          sub={page.pricingSub}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {page.prices.map((p) => (
            <PriceCard key={p.title} p={p} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-slate-200 bg-slate-50">
        <SectionHeading
          eyebrow={page.benefitsEyebrow}
          title={page.benefitsHeading}
          sub={page.benefitsSub}
        />
        <FeatureGrid items={page.benefits} />
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow={page.airflowEyebrow} title={page.airflowHeading} align="left" />
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm leading-relaxed text-slate-600">{page.airflowBody}</p>
            <div className="mt-5">
              <TickList items={page.airflowPoints} />
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
            <h3 className="font-display text-lg font-bold text-slate-900">
              {page.airflowCardTitle}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{page.airflowCardSub}</p>
            <div className="mt-5">
              <Button href={bookUrl} size="lg">
                {page.airflowCta}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200 bg-slate-50">
        <SectionHeading eyebrow={page.visitEyebrow} title={page.visitHeading} sub={page.visitSub} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {page.visitSteps.map((s, i) => (
            <article key={s.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-emerald-200 bg-emerald-50 text-xs font-bold text-emerald-800">
                {i + 1}
              </span>
              <h3 className="mt-3 flex items-center gap-2 text-base font-semibold text-slate-900">
                {s.title}
                {s.time ? (
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600">
                    {s.time}
                  </span>
                ) : null}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <SmileGalleryStrip className="bg-white border-y border-slate-200" />

      <GoogleReviews className="bg-white" />

      <FaqSection items={page.faqs} heading={page.faqHeading} sub="" showLink={false} />

      <Section className="border-t border-slate-200 bg-slate-50">
        <SectionHeading
          eyebrow={page.locationEyebrow}
          title={page.locationHeading}
          sub={page.locationAddress}
        />
        <div className="mt-8">
          <HoursCard heading="Opening Hours" hours={sk.hours} note={sk.hoursNote} />
        </div>
      </Section>

      <CtaBand heading={page.ctaHeading} sub={page.ctaSub} primaryLabel="Book Now" />
    </>
  );
}
