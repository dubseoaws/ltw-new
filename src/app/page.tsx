import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/accordion";
import BeforeAfterSlider from "@/components/before-after-slider";
import Button from "@/components/button";
import { CtaBand, FeatureGrid, TeamStrip } from "@/components/blocks";
import { Check, Eyebrow, Section, SectionHeading, TickList } from "@/components/ui";
import {
  blogPosts,
  bookUrl,
  heroStats,
  home,
  homeFaqs,
  homeFaqsUpdated,
  homeResults,
  homeTeam,
  img,
  journey,
  packageSteps,
  packageStepsNote,
  resultsDisclaimerLong,
  site,
  whyPoints,
} from "@/lib/site";

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ------------------------------------------------------------ HERO */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9]/50 to-[#FFFFFF] border-b border-slate-200/80 relative overflow-hidden py-12 lg:py-16">
        {/* Soft Ambient Light Glow */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-slate-900/5 blur-[100px]" />

        <div className="container-x relative grid items-center gap-10 lg:gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <Eyebrow>{home.eyebrow}</Eyebrow>

            <h1 className="mt-4 font-display text-3xl leading-[1.14] font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[3rem] xl:text-[3.4rem]">
              <span className="block">{home.h1a}</span>
              <span className="block text-emerald-800">{home.h1b}</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
              {home.heroLead}
            </p>
            <p className="mt-2 text-xs text-slate-500 font-medium">✦ {home.heroLeadNote}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={bookUrl} tone="emerald" size="md">
                Book Consultation
              </Button>
              <Button href={site.phoneHref} tone="outline" size="md">
                {site.phone}
              </Button>
            </div>

            {/* Location Quick Links */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                href="/south-kensington"
                className="group flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-2xs transition hover:border-slate-300 hover:shadow-xs"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                <span className="text-xs">
                  <span className="block font-semibold text-slate-900 group-hover:text-emerald-700">South Kensington</span>
                  <span className="text-slate-500">Next to South Ken Station</span>
                </span>
              </Link>
              <Link
                href="/city-of-london"
                className="group flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-2xs transition hover:border-slate-300 hover:shadow-xs"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                <span className="text-xs">
                  <span className="block font-semibold text-slate-900 group-hover:text-emerald-700">City of London</span>
                  <span className="text-slate-500">Ave Maria Lane, EC4</span>
                </span>
              </Link>
            </div>

            {/* Hero Stats */}
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-slate-200/80 pt-6 sm:grid-cols-4">
              {heroStats.map((s, i) => (
                <div key={s.label} className={i > 0 ? "sm:border-l sm:border-slate-200/80 sm:pl-5" : ""}>
                  <dt className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{s.value}</dt>
                  <dd className="mt-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-slate-500">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Big Hero Visual Showcase (Big Image + Before/After Slider + Price Badge) */}
          <div className="relative space-y-4">
            {/* BIG HERO CLINIC IMAGE */}
            <div className="relative aspect-16/9 sm:aspect-21/10 overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-white">
              <Image
                src={img.clinicAbout}
                alt="Teeth Whitening London flagship clinic in South Kensington"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/80 px-2.5 py-0.5 text-[0.7rem] font-bold tracking-wide uppercase backdrop-blur-sm">
                    ✦ Flagship London Clinic
                  </span>
                  <p className="mt-1 text-sm sm:text-base font-bold text-white">South Kensington &amp; St Paul&apos;s Clinics</p>
                </div>
                <span className="hidden sm:inline-flex rounded-lg bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/30">
                  GDC Registered
                </span>
              </div>
            </div>

            {/* Hero Video Showcase (Replaces Before/After Image) */}
            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr] items-stretch">
              <div className="relative aspect-16/9 overflow-hidden rounded-xl border border-slate-200/90 shadow-md bg-slate-950">
                <iframe
                  src="https://www.youtube.com/embed/BIUdsbvWGrY?autoplay=1&mute=1&loop=1&playlist=BIUdsbvWGrY&controls=1&rel=0"
                  title="Teeth Whitening London — Treatment Demonstration Video"
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Price Box */}
              <div className="flex flex-col justify-between rounded-xl bg-white p-4 shadow-md border border-slate-200/90">
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-wider text-emerald-800">
                    ★ {home.packageLabel}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-slate-600 font-normal">{home.packageFooter}</p>
                  <p className="mt-2 inline-flex items-center gap-1 text-[0.7rem] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    <Check className="h-3 w-3 text-emerald-700" />
                    Safe &amp; Dentist-Supervised
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {site.price}
                  </p>
                  <a
                    href={bookUrl}
                    rel="noopener"
                    className="inline-flex rounded-lg bg-emerald-700 px-3.5 py-1.5 text-xs font-bold text-white shadow-2xs transition hover:bg-emerald-800"
                  >
                    Book now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- CLINIC INTRO */}
      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-center">
          <SectionHeading
            eyebrow="Teeth Whitening London"
            title={home.clinicHeading}
            align="left"
          />
          <div className="space-y-4">
            {home.clinicBody.map((p) => (
              <p key={p.slice(0, 40)} className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/teeth-whitening-cost" tone="emerald" size="md">
                View Pricing
              </Button>
              <Button href="/dentists" tone="outline" size="md">
                Our Dentists
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- RESULTS GALLERY */}
      <Section className="bg-slate-50/70 border-y border-slate-200/80">
        <SectionHeading
          eyebrow={home.resultsEyebrow}
          title={home.resultsHeading}
          sub={home.resultsSub}
        />
        <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {homeResults.map((r) => (
            <figure key={r.before} className="group">
              <BeforeAfterSlider {...r} />
              <figcaption className="mt-3 flex items-center justify-between px-1">
                <span className="text-sm font-bold text-slate-900">{r.title}</span>
                <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                  {r.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-slate-500 font-normal">
          {resultsDisclaimerLong}
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="/smile-gallery" tone="slate" size="md">
            View More Results
          </Button>
        </div>
      </Section>

      {/* ------------------------------------------------------- WELCOME & CLINIC IMAGERY */}
      <Section className="bg-white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={home.welcomeEyebrow}
              title={home.welcomeHeading}
              align="left"
            />
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">{home.welcomeBody}</p>
            <div className="mt-6">
              <TickList items={home.welcomePoints} />
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
              <Image
                src={img.clinicAbout}
                alt="Our welcoming teeth whitening clinic in South Kensington, London"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-103"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-5 pt-12 text-white">
                <p className="text-base font-bold">
                  {home.clinicImageCaption.title}
                </p>
                <p className="mt-0.5 text-xs text-slate-300 font-normal">{home.clinicImageCaption.sub}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
              <Image
                src={img.clinicTeam}
                alt="Friendly team at our London teeth whitening clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-103"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-5 pt-12 text-white">
                <p className="text-base font-bold">{home.whyImageCaption}</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow={home.approachEyebrow}
              title={home.approachHeading}
              align="left"
            />
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">{home.approachBody}</p>
            <div className="mt-6">
              <TickList items={home.approachPoints} />
            </div>
            <div className="mt-6">
              <Button href={bookUrl} tone="emerald" size="md">
                Book a Consultation →
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------- WHAT INCLUDED STEPS */}
      <Section className="bg-slate-50/70 border-y border-slate-200/80">
        <SectionHeading
          eyebrow="What's included"
          title={home.includedHeading}
          sub={home.includedSub}
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {packageSteps.map((step) => (
            <article
              key={step.n}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs relative"
            >
              {step.badge ? (
                <span className="absolute top-4 right-4 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200/80">
                  {step.badge}
                </span>
              ) : null}
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 font-bold text-white text-sm">
                {step.n}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
              <div className="mt-4">
                <TickList items={step.items} />
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-slate-500 font-normal">
          {packageStepsNote}
        </p>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-2xs">
          <h3 className="text-xl font-bold text-slate-900">
            {home.suitabilityHeading}
          </h3>
          <p className="mt-3 max-w-4xl text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
            {home.suitabilityBody}
          </p>
        </div>
      </Section>

      {/* ----------------------------------------------------- WHY CHOOSE US */}
      <Section className="bg-white">
        <SectionHeading eyebrow={home.whyEyebrow} title={home.whyHeading} sub={home.whySub} />
        <FeatureGrid items={whyPoints} />
      </Section>

      {/* -------------------------------------------------------- JOURNEY TIMELINE */}
      <section className="bg-slate-900 py-12 lg:py-16 text-white relative">
        <div className="container-x relative">
          <SectionHeading
            eyebrow={home.journeyEyebrow}
            title={home.journeyHeading}
            sub={home.journeySub}
            tone="light"
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((s) => (
              <li key={s.n} className="rounded-xl border border-slate-800 bg-slate-800/50 p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/20 font-bold text-emerald-400 text-sm border border-emerald-500/30">
                  {s.n}
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  {s.when}
                </p>
                <h3 className="mt-1 text-base font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 font-normal">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex justify-center">
            <Button href={bookUrl} tone="emerald" size="md">
              Start Your Journey →
            </Button>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- CLINICIANS / TEAM */}
      <TeamStrip members={homeTeam} heading={home.teamHeading} eyebrow="Our clinicians" />

      {/* ------------------------------------------------------- CTA BAND */}
      <CtaBand
        heading={home.ctaHeading}
        sub={home.ctaSub}
        note={home.ctaPoints.map((p) => `✓ ${p}`).join("   ")}
      />

      {/* ----------------------------------------------------------- ARTICLES & BLOG */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow={home.blogEyebrow}
          title={home.blogHeading}
          sub={home.blogSub}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              rel="noopener"
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
            >
              <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 font-normal">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Read article →
              </span>
            </a>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/blog" tone="outline" size="md">
            View All Articles
          </Button>
        </div>
      </Section>

      {/* ----------------------------------------------------------- FAQS */}
      <Section className="bg-slate-50/70 border-t border-slate-200/80">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="FAQs"
              title="Teeth Whitening London — Frequently Asked Questions"
              align="left"
            />
            <p className="mt-4 text-xs text-slate-500 font-medium">✦ {homeFaqsUpdated}</p>
            <div className="mt-6">
              <Button href="/faqs" tone="outline" size="md">
                See all FAQs
              </Button>
            </div>
          </div>
          <Accordion items={homeFaqs} />
        </div>
      </Section>
    </>
  );
}

