import type { Metadata } from "next";
import Link from "next/link";
import BookingFlow from "./booking-flow";
import { bookingCopy } from "@/lib/booking";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Your Appointment",
  description:
    "Book professional teeth whitening in London from £199. No deposit required, pay at the clinic. South Kensington & City of London.",
  robots: { index: false, follow: true },
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ clinic?: string }>;
}) {
  const { clinic } = await searchParams;
  const initialClinicId = clinic === "stpauls" ? "city-of-london" : undefined;

  return (
    <div className="bg-slate-50 py-8 lg:py-12">
      <div className="container-x max-w-4xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
          >
            ← Back to site
          </Link>
          <a
            href={site.phoneHref}
            className="text-sm font-bold text-emerald-700 transition hover:underline"
          >
            {site.phone}
          </a>
        </div>

        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs font-medium text-slate-500">
          <span className="text-amber-500">★★★★★</span>
          <span className="font-bold text-slate-800">{bookingCopy.rating}</span>
          <span>{bookingCopy.reviews}</span>
          <span aria-hidden="true">·</span>
          <span className="font-bold uppercase tracking-wider text-slate-700">
            {bookingCopy.regulated}
          </span>
        </p>

        <div className="mt-6">
          <BookingFlow initialClinicId={initialClinicId} />
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          <p>{bookingCopy.footerNote}</p>
          <p className="mt-1">{bookingCopy.footerAddresses}</p>
        </div>
      </div>
    </div>
  );
}
