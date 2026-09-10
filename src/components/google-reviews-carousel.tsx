"use client";

import { useEffect, useRef, useState } from "react";
import { googleRating, googleReviews, type GoogleReview } from "@/lib/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={`h-4 w-4 ${i < rating ? "fill-current" : "fill-slate-200"}`} aria-hidden="true">
          <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.1 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ review }: { review: GoogleReview }) {
  const initial = review.initial ?? review.name.trim().charAt(0).toUpperCase();
  return (
    <span className="relative shrink-0">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold text-white ${
          review.color ?? "bg-teal-700"
        }`}
      >
        {initial}
      </span>
      <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-slate-200 bg-white text-[0.6rem] font-bold text-slate-700">
        G
      </span>
    </span>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="w-[280px] shrink-0 snap-start rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs sm:w-[300px]">
      <div className="flex items-center gap-3">
        <Avatar review={review} />
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 truncate text-sm font-bold text-slate-900">
            {review.name}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 fill-blue-500" aria-label="Verified">
              <path d="M12 2l2.2 2.3 3.2-.3.5 3.2 2.8 1.6-1.5 2.9 1.5 2.9-2.8 1.6-.5 3.2-3.2-.3L12 22l-2.2-2.3-3.2.3-.5-3.2L3.3 15l1.5-2.9-1.5-2.9 2.8-1.6.5-3.2 3.2.3L12 2zm-1 13.4l5-5-1.4-1.4-3.6 3.6-1.6-1.6L8 12.4l3 3z" />
            </svg>
          </p>
          <p className="text-xs text-slate-500">{review.timeAgo}</p>
        </div>
      </div>

      <div className="mt-3">
        <Stars rating={review.rating} />
      </div>

      <p className={`mt-3 text-sm leading-relaxed text-slate-700 ${expanded ? "" : "line-clamp-3"}`}>
        {review.text}
        {review.truncated ? "\u2026" : null}
      </p>

      {review.truncated ? (
        <a
          href={review.url ?? googleRating.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          Read more
        </a>
      ) : review.text.length > 110 ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 cursor-pointer text-sm font-medium text-blue-600 hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </li>
  );
}

export default function GoogleReviewsCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const sync = () => {
      const total = Math.max(1, Math.ceil(track.scrollWidth / track.clientWidth));
      setPages(total);
      setPage(Math.round(track.scrollLeft / track.clientWidth));
    };

    sync();
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const scrollToPage = (n: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: n * track.clientWidth, behavior: "smooth" });
  };

  if (!googleReviews.length) return null;

  return (
    <div className="relative mt-8">
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {googleReviews.map((r) => (
          <ReviewCard key={`${r.name}-${r.timeAgo}`} review={r} />
        ))}
      </ul>

      {pages > 1 ? (
        <>
          <button
            type="button"
            onClick={() => scrollToPage(Math.max(0, page - 1))}
            disabled={page === 0}
            aria-label="Previous reviews"
            className="absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white shadow-md transition hover:bg-slate-900 disabled:opacity-0 lg:flex"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollToPage(Math.min(pages - 1, page + 1))}
            disabled={page >= pages - 1}
            aria-label="More reviews"
            className="absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white shadow-md transition hover:bg-slate-900 disabled:opacity-0 lg:flex"
          >
            ›
          </button>

          <div className="mt-5 flex justify-center gap-2">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToPage(i)}
                aria-label={`Go to review page ${i + 1}`}
                className={`h-2 w-2 cursor-pointer rounded-full transition ${
                  i === page ? "bg-slate-800" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
