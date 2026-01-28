import { clsx } from "clsx";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full bg-[#7096D1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFF9F0] ring-1 ring-venus",
        className
      )}
    >
      {children}
    </span>
  );
}
