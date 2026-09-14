"use client";

import { useId, useState } from "react";

export type FaqItem = { q: string; a: string };

export default function Accordion({
  items,
  numbered = false,
}: {
  items: readonly FaqItem[];
  numbered?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const accordionId = useId();

  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`overflow-hidden transition-colors ${
              isOpen
                ? "bg-emerald-50/30"
                : "bg-white hover:bg-slate-50"
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`${accordionId}-${i}`}
                className="flex min-h-14 w-full items-center gap-3 px-4 py-5 text-left cursor-pointer transition-colors"
              >
                {numbered ? (
                  <span
                    className={`text-xs font-semibold tabular-nums ${
                      isOpen ? "text-emerald-700" : "text-slate-400"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                ) : null}
                <span className="flex-1 text-sm sm:text-base font-semibold text-slate-900 leading-snug">{item.q}</span>
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                    isOpen
                      ? "rotate-180 bg-emerald-50 text-emerald-700"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`${accordionId}-${i}`}
              aria-hidden={!isOpen}
              className={`grid transition-all duration-200 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[75ch] px-4 pb-6 text-sm leading-7 text-slate-600 font-normal">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


