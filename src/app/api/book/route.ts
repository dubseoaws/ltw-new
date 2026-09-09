import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  availableTimes,
  bookingClinics,
  bookingServices,
  formatLongDate,
  type BookingPayload,
} from "@/lib/booking";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** Strips characters that could be used to inject extra email headers. */
function clean(value: unknown, max = 120) {
  return typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#64748b;white-space:nowrap">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;font-size:14px;color:#0f172a">${escapeHtml(value)}</td>
  </tr>`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.BOOKING_FROM_EMAIL;
  const to = process.env.BOOKING_TO_EMAIL ?? site.email;

  if (!apiKey || !from) {
    console.error("Booking email is not configured: set RESEND_API_KEY and BOOKING_FROM_EMAIL.");
    return NextResponse.json(
      { error: "Online booking is temporarily unavailable. Please call us to book." },
      { status: 503 },
    );
  }

  let body: Partial<BookingPayload>;
  try {
    body = (await request.json()) as Partial<BookingPayload>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept so bots don't learn they were caught.
  if (clean(body.website)) {
    return NextResponse.json({ reference: "TWL-000000" });
  }

  const service = bookingServices.find((s) => s.id === body.serviceId);
  const clinic = bookingClinics.find((c) => c.id === body.clinicId);
  const date = clean(body.date, 10);
  const time = clean(body.time, 5);

  if (!service || !clinic || !DATE_RE.test(date) || !TIME_RE.test(time)) {
    return NextResponse.json({ error: "Please choose a valid appointment slot." }, { status: 400 });
  }
  if (!availableTimes(clinic, date).includes(time)) {
    return NextResponse.json({ error: "That slot is no longer available." }, { status: 400 });
  }

  const firstName = clean(body.firstName, 60);
  const lastName = clean(body.lastName, 60);
  const phone = clean(body.phone, 30);
  const email = clean(body.email, 120);
  const gender = clean(body.gender, 10);
  const dobDay = clean(body.dobDay, 2);
  const dobMonth = clean(body.dobMonth, 3);
  const dobYear = clean(body.dobYear, 4);

  const dobValid =
    /^\d{1,2}$/.test(dobDay) &&
    MONTHS.includes(dobMonth) &&
    /^\d{4}$/.test(dobYear) &&
    Number(dobDay) >= 1 &&
    Number(dobDay) <= 31;

  if (
    !firstName ||
    !lastName ||
    !phone ||
    !EMAIL_RE.test(email) ||
    !["Male", "Female"].includes(gender) ||
    !dobValid ||
    body.consent !== true
  ) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  const reference = `TWL-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  const patient = `${firstName} ${lastName}`;
  const longDate = formatLongDate(date);

  const details = [
    ["Reference", reference],
    ["Service", `${service.name} — ${service.price}`],
    ["Clinic", `${clinic.name}, ${clinic.address}`],
    ["Date", longDate],
    ["Time", time],
    ["Patient", patient],
    ["Date of birth", `${dobDay} ${dobMonth} ${dobYear}`],
    ["Gender", gender],
    ["Mobile", phone],
    ["Email", email],
    ["Consent", "Given"],
  ] as const;

  const table = `<table style="border-collapse:collapse;width:100%;max-width:560px;border:1px solid #e2e8f0;border-radius:8px">
    ${details.map(([label, value]) => row(label, value)).join("")}
  </table>`;

  const resend = new Resend(apiKey);

  try {
    const clinicEmail = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New booking ${reference} — ${service.name}, ${clinic.area} (${longDate} ${time})`,
      html: `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#0f172a">
        <h2 style="margin:0 0 12px;font-size:18px">New booking request</h2>
        ${table}
      </div>`,
    });

    if (clinicEmail.error) throw new Error(clinicEmail.error.message);

    await resend.emails.send({
      from,
      to: [email],
      replyTo: to,
      subject: `Your booking with ${site.name} — ${longDate} at ${time}`,
      html: `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#0f172a">
        <h2 style="margin:0 0 12px;font-size:18px">Thanks, ${escapeHtml(firstName)} — we've got your request</h2>
        <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#475569">
          Our team will call you shortly to confirm the appointment below. No deposit is required &mdash; you pay at the clinic.
        </p>
        ${table}
        <p style="margin:16px 0 0;font-size:13px;line-height:1.6;color:#475569">
          Need to change something? Call us on ${escapeHtml(site.phone)} or reply to this email.
        </p>
      </div>`,
    });

    return NextResponse.json({ reference });
  } catch (error) {
    console.error("Failed to send booking email", error);
    return NextResponse.json(
      { error: "We couldn't send your booking. Please call us to book." },
      { status: 502 },
    );
  }
}
