import { Mail, Linkedin, ExternalLink } from "react-feather";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 bg-galaxy text-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="text-base font-semibold">{SITE.shortName}</div>
            <div className="text-sm text-white/80">
              © {SITE.year} HEC Consulting Club. All rights reserved.
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a
              className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
              href={`mailto:${SITE.email}`}
            >
              <Mail size={16} />
              {SITE.email}
              <ExternalLink size={14} className="opacity-80" />
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Linkedin size={16} />
              LinkedIn
              <ExternalLink size={14} className="opacity-80" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
