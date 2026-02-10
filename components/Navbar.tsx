"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, ChevronDown } from "react-feather";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { Container } from "@/components/Container";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const showGuideNav = pathname !== "/";
  const skipHref = showGuideNav ? "#start" : "#home";

  const items = useMemo(
    () =>
      showGuideNav
        ? [
            { label: "Home", href: "/consulting-guide#start" },
            { label: "Process", href: "/consulting-guide#process" },
            {
              label: "Case Interview",
              href: "/consulting-guide#case-interview",
              children: [
                { label: "Overview", href: "/consulting-guide#case-interview" },
                { label: "Framework Overview", href: "/frameworks" },
                { label: "Industry Overview", href: "/industry-breakdown" },
                { label: "Market Sizing Numbers", href: "/market-sizing" },
              ],
            },
            {
              label: "Fit Interview",
              href: "/consulting-guide#fit-interview",
              children: [
                { label: "Overview", href: "/consulting-guide#fit-interview" },
                {
                  label: "Resume & Cover Letter Guidance",
                  href: "/resume-cover-letter-tips",
                },
              ],
            },
            { label: "Key Resources", href: "/consulting-guide#key-resource" },
          ]
        : NAV_ITEMS,
    [showGuideNav]
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-venus bg-[#081F5C] backdrop-blur">
      <a
        href={skipHref}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 rounded-[5px] bg-meteor px-3 py-2 text-sm font-semibold text-galaxy"
      >
        Skip to content
      </a>

      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-semibold tracking-tight text-white"
            aria-label={`${SITE.shortName} home`}
            onClick={() => setOpen(false)}
          >
            {SITE.shortName}
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {items.map((item) =>
            "children" in item ? (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible">
                  <div className="min-w-[220px] rounded-[8px] border border-venus bg-[#081F5C] p-2 shadow-lg">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block rounded-[6px] px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-white"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-[5px] p-2 text-white hover:bg-venus/30"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open ? (
        <div className="md:hidden border-t border-venus bg-galaxy">
          <Container className="py-4">
            <div className="flex flex-col gap-3">
              {items.map((item) =>
                "children" in item ? (
                  <div key={item.label} className="rounded-[5px] px-3 py-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                      {item.label}
                      <ChevronDown size={14} />
                    </div>
                    <div className="mt-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="rounded-[5px] px-3 py-2 text-sm text-white/80 hover:bg-venus/30 hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-[5px] px-3 py-2 text-sm font-medium text-white/90 hover:bg-venus/30 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
