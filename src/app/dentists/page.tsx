import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, FeatureGrid, PageHero } from "@/components/blocks";
import { Section, SectionHeading } from "@/components/ui";
import type { Dentist } from "@/lib/site";
import { dentistsPage, img, principal, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Dentists",
  description: dentistsPage.lead,
};

function DentistCard({ d, featured }: { d: Dentist; featured?: boolean }) {
  return (
    <article
      className={`group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xs transition-all hover:border-slate-300 ${
        featured ? "lg:col-span-2 lg:grid lg:grid-cols-[0.85fr_1.15fr]" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          featured ? "aspect-4/5 sm:aspect-4/3 lg:aspect-3/4" : "aspect-4/5"
        }`}
      >
        <Image
          src={d.image}
          alt={`${d.name} — ${d.role} at Teeth Whitening London`}
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 40vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          }
          className="object-cover object-top transition-transform duration-300 group-hover:scale-103"
        />
        <span className="absolute top-3 left-3 rounded-md bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white shadow-2xs">
          GDC {d.gdc}
        </span>
      </div>

      <div className={featured ? "p-6 lg:p-8" : "p-5"}>
        <h3
          className={`font-bold text-slate-900 ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {d.name}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
          {d.role}
        </p>
        <p className="mt-2 text-xs text-slate-600 font-medium">{d.quals}</p>
        <div className="mt-3 space-y-2.5">
          {(d.bio ?? []).map((p) => (
            <p key={p.slice(0, 30)} className="text-sm leading-relaxed text-slate-600 font-normal">
              {p}
            </p>
          ))}
        </div>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {d.specialties.map((s) => (
            <li
              key={s}
              className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700"
            >
              ✓ {s}
            </li>
          ))}
        </ul>
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

      <Section className="bg-white">
        <SectionHeading
          eyebrow="Our team"
          title={dentistsPage.teamHeading}
          sub={dentistsPage.teamSub}
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <DentistCard d={principal} featured />
          {team.map((d) => (
            <DentistCard key={d.gdc} d={d} />
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50 border-t border-slate-200">
        <SectionHeading eyebrow="Why us" title={dentistsPage.whyHeading} />
        <FeatureGrid items={dentistsPage.why} />
      </Section>

      <CtaBand heading={dentistsPage.ctaHeading} sub={dentistsPage.ctaSub} />
    </>
  );
}

