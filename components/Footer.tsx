import { Mail } from "react-feather";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 bg-[#081F5C] text-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="text-base font-semibold">{SITE.shortName}</div>
            <div className="text-sm text-white/80">
              © {SITE.year} HEC Consulting Club. All rights reserved.
            </div>
          </div>

          <div className="flex items-center gap-3 sm:items-center">
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1] text-[#FFF9F0] hover:bg-[#334EAC]"
              href={`mailto:${SITE.email}`}
              aria-label="Email the consulting club"
            >
              <Mail size={18} stroke="#FFF9F0" />
            </a>
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1] text-[#FFF9F0] hover:bg-[#334EAC]"
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="#FFF9F0"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8.5H4.5V23H0.5V8.5zM8.5 8.5H12.3V10.4H12.35C12.9 9.4 14.2 8.3 16.3 8.3 20.1 8.3 21.5 10.7 21.5 15V23H17.5V15.7C17.5 13.9 17.5 11.6 15.1 11.6 12.7 11.6 12.3 13.5 12.3 15.6V23H8.5V8.5z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
