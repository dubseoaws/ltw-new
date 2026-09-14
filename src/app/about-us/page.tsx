import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/button";
import ClinicMap from "@/components/clinic-map";
import {
  CtaBand,
  FaqSection,
  FeatureGrid,
  GoogleReviews,
  PageHero,
  SmileGalleryStrip,
} from "@/components/blocks";
import { Section, SectionHeading, TickList } from "@/components/ui";
import { about, bookUrl, clinics, img, principal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: about.lead,
};

export default function AboutPage() {
  const sk = clinics.southKensington;
  const city = clinics.cityOfLondon;

  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        titleBottom={about.h1}
        lead={about.lead}
        stats={about.stats}
      >
        <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
          <Image
            src={img.clinicTeam}
            alt="Teeth Whitening London clinic interior in South Kensington"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
            priority
          />
        </div>
      </PageHero>

      {/* --------------------------------------------------------- STORY */}
      <Section className="bg-white">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={about.storyEyebrow}
              title={about.storyHeading}
              align="left"
            />
            <div className="mt-4 space-y-4">
              {about.story.map((p) => (
                <p key={p.slice(0, 40)} className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                  {p}
                </p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {about.storyBadges.map((b) => (
                <li
                  key={b}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  ✓ {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-lg border border-slate-200 shadow-2xs">
            <Image
              src={img.clinicAbout}
              alt="Our welcoming teeth whitening clinic in South Kensington, London"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- VALUES */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <SectionHeading
          eyebrow={about.valuesEyebrow}
          title={about.valuesHeading}
          sub={about.valuesSub}
        />
        <FeatureGrid items={about.values} columns={2} />
      </Section>

      {/* ---------------------------------------------------------- TEAM */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow={about.teamEyebrow}
          title={about.teamHeading}
          sub={about.teamSub}
        />
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg border border-slate-200 shadow-2xs">
              <Image
                src={principal.image}
                alt="Dr. Yasha Shirazi - Principal Dentist at Teeth Whitening London"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 384px, 40vw"
                className="object-cover object-top"
              />
            </div>
            <span className="absolute bottom-3 left-3 rounded-md bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs">
              GDC #195843
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">{principal.name}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              {about.principalRole}
            </p>
            <div className="mt-4 space-y-4">
              {about.principalBody.map((p) => (
                <p key={p.slice(0, 40)} className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-6">
              <TickList items={about.principalPoints} />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500 font-normal">{about.principalNote}</p>
            <div className="mt-6">
              <Button href="/dentists" tone="emerald" size="md">
                Meet the Full Team →
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- FIND US */}
      <Section className="bg-slate-50 border-t border-slate-200">
        <SectionHeading
          eyebrow={about.findUsEyebrow}
          title={about.findUsHeading}
          sub={about.findUsSub}
        />
        <div className="mt-8 grid gap-x-10 gap-y-6 lg:grid-cols-2">
          {[sk, city].map((clinic) => (
            <article
              key={clinic.slug}
              className="grid min-w-0 gap-6 border-t border-slate-300 pt-6 lg:row-span-5 lg:grid-rows-subgrid"
            >
              <header>
              <h3 className="text-xl font-bold text-slate-900">{clinic.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                {clinic.label}
              </p>
              </header>
              <ClinicMap clinic={clinic} aspect="aspect-16/9" showAddress={false} />
              <div>
              <address className="text-sm leading-relaxed text-slate-700 font-medium not-italic">
                {clinic.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>

              {clinic.slug === "south-kensington" ? (
                <div className="mt-4 rounded-md bg-slate-50 border border-slate-200 p-3.5">
                  <p className="text-xs font-bold text-slate-900">
                    🚇 {about.transportNote.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-700 font-medium">{about.transportNote.body}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{about.transportNote.lines}</p>
                </div>
              ) : (
                <div className="mt-4 rounded-md bg-slate-50 border border-slate-200 p-3.5">
                  <p className="text-xs font-semibold text-slate-800">{clinic.note}</p>
                </div>
              )}

              </div>
              <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Opening Hours
              </h4>
              <dl className="mt-2 divide-y divide-slate-100">
                {clinic.hours.map(([day, time]) => (
                  <div key={day} className="flex flex-wrap items-center justify-between gap-2 py-2">
                    <dt className="text-xs font-medium text-slate-700">{day}</dt>
                    <dd
                      className={`text-xs ${
                        time === "Closed" ? "text-slate-400" : "font-semibold text-emerald-800"
                      }`}
                    >
                      {time}
                    </dd>
                  </div>
                ))}
              </dl>
              </div>

              <div className="flex flex-wrap items-end gap-2.5">
                <Button href={bookUrl} tone="emerald" size="md">Book Consultation</Button>
                <Button href={clinic.mapUrl} tone="outline" size="md">
                  Get Directions →
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <a href={site.phoneHref} className="text-slate-800 hover:text-emerald-700 transition">
            📞 {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="text-slate-800 hover:text-emerald-700 transition">
            ✉️ {site.email}
          </a>
        </div>
      </Section>

      <GoogleReviews />

      <SmileGalleryStrip />

      <FaqSection />

      <CtaBand heading={about.ctaHeading} sub={about.ctaSub} note={about.ctaNote} />
    </>
  );
}

