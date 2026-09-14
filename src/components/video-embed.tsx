"use client";

import Image from "next/image";
import { useState } from "react";

/** Facade: the YouTube iframe is only mounted after a click, so no third-party cookies load up front. */
export default function VideoEmbed({
  id,
  title,
  poster,
  posterAlt,
  sizes = "(max-width: 768px) 100vw, 42rem",
}: {
  id: string;
  title: string;
  poster: string;
  posterAlt: string;
  sizes?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl shadow-black/40 ring-1 ring-white/10">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1`}
          title={title}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          <Image
            src={poster}
            alt={posterAlt}
            fill
            sizes={sizes}
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-slate-900 sm:h-8 sm:w-8" aria-hidden="true">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
              </svg>
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-6">
            <span className="block font-display text-base font-bold leading-snug text-white sm:text-lg">
              {title}
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Watch the video
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
