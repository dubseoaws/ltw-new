import type { Metadata } from "next";
import { CtaBand, GoogleReviews, HoursCard, PageHero, SmileGalleryStrip } from "@/components/blocks";
import Button from "@/components/button";
import ClinicMap, { type ClinicMapClinic } from "@/components/clinic-map";
import { Eyebrow, Section, TickList } from "@/components/ui";
import { contactPage } from "@/lib/pages";
import { bookUrl, clinics, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: contactPage.lead,
  alternates: { canonical: "/contact-us" },
};

function ContactCard({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-w-0 gap-3 border-t border-slate-200 py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-5">
      <div>
        <h2 className="text-base font-bold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{sub}</p>
      </div>
      <div className="min-w-0 text-sm font-semibold leading-relaxed text-emerald-800 sm:pt-0.5">{children}</div>
    </div>
  );
}

function ClinicBlock({
  badge,
  heading,
  body,
  addressHeading,
  address,
  travelHeading,
  travel,
  hoursHeading,
  hours,
  hoursNote,
  clinic,
}: {
  badge?: string;
  heading: string;
  body: string;
  addressHeading: string;
  address: readonly string[];
  travelHeading: string;
  travel: readonly string[];
  hoursHeading: string;
  hours: readonly (readonly [string, string])[];
  hoursNote: string;
  clinic: ClinicMapClinic & { slug: string };
}) {
  return (
    <article id={clinic.slug} className="grid min-w-0 scroll-mt-28 gap-6 border-t border-slate-200 pt-6 lg:row-span-4 lg:grid-rows-subgrid">
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-display text-2xl font-bold leading-tight text-slate-900">
            {heading}
          </h2>
          {badge ? (
            <span className="inline-flex rounded-md border border-emerald-200/80 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
              {badge}
            </span>
          ) : null}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
      </header>

      <ClinicMap clinic={clinic} aspect="aspect-16/9" showAddress={false} />

      <div className="grid content-start gap-6 sm:grid-cols-[0.8fr_1.2fr] lg:grid-cols-1 xl:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h3 className="text-sm font-bold text-slate-900">{addressHeading}</h3>
          <address className="mt-2 text-sm not-italic leading-relaxed text-slate-600">
            {address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="mt-4">
            <Button href={clinic.mapUrl} tone="outline" size="sm">
              Get Directions
            </Button>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900">{travelHeading}</h3>
          <div className="mt-2">
            <TickList items={travel} />
          </div>
        </div>
      </div>

      <div className="[&>div]:max-w-none">
        <HoursCard heading={hoursHeading} hours={hours} note={hoursNote} />
      </div>
    </article>
  );
}

export default function ContactPage() {
  const sk = clinics.southKensington;
  const city = clinics.cityOfLondon;

  return (
    <>
      <PageHero
        eyebrow={contactPage.eyebrow}
        titleTop={contactPage.h1}
        titleBottom={contactPage.h1Bottom}
        lead={contactPage.lead}
      >
        <div className="grid">
          <ContactCard title={contactPage.cards[0].title} sub={contactPage.cards[0].sub}>
            <a href={site.phoneHref} className="inline-flex min-h-11 items-center hover:underline">
              {site.phone}
            </a>
          </ContactCard>
          <ContactCard title={contactPage.cards[1].title} sub={contactPage.cards[1].sub}>
            <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center break-all hover:underline">
              {site.email}
            </a>
          </ContactCard>
          <ContactCard title={contactPage.cards[2].title} sub={contactPage.cards[2].sub}>
            <a href="#south-kensington" className="block py-2 font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-emerald-800">
              South Kensington: 20 Old Brompton Road, SW7 3DL
            </a>
            <a href="#city-of-london" className="block py-2 font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-emerald-800">
              City of London: 5 Ave Maria Lane, EC4M 7AQ
            </a>
          </ContactCard>
        </div>
      </PageHero>

      <Section className="bg-white">
        <Eyebrow>{contactPage.visitEyebrow}</Eyebrow>
        <div className="mt-6 grid gap-x-10 gap-y-10 lg:grid-cols-2 xl:gap-x-12">
          <ClinicBlock
            heading={contactPage.sk.heading}
            body={contactPage.sk.body}
            addressHeading={contactPage.sk.addressHeading}
            address={sk.lines}
            travelHeading={contactPage.sk.travelHeading}
            travel={contactPage.sk.travel}
            hoursHeading={contactPage.sk.hoursHeading}
            hours={sk.hours}
            hoursNote={contactPage.sk.hoursNote}
            clinic={sk}
          />
          <ClinicBlock
            badge={contactPage.city.badge}
            heading={contactPage.city.heading}
            body={contactPage.city.body}
            addressHeading={contactPage.city.addressHeading}
            address={city.lines}
            travelHeading={contactPage.sk.travelHeading}
            travel={contactPage.city.travel}
            hoursHeading={contactPage.city.hoursHeading}
            hours={city.hours}
            hoursNote={contactPage.city.hoursNote}
            clinic={city}
          />
        </div>
      </Section>

      <SmileGalleryStrip className="bg-white border-y border-slate-200" />

      <GoogleReviews className="bg-white" />

      <CtaBand
        heading={contactPage.ctaHeading}
        sub={contactPage.ctaSub}
        primaryHref={bookUrl}
        primaryLabel="Book Now"
      />
    </>
  );
}
