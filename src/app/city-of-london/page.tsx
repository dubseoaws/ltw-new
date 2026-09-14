import type { Metadata } from "next";
import LocationPage from "@/components/location-page";
import { bookCityUrl, cityOfLondon, clinics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teeth Whitening City of London",
  description: cityOfLondon.lead,
};

export default function CityOfLondonPage() {
  return (
    <LocationPage
      clinic={clinics.cityOfLondon}
      bookHref={bookCityUrl}
      heroMap
      content={{
        ...cityOfLondon,
        crossClinic: { ...cityOfLondon.otherClinic, href: "/south-kensington" },
      }}
    />
  );
}
