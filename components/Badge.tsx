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
        "inline-flex items-center rounded-full bg-meteor px-3 py-1 text-xs font-semibold text-galaxy ring-1 ring-venus",
        className
      )}
    >
      {children}
    </span>
  );
}
