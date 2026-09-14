import type { Metadata } from "next";
import Accordion from "@/components/accordion";
import BeforeAfterSlider from "@/components/before-after-slider";
import Button from "@/components/button";
import ClinicMap from "@/components/clinic-map";
import { CtaBand, GoogleReviews, HoursCard, PageHero } from "@/components/blocks";
import { Section, SectionHeading } from "@/components/ui";
import { clinics, faqPage, home, homeResults, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: faqPage.lead,
};

export default function FaqsPage() {
  const sk = clinics.southKensington;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqPage.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow={faqPage.eyebrow}
        titleTop={faqPage.h1a}
        titleBottom={faqPage.h1b}
        lead={faqPage.lead}
      >
        <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-2xs">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            {home.packageLabel}
          </p>
          <p className="mt-2 font-display text-4xl font-bold text-slate-900">
            {site.price}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 font-normal">{home.packageFooter}</p>
          <div className="mt-5">
            <Button href="/teeth-whitening-cost" tone="emerald" size="md">
              See full price guide →
            </Button>
          </div>
        </div>
      </PageHero>

      <Section className="bg-white">
        <SectionHeading eyebrow="FAQs" title={faqPage.heading} sub={faqPage.sub} />
        <div className="mx-auto mt-8 max-w-3xl">
          <Accordion items={faqPage.items} numbered />
        </div>
      </Section>

      <Section className="bg-slate-50 border-y border-slate-200">
        <SectionHeading
          eyebrow={faqPage.transformationsEyebrow}
          title={faqPage.transformationsHeading}
          sub={faqPage.transformationsSub}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeResults.map((r) => (
            <figure key={r.before}>
              <BeforeAfterSlider {...r} compact sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              <figcaption className="mt-3 flex flex-wrap items-start justify-between gap-2 px-1">
                <span className="text-sm font-bold text-slate-900">{r.title}</span>
                <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                  {r.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-slate-500 font-normal">
          {faqPage.transformationsNote}
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="/smile-gallery" tone="slate" size="md">
            View Smile Gallery
          </Button>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="Visit us"
          title={faqPage.locationHeading}
          sub={faqPage.locationSub}
        />
        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          <HoursCard heading={`${sk.label} Opening Hours`} hours={sk.hours} note={sk.hoursNote} />
          <ClinicMap clinic={sk} aspect="aspect-16/9" />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={sk.mapUrl} tone="outline" size="md">
            Get Directions →
          </Button>
          <Button href={site.phoneHref} tone="outline" size="md">
            {site.phone}
          </Button>
        </div>
      </Section>

      <GoogleReviews className="bg-slate-50 border-y border-slate-200" />

      <CtaBand
        heading="Still Have Questions?"
        sub={`Speak to our team on ${site.phone} or book a no-obligation consultation at either London clinic.`}
      />
    </>
  );
}

