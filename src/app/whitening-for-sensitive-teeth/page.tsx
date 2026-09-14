import type { Metadata } from "next";
import {
  CtaBand,
  FaqSection,
  FeatureGrid,
  GoogleReviews,
  PageHero,
  SmileGalleryStrip,
} from "@/components/blocks";
import Button from "@/components/button";
import VideoEmbed from "@/components/video-embed";
import { Section, SectionHeading, TickList } from "@/components/ui";
import { sensitiveTeethPage as page } from "@/lib/pages";
import { bookUrl, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teeth Whitening for Sensitive Teeth",
  description: page.lead,
  alternates: { canonical: "/whitening-for-sensitive-teeth" },
};

function ComparisonTable({
  head,
  rows,
}: {
  head: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <div className="mt-8 overflow-x-auto overscroll-x-contain rounded-lg border border-slate-200 bg-white shadow-2xs" tabIndex={0} role="region" aria-label={page.tableHeading}>
      <table className="w-full min-w-[40rem] text-left text-sm">
        <thead>
          <tr className="bg-slate-900 text-white">
            {head.map((h) => (
              <th key={h} scope="col" className="px-5 py-4 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => (
            <tr key={row[0]} className="align-top even:bg-slate-50">
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

export default function SensitiveTeethPage() {
  return (
    <>
      <PageHero
        eyebrow="SENSITIVE TEETH"
        titleBottom={page.h1}
        lead={page.lead}
        badges={page.badges}
        stats={page.stats}
      >
        <div className="mx-auto w-full max-w-2xl">
          <VideoEmbed
            id="mWMhRZo2E54"
            title={page.h1}
            poster={img.skTreatmentRoom}
            posterAlt="Treatment room at South Kensington Medical Dental"
          />
        </div>
      </PageHero>

      <Section className="bg-white">
        <SectionHeading eyebrow="Suitability" title={page.canHeading} />
        <div className="mx-auto mt-6 max-w-3xl space-y-4">
          {page.can.map((p) => (
            <p key={p.slice(0, 30)} className="text-base leading-7 text-slate-600">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section className="border-t border-slate-200 bg-slate-50">
        <SectionHeading
          eyebrow="The causes"
          title={page.causesHeading}
          sub={page.causesSub}
        />
        <FeatureGrid items={page.causes} />
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="Our protocol"
          title={page.protocolHeading}
          sub={page.protocolSub}
        />
        <FeatureGrid items={page.protocol} />
      </Section>

      <Section className="border-t border-slate-200 bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Dentist supervision"
              title={page.supervisionHeading}
              sub={page.supervisionSub}
              align="left"
            />
            <div className="mt-6">
              <TickList items={page.supervision} />
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
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

      <Section className="bg-white">
        <SectionHeading eyebrow="Compare" title={page.tableHeading} sub={page.tableNote} />
        <ComparisonTable head={page.tableHead} rows={page.tableRows} />
      </Section>

      <SmileGalleryStrip />

      <GoogleReviews className="bg-white" />

      <FaqSection items={page.faqs} heading={page.faqHeading} sub="" showLink={false} />

      <CtaBand heading={page.ctaHeading} sub={page.ctaSub} primaryLabel="Book Now" />
    </>
  );
}
