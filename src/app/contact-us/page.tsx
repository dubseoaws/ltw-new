import type { Metadata } from "next";
import { CtaBand, GoogleReviews, HoursCard, PageHero, SmileGalleryStrip } from "@/components/blocks";
import Button from "@/components/button";
import { Section, SectionHeading, TickList } from "@/components/ui";
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
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
      <h2 className="text-base font-bold text-slate-900">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">{sub}</p>
      <div className="mt-3 text-sm font-semibold text-emerald-800">{children}</div>
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
  mapUrl,
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
  mapUrl: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div>
        {badge ? (
          <span className="inline-flex rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
            {badge}
          </span>
        ) : null}
        <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900">
          {heading}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>

        <h3 className="mt-6 text-sm font-bold text-slate-900">{addressHeading}</h3>
        <address className="mt-1.5 text-sm not-italic leading-relaxed text-slate-600">
          {address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>

        <h3 className="mt-6 text-sm font-bold text-slate-900">{travelHeading}</h3>
        <div className="mt-2">
          <TickList items={travel} />
        </div>

        <div className="mt-6">
          <Button href={mapUrl} tone="outline" size="md">
            Get Directions
          </Button>
        </div>
      </div>

      <HoursCard heading={hoursHeading} hours={hours} note={hoursNote} />
    </div>
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
        <div className="grid gap-4">
          <ContactCard title={contactPage.cards[0].title} sub={contactPage.cards[0].sub}>
            <a href={site.phoneHref} className="hover:underline">
              {site.phone}
            </a>
          </ContactCard>
          <ContactCard title={contactPage.cards[1].title} sub={contactPage.cards[1].sub}>
            <a href={`mailto:${site.email}`} className="hover:underline">
              {site.email}
            </a>
          </ContactCard>
          <ContactCard title={contactPage.cards[2].title} sub={contactPage.cards[2].sub}>
            <span className="block font-medium text-slate-700">
              South Kensington: 20 Old Brompton Road, SW7 3DL
            </span>
            <span className="mt-1 block font-medium text-slate-700">
              City of London: 5 Ave Maria Lane, EC4M 7AQ
            </span>
          </ContactCard>
        </div>
      </PageHero>

      <Section className="bg-white">
        <SectionHeading eyebrow={contactPage.visitEyebrow} title={contactPage.sk.heading} />
        <div className="mt-8">
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
            mapUrl={sk.mapUrl}
          />
        </div>
      </Section>

      <Section className="border-t border-slate-200 bg-slate-50">
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
          mapUrl={city.mapUrl}
        />
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
