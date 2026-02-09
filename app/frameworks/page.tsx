import { ArrowLeft, ArrowRight, ArrowUpRight, AlertTriangle } from "react-feather";
import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Frameworks | HEC MBA Consulting Club",
  description:
    "MECE consulting frameworks with descriptions, example prompts, and tips.",
};

type FrameworkSection = {
  title: string;
  items: Array<string | { label: string; items: string[] }>;
};

type Framework = {
  title: string;
  description: string;
  examplePrompt: string;
  frameworkSections: FrameworkSection[];
  guidingNote?: string[];
  decisionFlow?: string[];
  tips: string[];
};

const FRAMEWORKS: Framework[] = [
  {
    title: "Profitability",
    description:
      "A foundational framework to decompose profitability problems or build financial intuition from first principles, using the formula PROFIT = REVENUE - COSTS = VOLUME * PRICE – (VOLUME * VARIABLE COSTS + FIXED COSTS).",
    examplePrompt:
      "A media company reports flat revenues but declining profits across several business units. Management wants a clear breakdown of where value is being lost and which segments matter most.",
    frameworkSections: [
      {
        title: "Revenue",
        items: ["Unit volume × price per unit"],
      },
      {
        title: "Cost",
        items: [
          {
            label: "Variable",
            items: ["e.g. direct labor, raw material, packaging, commission"],
          },
          {
            label: "Fixed",
            items: ["e.g. rent, taxes, administrative salaries, loan repayment, depreciation"],
          },
        ],
      },
      {
        title: "Segmentation Lens",
        items: ["By products", "Distribution channels", "Geography", "Customer type", "Industry vertical"],
      },
    ],
    guidingNote: [
      "Identify leverage point & ask “why”",
      "If volume issue → benchmark competition",
    ],
    tips: [
      "Always sanity-check magnitudes.",
      "Segment early if numbers feel “too averaged.”",
      "Use this as a base before applying advanced frameworks.",
    ],
  },
  {
    title: "Organic vs Inorganic Growth",
    description:
      "Helps decide how a company should grow and through which levers, balancing speed, control, risk, and cost.",
    examplePrompt:
      "A mid-sized industrial company has set a target to double revenues in five years. The board wants to understand whether this growth should come from acquisitions, partnerships, or internal expansion.",
    frameworkSections: [
      {
        title: "Organic (= own capabilities & efforts)",
        items: [
          "Inside core (= existing sources)",
          "Improve product, new distribution channels, quality, price, marketing",
          "Outside core (= new sources)",
          "New segments",
          "New geography (e.g. Asia)",
          "New product to segments",
          "Entirely new business",
        ],
      },
      {
        title: "Inorganic (= external efforts)",
        items: [
          {
            label: "Acquisition",
            items: ["Immediate revenue boost", "Synergies & control", "BUT costly + integration"],
          },
          {
            label: "JV / shared resources",
            items: ["Risk sharing", "BUT limited control & scaling risk"],
          },
          {
            label: "Partnership",
            items: ["Fast & cheap", "BUT no control, time risk"],
          },
        ],
      },
    ],
    guidingNote: ["Understand what to grow (revenue, profit, quantity, etc.) & prioritize organic levers"],
    tips: [
      "Organic = control, inorganic = speed. Say this explicitly.",
      "Match growth method to capital availability.",
      "Integration risk often dominates inorganic outcomes.",
    ],
  },
  {
    title: "Market Expansion / Growth Decision",
    description:
      "Used to evaluate whether expansion makes sense given demand dynamics, supply constraints, and economics.",
    examplePrompt:
      "A fast-growing restaurant chain is considering entering three new metropolitan markets over the next two years. Management wants to know whether expansion is justified and which risks could derail profitability.",
    frameworkSections: [
      {
        title: "Analyze Demand",
        items: [
          "Market growth (sustainable?)",
          "Share growth (sustainable?)",
          {
            label: "Source segmentation",
            items: ["Segment share", "Trend per segment"],
          },
        ],
      },
      {
        title: "Investigate Supply",
        items: [
          "Available industry supply",
          "Price & profitability implications",
          "Relevant benefits",
          "Additional tech innovation",
          "More productivity for lower marginal cost",
        ],
      },
      {
        title: "Expansion Cost",
        items: [
          "Real cost",
          {
            label: "Profitability",
            items: ["e.g. break-even, payback period"],
          },
          "Risks",
        ],
      },
    ],
    tips: [
      "Growth without margin is a red flag—always check economics.",
      "Separate market growth from share shift.",
      "Watch for hidden fixed costs in expansion.",
    ],
  },
  {
    title: "M&A Value Creation",
    description:
      "Use this framework to evaluate whether an acquisition creates value and where that value comes from. It separates intrinsic value from synergy-driven upside and explicitly forces you to surface integration and execution risks.",
    examplePrompt:
      "A global pharmaceutical company is considering acquiring a mid-sized biotech with a late-stage oncology drug. The target is pre-profit but growing rapidly. The CEO wants to know whether the acquisition creates shareholder value and whether the deal should proceed given regulatory, integration, and IP risks.",
    frameworkSections: [
      {
        title: "Standalone Value",
        items: [
          "Profitability",
          "Growth",
          "Strategic fit",
          {
            label: "Valuation",
            items: [
              "Market cap",
              "NPV",
              "Enterprise value",
              "Comparables analysis",
            ],
          },
        ],
      },
      {
        title: "Synergies (= additional value created)",
        items: [
          {
            label: "Revenue growth",
            items: [
              "e.g. cross-selling, reduction of competition, access to new markets",
            ],
          },
          {
            label: "Cost reduction",
            items: [
              "e.g. product advancement through shared resources, reduced salaries, marketing & channels, streamlined processes & negotiating power",
            ],
          },
        ],
      },
      {
        title: "Capabilities & Risks",
        items: ["Integration", "Antitrust & regulations", "Leadership & culture", "IP concerns"],
      },
    ],
    tips: [
      "Always separate value without the deal from value because of the deal.",
      "Quantify synergies conservatively; overestimation is a common pitfall.",
      "Flag risks early—especially regulatory and cultural ones—to appear realistic.",
    ],
  },
  {
    title: "Opportunity Attractiveness",
    description:
      "Used to assess whether a new market, product, or investment opportunity is worth pursuing from a strategic and financial perspective.",
    examplePrompt:
      "A consumer goods company is considering launching a premium private-label brand in an emerging market. Leadership wants to know if the opportunity is attractive, financially viable, and aligned with long-term strategy.",
    frameworkSections: [
      {
        title: "Opportunity Attractiveness",
        items: [
          {
            label: "Industry",
            items: ["e.g. market size, growth"],
          },
          {
            label: "Customer demand",
            items: ["segments, unmet needs, WTP"],
          },
          "Competitive density",
          "Expected profitability",
          "Strategic fit",
        ],
      },
      {
        title: "Financial Analysis",
        items: ["Break-even", "ROI", "Payback period"],
      },
      {
        title: "Risks & Implementation",
        items: [
          "Talent & expertise",
          "Operations & supplier readiness",
          "Cannibalization",
          "Conflicting trends & disruptions",
          "Funding hurdles",
          {
            label: "Exit opportunities",
            items: ["IPO", "Secondary sale", "M&A"],
          },
        ],
      },
    ],
    tips: [
      "Don’t stop at market size—focus on profit pools.",
      "Explicitly compare opportunity upside to execution difficulty.",
      "Exit logic matters in PE / VC-style cases.",
    ],
  },
  {
    title: "Competitor Response / Strategic Threat",
    description:
      "This framework helps decide how to respond to a competitor’s move by assessing impact, intent, capabilities, and response options.",
    examplePrompt:
      "A regional telecom provider has just seen a national competitor enter its core market with aggressive pricing and bundled offerings. The client wants to understand how serious the threat is and what strategic response makes sense.",
    frameworkSections: [
      {
        title: "Impact Business",
        items: ["Segment affected", "Estimated loss"],
      },
      {
        title: "Opportunity Pursued (by competitor)",
        items: ["Size", "Profitability", "Trend alignment"],
      },
      {
        title: "Capabilities of Competitor",
        items: ["Strengths", "Weaknesses", "Implementation readiness"],
      },
      {
        title: "Response Options",
        items: ["None", "Mitigate / retain customers", "Align lower prices", "Replicate competitor", "Collaborate"],
      },
    ],
    guidingNote: [
      "Clarify what metric is under pressure & adapt framework",
      "Put loss in relative size / strategic context",
    ],
    tips: [
      "Not responding is sometimes the optimal strategy—state why.",
      "Avoid emotional reactions; stay economics-driven.",
      "Anchor decisions to long-term positioning.",
    ],
  },
  {
    title: "Cost Reduction",
    description:
      "A structured way to diagnose margin erosion and identify sustainable cost reduction levers.",
    examplePrompt:
      "A technology company with a subscription-based model is under pressure from investors after reporting consecutive operating losses. Leadership has asked for a cost-reduction plan that restores profitability within two quarters.",
    frameworkSections: [
      {
        title: "Understand Cost Structure",
        items: [
          {
            label: "Identify drivers",
            items: [
              "Fixed vs variable cost",
              "Value chain",
            ],
          },
          "Benchmark competition",
          "Benchmark past performance",
        ],
      },
      {
        title: "Identify Root Cause",
        items: ["Internal operational & organizational changes", "External market effects"],
      },
      {
        title: "Solutions",
        items: [
          {
            label: "Reduce need",
            items: ["Eliminate (e.g. self-serve)"],
          },
          {
            label: "Reduce service",
            items: ["e.g. chatbot"],
          },
          {
            label: "Meet with less",
            items: ["Eliminate waste", "Improve productivity"],
          },
          {
            label: "Reduce resource cost",
            items: ["Cheaper alternatives (e.g. outsourcing)", "Renegotiate"],
          },
        ],
      },
    ],
    tips: [
      "Diagnose before prescribing—don’t jump to layoffs.",
      "Focus on structural, not one-off, savings.",
      "Flag customer experience risks explicitly.",
    ],
  },
  {
    title: "Pricing Strategy",
    description:
      "Used to evaluate and redesign pricing to maximize profit while managing customer and competitive reactions.",
    examplePrompt:
      "An entertainment company is considering introducing a new tiered ticketing structure for one of its flagship venues. Management wants to know what price maximizes profit while meeting a required payback period for recent capital investments.",
    frameworkSections: [
      {
        title: "Pricing Strategy Fit",
        items: ["Cost-based", "Market-based", "Value-based (WTP, churn, value-add)"],
      },
      {
        title: "Margin Attractiveness",
        items: [
          {
            label: "Revenue impact",
            items: ["volume & increments"],
          },
          "Costs due to change",
          "Revenue & cost impact with value-add",
        ],
      },
      {
        title: "Risks & Implementation",
        items: [
          "Raising difficult (→ mitigation)",
          "Brand hit / reduction",
          "Volume increase",
          "Cannibalization",
          "Competitive reaction",
        ],
      },
    ],
    decisionFlow: [
      "Identify current pricing strategy & alternatives",
      "Brainstorm value-added revenue opportunities",
      "Compare financial effects of alternatives",
      "Recommend profit-maximizing strategy",
      "Understand risks",
    ],
    tips: [
      "Pricing is behavioral as much as financial—mention psychology.",
      "Always discuss implementation feasibility.",
      "Quantify churn sensitivity when possible.",
    ],
  },
  {
    title: "Operations Improvement / Process Redesign",
    description:
      "This framework diagnoses operational inefficiencies and identifies concrete levers to improve cost, speed, capacity, or productivity.",
    examplePrompt:
      "A global manufacturer of industrial equipment is missing delivery targets and experiencing margin compression despite steady demand. Management suspects operational inefficiencies and wants a clear plan to improve throughput, reduce costs, and protect quality.",
    frameworkSections: [
      {
        title: "Map Process",
        items: [
          "Steps (e.g. value chain)",
          "Stakeholders",
          {
            label: "Performance metrics",
            items: ["e.g. capacity utilization, bottlenecks, lead time"],
          },
        ],
      },
      {
        title: "Investigate Levers",
        items: [
          {
            label: "Eliminate & cut waste",
            items: ["e.g. automation, location design"],
          },
          {
            label: "Reduce costs",
            items: ["e.g. bulk renegotiation, outsourcing, network design"],
          },
          {
            label: "Increase speed",
            items: ["e.g. capacity, network design"],
          },
          "Increase quantity",
          "capacity & utilization",
          "Increase productivity",
          {
            label: "Better anticipation",
            items: ["forecasting, S&OP"],
          },
        ],
      },
      {
        title: "Gains & Risks",
        items: ["Effect on success metric", "Impact on brand, satisfaction, quality, profits"],
      },
    ],
    guidingNote: ["Identify success metric immediately & adapt levers"],
    tips: [
      "Start with the constraint (bottleneck) before listing solutions.",
      "Tie every lever to a measurable KPI.",
      "Call out trade-offs between efficiency and quality.",
    ],
  },
];

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold tracking-tight text-galaxy sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-sm text-[#090814] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function renderSectionItems(
  items: FrameworkSection["items"],
  sectionIndex: number
) {
  return (
    <div className="mt-3 space-y-3">
      {items.map((item, itemIndex) =>
        typeof item === "string" ? (
          <div
            key={item}
            className="rounded-[16px] bg-[#BAD6EB] px-4 py-3 text-sm text-[#081F5C]"
          >
            <span className="font-semibold">
              {sectionIndex + 1}.{itemIndex + 1}.
            </span>{" "}
            {item}
          </div>
        ) : (
          <div
            key={item.label}
            className="rounded-[16px] bg-[#BAD6EB] px-4 py-3 text-sm text-[#081F5C]"
          >
            <div className="font-semibold">
              {sectionIndex + 1}.{itemIndex + 1}. {item.label}
            </div>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              {item.items.map((subitem) => (
                <li key={subitem}>{subitem}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}

function getFrameworkGridClass(count: number) {
  if (count === 3) return "grid gap-6 lg:grid-cols-3";
  if (count === 4) return "grid gap-6 lg:grid-cols-2";
  return "grid gap-6 lg:grid-cols-2";
}

export default function FrameworksPage() {
  return (
    <div>
      <section className="bg-milky-way">
        <Container className="py-14 sm:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl space-y-4">
              <div className="mb-16">
                <a
                  href="/consulting-guide"
                  className="inline-flex items-center text-sm font-semibold text-[#081F5C] no-underline"
                >
                  <ArrowLeft size={18} className="mr-2 text-[#081F5C]" />
                  Back
                </a>
              </div>
              <Badge>Frameworks</Badge>
              <h1 className="text-3xl font-semibold tracking-tight text-galaxy sm:text-5xl">
                MECE Consulting Framework Collection
              </h1>
              <p className="text-base text-[#090814]">
                Practical frameworks to structure cases, prioritize hypotheses, and
                build rigorous, MECE analyses across common interview topics.
              </p>
            </div>
            <ButtonLink
              href="https://casecoach.com/c/drills/structuring"
              external
              variant="secondary"
              className="gap-2"
              ariaLabel="Open Practice Structuring in a new tab"
            >
              Practice Structuring <ArrowUpRight size={16} />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-sky/40 border-b border-venus">
        <Container className="py-14 sm:py-16">
          <div className="space-y-10">
            {FRAMEWORKS.map((framework) => (
              <Card key={framework.title} className="bg-meteor">
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="text-2xl font-semibold text-galaxy">
                      {framework.title}
                    </div>
                    <p className="mt-2 text-sm text-[#090814]">
                      {framework.description}
                    </p>
                  </div>

                  <div className="rounded-[10px] border border-venus bg-milky-way p-4 text-sm text-[#090814]">
                    <div className="font-semibold text-galaxy">Example Case Prompt</div>
                    <p className="mt-2 text-[#334EAC]">{framework.examplePrompt}</p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#081F5C]">
                      Framework
                    </div>
                    <div className={getFrameworkGridClass(framework.frameworkSections.length)}>
                      {framework.frameworkSections.map((section, sectionIndex) => (
                        <div key={section.title} className="space-y-3">
                          <div className="rounded-[16px] bg-[#334EAC] px-4 py-3 text-sm font-semibold text-[#FCFDFF]">
                            {sectionIndex + 1}. {section.title}
                          </div>
                          {renderSectionItems(section.items, sectionIndex)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {framework.guidingNote ? (
                    <div className="rounded-[10px] border border-venus bg-[#EDF4FA] p-4 text-sm text-[#090814]">
                      <div className="font-semibold text-galaxy">Guiding note</div>
                      <ul className="mt-2 list-disc space-y-2 pl-5">
                        {framework.guidingNote.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {framework.decisionFlow ? (
                    <div className="rounded-[10px] border border-venus bg-[#EDF4FA] p-4 text-sm text-[#090814]">
                      <div className="font-semibold text-galaxy">Decision flow</div>
                      <ol className="mt-2 list-decimal space-y-2 pl-5">
                        {framework.decisionFlow.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  ) : null}

                  <div className="rounded-[10px] border border-red-200 bg-red-50/70 p-4 text-sm text-red-700">
                    <div className="flex items-center gap-2 font-semibold">
                      <AlertTriangle size={16} />
                      Framework Tips
                    </div>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                      {framework.tips.map((tip) => (
                        <li key={tip}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-milky-way border-b border-venus">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            title="Additional resources"
            description="A few curated references to deepen your framework thinking."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Structuring Case Interviews Like a Consultant",
                description:
                  "A concise article on building MECE structures and leading with hypotheses.",
                href: "#",
              },
              {
                title: "Case in Point (Marc P. Cosentino)",
                description:
                  "A classic playbook covering frameworks, question types, and interview practice.",
                href: "#",
              },
              {
                title: "Crack the Case System (David Ohrvall)",
                description:
                  "A practical guide with detailed frameworks and step-by-step case walkthroughs.",
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
        </Container>
      </section>

      <section className="bg-sky/40">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
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
                href: "/market-sizing",
              },
            ].map((item) => (
              <Card key={item.title} className="bg-meteor md:col-span-1">
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
        </Container>
      </section>
    </div>
  );
}
