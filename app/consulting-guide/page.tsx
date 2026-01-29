import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clipboard,
  MessageCircle,
  Users,
} from "react-feather";
import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Consulting Guide | HEC MBA Consulting Club",
  description:
    "A complete guide to consulting applications, case interviews, and fit interview preparation.",
};

const CASE_STEPS = [
  {
    title: "Case Opening & Clarifying Questions",
    goal:
      "Fully understand the problem and confirm alignment with the interviewer before structuring.",
    bestPractices: [
      "Reformulate the case in your own words to confirm alignment.",
      "Clarify the objective: profit growth, market share, ROI, or another success measure.",
      "Use ROLSPCD for clarity: Reformulate, Objective, Location, Strategy/Time, Product, Competition, Distribution.",
    ],
    tips: [
      "Ask clarifying questions that help your framework, not data prematurely.",
      "Show structured communication and curiosity.",
    ],
  },
  {
    title: "Structuring the Problem",
    goal:
      "Present a MECE structure in about 90 seconds that fits the client situation.",
    bestPractices: [
      "Use familiar frameworks as inspiration, but tailor to the case.",
      "Announce structure clearly: market attractiveness, competitive fit, financial feasibility.",
    ],
    tips: [
      "Start with high-level buckets before drilling down.",
      "Communicate visually while you speak.",
    ],
  },
  {
    title: "Case Math",
    goal: "Solve operational math, market sizing, and valuation cleanly.",
    bestPractices: [
      "Clarify numbers before calculating.",
      "Walk through your setup aloud and think out loud.",
      "Sense-check results and link back to the case.",
    ],
    tips: ["Round smartly and keep arithmetic concise."],
  },
  {
    title: "Brainstorming",
    goal: "Generate ideas quickly with structure and relevance.",
    bestPractices: [
      "Take 15–20 seconds to structure.",
      "Aim for 5–6 ideas across 2–3 MECE buckets.",
      "Present ideas crisply.",
    ],
    tips: ["Always link ideas back to feasibility and the objective."],
  },
  {
    title: "Exhibit Analysis",
    goal: "Extract insights from charts, tables, or graphs.",
    bestPractices: [
      "Describe the exhibit briefly.",
      "Highlight one key insight.",
      "Analyze causes or implications and tie back to the question.",
    ],
    tips: ["Do not narrate the chart; interpret it."],
  },
  {
    title: "Market Sizing",
    goal: "Estimate market size with a clear, testable approach.",
    bestPractices: [
      "Clarify what you are sizing and set up the formula first.",
      "Check assumptions as you go and segment logically.",
      "Test sensitivity at the end.",
    ],
  },
  {
    title: "Case Closing",
    goal: "Deliver a confident, structured recommendation.",
    bestPractices: [
      "Summarize analysis and state your recommendation directly.",
      "Support with rationale, add one risk & mitigation, and outline next steps.",
    ],
    tips: ["Sound confident, but stay flexible to feedback."],
  },
] as const;

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      <Badge>{kicker}</Badge>
      <div className="mt-3">
        <h2 className="text-2xl font-semibold tracking-tight text-galaxy sm:text-3xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="mt-5 max-w-3xl text-sm text-[#090814] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="text-sm text-[#334EAC] underline underline-offset-4 hover:text-[#081F5C]"
    >
      {children}
    </a>
  );
}

