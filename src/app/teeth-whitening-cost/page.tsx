import type { Metadata } from "next";
import Accordion from "@/components/accordion";
import Button from "@/components/button";
import { CtaBand, FeatureGrid, PageHero, PricePanel } from "@/components/blocks";
import { Check, Section, SectionHeading } from "@/components/ui";
import { bookUrl, pricing } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teeth Whitening Cost London — 2026 Price Guide",
  description: pricing.lead,
};

export default function PricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricing.faqs.map((f) => ({
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
        eyebrow={pricing.eyebrow}
        titleTop={pricing.h1a}
        titleBottom={pricing.h1b}
        lead={pricing.lead}
        badges={pricing.badges}
        stats={pricing.heroStats}
      >
        <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-2xs">
          <h2 className="text-lg font-bold text-slate-900">{pricing.quickSummaryHeading}</h2>
          <ul className="mt-4 space-y-2.5">
            {pricing.quickSummary.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-slate-700 font-medium">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </PageHero>

      {/* -------------------------------------------------------- INTRO */}
      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-center">
          <SectionHeading eyebrow="Cost guide" title={pricing.introHeading} align="left" />
          <div className="space-y-4">
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">{pricing.introBody}</p>
            <h3 className="pt-2 text-xl font-bold text-slate-900">
              {pricing.understandingHeading}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
              {pricing.understandingBody}
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------- DETERMINANTS */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <SectionHeading eyebrow="Price factors" title={pricing.determinantsHeading} />
        <FeatureGrid items={pricing.determinants} />
      </Section>

      {/* ---------------------------------------------------- COMPARISON TABLE */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Compare" title={pricing.comparisonHeading} />
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 shadow-2xs">
          <table className="w-full min-w-3xl border-collapse text-left">
            <thead>
              <tr className="bg-slate-900 text-white">
                {pricing.comparisonHeaders.map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap text-slate-300"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pricing.comparison.map((row) => (
                <tr
                  key={row.treatment}
                  className={row.featured ? "bg-emerald-50/50" : "bg-white"}
                >
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900">
                    {row.treatment}
                    {row.featured ? (
                      <span className="ml-2 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800 border border-emerald-200">
                        Best value
                      </span>
                    ) : null}
                  </td>
                  <td
                    className={`px-4 py-3 text-sm font-bold whitespace-nowrap ${
                      row.featured ? "text-emerald-800" : "text-slate-800"
                    }`}
                  >
                    {row.cost}
                  </td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap text-slate-600 font-medium">
                    {row.results}
                  </td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap text-slate-600 font-medium">
                    {row.duration}
                  </td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap text-slate-600 font-medium">{row.lasts}</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap text-slate-600 font-medium">{row.topUp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-4 max-w-4xl text-center text-xs leading-relaxed text-slate-500 font-normal">
          {pricing.comparisonNote}
        </p>
      </Section>

      {/* ------------------------------------------------------- PRICES */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <SectionHeading
          eyebrow="Our prices"
          title={pricing.pricesHeading}
          sub={pricing.pricesSub}
        />

        <PricePanel
          eyebrow="All-inclusive"
          title={pricing.mainPackage.title}
          price={pricing.mainPackage.price}
          items={pricing.mainPackage.items}
          note={pricing.mainPackage.note}
          ctaLabel={pricing.mainPackage.cta}
          ctaHref={bookUrl}
        />

        <div className="mx-auto mt-6 max-w-xl rounded-md border border-amber-200 bg-amber-50 px-4 py-3.5 shadow-2xs">
          <p className="text-xs font-bold text-amber-900">⚠ {pricing.checkupNotice.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-amber-800 font-medium">{pricing.checkupNotice.body}</p>
        </div>

        <div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
          {pricing.extras.map((extra) => (
            <div key={extra.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-2xs">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-900">{extra.title}</h3>
                <span className="font-display text-xl font-bold text-emerald-700">
                  {extra.price}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 font-normal">{extra.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------------- VALUE */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Value" title={pricing.valueHeading} />
        <FeatureGrid items={pricing.value} />
      </Section>

      {/* --------------------------------------------------- HALF PRICE GUARANTEE */}
      <section className="bg-slate-900 py-12 lg:py-16 text-white relative">
        <div className="container-x relative">
          <SectionHeading title={pricing.halfPriceHeading} sub={pricing.halfPriceIntro} tone="light" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pricing.halfPricePoints.map((p, i) => (
              <div
                key={p.title}
                className="rounded-lg border border-slate-800 bg-slate-800/50 p-5 text-white"
              >
                <span className="text-xs font-bold text-emerald-400">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-base font-bold text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-300 font-normal">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl rounded-md border border-slate-800 bg-slate-800 px-6 py-4 text-center text-xs leading-relaxed text-slate-300 font-medium">
            {pricing.halfPriceBottom}
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------- FAQS */}
      <Section className="bg-slate-50 border-t border-slate-200">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="FAQs" title={pricing.faqHeading} align="left" />
            <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-2xs">
              <h3 className="text-sm font-bold text-slate-900">{pricing.learnMoreHeading}</h3>
              <p className="mt-1 text-xs text-slate-500 font-medium">{pricing.learnMoreSub}</p>
              <ul className="mt-3 space-y-2">
                {pricing.learnMoreLinks.map((l) => (
                  <li key={l.href}>
                    <Button href={l.href} tone="outline" size="sm">
                      {l.label} →
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Accordion items={pricing.faqs} />
        </div>
      </Section>

      {/* ------------------------------------------------------ RELATED ARTICLES */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Read more" title={pricing.relatedHeading} />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {pricing.related.map((r) => (
            <a
              key={r.href}
              href={r.href}
              rel="noopener"
              className="group rounded-lg border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:border-slate-300"
            >
              <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                {r.label}
              </h3>
              <span className="mt-3 block text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Read article →
              </span>
            </a>
          ))}
        </div>
      </Section>

      <CtaBand heading={pricing.ctaHeading} sub={pricing.ctaSub} note={pricing.ctaNote} />
    </>
  );
}

