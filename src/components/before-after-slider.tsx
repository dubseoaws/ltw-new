"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  aspect?: string;
  compact?: boolean;
};

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  priority = false,
  className = "rounded-xl",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px",
  aspect = "aspect-4/3",
  compact = false,
}: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      isDragging.current = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    e.preventDefault();
  };

  return (
    <div
      ref={ref}
      role="slider"
      tabIndex={0}
      aria-label="Before and after comparison. Use the arrow keys to reveal more of each photo."
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-valuetext={`${Math.round(pos)}% before, ${100 - Math.round(pos)}% after`}
      className={`group relative ${aspect} w-full touch-none overflow-hidden bg-slate-950 select-none border border-slate-200 shadow-2xs cursor-ew-resize focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
    >
      {/* After image (background) */}
      <Image
        src={after}
        alt={afterAlt}
        fill
        sizes={sizes}
        className="object-contain pointer-events-none select-none"
        priority={priority}
      />

      {/* Before image (clipped foreground) */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes={sizes}
          className="object-contain pointer-events-none select-none"
          priority={priority}
        />
      </div>

      {/* Floating Badges */}
      <span
        className={`pointer-events-none absolute rounded-md bg-slate-900/85 font-bold uppercase tracking-wider text-white backdrop-blur-xs shadow-xs z-10 ${
          compact ? "left-2 top-2 px-1.5 py-0.5 text-[0.55rem]" : "left-3 top-3 px-2.5 py-1 text-[0.62rem]"
        }`}
      >
        Before
      </span>
      <span
        className={`pointer-events-none absolute rounded-md bg-emerald-700/90 font-bold uppercase tracking-wider text-white backdrop-blur-xs shadow-xs z-10 ${
          compact ? "right-2 top-2 px-1.5 py-0.5 text-[0.55rem]" : "right-3 top-3 px-2.5 py-1 text-[0.62rem]"
        }`}
      >
        After
      </span>

      {/* Drag handle & divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] z-20"
        style={{ left: `${pos}%` }}
      >
        <div
          className={`absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-800 shadow-md border border-slate-200 ${
            compact ? "h-6 w-6" : "h-8 w-8"
          }`}
        >
          <svg viewBox="0 0 24 24" className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} fill="none" aria-hidden="true">
            <path
              d="M9.5 7 5 12l4.5 5M14.5 7l4.5 5-4.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}


