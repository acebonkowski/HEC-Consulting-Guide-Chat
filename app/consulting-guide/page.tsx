import Image from "next/image";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  ChevronDown,
  Compass,
  Heart,
  Shield,
  TrendingUp,
  Clipboard,
  MessageCircle,
  Users,
  Zap,
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

const CASE_STEPS: {
  title: string;
  goal: string;
  bestPractices: ReactNode[];
  tips?: ReactNode[];
}[] = [
  {
    title: "Case Opening & Clarifying Questions",
    goal:
      "Fully understand the problem and confirm alignment with the interviewer before structuring.",
    bestPractices: [
      "Reformulate the case in your own words to confirm alignment.",
      "Clarify the objective: profit growth, market share, ROI, or another success measure.",
      <>
        Use <strong>ROLSPCD</strong> for clarity: Reformulate, Objective, Location,
        Strategy/Time, Product, Competition, Distribution.
      </>,
    ],
    tips: [
      "Choose clarifying questions that help your framework rather than asking for data prematurely.",
      "This phase is also an opportunity to show structured communication and business curiosity.",
    ],
  },
  {
    title: "Structuring the Problem",
    goal:
      "You have about 90 seconds to design and present a MECE structure (Mutually Exclusive, Collectively Exhaustive). This ensures problem breakdowns into non-overlapping categories that fully cover the issue, a key McKinsey principle for structured analysis in consulting.",
      bestPractices: [
        "Use familiar frameworks as inspiration, but tailor to the case.",
      "Announce structure clearly diving into the top-level category first before expanding on its components",
      ],
    tips: [
      "Start with high-level buckets before drilling down.",
      "Communicate visually while you speak.",
    ],
  },
  {
    title: "Case Math",
    goal: "Case interviews test a broad array of math topics, from basic arithmetic like addition, subtraction, multiplication, and division to percentages for growth rates and margins, ratios, weighted averages, probability, market sizing, and financial formulas such as profitability, ROI, and CAGR. Valuation questions often require calculating Net Present Value to assess investment viability by discounting future cash flows, alongside perpetuity growth approximations. Breakeven analysis determines units needed to cover costs using fixed costs divided by contribution margin per unit, with related metrics like payback period. ",
    bestPractices: [
      "Clarify numbers.",
      "Walk through your setup aloud.",
      "Think out loud.",
      "Sense-check results and link back to the case.",
      "Round smartly and keep arithmetic concise.",
      "Tie numbers back to the case, and conclude with a clear recommendation.",
    ],
    tips: ["Round smartly and keep arithmetic concise.", 
      "Label units clearly (e.g., $k, millions) and double-check arithmetic aloud.",]
  },
  {
    title: "Brainstorming",
    goal: "Brainstorming occurs early when interviewers pose open-ended questions like generating growth ideas or market entry options, expecting structured, creative output without a single right answer.",
    bestPractices: [
      "Take 15–20 seconds to structure.",
      "Aim for 5–6 ideas across 2–3 MECE buckets.",
      "Present ideas crisply.",
    ],
    tips: ["Always link ideas back to feasibility and the objective.",
      "Structure ideas upfront with a MECE framework (e.g., customer segments, channels, geography) before listing specifics.",
      "Verbalize your approach first to demonstrate structured thinking.",
      "Dare to be creative and challenge the status quo, but always connect back to the case objective.",
    ],
  },
  {
    title: "Exhibit Analysis",
    goal: "In case interviews, candidates encounter exhibits like bar charts, line graphs, pie charts, scatterplots, waterfall charts, bubble charts, histograms, Mekko charts, tables with numbers or text, and maps overlaid with data such as facilities or population. These test quick analysis of trends, outliers, comparisons, and business insights.",
      bestPractices: [
        "Describe the exhibit briefly.",
        "Highlight a key insight.",
        "Analyze causes or implications.",
        "Tie back to the case question.",
      ],
    tips: [
      "Derive actionable business insights instead of superficial data descriptions, always tying findings to the case objective.",
      "Spot and quantify outliers, trends, and key patterns (e.g., via percentages or growth rates). Do brief calculations on the fly to support your analysis.",
      "Clarify ambiguities upfront, such as units, legends, or scales, before drawing conclusions."
    ],
  },
  {
    title: "Market Sizing",
    goal: "In MBB case interviews, market sizing tests your ability to estimate demand logically under time pressure, often for unfamiliar products like annual coffee cups in France. Always use a top-down approach first, starting broad (e.g., total population, narrow by age/income/usage %) as it's preferred for clarity and structure. Follow with a bottom-up sense check to validate. Memorizing key numbers (see link below) speeds you up and boosts credibility.",
    bestPractices: [
      "Clarify what you are sizing and set up the formula first.",
      "Check assumptions as you go. Don‘t be afraid to ask for information.",
      "Segment, segment, segment! By age, gender, income, usage frequency, etc.",
      "Test sensitivity at the end.",
    ],
    tips: [],
  },
  {
    title: "Case Closing",
    goal: "Deliver a confident, structured recommendation.",
    bestPractices: [
      "Recap the objective, state your clear recommendation first, then 2-3 key analytical supports (math, sizing, exhibits).",
      "Cover top 1-2 risks with mitigations, and outline 2-3 next steps (e.g., pilot, further analysis).",
    ],
    tips: ["Make sure to practice this extensively! It‘s your last chance to leave an impression!."],
  },
];

