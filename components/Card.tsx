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
        "rounded-[10px] bg-meteor p-5 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