export default function ConsultingGuidePage() {
  return (
    <div id="start">
      <section className="bg-milky-way">
    <Container className="py-14 sm:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <Badge>Consulting Guide</Badge>
              <h1 className="text-3xl font-semibold tracking-tight text-galaxy sm:text-5xl">
                Everything You Need to Prep
      </h1>
              <p className="text-base text-[#090814]">
                A practical guide to consulting applications, interviews, and firm
                expectations — designed to help you prepare efficiently and land the
                offer.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="#process" variant="primary" className="h-10 gap-2">
                  Start the Process <ArrowRight size={16} />
                </ButtonLink>
                <ButtonLink href="#case-interview" variant="secondary" className="h-10 gap-2">
                  Case Interview <BookOpen size={16} />
                </ButtonLink>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[10px] bg-sky blur-2xl" />
              <div className="relative overflow-hidden rounded-[10px] bg-meteor p-6">
                <Image
                  src="/header-illustration.svg"
                  alt="Consulting preparation illustration"
                  width={520}
                  height={320}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="bg-sky/40 border-b border-venus">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            kicker="Process"
            title="Understand the Application Journey"
            description="Follow the step-by-step recruiting flow, from application to offer."
          />

          <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Card id="process-apply" className="flex h-full flex-col bg-meteor">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#081F5C]">
                01
              </div>
              <div className="mt-2 text-xl font-bold text-galaxy">Submit Application</div>
              <div className="mt-4 text-sm text-[#090814]">
                <div className="font-semibold">Required materials</div>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>Resume</li>
                  <li>Cover letter (recommended)</li>
                  <li>Transcripts (undergraduate, graduate, sometimes high school)</li>
                  <li>Standardized test scores (e.g., GMAT, often optional)</li>
                </ul>
                <div className="mt-4 font-semibold">Best practice</div>
                <p className="mt-2">
                  Apply with a meaningful referral through a separate referral link whenever possible.
                </p>
              </div>
            </Card>

            <Card id="process-assessment" className="flex h-full flex-col bg-meteor">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#081F5C]">
                02
              </div>
              <div className="mt-2 text-xl font-bold text-galaxy">Solve Assessment</div>
              <p className="mt-2 text-sm text-[#090814]">
                You will often receive an online assessment. The format varies by company and region.
              </p>
              <div className="mt-4 space-y-4 text-sm text-[#090814]">
                <div className="space-y-2">
                  <div className="font-semibold">McKinsey – Solve</div>
                  <InlineLink href="https://www.mckinsey.com/careers/mckinsey-digital-assessment">
                    mckinsey.com/careers/mckinsey-digital-assessment
                  </InlineLink>
                  <InlineLink href="https://www.casebasix.com/pages/mckinsey-problem-solving-game-solve-full-guide">
                    CaseBasix: Solve guide
                  </InlineLink>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold">Bain – SOVA | Test Gorilla</div>
                  <InlineLink href="https://www.casebasix.com/pages/bain-aptitude-test-sova-ultimate-guide">
                    CaseBasix: SOVA guide
                  </InlineLink>
                  <InlineLink href="https://www.casebasix.com/pages/bain-testgorilla">
                    CaseBasix: Test Gorilla guide
                  </InlineLink>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold">BCG – Casey Bot</div>
                  <InlineLink href="https://www.casebasix.com/pages/bcg-online-case-casey-chatbot-guide">
                    CaseBasix: Casey guide
                  </InlineLink>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold">Other companies</div>
                  <p>
                    Many use aptitude tests for quantitative, logical, and verbal skills.
                  </p>
                  <InlineLink href="https://www.practiceaptitudetests.com/">
                    practiceaptitudetests.com
                  </InlineLink>
                </div>
              </div>
            </Card>

            <Card id="process-interview" className="flex h-full flex-col bg-meteor">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#081F5C]">
                03
              </div>
              <div className="mt-2 text-xl font-bold text-galaxy">Take Interview(s)</div>
              <p className="mt-2 text-sm text-[#090814]">
                Every process includes at least one case interview (up to 3+). Some rounds combine
                behavioral questions (about 10 minutes) followed by a case interview.
              </p>
              <p className="mt-3 text-sm text-[#090814]">
                Based on internal HEC data, roughly{" "}
                <span className="font-semibold">⅔ of candidates</span> go through behavioral
                questions. You will know this format in advance.
              </p>
            </Card>

            <Card id="process-offer" className="flex h-full flex-col bg-meteor">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#081F5C]">
                04
              </div>
              <div className="mt-2 text-xl font-bold text-galaxy">Offer</div>
              <p className="mt-2 text-sm text-[#090814]">You receive the offer.</p>
            </Card>
          </div>

          <div className="mt-10 border-t border-venus pt-10">
            <Card className="bg-meteor">
              <div className="text-xl font-bold text-galaxy">Additional Information</div>
              <p className="mt-2 text-sm text-[#090814]">
                Use these resources to strengthen your application materials.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink href="#" variant="secondary" className="gap-2">
                  Assess Your Resume <ArrowUpRight size={16} />
                </ButtonLink>
                <ButtonLink href="#" variant="secondary" className="gap-2">
                  Check Your Cover Letter <ArrowUpRight size={16} />
                </ButtonLink>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#334EAC] underline underline-offset-4">
                  Resume &amp; Cover Letter Best Practices <ArrowRight size={14} />
                </span>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section id="case-interview" className="bg-milky-way border-b border-venus">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            kicker="Case Interview"
            title="Master Every Step of the Case"
            description="Scroll through each step of a classic case interview. Each slide focuses on goals, best practices, and tips."
          />

          <div className="mt-10">
            <div
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
              aria-label="Case interview steps carousel"
            >
              {CASE_STEPS.map((step, index) => (
                <Card
                  key={step.title}
                  className="min-w-[280px] snap-start bg-meteor sm:min-w-[340px]"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#081F5C]">
                    Step {index + 1}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-galaxy">
                    {step.title}
                  </div>
                  <p className="mt-3 text-sm text-[#090814]">{step.goal}</p>
                  <div className="mt-4 text-sm text-[#090814]">
                    <div className="font-semibold">Best practices</div>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                      {step.bestPractices.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {step.tips?.length ? (
                    <div className="mt-4 text-sm text-[#090814]">
                      <div className="font-semibold">Tips</div>
                      <ul className="mt-2 list-disc space-y-2 pl-5">
                        {step.tips.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-venus pt-10">
            <div className="text-xl font-bold text-galaxy">Additional Case Resources</div>
            <div className="mt-4 grid gap-3 text-sm text-[#090814] sm:grid-cols-3">
              {[
                "Framework Overview (subsite not included yet)",
                "Industry Breakdown (subsite not included yet)",
                "Sizing Information to Remember (subsite not included yet)",
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 font-semibold text-[#334EAC] underline underline-offset-4"
                >
                  {label} <ArrowRight size={14} />
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="fit-interview" className="bg-sky/40 border-b border-venus">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            kicker="Fit Interview"
            title="Prepare for Behavioral & Fit Questions"
            description="Structure your story, motivation, and examples to show consulting-ready behavior."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="bg-meteor">
              <div className="text-xl font-bold text-galaxy">The “Golden Three”</div>
              <div className="mt-4 space-y-4 text-sm text-[#090814]">
                <div>
                  <div className="font-semibold">
                    1) Tell Me About Yourself / Walk Me Through Your CV
                  </div>
                  <p className="mt-2">Purpose: clarity, storytelling, and coherence.</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Start with a theme</li>
                    <li>Keep a chronological path</li>
                    <li>End with present and future</li>
                    <li>90–120 seconds, emphasize progression, impact, and motivation</li>
                    <li>Avoid re-reading your CV</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">2) Why Consulting?</div>
                  <p className="mt-2">Purpose: motivation, realism, and self-awareness.</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Learning velocity</li>
                    <li>Structured problem-solving</li>
                    <li>Impact &amp; teamwork</li>
                    <li>Mention what you offer as well</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">3) Why This Firm?</div>
                  <p className="mt-2">Purpose: understanding firm culture and fit.</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Show understanding of firm DNA</li>
                    <li>Reference conversations or experiences</li>
                    <li>Connect strengths to firm emphasis</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-meteor">
              <div className="text-xl font-bold text-galaxy">STAR Approach</div>
              <p className="mt-3 text-sm text-[#090814]">
                Consulting firms want evidence of how you think, act, and lead. Use
                the STAR method to structure behavioral answers:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#090814]">
                <li>Situation</li>
                <li>Task</li>
                <li>Action</li>
                <li>Result</li>
              </ul>
              <p className="mt-4 text-sm text-[#090814]">
                Aim for 2–3 minute answers focused on decision-making.
              </p>
            </Card>
          </div>

          <div className="mt-10">
            <Card className="bg-meteor">
              <div className="text-xl font-bold text-galaxy">Competency Areas</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Drive, Resilience & Grit",
                    description: "Assesses emotional stamina and resourcefulness.",
                  },
                  {
                    title: "Teamwork & Collaboration",
                    description: "Focus on adaptability and supportiveness.",
                  },
                  {
                    title: "Leadership & Ownership",
                    description: "Demonstrate influence without authority.",
                  },
                  {
                    title: "Problem Solving & Analytical Rigor",
                    description: "Structure thinking like a mini-case.",
                  },
                  {
                    title: "Impact & Results Orientation",
                    description: "Quantify outcomes.",
                  },
                  {
                    title: "Communication & Client Readiness",
                    description: "Explain complex topics clearly.",
                  },
                  {
                    title: "Conflict, Feedback & Self-Awareness",
                    description: "Show growth mindset.",
                  },
                  {
                    title: "Values, Ethics & Judgment",
                    description: "Demonstrate integrity under ambiguity.",
                  },
                ].map((item) => (
                  <details
                    key={item.title}
                    className="rounded-[10px] border border-venus bg-milky-way p-4"
                  >
                    <summary className="cursor-pointer text-sm font-semibold text-galaxy">
                      {item.title}
                    </summary>
                    <p className="mt-2 text-sm text-[#090814]">{item.description}</p>
                  </details>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section id="key-resource" className="bg-sky/40 border-b border-venus">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            kicker="Key Resources"
            title="Your Most Important Resources"
            description="Focused resources for case prep, case books, behavioral interview prep, aptitude tests, and networking."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="bg-meteor">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                    <BookOpen className="text-[#FFF9F0]" size={18} stroke="#FFF9F0" />
                  </span>
                  <div className="text-xl font-bold text-galaxy">Case Prep</div>
                </div>
                <p className="mt-2 text-sm text-[#090814]">
                  Practice math, exhibit analysis, brainstorming and entire cases with Casecoach.
                </p>
                <div className="mt-3">
                  <ButtonLink
                    href="https://casecoach.com/"
                    external
                    variant="secondary"
                    className="gap-2"
                    ariaLabel="Open Casecoach in a new tab"
                  >
                    Open Casecoach <ArrowUpRight size={16} />
                  </ButtonLink>
                </div>
              </Card>

              <Card className="bg-meteor">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                    <BookOpen className="text-[#FFF9F0]" size={18} stroke="#FFF9F0" />
                  </span>
                  <div className="text-xl font-bold text-galaxy">Case Books</div>
                </div>
                <p className="mt-2 text-sm text-[#090814]">
                  Access cases based on real interview experiences in our collection.
                </p>
                <div className="mt-3">
                  <ButtonLink
                    href="https://hecparis.sharepoint.com/teams/HECMBAConsultingClub/Documents%20partages/Forms/AllItems.aspx"
                    external
                    variant="secondary"
                    className="gap-2"
                    ariaLabel="Access case collection in a new tab"
                  >
                    Access Collection <ArrowUpRight size={16} />
                  </ButtonLink>
                </div>
              </Card>

              <Card className="bg-meteor">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                    <MessageCircle
                      className="text-[#FFF9F0]"
                      size={18}
                      stroke="#FFF9F0"
                    />
                  </span>
                  <div className="text-xl font-bold text-galaxy">Behavioral Prep</div>
                </div>
                <p className="mt-2 text-sm text-[#090814]">
                  Prepare and refine your answers for fit and behavioral interviews via Big Interview. 
                </p>
                <div className="mt-3">
                  <ButtonLink
                    href="https://hec.biginterview.com/login"
                    external
                    variant="secondary"
                    className="gap-2"
                    ariaLabel="Open Big Interview in a new tab"
                  >
                    Open Big Interview <ArrowUpRight size={16} />
                  </ButtonLink>
                </div>
              </Card>

              <Card className="bg-meteor">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                    <Clipboard className="text-[#FFF9F0]" size={18} stroke="#FFF9F0" />
                  </span>
                  <div className="text-xl font-bold text-galaxy">Aptitude Tests</div>
                </div>
                <p className="mt-2 text-sm text-[#090814]">
                  Run through the numerical, verbal, and logical drills part of the application stage.
                </p>
                <div className="mt-3">
                  <ButtonLink
                    href="https://www.practiceaptitudetest.com/"
                    external
                    variant="secondary"
                    className="gap-2"
                    ariaLabel="Visit Practice Aptitude Tests in a new tab"
                  >
                    Visit Site <ArrowUpRight size={16} />
                  </ButtonLink>
                </div>
              </Card>
            </div>

            <Card className="bg-meteor">
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                    <Users className="text-[#FFF9F0]" size={18} stroke="#FFF9F0" />
                  </span>
                  <div className="text-xl font-bold text-galaxy">Networking & Events</div>
                </div>
                <p className="mt-2 text-sm text-[#090814]">
                  Learn more about consulting, your favorite companies and the process by connecting with alumni and recruiters through events and platforms. <br />
                  <br />
                  The HEC Alumni website is a great resources to find more than 80 000 alumni to reach out to. Handshake is your first address for MBA Connections with hiring companies and networking events.  <br />
                   <br /> 
                   Lastly, LinkedIn provides a meaningful opportunity to engage with current consultants and peers. 
                </p>
                <div className="mt-auto flex flex-wrap gap-3">
                  <ButtonLink
                    href="https://www.hecalumni.fr/fr/"
                    external
                    variant="secondary"
                    className="flex-1 justify-center gap-2"
                    ariaLabel="Open HEC Alumni in a new tab"
                  >
                    Visit HEC Alumni <ArrowUpRight size={16} />
                  </ButtonLink>
                  <ButtonLink
                    href="https://hec.joinhandshake.fr/"
                    external
                    variant="secondary"
                    className="flex-1 justify-center gap-2"
                    ariaLabel="Open Handshake in a new tab"
                  >
                    Visit Handshake <ArrowUpRight size={16} />
        </ButtonLink>
                </div>
              </div>
            </Card>
      </div>
    </Container>
      </section>
    </div>
  );
}
