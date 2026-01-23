import type { ReactNode } from "react";
import { clsx } from "clsx";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-xl bg-meteor p-5 shadow-sm ring-1 ring-venus",
        className
      )}
    >
      {children}
    </div>
  );
}
