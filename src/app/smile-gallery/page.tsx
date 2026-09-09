import type { Metadata } from "next";
import BeforeAfterSlider from "@/components/before-after-slider";
import { CtaBand, FeatureGrid, PageHero } from "@/components/blocks";
import { Section, SectionHeading, TickList } from "@/components/ui";
import { gallery, galleryCases, galleryMore, heroBeforeAfter } from "@/lib/site";

export const metadata: Metadata = {
  title: "Smile Gallery — Before & After",
  description: gallery.lead,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow={gallery.eyebrow}
        titleBottom={gallery.h1}
        lead={gallery.lead}
        stats={gallery.stats}
      >
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
          <BeforeAfterSlider
            {...heroBeforeAfter}
            priority
            className="rounded-none"
            sizes="(max-width: 640px) 100vw, 440px"
          />
        </div>
      </PageHero>

      {/* ------------------------------------------------------- EXPECT */}
      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-center">
          <SectionHeading eyebrow="What to expect" title={gallery.expectHeading} align="left" />
          <div className="space-y-4">
            {gallery.expectBody.map((p) => (
              <p key={p.slice(0, 40)} className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- CASES */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <SectionHeading
          eyebrow={gallery.casesEyebrow}
          title={gallery.casesHeading}
          sub={gallery.casesSub}
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {galleryCases.map((c) => (
            <article
              key={c.before}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition hover:border-slate-300 hover:shadow-sm"
            >
              <BeforeAfterSlider
                before={c.before}
                after={c.after}
                beforeAlt={`${c.name} before teeth whitening`}
                afterAlt={`${c.name} after teeth whitening`}
                className="rounded-none"
                compact
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 300px"
              />

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-bold text-slate-900">{c.name}</h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {c.location}
                </p>
                <p className="mt-2.5 line-clamp-4 text-sm leading-relaxed text-slate-600 font-normal">
                  {c.result}
                </p>

                <details className="group mt-3 border-t border-slate-100 pt-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-emerald-700">
                    Full case study
                    <span className="transition-transform group-open:rotate-180" aria-hidden="true">
                      ▾
                    </span>
                  </summary>

                  <div className="mt-3 space-y-3">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        The Concern
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700 font-normal">
                        {c.concern}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Our Approach
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700 font-normal">
                        {c.approach}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Treatment
                      </h4>
                      <div className="mt-2">
                        <TickList items={c.treatment} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        The Result
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700 font-normal">
                        {c.result}
                      </p>
                    </div>
                  </div>
                </details>

                {c.quote ? (
                  <blockquote className="mt-auto pt-4">
                    <div className="rounded-md bg-slate-50 border border-slate-200 px-4 py-3">
                      <p className="line-clamp-4 text-sm leading-relaxed font-medium text-slate-800 italic">
                        “{c.quote}”
                      </p>
                    </div>
                  </blockquote>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------------- MORE RESULTS */}
      <Section className="bg-white">
        <SectionHeading eyebrow={gallery.moreEyebrow} title={gallery.moreHeading} />
        <div className="mx-auto mt-8 grid max-w-4xl gap-5 grid-cols-2 sm:grid-cols-3">
          {galleryMore.map((m) => (
            <BeforeAfterSlider
              key={m.before}
              before={m.before}
              after={m.after}
              beforeAlt="Teeth whitening before"
              afterAlt="Teeth whitening after"
              compact
              sizes="(max-width: 640px) 50vw, 280px"
            />
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------ FACTORS */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <SectionHeading
          eyebrow={gallery.factorsEyebrow}
          title={gallery.factorsHeading}
          sub={gallery.factorsSub}
        />
        <FeatureGrid items={gallery.factors} columns={2} />
      </Section>

      {/* ------------------------------------------------- EXPECTATIONS */}
      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={gallery.expectationsEyebrow}
              title={gallery.expectationsHeading}
              align="left"
            />
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
              {gallery.expectationsIntro}
            </p>
            <div className="mt-4">
              <TickList items={gallery.expectations} />
            </div>
            <p className="mt-6 rounded-md bg-slate-50 border border-slate-200 px-5 py-4 text-sm leading-relaxed text-slate-700 font-medium">
              {gallery.expectationsOutro}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {gallery.stainTableHeading}
            </h3>
            <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 shadow-2xs">
              <table className="w-full border-collapse text-left">
                <tbody className="divide-y divide-slate-100">
                  {gallery.stainTable.map(([type, result]) => (
                    <tr key={type} className="bg-white">
                      <td className="px-4 py-3 text-sm font-semibold text-slate-800">{type}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-emerald-800">{result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500 font-medium">{gallery.stainTableNote}</p>
          </div>
        </div>
      </Section>

      <CtaBand
        heading={gallery.ctaHeading}
        sub={gallery.ctaSub}
        note={gallery.ctaPoints.map((p) => `✓ ${p}`).join("   ")}
      />
    </>
  );
}

