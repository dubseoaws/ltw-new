/**
 * Booking flow data, transcribed from the live site teethwhitening.london/book.
 * Do not add invented content here.
 */

export type BookingService = {
  id: string;
  name: string;
  blurb: string;
  price: string;
  badge?: string;
};

export const bookingServices: BookingService[] = [
  {
    id: "home-teeth-whitening",
    name: "Home Teeth Whitening",
    blurb: "Professional home whitening kit with custom trays",
    price: "£199",
  },
  {
    id: "emergency-dentist",
    name: "Emergency Dentist",
    blurb: "Urgent dental care when you need it most",
    price: "£30",
    badge: "New patient offer",
  },
  {
    id: "cosmetic-consultation",
    name: "Cosmetic Consultation",
    blurb: "Discuss veneers, bonding & smile makeovers",
    price: "Free",
  },
  {
    id: "aligners-consultation",
    name: "Aligners Consultation",
    blurb: "Explore invisible braces options",
    price: "Free",
  },
  {
    id: "dental-hygienist",
    name: "Dental Hygienist",
    blurb: "Professional clean, scale & polish treatment",
    price: "£49",
    badge: "New patient offer",
  },
  {
    id: "dentist-appointment",
    name: "Dentist Appointment",
    blurb: "General dental check-up & examination",
    price: "£30",
    badge: "New patient offer",
  },
];

export type BookingClinic = {
  id: string;
  area: string;
  name: string;
  address: string;
  transport: string;
  /** Day index 0 = Sunday. Days absent from this map are closed. */
  openDays: Record<number, { open: number; close: number }>;
};

export const bookingClinics: BookingClinic[] = [
  {
    id: "south-kensington",
    area: "South Kensington",
    name: "South Kensington Medical & Dental",
    address: "20 Old Brompton Road, London SW7 3DL",
    transport: "2 min walk from South Kensington station",
    openDays: {
      1: { open: 9, close: 18 },
      2: { open: 9, close: 20 },
      3: { open: 9, close: 18 },
      4: { open: 9, close: 20 },
      5: { open: 8, close: 17 },
      6: { open: 10, close: 16 },
      0: { open: 10, close: 16 },
    },
  },
  {
    id: "city-of-london",
    area: "City of London",
    name: "St Paul's Medical & Dental",
    address: "5 Ave Maria Lane, London EC4M 7AQ",
    transport: "3 min walk from St Paul's station",
    openDays: {
      1: { open: 8, close: 20 },
      2: { open: 8, close: 20 },
      3: { open: 8, close: 20 },
      4: { open: 8, close: 20 },
      5: { open: 8, close: 20 },
    },
  },
];

export const bookingCopy = {
  steps: ["Clinic", "Date", "Time", "Details"],
  rating: "4.9",
  reviews: "300+ verified patient reviews",
  regulated: "CQC Registered",
  serviceHeading: "Select Your Service",
  serviceSub: "Choose the treatment that's right for you",
  serviceNote: "No deposit required · Pay at the clinic",
  clinicHeading: "Choose Your Clinic",
  clinicSub: "Both clinics offer the same team standards, treatments and pricing",
  dateHeading: "Choose Your Date",
  timeHeading: "Choose Your Time",
  detailsHeading: "Your Details",
  detailsSub: "Please provide your information to complete the booking",
  checkupTitle: "ℹ️ Check-Up May Be Required",
  checkupBody:
    "New patients may need a dental check-up (from £30) before whitening to confirm your teeth and gums are healthy. This is charged separately and is not included in the whitening price.",
  consent:
    "I consent to Teeth Whitening London storing my personal data to process this booking. View our",
  trust: ["No deposit required", "Pay at the clinic", "Confirmation sent by email"],
  footerNote: "© 2026 Teeth Whitening London.",
  footerAddresses:
    "South Kensington: 20 Old Brompton Road, London SW7 3DL · City of London: 5 Ave Maria Lane, London EC4M 7AQ",
};

const DAY_MS = 86_400_000;

function toISODate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}

/** Next `count` open days for a clinic, starting tomorrow. */
export function availableDates(clinic: BookingClinic, count = 28, from = new Date()) {
  const out: { iso: string; weekday: string; day: string; month: string }[] = [];
  const cursor = new Date(from.getFullYear(), from.getMonth(), from.getDate());

  while (out.length < count) {
    cursor.setTime(cursor.getTime() + DAY_MS);
    if (!clinic.openDays[cursor.getDay()]) continue;
    out.push({
      iso: toISODate(cursor),
      weekday: cursor.toLocaleDateString("en-GB", { weekday: "short" }),
      day: String(cursor.getDate()),
      month: cursor.toLocaleDateString("en-GB", { month: "short" }),
    });
  }
  return out;
}

/** Half-hour slots within the clinic's opening hours for that weekday. */
export function availableTimes(clinic: BookingClinic, iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  const hours = clinic.openDays[date.getDay()];
  if (!hours) return [];

  const slots: string[] = [];
  for (let m = hours.open * 60; m + 60 <= hours.close * 60; m += 30) {
    slots.push(`${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`);
  }
  return slots;
}

export function formatLongDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export type BookingPayload = {
  serviceId: string;
  clinicId: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  gender: string;
  phone: string;
  email: string;
  consent: boolean;
  /** Honeypot — must stay empty. */
  website?: string;
};
