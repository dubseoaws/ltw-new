import type { Metadata } from "next";
import Image from "next/image";
import {
  CtaBand,
  FaqSection,
  FeatureGrid,
  GoogleReviews,
  PageHero,
  SmileGalleryStrip,
} from "@/components/blocks";
import Button from "@/components/button";
import { Section, SectionHeading } from "@/components/ui";
import type { Dentist } from "@/lib/site";
import { bookUrl, dentistsPage, img, principal, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Dentists",
  description: dentistsPage.lead,
};

const dentists = team.filter((d) => !d.role.includes("Hygienist"));
const hygienists = team.filter((d) => d.role.includes("Hygienist"));

function firstName(name: string) {
  return name.replace(/^Dr\.?\s+/i, "").split(" ")[0];
}

function Specialties({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {items.map((s) => (
        <li
          key={s}
          className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

function DentistCard({ d }: { d: Dentist }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
        <Image
          src={d.image}
          alt={`${d.name} — ${d.role} at Teeth Whitening London`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-2xs backdrop-blur">
          GDC {d.gdc}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug text-slate-900">{d.name}</h3>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
          {d.role}
        </p>
        {d.quals ? (
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">{d.quals}</p>
        ) : null}

        {d.bio?.[0] ? (
          <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-600">{d.bio[0]}</p>
        ) : null}

        <Specialties items={d.specialties.slice(0, 3)} />

        <div className="mt-5 flex-1" />
        <Button href={bookUrl} tone="outline" size="sm" className="w-full">
          Book with {firstName(d.name)}
        </Button>
      </div>
    </article>
  );
}

export default function DentistsPage() {
  return (
    <>
      <PageHero
        eyebrow={dentistsPage.eyebrow}
        titleBottom={dentistsPage.h1}
        lead={dentistsPage.lead}
        stats={dentistsPage.stats}
      >
        <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white lg:max-w-md">
          <Image
            src={img.dentistsHero}
            alt="Teeth Whitening London dental team"
            fill
            sizes="(max-width: 640px) 100vw, 420px"
            className="object-cover object-top"
            priority
          />
        </div>
      </PageHero>

      <Section id="team" className="bg-white">
        <SectionHeading
          eyebrow="Our team"
          title={dentistsPage.teamHeading}
          sub={dentistsPage.teamSub}
        />

        <nav
          aria-label="Jump to a team section"
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          <a
            href="#dentists"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
          >
            Dentists ({dentists.length + 1})
          </a>
          <a
            href="#hygienists"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
          >
            Hygiene team ({hygienists.length})
          </a>
        </nav>

        <div id="dentists" className="mt-8 grid gap-5 scroll-mt-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {[principal, ...dentists].map((d) => (
            <DentistCard key={d.gdc} d={d} />
          ))}
        </div>

        {hygienists.length ? (
          <div id="hygienists" className="mt-14 scroll-mt-24">
            <h3 className="font-display text-xl font-bold tracking-tight text-slate-900">
              Hygiene team
            </h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {hygienists.map((d) => (
                <DentistCard key={d.gdc} d={d} />
              ))}
            </div>
          </div>
        ) : null}
      </Section>

      <Section className="border-t border-slate-200 bg-slate-50">
        <SectionHeading eyebrow="Why us" title={dentistsPage.whyHeading} />
        <FeatureGrid items={dentistsPage.why} />
      </Section>

      <GoogleReviews className="bg-white" />

      <SmileGalleryStrip />

      <FaqSection />

      <CtaBand heading={dentistsPage.ctaHeading} sub={dentistsPage.ctaSub} />
    </>
  );
}

