"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  availableDates,
  availableTimes,
  bookingClinics,
  bookingCopy,
  bookingServices,
  formatLongDate,
  type BookingClinic,
  type BookingService,
} from "@/lib/booking";
import { site } from "@/lib/site";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 100 }, (_, i) => String(CURRENT_YEAR - i));
const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1));

function StepDots({ step }: { step: number }) {
  return (
    <ol className="flex items-center justify-center gap-2" aria-label="Booking progress">
      {bookingCopy.steps.map((label, i) => {
        const n = i + 1;
        const done = n < step;
        const active = n === step;
        return (
          <li key={label} className="flex items-center gap-2">
            <span
              aria-current={active ? "step" : undefined}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
                done
                  ? "bg-emerald-700 text-white"
                  : active
                    ? "bg-slate-900 text-white ring-4 ring-slate-900/10"
                    : "bg-slate-100 text-slate-400 border border-slate-200"
              }`}
            >
              <span className="sr-only">{label}</span>
              {done ? "✓" : n}
            </span>
            {n < bookingCopy.steps.length ? (
              <span className={`h-px w-4 sm:w-8 ${done ? "bg-emerald-700" : "bg-slate-200"}`} />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

function StepHeader({ step, title, children }: { step: number; title: string; children?: React.ReactNode }) {
  return (
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
        Step {step} of {bookingCopy.steps.length}
      </p>
      <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {children ? <p className="mt-1.5 text-sm text-slate-600">{children}</p> : null}
    </div>
  );
}

export default function BookingFlow({ initialClinicId }: { initialClinicId?: string }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<BookingService | null>(null);
  const [clinic, setClinic] = useState<BookingClinic | null>(
    bookingClinics.find((c) => c.id === initialClinicId) ?? null,
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    gender: "",
    phone: "",
    email: "",
    consent: false,
    website: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  const dates = useMemo(() => (clinic ? availableDates(clinic) : []), [clinic]);
  const times = useMemo(
    () => (clinic && date ? availableTimes(clinic, date) : []),
    [clinic, date],
  );

  const set = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const detailsValid =
    form.firstName.trim() !== "" &&
    form.lastName.trim() !== "" &&
    form.dobDay !== "" &&
    form.dobMonth !== "" &&
    form.dobYear !== "" &&
    form.gender !== "" &&
    form.phone.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
    form.consent;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!service || !clinic || !detailsValid || status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          serviceId: service.id,
          clinicId: clinic.id,
          date,
          time,
        }),
      });

      const data = (await res.json()) as { reference?: string; error?: string };
      if (!res.ok) throw new Error(data.error ?? "We couldn't send your booking.");

      setReference(data.reference ?? "");
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us instead.");
      setStatus("idle");
    }
  }

  /* -------------------------------------------------------- confirmation */
  if (status === "done" && service && clinic) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl text-emerald-700 border border-emerald-200">
          ✓
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Booking Request Confirmed
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
          Thank you, {form.firstName}. We&apos;ve emailed a confirmation to{" "}
          <strong className="text-slate-800">{form.email}</strong> and our team will be in touch to
          finalise your appointment.
        </p>
        {reference ? (
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Reference {reference}
          </p>
        ) : null}

        <dl className="mx-auto mt-6 max-w-sm divide-y divide-slate-100 rounded-lg border border-slate-200 text-left">
          <Summary label="Service" value={service.name} />
          <Summary label="Clinic" value={clinic.name} sub={clinic.address} />
          <Summary label="Date" value={formatLongDate(date)} />
          <Summary label="Time" value={time} />
          <Summary label="Price" value={service.price} sub="Pay at clinic" />
        </dl>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Back to site
          </Link>
          <a
            href={site.phoneHref}
            className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
          >
            {site.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <StepDots step={step} />

      {step > 1 ? (
        <button
          type="button"
          onClick={() => setStep((s) => s - 1)}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          ← Back
        </button>
      ) : null}

      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        {/* ---------------------------------------------------- 1 service */}
        {step === 1 ? (
          <>
            <StepHeader step={1} title={bookingCopy.serviceHeading}>
              {bookingCopy.serviceSub}
            </StepHeader>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {bookingServices.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setService(s);
                    setStep(2);
                  }}
                  className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 text-left transition hover:border-emerald-600 hover:bg-emerald-50/40"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-slate-900">{s.name}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-600">
                      {s.blurb}
                    </span>
                  </span>
                  <span className="shrink-0 text-right">
                    {s.badge ? (
                      <span className="block text-[0.6rem] font-bold uppercase tracking-wider text-emerald-700">
                        {s.badge}
                      </span>
                    ) : null}
                    <span className="block text-base font-bold text-slate-900">{s.price}</span>
                  </span>
                  <span className="shrink-0 text-slate-300 transition group-hover:text-emerald-600">
                    →
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-5 text-center text-xs font-medium text-slate-500">
              {bookingCopy.serviceNote}
            </p>
          </>
        ) : null}

        {/* ----------------------------------------------------- 2 clinic */}
        {step === 2 ? (
          <>
            <StepHeader step={2} title={bookingCopy.clinicHeading}>
              {bookingCopy.clinicSub}
            </StepHeader>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {bookingClinics.map((c) => {
                const next = availableDates(c, 1)[0];
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setClinic(c);
                      setDate("");
                      setTime("");
                      setStep(3);
                    }}
                    className="group flex flex-col rounded-lg border border-slate-200 bg-white p-5 text-left transition hover:border-emerald-600 hover:bg-emerald-50/40"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      {c.area}
                    </span>
                    <span className="mt-1 text-base font-bold text-slate-900">{c.name}</span>
                    <span className="mt-2 text-xs leading-relaxed text-slate-600">📍 {c.address}</span>
                    <span className="mt-1 text-xs leading-relaxed text-slate-600">
                      🚇 {c.transport}
                    </span>
                    <span className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                      <span className="text-xs text-slate-500">
                        <span className="block font-semibold text-slate-400">Next available</span>
                        {next.weekday} {next.day} {next.month}
                      </span>
                      <span className="text-xs font-bold text-emerald-700">Select Clinic →</span>
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-5 text-center text-xs text-slate-500">
              Prefer to book by phone? Call{" "}
              <a href={site.phoneHref} className="font-bold text-emerald-700 hover:underline">
                {site.phone}
              </a>
            </p>
          </>
        ) : null}

        {/* ------------------------------------------------------- 3 date */}
        {step === 3 && clinic && service ? (
          <>
            <StepHeader step={3} title={bookingCopy.dateHeading}>
              <>
                Select your preferred appointment date for{" "}
                <strong className="text-slate-800">{service.name}</strong> at{" "}
                <strong className="text-slate-800">{clinic.area}</strong>
              </>
            </StepHeader>
            <p className="mt-4 rounded-md bg-emerald-50 border border-emerald-200 px-4 py-2.5 text-center text-xs font-semibold text-emerald-800">
              Next available: {dates[0].weekday} {dates[0].day} {dates[0].month}
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2.5 sm:grid-cols-5 lg:grid-cols-7">
              {dates.map((d, i) => (
                <button
                  key={d.iso}
                  type="button"
                  onClick={() => {
                    setDate(d.iso);
                    setTime("");
                    setStep(4);
                  }}
                  className="rounded-lg border border-slate-200 bg-white px-2 py-3 text-center transition hover:border-emerald-600 hover:bg-emerald-50/40"
                >
                  {i === 0 ? (
                    <span className="block text-[0.55rem] font-bold uppercase tracking-wider text-emerald-700">
                      Next available
                    </span>
                  ) : null}
                  <span className="block text-[0.65rem] font-semibold uppercase text-slate-500">
                    {d.weekday}
                  </span>
                  <span className="block text-lg font-bold text-slate-900">{d.day}</span>
                  <span className="block text-[0.65rem] font-semibold uppercase text-slate-500">
                    {d.month}
                  </span>
                </button>
              ))}
            </div>
          </>
        ) : null}

        {/* ------------------------------------------------------- 4 time */}
        {step === 4 && date ? (
          <>
            <StepHeader step={4} title={bookingCopy.timeHeading}>
              <>
                Select your preferred time on{" "}
                <strong className="text-slate-800">{formatLongDate(date)}</strong>
              </>
            </StepHeader>
            <div className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-5 lg:grid-cols-6">
              {times.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setTime(t);
                    setStep(5);
                  }}
                  className="rounded-lg border border-slate-200 bg-white py-2.5 text-sm font-bold text-slate-800 transition hover:border-emerald-600 hover:bg-emerald-50/40"
                >
                  {t}
                </button>
              ))}
            </div>
          </>
        ) : null}

        {/* ---------------------------------------------------- 5 details */}
        {step === 5 && service && clinic ? (
          <>
            <StepHeader step={5} title={bookingCopy.detailsHeading}>
              {bookingCopy.detailsSub}
            </StepHeader>

            <div className="mt-5 rounded-md border border-amber-200 bg-amber-50 px-4 py-3">
              <p className="text-xs font-bold text-amber-900">{bookingCopy.checkupTitle}</p>
              <p className="mt-1 text-xs leading-relaxed text-amber-900/90">
                {bookingCopy.checkupBody}
              </p>
            </div>

            <dl className="mt-5 divide-y divide-slate-100 rounded-lg border border-slate-200">
              <Summary label="Service" value={service.name} />
              <Summary label="Clinic" value={clinic.name} sub={clinic.address} />
              <Summary label="Date" value={formatLongDate(date)} />
              <Summary label="Time" value={time} />
              <Summary label="Price" value={service.price} sub="Pay at clinic" />
            </dl>

            <form onSubmit={submit} className="mt-6 grid gap-4" noValidate>
              <label className="sr-only" htmlFor="website">
                Website
              </label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                value={form.website}
                onChange={(e) => set("website", e.target.value)}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First Name" htmlFor="firstName">
                  <input
                    id="firstName"
                    required
                    autoComplete="given-name"
                    placeholder="John"
                    className={inputClass}
                    value={form.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                  />
                </Field>
                <Field label="Last Name" htmlFor="lastName">
                  <input
                    id="lastName"
                    required
                    autoComplete="family-name"
                    placeholder="Smith"
                    className={inputClass}
                    value={form.lastName}
                    onChange={(e) => set("lastName", e.target.value)}
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <fieldset>
                  <legend className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Date of Birth <span className="text-rose-600">*</span>
                  </legend>
                  <div className="mt-1.5 grid grid-cols-3 gap-2">
                    <select
                      aria-label="Day"
                      required
                      className={inputClass}
                      value={form.dobDay}
                      onChange={(e) => set("dobDay", e.target.value)}
                    >
                      <option value="" disabled>
                        Day
                      </option>
                      {DAYS.map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                    <select
                      aria-label="Month"
                      required
                      className={inputClass}
                      value={form.dobMonth}
                      onChange={(e) => set("dobMonth", e.target.value)}
                    >
                      <option value="" disabled>
                        Month
                      </option>
                      {MONTHS.map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                    <select
                      aria-label="Year"
                      required
                      className={inputClass}
                      value={form.dobYear}
                      onChange={(e) => set("dobYear", e.target.value)}
                    >
                      <option value="" disabled>
                        Year
                      </option>
                      {YEARS.map((y) => (
                        <option key={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Gender <span className="text-rose-600">*</span>
                  </legend>
                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    {["Male", "Female"].map((g) => (
                      <label
                        key={g}
                        className={`flex cursor-pointer items-center justify-center gap-2 rounded-md border px-3 py-2.5 text-sm font-semibold transition ${
                          form.gender === g
                            ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                            : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          className="sr-only"
                          checked={form.gender === g}
                          onChange={() => set("gender", g)}
                        />
                        {g}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Mobile Number" htmlFor="phone">
                  <input
                    id="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="07123 456789"
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                </Field>
                <Field label="Email Address" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="john@example.com"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                </Field>
              </div>

              <label className="flex cursor-pointer items-start gap-2.5 rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 shrink-0 accent-emerald-700"
                  checked={form.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                />
                <span className="text-xs leading-relaxed text-slate-700">
                  {bookingCopy.consent}{" "}
                  <Link href="/privacy" className="font-semibold text-emerald-700 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {error ? (
                <p role="alert" className="rounded-md bg-rose-50 border border-rose-200 px-4 py-3 text-xs font-semibold text-rose-800">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={!detailsValid || status === "sending"}
                className="w-full rounded-md bg-emerald-700 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {status === "sending" ? "Sending…" : "Confirm Booking"}
              </button>

              <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
                {bookingCopy.trust.map((t) => (
                  <li key={t}>✓ {t}</li>
                ))}
              </ul>
            </form>
          </>
        ) : null}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-xs font-bold uppercase tracking-wider text-slate-600"
      >
        {label} <span className="text-rose-600">*</span>
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function Summary({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="flex items-start justify-between gap-4 px-4 py-3">
      <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</dt>
      <dd className="text-right text-sm font-semibold text-slate-900">
        {value}
        {sub ? <span className="mt-0.5 block text-xs font-normal text-slate-500">{sub}</span> : null}
      </dd>
    </div>
  );
}
