import type { Metadata } from "next";
import {
  CtaBand,
  FaqSection,
  GoogleReviews,
  PageHero,
  PricePanel,
  ProcessSteps,
  SmileGalleryStrip,
} from "@/components/blocks";
import { Check, Section, SectionHeading, TickList } from "@/components/ui";
import { whiteningOptionsPage as page } from "@/lib/pages";
import { bookUrl, heroBeforeAfter, img } from "@/lib/site";
import BeforeAfterSlider from "@/components/before-after-slider";
import VideoEmbed from "@/components/video-embed";

export const metadata: Metadata = {
  title: "Whitening Options — Home vs In-Clinic",
  description: page.lead,
  alternates: { canonical: "/home-vs-laser-whitening" },
};

const homeSteps = page.homeSteps.map((s, i) => ({ ...s, n: String(i + 1) }));

/** The package panel sits beside the approach list, so it lists the stages rather than repeating them. */
const packageItems = page.homeSteps.map((s) => s.title);

/** Column 1 is home whitening — the approach this clinic recommends — so it is tinted. */
function ComparisonTable({
  head,
  rows,
}: {
  head: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
      <div className="overflow-x-auto overscroll-x-contain" tabIndex={0} role="region" aria-label={page.tableHeading}>
        <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
          <thead>
            <tr>
              {head.map((h, i) => (
                <th
                  key={h}
                  scope="col"
                  className={`px-6 py-4 font-display text-sm font-bold tracking-tight ${
                    i === 1 ? "bg-emerald-900 text-white" : "bg-slate-900 text-slate-100"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {i === 1 ? (
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                    ) : null}
                    {h}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={row[0]} className={r % 2 ? "bg-slate-50/70" : "bg-white"}>
                {row.map((cell, i) => (
                  <td
                    key={cell}
                    className={`border-t border-slate-100 px-6 py-4 align-top leading-relaxed ${
                      i === 0
                        ? "font-semibold text-slate-900"
                        : i === 1
                          ? "bg-emerald-50/40 text-slate-700"
                          : "text-slate-600"
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
    </div>
  );
}

function OptionCard({
  eyebrow,
  title,
  body,
  href,
  featured = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-7 transition-shadow hover:shadow-lg ${
        featured
          ? "border-emerald-200 bg-white shadow-md ring-1 ring-emerald-100"
          : "border-slate-200 bg-white shadow-2xs"
      }`}
    >
      <span
        className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider ${
          featured
            ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
            : "bg-slate-100 text-slate-700 ring-1 ring-slate-200"
        }`}
      >
        {eyebrow}
      </span>
      <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-3 grow text-sm leading-relaxed text-slate-600">{body}</p>
      <a
        href={href}
        className="mt-5 inline-flex min-h-11 w-fit items-center gap-1.5 text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline"
      >
        Read how it works
        <span aria-hidden="true">→</span>
      </a>
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
        <div className="mx-auto w-full max-w-2xl">
          <VideoEmbed
            id="BIUdsbvWGrY"
            title={page.h1}
            poster={img.clinicAbout}
            posterAlt="Reception team welcoming a patient at South Kensington Medical Dental"
          />
        </div>
      </PageHero>

      <Section className="bg-white">
        <SectionHeading eyebrow="Two routes" title={page.tableHeading} />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <OptionCard
            featured
            eyebrow="Our recommendation"
            title={page.homeHeading}
            body={page.homeIntro}
            href="#home-whitening"
          />
          <OptionCard
            eyebrow="The alternative"
            title={page.clinicHeading}
            body={page.clinic[0]}
            href="#in-clinic"
          />
        </div>
        <ComparisonTable head={page.tableHead} rows={page.tableRows} />
      </Section>

      <Section className="border-t border-slate-200 bg-slate-50">
        <SectionHeading eyebrow="The science" title={page.howHeading} />
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            {page.how.map((p) => (
              <p key={p.slice(0, 30)} className="text-base leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
          </div>
          <div className="mx-auto w-full max-w-md">
            <BeforeAfterSlider {...heroBeforeAfter} priority />
          </div>
        </div>
      </Section>

      <Section id="home-whitening" className="scroll-mt-24 border-t border-slate-200 bg-white">
        <SectionHeading eyebrow="Home whitening" title={page.homeHeading} sub={page.homeIntro} />
        <ProcessSteps steps={homeSteps} />
      </Section>

      <Section id="in-clinic" className="scroll-mt-24 border-t border-slate-200 bg-slate-900">
        <SectionHeading eyebrow="In-clinic whitening" title={page.clinicHeading} tone="light" />
        <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
          {page.clinic.map((p) => (
            <p
              key={p.slice(0, 30)}
              className="border-t border-white/20 pt-5 text-sm leading-7 text-slate-300"
            >
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Our approach"
              title={page.approachHeading}
              sub={page.approachIntro}
              align="left"
            />
            <div className="mt-6">
              <TickList items={page.approachPoints} />
              <p className="mt-6 text-sm leading-relaxed text-slate-600">{page.approachNote}</p>
            </div>
          </div>
          <div>
            <PricePanel
              className=""
              eyebrow="COMPLETE WHITENING PACKAGE"
              title="Home Whitening Package"
              price="£199"
              items={packageItems}
              note="Suitability assessed at consultation."
              ctaLabel="Book Consultation"
              ctaHref={bookUrl}
            />
          </div>
        </div>
      </Section>

      <SmileGalleryStrip className="border-y border-slate-200 bg-white" />

      <GoogleReviews className="bg-slate-50" />

      <FaqSection items={page.faqs} heading={page.faqHeading} sub="" showLink={false} />

      <CtaBand heading={page.ctaHeading} sub={page.ctaSub} primaryLabel="Book Now" />
    </>
  );
}
