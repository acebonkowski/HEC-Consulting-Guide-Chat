import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata = {
  title: "Consulting Guide | HEC MBA Consulting Club",
  description: "Consulting Guide (linked only; not implemented in this PRD).",
};

export default function ConsultingGuidePage() {
  return (
    <Container className="py-14 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-galaxy sm:text-4xl">
        Consulting Guide
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-[#090814]">
        The PRD specifies that the Consulting Guide is linked from the public site,
        but not implemented here. This page is a placeholder route so the CTA works.
      </p>
      <div className="mt-6">
        <ButtonLink href="/" variant="secondary">
          Back to Home
        </ButtonLink>
      </div>
    </Container>
  );
}