const PRACTICE_LINKS: Record<string, { label: string; href: string }> = {
  "Structuring the Problem": {
    label: "Practice Structuring",
    href: "https://casecoach.com/c/drills/structuring",
  },
  Brainstorming: {
    label: "Practice Brainstorming",
    href: "https://casecoach.com/c/drills/creativity",
  },
  "Exhibit Analysis": {
    label: "Practice Exhibit Analysis",
    href: "https://casecoach.com/c/drills/chart",
  },
  "Market Sizing": {
    label: "Practice Market Sizing",
    href: "https://casecoach.com/c/drills/market-sizing",
  },
  "Case Math": {
    label: "Practice Case Math",
    href: "https://casecoach.com/c/drills/case-math",
  },
};

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
                expectations, designed to help you prepare efficiently and land the
                offer.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[10px] bg-sky blur-2xl" />
              <div className="relative overflow-hidden rounded-[10px] bg-meteor p-6">
                <Image
                  src="/steps.svg"
                  alt="Application steps illustration"
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

          <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div id="process-apply" className="h-full">
              <Card className="flex h-full flex-col bg-[#7096D1]/10">
                <div className="text-xl font-light text-[#081F5C]">01</div>
                <div className="mt-2 text-xl font-bold text-galaxy">Submit Application</div>
                <div className="mt-4 flex h-full flex-col text-sm text-[#090814]">
                  <div className="font-semibold">Fill out the application form on the company's website including:</div>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Resume</li>
                    <li>Cover letter (recommended)</li>
                    <li>Transcripts (including undergraduate, graduate degrees & sometimes high-school degrees)</li>
                    <li>tandardized test scores (e.g., GMAT – often optional)</li>
                  </ul>
                <p className="mt-2">
                  Ideally, apply with a meaningful referral through a separate referral link.
                </p>
                <div className="mt-auto flex flex-col gap-3 pt-4">
                  <ButtonLink href="#" variant="primary" className="w-full justify-between gap-2">
                    <span className="inline-flex flex-1 items-center gap-2 text-left">
                      <Image
                        src="/openai-icon.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="brightness-0 invert"
                      />
                      Assess Your Resume
                    </span>
                    <ArrowUpRight size={16} />
                  </ButtonLink>
                  <ButtonLink href="#" variant="primary" className="w-full justify-between gap-2">
                    <span className="inline-flex flex-1 items-center gap-2 text-left">
                      <Image
                        src="/openai-icon.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="brightness-0 invert"
                      />
                      Check Your Cover Letter
                    </span>
                    <ArrowUpRight size={16} />
                  </ButtonLink>
                </div>
                </div>
              </Card>
            </div>

            <div id="process-assessment" className="h-full">
              <Card className="flex h-full flex-col bg-[#7096D1]/20">
                <div className="text-xl font-light text-[#081F5C]">02</div>
                <div className="mt-2 text-xl font-bold text-galaxy">Solve Assessment</div>
                <p className="mt-2 text-sm text-[#090814]">
                  You will often receive an online assessment. The exact format varies by company and region.
                </p>
                <div className="mt-4 space-y-4 text-sm text-[#090814]">
                <div className="flex flex-col gap-2">
                <div className="font-semibold">McKinsey – SOLVE</div>
                  <ButtonLink
                    href="https://www.casebasix.com/pages/mckinsey-problem-solving-game-solve-full-guide"
                    external
                    variant="secondary"
                    className="w-fit gap-2"
                    ariaLabel="Guide for McKinsey's SOLVE"
                  >
                    <Image src="/link-2.svg" alt="" width={16} height={16} />
                    Guide for McKinsey's "SOLVE"
                  </ButtonLink>
                </div>
                <div className="space-y-2">
                    <div className="font-semibold">Bain – SOVA | Test Gorilla</div>
                  <div className="flex flex-col gap-2">
                    <ButtonLink
                      href="https://www.casebasix.com/pages/bain-aptitude-test-sova-ultimate-guide"
                      external
                      variant="secondary"
                      className="w-fit gap-2"
                      ariaLabel="Open Bain SOVA guide"
                    >
                      <Image src="/link-2.svg" alt="" width={16} height={16} />
                      Guide for Bain‘s "SOVA
                    </ButtonLink>
                    <ButtonLink
                      href="https://www.casebasix.com/pages/bain-testgorilla"
                      external
                      variant="secondary"
                      className="w-fit gap-2"
                      ariaLabel="Open Bain Test Gorilla guide"
                    >
                      <Image src="/link-2.svg" alt="" width={16} height={16} />
                      Guide for Bain‘s "Test Gorilla"
                    </ButtonLink>
                  </div>
                  </div>
                <div className="flex flex-col gap-2">
                <div className="font-semibold">BCG‘s – Casey</div>
                  <ButtonLink
                    href="https://www.casebasix.com/pages/bcg-online-case-casey-chatbot-guide"
                    external
                    variant="secondary"
                    className="w-fit gap-2"
                    ariaLabel="Open BCG Casey guide"
                  >
                    <Image src="/link-2.svg" alt="" width={16} height={16} />
                    Guide for BCG's "Casey"
                  </ButtonLink>
                </div>
                  <div className="space-y-2">
                    <div className="font-semibold">Other companies</div>
                    <p>
                      Alternatively, companies may use aptitude tests for quantitative, logical, and verbal skills.
                    </p>
                  <div className="flex flex-col gap-2">
                    <ButtonLink
                      href="https://www.practiceaptitudetests.com/"
                      external
                      variant="secondary"
                      className="w-fit gap-2"
                      ariaLabel="Open Practice Aptitude Tests"
                    >
                      <Image src="/link-2.svg" alt="" width={16} height={16} />
                      Practice Aptitude Tests
                    </ButtonLink>
                  </div>
                  </div>
                </div>
              </Card>
            </div>

            <div id="process-interview" className="h-full">
              <Card className="flex h-full flex-col bg-[#7096D1]/30">
                <div className="text-xl font-light text-[#081F5C]">03</div>
                <div className="mt-2 text-xl font-bold text-galaxy">Crush Interview(s)</div>
                <p className="mt-2 text-sm text-[#090814]">
                In any process, you will have at least <span className="font-semibold">one case interview (ranging up to 3+). </span> Sometimes there are multiple rounds in one day, where you have:<br />
                </p>
                 <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-[#090814]">
                   <li>A handful of behavioral questions (approx. 10 minutes)</li>
                   <li>Followed by a case interview (approx. 30 minutes)</li>
                 </ul>
                
                <p className="mt-2 text-sm text-[#090814]">
    Based on our internal HEC data, merely 66% of candidates go through behavioral questions.  
In any way, you will know before.
                </p>
                <div className="mt-4 flex flex-col items-start gap-2 rounded-[10px] border border-red-300 bg-red-50/70 p-4 text-sm text-red-700">
                  <AlertTriangle size={18} />
                  <p>
                    Companies switch their interview processes. For Bain London, candidates had to
                    additionally prepare a presentation, and McKinsey has recently prompted
                    applicants to use their own AI.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-10 border-t border-venus pt-10">
            <Card className="w-full bg-meteor md:w-1/3">
              <div className="text-xl font-bold text-galaxy">
                Resume &amp; Cover Letter Best Practices
              </div>
              <p className="mt-2 text-sm text-[#090814]">
                Practical guidance to refine your application materials before you submit.
              </p>
              <div className="mt-4 h-px w-full bg-[#334EAC]" aria-hidden="true" />
              <div className="mt-4">
                <ButtonLink
                  href="#"
                  variant="ghost"
                  className="flex w-full items-center !px-0 !py-0 font-bold text-[#334EAC] underline underline-offset-4"
                >
                  <span className="flex-1 text-left">Learn More</span>
                  <ArrowRight size={16} className="ml-auto" />
                </ButtonLink>
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
            description="Work through each step of a classic case interview. Each card focuses on goals, best practices, and tips."
          />

          <div className="mt-10">
            <div className="relative">
              <span
                className="absolute left-3 top-4 h-full border-l-2 border-dashed border-[#334EAC]"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-6" aria-label="Case interview steps">
                {CASE_STEPS.map((step, index) => {
                  const practiceLink = PRACTICE_LINKS[step.title];
                  return (
                  <div key={step.title} className="relative pl-10">
                    <span
                      className="absolute left-[6px] top-6 h-4 w-4 rounded-full bg-[#334EAC] ring-4 ring-[#EDF4FA]"
                      aria-hidden="true"
                    />
                    <Card className="bg-meteor">
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-lg font-light text-[#081F5C]">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        {practiceLink ? (
                          <ButtonLink
                            href={practiceLink.href}
                            external
                            variant="secondary"
                            className="gap-2"
                            ariaLabel={`Open ${practiceLink.label} in a new tab`}
                          >
                            <Image src="/link-2.svg" alt="" width={16} height={16} />
                            {practiceLink.label}
                          </ButtonLink>
                        ) : null}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-galaxy">
                        {step.title}
                      </div>
                      <p className="mt-3 text-sm text-[#090814]">{step.goal}</p>
                      {index === 0 ? (
                        <p className="mt-3 w-3/4 text-center text-sm text-[#334EAC] mx-auto">
                          “So the client, a European grocery retailer, is considering entering the
                          French ready-meal market. Our goal is to assess feasibility and
                          profitability, correct?”
                        </p>
                      ) : null}
                      {step.title === "Structuring the Problem" ? (
                        <p className="mt-3 w-3/4 text-center text-sm text-[#334EAC] mx-auto">
                          “To assess this opportunity, I’ll look at three key areas: first, market
                          attractiveness; second, the company’s competitive fit; and third,
                          financial feasibility…”
                        </p>
                      ) : null}
                      {step.title === "Exhibit Analysis" ? (
                        <p className="mt-3 w-3/4 text-center text-sm text-[#334EAC] mx-auto">
                          “First, the title shows [key takeaway], revenues grew 15% from the outlier
                          in Q3; comparing bars, Segment A outperforms by 2x, so I’d recommend
                          doubling down there to address the case’s profitability drop.”
                        </p>
                      ) : null}
                      {step.title === "Brainstorming" ? (
                        <p className="mt-3 w-3/4 text-center text-sm text-[#334EAC] mx-auto">
                          “I’d like to think about revenue growth across four categories:
                          customer-facing levers, product levers, channel levers, and and pricing
                          levers. Under customer levers, I see ...”
                        </p>
                      ) : null}
                      {step.title === "Case Math" ? (
                        <p className="mt-3 w-3/4 text-center text-sm text-[#334EAC] mx-auto">
                          “Let me walk you through my approach: First, I’ll calculate revenue as
                          units times price, subtract variable costs to get the contribution margin
                          before dividing fixed costs by margin per unit for breakeven. If that
                          sounds reasonable, I’d love to go ahead and calculate.”
                        </p>
                      ) : null}
                      {step.title === "Market Sizing" ? (
                        <p className="mt-3 w-3/4 text-center text-sm text-[#334EAC] mx-auto">
                          “I’ll start with France’s total population, narrow to adults aged 18+,
                          then estimate the percentage who drink coffee regularly, the share
                          consuming coffee in the morning, and the portion opting for cappuccinos
                          specifically.”
                        </p>
                      ) : null}
                      {step.title === "Case Closing" ? (
                        <p className="mt-3 w-3/4 text-center text-sm text-[#334EAC] mx-auto">
                          “To recap, the goal is to boost profitability for this coffee chain in
                          France. My recommendation is to launch morning cappuccino promotions
                          targeting urban adults, backed by market sizing showing 4-5M daily
                          opportunities and breakeven math at 20k units/month. Risks include supply
                          chain volatility and competition, so next steps are pilot testing in
                          Paris and sensitivity analysis on costs.”
                        </p>
                      ) : null}
                      <div className="mt-4 text-sm text-[#090814]">
                        <div className="font-semibold">Best practices</div>
                        {step.title === "Case Math" || step.title === "Exhibit Analysis" ? (
                          <ol className="mt-2 list-decimal space-y-2 pl-5">
                            {step.bestPractices.map((item, itemIndex) => (
                              <li key={`best-${index}-${itemIndex}`}>{item}</li>
                            ))}
                          </ol>
                        ) : (
                          <ul className="mt-2 list-disc space-y-2 pl-5">
                            {step.bestPractices.map((item, itemIndex) => (
                              <li key={`best-${index}-${itemIndex}`}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {step.tips?.length ? (
                        <div className="mt-4 text-sm text-[#090814]">
                          <div className="font-semibold">Tips</div>
                          <ul className="mt-2 list-disc space-y-2 pl-5">
                            {step.tips.map((item, itemIndex) => (
                              <li key={`tip-${index}-${itemIndex}`}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </Card>
                  </div>
                );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-venus pt-10">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Framework Overview",
                  description:
                    "Quick refreshers on classic case frameworks and when to adapt them.",
                  href: "#",
                },
                {
                  title: "Industry Breakdown",
                  description:
                    "Key drivers, economics, and trends across common case industries.",
                  href: "/industry-breakdown",
                },
                {
                  title: "Market Sizing Numbers",
                  description:
                    "Core figures and benchmarks to speed up structured sizing math.",
                  href: "#",
                },
              ].map((item) => (
                <Card key={item.title} className="bg-meteor">
                  <div className="text-xl font-bold text-galaxy">{item.title}</div>
                  <p className="mt-2 text-sm text-[#090814]">{item.description}</p>
                  <div className="mt-4 h-px w-full bg-[#334EAC]" aria-hidden="true" />
                  <div className="mt-4">
                    <ButtonLink
                      href={item.href}
                      variant="ghost"
                      className="flex w-full items-center !px-0 !py-0 font-bold text-[#334EAC] underline underline-offset-4"
                    >
                      <span className="flex-1 text-left">Learn More</span>
                      <ArrowRight size={16} className="ml-auto" />
                    </ButtonLink>
                  </div>
                </Card>
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
            <Card className="flex h-full flex-col bg-meteor">
              <div className="flex items-start justify-between gap-4">
                <div className="text-xl font-bold text-galaxy">STAR Approach</div>
                <ButtonLink
                  href="https://hec.biginterview.com/login"
                  external
                  variant="secondary"
                  className="gap-2"
                  ariaLabel="Open Practice in a new tab"
                >
                  <Image src="/link-2.svg" alt="" width={16} height={16} />
                  Practice
                </ButtonLink>
              </div>
              <p className="mt-3 text-sm text-[#090814]">
              The <span className="font-semibold">STAR method (Situation, Task, Action, Result) </span> is a structured framework for answering behavioral interview questions, widely used in interviews to demonstrate past behaviors as predictors of future performance. It ensures <span className="font-semibold">concise, impactful stories</span> (aim for 2-3 minutes) by providing context, your role, specific actions, and measurable outcomes.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#090814]">
                 <li>
                   <span className="font-semibold">Situation:</span> Describe the context or challenge briefly.
                   <p className="mt-2 pl-4 text-sm text-[#334EAC]">
                     “Our team faced a 20% revenue drop due to market shifts”
                   </p>
                 </li>
                 <li>
                   <span className="font-semibold">Task:</span> Outline your specific responsibility.
                   <p className="mt-2 pl-4 text-sm text-[#334EAC]">
                     “As lead, I needed to identify causes and reverse the trend in 90 days”
                   </p>
                 </li>
                 <li>
                   <span className="font-semibold">Action:</span> Detail steps you took, focusing on your decisions and rationale.
                   <p className="mt-2 pl-4 text-sm text-[#334EAC]">
                     “I broke down drivers into revenue/volume/price, prioritized via data analysis, and led cross-team implementation”
                   </p>
                 </li>
                 <li>
                   <span className="font-semibold">Result:</span> Quantify impact and learnings.
                   <p className="mt-2 pl-4 text-sm text-[#334EAC]">
                     “Achieved 15% growth, saved $2M, and the framework was adopted firm-wide”
                   </p>
                 </li>
              </ul>
                <div className="mt-auto flex flex-col items-start gap-2 rounded-[10px] border border-red-300 bg-red-50/70 p-4 text-sm text-red-700">
                  <AlertTriangle size={18} />
                  <p>
                    Based on experience, we tend to spend too much time on the situation and too little on the action.
                  </p>
                </div>
              
            </Card>

            <Card className="bg-meteor">
              <div className="text-xl font-bold text-galaxy">The “Golden Three”</div>
              <div className="mt-4 space-y-4 text-sm text-[#090814]">
                <div>
                  <div className="font-semibold">
                    1) Tell Me About Yourself
                  </div>
                  <p className="mt-2">Aims to assess your storytelling ability, career coherence, and fit for consulting through a concise narrative highlighting progression and impact.</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Start with a unifying theme (e.g., "passionate problem-solver across tech and pharma")</li>
                    <li>Follow a chronological path, emphasizing 2-3 high-impact roles with quantified results.</li>
                    <li>End with current role and why consulting accelerates your trajectory (90-120 seconds).</li>
                  
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">2) Why Consulting?</div>
                  <p className="mt-2">Evaluates genuine motivation, realistic expectations of the role, and self-awareness about transferable skills.</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Stress learning velocity from diverse cases and top talent.</li>
                    <li>Highlight structured problem-solving, high-impact teamwork on client problems.</li>
                    <li>Balance with what you uniquely offer (e.g., industry expertise, analytical rigor)</li>
                  
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">3) Why This Firm?</div>
                  <p className="mt-2">Tests research depth, cultural fit, and alignment between your strengths and firm-specific DNA.</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Demonstrate understanding of firm DNA (e.g., McKinsey's leadership focus, BCG's analytics).</li>
                    <li>Reference specific conversations, reports, or experiences (e.g., "coffee chat with alum").</li>
                    <li>Connect your skills to their emphasis (e.g., "my pharma background fits BCG's healthcare practice").</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-10">
            <Card className="bg-meteor">
              <div className="text-xl font-bold text-galaxy">Competency Areas</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Drive, Resilience & Grit",
                    description: "Tests your perseverance through setbacks and ability to push projects forward amid obstacles, revealing emotional stamina for consulting's high-pressure demands.",
                    example:
                      "Tell me about a time you faced a major failure or roadblock.",
                    icon: TrendingUp,
                  },
                  {
                    title: "Teamwork & Collaboration",
                    description: "Evaluates how you build consensus, adapt to diverse styles, and contribute to group success, key for client teams.",
                    example: "Describe a time you worked with a difficult team member.",
                    icon: Users,
                  },
                  {
                    title: "Leadership & Ownership",
                    description: "Probes your capacity to inspire, influence without formal power, and take accountability like a partner.",
                    example: "Give an example of leading a team without being the manager.",
                    icon: Compass,
                  },
                  {
                    title: "Problem Solving & Analytical Rigor",
                    description: "Assesses structured thinking, hypothesis-driven analysis, and data synthesis mirroring case interviews.",
                    example: "Walk me through how you tackled a complex business problem.",
                    icon: Zap,
                  },
                  {
                    title: "Impact & Results Orientation",
                    description: "Measures your focus on delivering measurable business value, not just effort.",
                    example: "Tell me about your biggest professional achievement.",
                    icon: Award,
                  },
                  {
                    title: "Communication & Client Readiness",
                    description: "Gauges clarity in explaining insights to stakeholders, adapting to executives or juniors.",
                    example: "Describe presenting a recommendation to senior leadership.",
                    icon: MessageCircle,
                  },
                  {
                    title: "Conflict, Feedback & Self-Awareness",
                    description: "Reveals maturity in handling disagreement, learning from critique, and self-improvement.",
                    example: "Tell me about receiving tough feedback and how you responded.",
                    icon: Heart,
                  },
                  {
                    title: "Values, Ethics & Judgment",
                    description: "Tests integrity in gray areas, balancing client needs with principles under ambiguity.",
                    example: "Share a time you faced an ethical dilemma at work.",
                    icon: Shield,
                  },
                ].map((item) => (
                  <details
                    key={item.title}
                    className="rounded-[10px] border border-venus bg-milky-way p-4"
                  >
                    <summary className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-galaxy">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7096D1]">
                        <item.icon size={16} stroke="#FFF9F0" className="text-[#FFF9F0]" />
                      </span>
                      <span className="flex-1">{item.title}</span>
                      <ChevronDown size={16} className="text-[#7096D1]" />
                    </summary>
                    <p className="mt-2 text-sm text-[#090814]">{item.description}</p>
                    <p className="mt-3 w-3/4 text-center text-sm text-[#334EAC] mx-auto">
                      “{item.example}”
                    </p>
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
