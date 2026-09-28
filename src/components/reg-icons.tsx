/** Generic regulator marks — not the official GDC/CQC logos, which are trademarked. */

export function GdcIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M12 2.6 4.8 5.4v6c0 4.4 3 8.3 7.2 10 4.2-1.7 7.2-5.6 7.2-10v-6L12 2.6Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M12 2.6 4.8 5.4v6c0 4.4 3 8.3 7.2 10 4.2-1.7 7.2-5.6 7.2-10v-6L12 2.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m8.8 11.8 2.2 2.2 4.2-4.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CqcIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <circle cx="12" cy="9.8" r="6.4" fill="currentColor" opacity="0.12" />
      <circle cx="12" cy="9.8" r="6.4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m9.2 9.9 1.9 1.9 3.7-3.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 15.5 7.4 21l4.6-2.3 4.6 2.3-1.2-5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
