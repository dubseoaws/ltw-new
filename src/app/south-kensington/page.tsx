import type { Metadata } from "next";
import LocationPage from "@/components/location-page";
import { bookUrl, clinics, southKen } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teeth Whitening South Kensington",
  description: southKen.lead,
};

export default function SouthKensingtonPage() {
  return (
    <LocationPage
      clinic={clinics.southKensington}
      bookHref={bookUrl}
      content={{
        ...southKen,
        crossClinic: { ...southKen.secondClinic, href: "/city-of-london" },
      }}
    />
  );
}
