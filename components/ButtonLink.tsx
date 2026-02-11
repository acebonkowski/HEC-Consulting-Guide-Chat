import Link from "next/link";
import type { ReactNode } from "react";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "ghost";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}) {
  const styles: Record<Variant, string> = {
    primary:
      "bg-[#334EAC] text-[#FCFDFF] hover:bg-[#081F5C] focus-visible:ring-2 focus-visible:ring-[#334EAC]",
    secondary:
      "bg-[#BAD6EB] text-galaxy hover:bg-[#7096D1] hover:text-[#FCFDFF] focus-visible:ring-2 focus-visible:ring-[#081F5C]",
    ghost:
      "text-universe hover:bg-sky focus-visible:ring-2 focus-visible:ring-planetary",
  };

  const classNames = clsx(
    "inline-flex items-center justify-center rounded-[5px] px-4 py-2 text-sm font-semibold transition-colors",
    styles[variant],
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={ariaLabel}
        className={classNames}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classNames}>
      {children}
    </Link>
  );
}
