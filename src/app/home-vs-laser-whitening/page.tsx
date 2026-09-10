import type { Metadata } from "next";
import {
  CtaBand,
  FaqSection,
  FeatureGrid,
  GoogleReviews,
  PageHero,
  PricePanel,
  SmileGalleryStrip,
} from "@/components/blocks";
import Button from "@/components/button";
import { Section, SectionHeading, TickList } from "@/components/ui";
import { whiteningOptionsPage as page } from "@/lib/pages";
import { bookUrl, heroBeforeAfter } from "@/lib/site";
import BeforeAfterSlider from "@/components/before-after-slider";

export const metadata: Metadata = {
  title: "Whitening Options — Home vs In-Clinic",
  description: page.lead,
  alternates: { canonical: "/home-vs-laser-whitening" },
};

function ComparisonTable({
  head,
  rows,
}: {
  head: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
      <table className="w-full min-w-[40rem] text-left text-sm">
        <thead>
          <tr className="bg-slate-900 text-white">
            {head.map((h) => (
              <th key={h} className="px-5 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => (
            <tr key={row[0]} className="align-top">
              {row.map((cell, i) => (
                <td
                  key={cell}
                  className={`px-5 py-3.5 leading-relaxed ${
                    i === 0 ? "font-semibold text-slate-900" : "text-slate-600"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WhiteningOptionsPage() {
  return (
    <>
      <PageHero
        eyebrow="WHITENING OPTIONS"
        titleTop={page.h1}
        titleBottom={page.h1Sub}
        lead={page.lead}
        badges={page.badges}
        stats={page.stats}
      >
        <div className="mx-auto w-full max-w-md">
          <BeforeAfterSlider {...heroBeforeAfter} priority />
        </div>
      </PageHero>

      <Section className="bg-white">
        <SectionHeading eyebrow="The science" title={page.howHeading} />
        <div className="mx-auto mt-6 max-w-3xl space-y-4">
          {page.how.map((p) => (
            <p key={p.slice(0, 30)} className="text-sm leading-relaxed text-slate-600">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section className="border-t border-slate-200 bg-slate-50">
        <SectionHeading
          eyebrow="Home whitening"
          title={page.homeHeading}
          sub={page.homeIntro}
        />
        <FeatureGrid items={page.homeSteps} />
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="In-clinic whitening" title={page.clinicHeading} />
        <div className="mx-auto mt-6 max-w-3xl space-y-4">
          {page.clinic.map((p) => (
            <p key={p.slice(0, 30)} className="text-sm leading-relaxed text-slate-600">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section className="border-t border-slate-200 bg-slate-50">
        <SectionHeading eyebrow="Compare" title={page.tableHeading} />
        <ComparisonTable head={page.tableHead} rows={page.tableRows} />
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="Our approach"
          title={page.approachHeading}
          sub={page.approachIntro}
          align="left"
        />
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <TickList items={page.approachPoints} />
            <p className="mt-5 text-sm leading-relaxed text-slate-600">{page.approachNote}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-display text-lg font-bold text-slate-900">{page.midCtaHeading}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{page.midCtaSub}</p>
            <div className="mt-5">
              <Button href={bookUrl} size="lg">
                Book Your Consultation
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200 bg-slate-50">
        <PricePanel
          eyebrow="COMPLETE WHITENING PACKAGE"
          title="Home Whitening Package"
          price="£199"
          items={page.approachPoints}
          note="Suitability assessed at consultation."
          ctaLabel="Book Consultation"
          ctaHref={bookUrl}
        />
      </Section>

      <SmileGalleryStrip className="bg-white border-y border-slate-200" />

      <GoogleReviews className="bg-white" />

      <FaqSection items={page.faqs} heading={page.faqHeading} sub="" showLink={false} />

      <CtaBand heading={page.ctaHeading} sub={page.ctaSub} primaryLabel="Book Now" />
    </>
  );
}
