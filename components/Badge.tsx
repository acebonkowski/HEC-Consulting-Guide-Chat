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
        "inline-flex items-center gap-2 rounded-full bg-[#BAD6EB] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#081F5C] ring-1 ring-venus",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#081F5C]" aria-hidden="true" />
      {children}
    </span>
  );
}
