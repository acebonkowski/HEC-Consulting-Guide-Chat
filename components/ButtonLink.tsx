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
      "bg-planetary text-galaxy hover:bg-planetary/90 focus-visible:ring-2 focus-visible:ring-planetary",
    secondary:
      "bg-meteor text-galaxy ring-1 ring-venus hover:bg-sky focus-visible:ring-2 focus-visible:ring-planetary",
    ghost:
      "text-universe hover:bg-sky focus-visible:ring-2 focus-visible:ring-planetary",
  };

  const props = external
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <Link
      href={href}
      {...props}
      aria-label={ariaLabel}
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
