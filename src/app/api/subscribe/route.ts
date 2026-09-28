import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.NEWSLETTER_FROM_EMAIL ?? process.env.BOOKING_FROM_EMAIL;
  const to = process.env.NEWSLETTER_TO_EMAIL ?? process.env.BOOKING_TO_EMAIL ?? site.email;

  if (!apiKey || !from) {
    console.error("Newsletter email is not configured: set RESEND_API_KEY and BOOKING_FROM_EMAIL.");
    return NextResponse.json(
      { error: "Sign-up is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  let body: { email?: unknown; website?: unknown };
  try {
    body = (await request.json()) as { email?: unknown; website?: unknown };
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept so bots don't learn they were caught.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const email = clean(body.email);
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const sent = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New newsletter sign-up — ${email}`,
      html: `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#0f172a">
        <h2 style="margin:0 0 12px;font-size:18px">New newsletter sign-up</h2>
        <p style="margin:0;font-size:14px">${escapeHtml(email)}</p>
      </div>`,
    });

    if (sent.error) throw new Error(sent.error.message);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send newsletter sign-up", error);
    return NextResponse.json(
      { error: "We couldn't complete your sign-up. Please try again later." },
      { status: 502 },
    );
  }
}
