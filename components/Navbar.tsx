"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, BookOpen } from "react-feather";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const items = useMemo(() => NAV_ITEMS, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-venus bg-[#334EAC] backdrop-blur">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 rounded-md bg-meteor px-3 py-2 text-sm font-semibold text-galaxy"
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
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm font-medium text-white/90 hover:text-white"
            >
              {i.label}
            </a>
          ))}
          <ButtonLink
            href="/consulting-guide"
            variant="secondary"
            className="gap-2"
            ariaLabel="Open Consulting Guide"
          >
            Consulting Guide <BookOpen size={16} />
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-venus/30"
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
              {items.map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-venus/30 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {i.label}
                </a>
              ))}
              <ButtonLink
                href="/consulting-guide"
                variant="secondary"
                className="mt-2 w-fit gap-2"
                ariaLabel="Open Consulting Guide"
              >
                Consulting Guide <BookOpen size={16} />
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
