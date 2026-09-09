import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "mint" | "emerald" | "ink" | "slate" | "gold" | "outline" | "ghost" | "champagne";
type Size = "sm" | "md" | "lg";

const tones: Record<Tone, string> = {
  mint: "bg-emerald-700 text-white hover:bg-emerald-600 shadow-2xs",
  emerald: "bg-emerald-700 text-white hover:bg-emerald-600 shadow-2xs",
  ink: "bg-slate-900 text-white hover:bg-slate-800 shadow-2xs",
  slate: "bg-slate-900 text-white hover:bg-slate-800 shadow-2xs",
  gold: "bg-emerald-700 text-white hover:bg-emerald-600 shadow-2xs",
  outline: "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-2xs",
  ghost: "border border-slate-700 bg-transparent text-white hover:bg-white/10",
  champagne: "bg-emerald-50 text-emerald-800 border border-emerald-200/60 hover:bg-emerald-100",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-xs font-semibold rounded-md",
  md: "px-4.5 py-2 text-xs font-semibold rounded-lg sm:text-sm",
  lg: "px-5 py-2.5 text-sm font-semibold rounded-lg",
};

type Props = {
  href: string;
  children: ReactNode;
  tone?: Tone;
  size?: Size;
  className?: string;
};

export default function Button({
  href,
  children,
  tone = "emerald",
  size = "md",
  className = "",
}: Props) {
  const cls = `inline-flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap transition-colors duration-150 ${tones[tone]} ${sizes[size]} ${className}`;
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (external) {
    return (
      <a href={href} className={cls} rel="noopener">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}



