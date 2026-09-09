import Link from "next/link";

type Props = {
  variant?: "light" | "dark";
  className?: string;
  compact?: boolean;
};

/** Brand mark: bright whitened tooth with gold sparkles */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="twl-tooth" x1="14" y1="10" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#CFF3EE" />
        </linearGradient>
        <linearGradient id="twl-badge" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0B132B" />
          <stop offset="1" stopColor="#0D5C57" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="url(#twl-badge)" />
      <path
        d="M22 11.2C19.7 11.2 18.6 9.8 16 9.8C12.4 9.8 10.2 12.6 10.2 16.6C10.2 20.5 11.2 23.4 12.3 26.5C13.1 28.8 13.7 31.7 14.3 33.4C14.8 34.8 15.4 35.6 16.4 35.6C17.7 35.6 18.2 34.3 18.5 32.6C18.9 30.4 19.9 28 22 28C24.1 28 25.1 30.4 25.5 32.6C25.8 34.3 26.3 35.6 27.6 35.6C28.6 35.6 29.2 34.8 29.7 33.4C30.3 31.7 30.9 28.8 31.7 26.5C32.8 23.4 33.8 20.5 33.8 16.6C33.8 12.6 31.6 9.8 28 9.8C25.4 9.8 24.3 11.2 22 11.2Z"
        fill="url(#twl-tooth)"
      />
      <path
        d="M15.6 14.2C16.6 12.9 18 12.3 19.6 12.4"
        fill="none"
        stroke="#0D9488"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M38.5 6.5C38.5 12 38.5 12 44 12C38.5 12 38.5 12 38.5 17.5C38.5 12 38.5 12 33 12C38.5 12 38.5 12 38.5 6.5Z"
        fill="#F0C64A"
      />
      <path
        d="M40.5 18C40.5 21.2 40.5 21.2 43.7 21.2C40.5 21.2 40.5 21.2 40.5 24.4C40.5 21.2 40.5 21.2 37.3 21.2C40.5 21.2 40.5 21.2 40.5 18Z"
        fill="#F0C64A"
        opacity="0.85"
      />
    </svg>
  );
}

export default function Logo({ variant = "dark", className = "", compact = false }: Props) {
  const primary = variant === "light" ? "text-white" : "text-slate-900";
  const secondary = variant === "light" ? "text-teal-400" : "text-teal-700";

  return (
    <Link
      href="/"
      aria-label="Teeth Whitening London — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className={compact ? "h-8 w-8 shrink-0" : "h-9.5 w-9.5 shrink-0"} />
      <span className="leading-none whitespace-nowrap">
        <span
          className={`block font-display text-[1.1rem] font-bold tracking-tight ${primary} sm:text-[1.2rem]`}
        >
          Teeth Whitening
        </span>
        <span
          className={`mt-0.5 block text-[0.56rem] font-bold uppercase tracking-[0.38em] ${secondary}`}
        >
          London
        </span>
      </span>
    </Link>
  );
}



