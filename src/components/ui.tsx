import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-normal ${
        tone === "light"
          ? "text-slate-300"
          : "text-teal-800"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  sub,
  tone = "dark",
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  sub?: string;
  tone?: "dark" | "light";
  align?: "center" | "left";
}) {
  return (
    <div
      className={`flex flex-col gap-2.5 ${
        align === "center" ? "items-center text-center max-w-2xl mx-auto" : "items-start text-left max-w-2xl"
      }`}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-normal leading-tight ${
          tone === "light" ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
        {highlight ? <span className="text-teal-700"> {highlight}</span> : null}
      </h2>
      {sub ? (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            tone === "light" ? "text-slate-300" : "text-slate-600 font-normal"
          }`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-12 lg:py-20 relative ${className}`}>
      <div className="container-x relative">{children}</div>
    </section>
  );
}

export function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="m4.5 10.5 3.6 3.6L15.5 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TickList({
  items,
  tone = "dark",
}: {
  items: readonly string[];
  tone?: "dark" | "light";
}) {
  return (
    <ul className="grid gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span
            className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
              tone === "light"
                ? "bg-slate-800 text-teal-400 border border-slate-700"
                : "bg-teal-50 text-teal-700 border border-teal-200/80"
            }`}
          >
            <Check className="h-3 w-3" />
          </span>
          <span
            className={`text-sm leading-relaxed ${
              tone === "light" ? "text-slate-200" : "text-slate-700"
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}



