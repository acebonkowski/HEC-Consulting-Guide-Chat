import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Download } from "react-feather";
import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PivotSlider, type PivotSection } from "@/components/PivotSlider";

export const metadata = {
  title: "Resume & Cover Letter Tips | HEC MBA Consulting Club",
  description:
    "Resume and cover letter guidance focused on consulting-ready skills, pivots, and cover letter structure.",
};

const PRIMARY_BUTTON_CLASSES =
  "inline-flex items-center justify-center rounded-[5px] px-4 py-2 text-sm font-semibold transition-colors bg-[#334EAC] text-[#FCFDFF] hover:bg-[#081F5C] focus-visible:ring-2 focus-visible:ring-[#334EAC]";

const SKILL_GROUPS = [
  {
    label: "Priority 1 skills",
    skills: [
      {
        priority: "Priority 1",
        title: "Analytical & Problem-Solving Skills",
        description:
          "Ability to break down ambiguous problems, build and test hypotheses with data, and derive evidence-based, actionable recommendations.",
        phrases: [
          "Structure and organize ambiguous problems – “structure,” “organize,” “tackle,” “address”",
          "Hypothesis-driven approach – “formulate,” “test,” “validate” hypotheses",
          "Data-driven decision making – “leverage data,” “draw conclusions from facts,” “inform recommendations with evidence”",
          "Quantitative problem solving – “analyze data sets,” “perform rigorous quantitative analysis”",
          "Evidence-based recommendations – “formulate actionable, evidence-based solutions”",
          "Generate fresh insights – “identify,” “uncover,” “distill,” “derive” insights from research and analysis",
          "Critical thinking – “rigorous,” “structured,” “logical”",
          "Detail-oriented analysis – “conduct in-depth,” “comprehensive,” “granular” analyses",
          "Formulate actionable recommendations – “develop,” “design,” “craft”",
          "Analytical rigor – “maintain,” “apply analytical rigor”",
          "Fact-based decision making – “ensure,” “apply fact-based logic”",
        ],
        examples: [
          "“Structured an ambiguous market-entry problem into three workstreams, analyzed 15k+ data points, and developed two evidence-based entry options adopted by senior management.”",
          "“Performed rigorous quantitative analysis on pricing data, testing three hypotheses and identifying a configuration that increased margin by 4 percentage points.”",
          "“Leveraged data from customer surveys and transactions to uncover key churn drivers and crafted actionable recommendations that reduced churn by 8%.”",
        ],
      },
      {
        priority: "Priority 1",
        title: "Communication & Presentation Skills",
        description:
          "Ability to turn complex analysis into clear, compelling stories and deliver them effectively to senior, diverse audiences.",
        phrases: [
          "Executive-level presentations – “deliver,” “create,” “design”",
          "Tailor messages to diverse audiences – “adapt,” “adjust,” “customize” communication",
          "Clear and concise storytelling – “craft,” “weave,” “communicate” compelling narratives",
          "Synthesize complex information – “distill,” “translate,” “summarize” complexity",
          "Present recommendations to key decision makers – “persuade,” “influence,” “gain buy-in”",
          "Articulate strategies and insights with precision – “clearly,” “succinctly,” “logically”",
        ],
        examples: [
          "“Designed and delivered executive-level presentation summarizing a 4-month project into a 10-slide narrative that persuaded the board to approve a €2m initiative.”",
          "“Distilled complex analytical findings into a concise storyline for cross-functional stakeholders, adapting messaging for both technical and non-technical audiences.”",
          "“Communicated recommendations clearly and logically to senior decision makers, gaining buy-in for process changes across three departments.”",
        ],
      },
      {
        priority: "Priority 1",
        title: "Collaboration & Teamwork",
        description:
          "Ability to work effectively with diverse, cross-functional, and multicultural teams, building trust and co-creating solutions.",
        phrases: [
          "Cross-functional collaboration – “partner with,” “work alongside,” “coordinate with” diverse teams",
          "Global, multicultural teamwork – “integrate,” “leverage” diverse perspectives",
          "Collaborate with clients and colleagues to co-create solutions – “co-develop,” “align,” “brainstorm”",
          "Work effectively in diverse teams – “foster,” “build,” “nurture” team effectiveness",
          "Build trust with stakeholders – “establish,” “maintain,” “strengthen” trust",
        ],
        examples: [
          "“Partnered with product, finance, and operations teams across three regions to co-develop a new reporting process adopted company-wide.”",
          "“Co-developed solutions with client stakeholders through joint workshops, aligning priorities and securing commitment from all key functions.”",
          "“Built and maintained strong relationships with internal and external stakeholders, fostering a collaborative team culture that improved project delivery.”",
        ],
      },
    ],
  },
  {
    label: "Priority 2 skills",
    skills: [
      {
        priority: "Priority 2",
        title: "Project & Time Management Skills",
        description:
          "Ability to own and drive projects end-to-end, manage multiple priorities under pressure, and deliver high-quality outputs on time.",
        phrases: [
          "End-to-end project ownership – “take ownership,” “drive,” “oversee”",
          "Manage competing priorities under tight deadlines – “balance,” “prioritize,” “deliver” under pressure",
          "Project workstreams and deliverables – “scope,” “track,” “manage” deliverables",
          "Create and execute complex project plans with clear goals – “define,” “set,” “align” objectives",
          "Prioritize tasks effectively – “sequence,” “allocate” resources",
        ],
        examples: [
          "“Took ownership of an end-to-end process-optimization project, overseeing four workstreams and delivering all milestones on or ahead of schedule.”",
          "“Balanced competing priorities across three concurrent projects under tight deadlines, consistently delivering high-quality analyses and presentations.”",
          "“Defined clear objectives and timelines for a cross-functional initiative, tracked deliverables, and aligned stakeholders to ensure on-time completion.”",
        ],
      },
      {
        priority: "Priority 2",
        title: "Adaptability & Learning Agility",
        description:
          "Ability to adjust quickly to changing business needs, thrive under pressure, and continuously learn from feedback.",
        phrases: [
          "Adapt to dynamic business needs – “respond to,” “pivot,” “adjust” to changes",
          "Resilience in high-performance environments – “thrive under pressure,” “bounce back”",
          "Continuous learning and feedback culture – “embrace,” “incorporate” feedback",
          "Thrive in fast-paced environments – “excel,” “deliver,” “remain effective” in speed",
        ],
        examples: [
          "“Responded to shifting project scope and pivoted analysis twice following regulatory changes, while still delivering recommendations within the original deadline.”",
          "“Thrived under high-pressure conditions during peak season by reprioritizing tasks and maintaining consistent output quality.”",
          "“Embraced feedback from managers, incorporating suggestions into subsequent analyses and improving slide quality scores from 3.5/5 to 4.7/5.”",
        ],
      },
      {
        priority: "Priority 2",
        title: "Client Orientation & Relationship Management",
        description:
          "Ability to focus on client impact, tailor solutions to client needs, support implementation, and influence senior stakeholders.",
        phrases: [
          "Deliver lasting impact – “achieve,” “ensure,” “create” impact",
          "Client-centric solutions – “design,” “develop,” “tailor” to client needs",
          "Drive implementation of strategic recommendations – “lead,” “support,” “manage” implementation",
          "Influence senior stakeholders – “engage,” “advise,” “gain buy-in”",
        ],
        examples: [
          "“Designed client-centric reporting dashboard tailored to sales leaders’ needs, reducing manual reporting time by 60% and improving decision speed.”",
          "“Supported implementation of strategic recommendations across two client departments, managing rollout and ensuring adoption targets were met.”",
          "“Engaged and advised senior stakeholders through regular update meetings, gaining buy-in for a new pricing strategy.”",
        ],
      },
    ],
  },
  {
    label: "Priority 3 skills",
    skills: [
      {
        priority: "Priority 3",
        title: "Leadership & People Development",
        description:
          "Ability to lead key workstreams, motivate teams, and support the growth of junior colleagues.",
        phrases: [
          "Lead key workstreams – “own,” “manage,” “direct” workstreams",
          "Mentor and develop junior team members – “coach,” “guide,” “support”",
          "Demonstrated leadership in diverse group settings – “inspire,” “motivate,” “align” teams",
        ],
        examples: [
          "“Owned and managed a critical workstream in a company-wide transformation project, coordinating tasks across three functions.”",
          "“Coached and guided two junior analysts, improving their analytical output and helping them meet all development goals.”",
          "“Motivated and aligned a diverse project team of six members, increasing on-time delivery of tasks from 70% to 95%.”",
        ],
      },
      {
        priority: "Priority 3",
        title: "Business & Commercial Acumen",
        description:
          "Ability to understand business models, identify opportunities and risks, and shape strategies that improve growth and competitiveness.",
        phrases: [
          "Strategic transformation – “drive,” “enable,” “shape” transformation",
          "Identify business opportunities and risks – “spot,” “assess,” “evaluate”",
          "Develop strategies to improve growth and competitiveness – “craft,” “design,” “implement”",
        ],
        examples: [
          "“Helped shape strategic transformation of a business unit by assessing current performance and proposing three initiatives projected to increase EBIT by 10%.”",
          "“Evaluated market data to spot new business opportunities and risks in a target segment, informing leadership’s investment decisions.”",
          "“Crafted and implemented a growth strategy for a product line, contributing to a 15% year-over-year revenue increase.”",
        ],
      },
    ],
  },
];

const PIVOT_SECTIONS: PivotSection[] = [
  {
    tabLabel: "Finance",
    title: "Finance",
    summary:
      "Emphasize analytical rigor, quantitative problem solving, and client impact; de-emphasize pure execution or product jargon.",
    howToReframe: [
      "Highlight hypothesis-driven analysis, financial modeling as problem solving, and recommendations to decision makers.",
      "Emphasize work with clients, internal stakeholders, and cross-functional teams.",
      "Quantify value: cost savings, revenue impact, risk reduction.",
    ],
    transformations: [
      {
        before:
          "“Prepared monthly P&L reports and variance analyses for portfolio companies.”",
        after:
          "“Analyzed monthly P&L and cash-flow data for 5 portfolio companies, identified €1.2m in cost-saving opportunities, and presented evidence-based recommendations to CFOs.”",
      },
      {
        before: "“Built 3-statement models to evaluate M&A targets.”",
        after:
          "“Formulated and tested valuation hypotheses for 4 acquisition targets using 3-statement models, assessing synergies and risks to inform CEO investment decisions.”",
      },
      {
        before: "“Supported coverage of corporate clients.”",
        after:
          "“Collaborated with relationship managers to tailor financing structures for 10+ mid-market clients, helping close deals worth €80m.”",
      },
    ],
  },
  {
    tabLabel: "Marketing, Sales & Product",
    title: "Marketing, Sales & Product",
    summary:
      "Focus on data-driven decision making, customer insights, commercial impact, and cross-functional collaboration.",
    howToReframe: [
      "Treat campaigns and launches as structured experiments with hypotheses, data, and impact.",
      "Emphasize segmentation, pricing, funnel analysis, and revenue outcomes.",
      "Show how you synthesized insights and persuaded stakeholders.",
    ],
    transformations: [
      {
        before: "“Created social media campaigns to increase engagement.”",
        after:
          "“Designed and tested hypothesis-driven digital campaigns (A/B tests on 3 creatives), increasing click-through rate by 25% and driving 12% uplift in qualified leads.”",
      },
      {
        before: "“Launched CRM flows for existing customers.”",
        after:
          "“Mapped customer lifecycle, analyzed churn drivers, and implemented segmented CRM journeys that reduced churn by 8%.”",
      },
      {
        before: "“Worked with product and sales on pricing.”",
        after:
          "“Partnered with product and sales teams to co-develop a new pricing package, aligning stakeholders and increasing ARPU by 6%.”",
      },
    ],
  },
  {
    tabLabel: "STEM",
    title: "STEM",
    summary:
      "Translate technical depth into structured problem solving, quantitative insight, and clear communication to non-experts.",
    howToReframe: [
      "Frame technical work as solving business problems under constraints.",
      "Highlight experimentation, optimization, and decision support.",
      "Stress explaining complex topics to non-technical stakeholders.",
    ],
    transformations: [
      {
        before: "“Developed machine learning model with 90% accuracy.”",
        after:
          "“Developed and deployed machine-learning model (AUC 0.90) to predict customer churn, enabling targeted retention campaigns and reducing churn in pilot group by 10%.”",
      },
      {
        before: "“Built simulation of production line.”",
        after:
          "“Formulated and tested hypotheses on production bottlenecks via discrete-event simulation, identifying changes that increased throughput by 7%.”",
      },
      {
        before: "“Presented research at internal meeting.”",
        after:
          "“Delivered executive-level presentation translating complex technical findings into clear business implications for operations leadership.”",
      },
    ],
  },
  {
    tabLabel: "Operations",
    title: "Operations",
    summary:
      "Emphasize end-to-end ownership, process optimization, and measurable improvements in cost, quality, and speed.",
    howToReframe: [
      "Turn operational responsibilities into structured improvement projects.",
      "Quantify impact in lead time, error rate, cost, or service levels.",
      "Show cross-functional coordination with sales, logistics, finance, etc.",
    ],
    transformations: [
      {
        before: "“Managed warehouse operations including inventory and logistics.”",
        after:
          "“Owned end-to-end inventory optimization project across 2 warehouses, redesigning processes and KPIs to reduce stock-outs by 30% and cut working capital by €400k.”",
      },
      {
        before: "“Improved workflow for order processing.”",
        after:
          "“Mapped current-state order process, identified 3 bottlenecks, and implemented lean measures that reduced processing time by 22%.”",
      },
      {
        before: "“Handled peak season staffing.”",
        after:
          "“Balanced competing priorities during peak season by reallocating staff across teams, maintaining on-time delivery above 98%.”",
      },
    ],
  },
  {
    tabLabel: "Non-Traditional Fields",
    title: "Non-Traditional Fields",
    summary:
      "Extract problem-solving, leadership, and stakeholder management from any context (non-profit, arts, teaching, public sector, hospitality, etc.).",
    howToReframe: [
      "Focus on initiatives you owned: new programs, processes, or events.",
      "Quantify outcomes: participants, funds, satisfaction, efficiency.",
      "Highlight work with diverse groups and in resource-constrained settings.",
    ],
    transformations: [
      {
        before: "“Organized community events for local NGO.”",
        after:
          "“Led planning and execution of 4 community outreach campaigns, coordinating 20+ volunteers and increasing program participation by 40% within one year.”",
      },
      {
        before: "“Supervised volunteers.”",
        after:
          "“Coached and coordinated 15 volunteers, introducing clear roles and routines that doubled event throughput.”",
      },
      {
        before: "“Surveyed participants about satisfaction.”",
        after:
          "“Designed and analyzed participant survey (n=300), identified 3 key improvement areas, and implemented changes that raised satisfaction from 3.7 to 4.5/5.”",
      },
    ],
  },
];

const COVER_LETTER_SECTIONS = [
  {
    number: "01",
    title: "Who You Are",
    subtitle: "",
    goals: [
      "Establish your profile and credibility in 1–2 short paragraphs.",
      "Highlight 2–3 experiences that show Priority-1 skills: analytical problem solving, communication, collaboration.",
    ],
    tips: [
      {
        label: "Start with a one-sentence positioning statement:",
        examples: [
          "“I am an MSc candidate in Economics with experience in data-driven growth projects across tech and finance.”",
        ],
      },
      {
        label: "Use 2–3 concise, quantified examples:",
        examples: [
          "“In my role at Company A, I structured an ambiguous expansion problem into three workstreams, analyzed market data across five countries, and recommended a strategy expected to grow revenue by 15%.”",
          "“As project lead in a student consulting engagement, I delivered executive-level presentations to a client CEO, synthesizing complex analyses into a clear recommendation adopted in full.”",
        ],
      },
      {
        label:
          "Mirror the CV language: emphasize “structured,” “hypothesis-driven,” “data-driven,” “client-centric,” “cross-functional.”",
        examples: [],
      },
    ],
  },
  {
    number: "02",
    title: "Why Consulting",
    subtitle: "",
    goals: [
      "Show a logical, forward-looking career story.",
      "Connect your past experiences to what consulting offers.",
    ],
    tips: [
      {
        label: "Identify the common thread in your experience:",
        examples: [
          "“Across my internships, I have gravitated toward cross-functional, analytical projects where I could shape strategy rather than only execute.”",
        ],
      },
      {
        label: "Explain why consulting is the best next step now:",
        examples: [
          "“Consulting is the most effective way for me to deepen my structured problem-solving skills while working on diverse, high-impact problems across industries.”",
        ],
      },
      {
        label: "Emphasize learning agility and feedback:",
        examples: [
          "“I am seeking an environment where I can thrive under pressure, receive frequent feedback, and accelerate my development alongside high-performing teams.”",
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Why This Firm",
    subtitle: "",
    goals: [
      "Demonstrate genuine interest and fit with this specific firm and office.",
      "Link firm attributes to your skills and goals.",
    ],
    tips: [
      {
        label: "Reference 2–3 concrete aspects:",
        bullets: [
          "Practice areas (e.g., digital, sustainability, PE, operations).",
          "Office focus or geography.",
          "Training model, culture, or specific initiatives.",
          "Conversations with current consultants.",
        ],
        examples: [],
      },
      {
        label: "Tie each aspect to your story:",
        examples: [
          "“Your Munich office’s focus on digital and transformation aligns with my experience in data-driven growth projects and my interest in European tech clients.”",
          "“Discussions with Consultant X and Manager Y highlighted your strong apprenticeship culture, which mirrors the environments where I have grown fastest.”",
        ],
      },
      {
        label: "Close with a clear, confident line:",
        examples: [
          "“I would be excited to bring my analytical rigor, collaborative mindset, and experience in X to your team, and I look forward to the opportunity to discuss my application.”",
        ],
      },
    ],
  },
];

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold tracking-tight text-galaxy sm:text-3xl">
        {title}
      </h2>
      <p className="max-w-3xl text-sm text-[#090814] sm:text-base">
        {description}
      </p>
    </div>
  );
}

function SkillCard({
  priority,
  title,
  description,
  phrases,
  examples,
}: {
  priority: string;
  title: string;
  description: string;
  phrases: string[];
  examples: string[];
}) {
  return (
    <Card className="bg-meteor">
      <Badge>{priority}</Badge>
      <div className="mt-4 text-xl font-semibold text-galaxy">{title}</div>
      <p className="mt-2 text-sm text-[#090814]">{description}</p>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="text-sm text-[#090814]">
          <div className="font-semibold text-galaxy">Phrases &amp; Key Words</div>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            {phrases.map((phrase) => (
              <li key={phrase}>
                {(() => {
                  const separator = phrase.includes(" – ") ? " – " : " - ";
                  const parts = phrase.split(separator);
                  if (parts.length < 2) {
                    return phrase;
                  }
                  return (
                    <>
                      <strong>{parts[0]}</strong>
                      {separator}
                      {parts.slice(1).join(separator)}
                    </>
                  );
                })()}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-[#090814]">
          <div className="font-semibold text-galaxy">Examples</div>
          <div className="mt-2 space-y-2 text-[#334EAC]">
            {examples.map((example) => (
              <p key={example}>{example}</p>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function ResumeCoverLetterTipsPage() {
  return (
    <div>
      <section className="bg-milky-way">
        <Container className="py-14 sm:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
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
              <Badge>Resume &amp; Cover Letter</Badge>
              <h1 className="text-3xl font-semibold tracking-tight text-galaxy sm:text-5xl">
                Resume &amp; Cover Letter Best Practices
              </h1>
              <p className="text-base text-[#090814]">
                A strong management consulting CV makes it easy to see that you solve
                complex problems, communicate clearly, and drive impact in teams and
                projects. It should be one page, structured, quantified, and written in
                the same skill language your target firms use.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href="https://chatgpt.com/g/g-698add7652c88191a56837dc300c4067-hec-mba-consulting-club-resume-assessment"
                  variant="primary"
                  className="gap-2"
                  external
                >
                  <Image
                    src="/openai-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="brightness-0 invert"
                  />
                  Assess Your Resume
                  <ArrowUpRight size={16} />
                </ButtonLink>
                <ButtonLink
                  href="https://chatgpt.com/g/g-698afea3fcf481918ca8a9095ed244dd-hec-mba-consulting-club-s-cover-letter-assessment"
                  variant="primary"
                  className="gap-2"
                  external
                >
                  <Image
                    src="/openai-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="brightness-0 invert"
                  />
                  Check Your Cover Letter
                  <ArrowUpRight size={16} />
                </ButtonLink>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <a
                href="/HEC_MBA_CV_TEMPLATE_-_NEW_2025_June_OK.docx"
                download
                className={PRIMARY_BUTTON_CLASSES}
              >
                <span className="inline-flex items-center gap-2">
                  Download Resume Template
                  <Download size={16} />
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sky/40 border-b border-venus">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            title="Skills"
            description="Use the consulting skill language below to sharpen your bullet points and show the right priorities."
          />
          <div className="mt-10 space-y-10">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label} className="space-y-6">
                <div className="space-y-6">
                  {group.skills.map((skill) => (
                    <SkillCard key={skill.title} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-milky-way border-b border-venus">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            title="Translating other backgrounds into a consulting CV"
            description="Reframe your experience by highlighting analytical rigor, structured problem solving, and client impact."
          />
          <div className="mt-10">
            <PivotSlider sections={PIVOT_SECTIONS} />
          </div>
        </Container>
      </section>

      <section className="bg-sky/40 border-b border-venus">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            title="Writing a strong consulting cover letter"
            description="Aim for one page, structured into three clear parts: (1) Who you are, (2) Why consulting now, and (3) Why this firm."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {COVER_LETTER_SECTIONS.map((section) => (
              <Card key={section.title} className="flex h-full flex-col bg-meteor">
                <div className="text-xl font-light text-[#081F5C]">
                  {section.number}
                </div>
                <div className="mt-2 text-xl font-bold text-galaxy">
                  {section.title}
                </div>
                <div className="mt-1 text-sm font-semibold text-[#334EAC]">
                  {section.subtitle}
                </div>
                <div className="mt-4 text-sm text-[#090814]">
                  <div className="font-semibold">Goals:</div>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    {section.goals.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 text-sm text-[#090814]">
                  <div className="space-y-4">
                    {section.tips.map((tip) => (
                      <div key={tip.label}>
                        <div className="font-semibold">{tip.label}</div>
                        {tip.bullets ? (
                          <ul className="mt-2 list-disc space-y-2 pl-5">
                            {tip.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        ) : null}
                        {tip.examples?.length ? (
                          <div className="mt-2 space-y-2 text-[#334EAC]">
                            {tip.examples.map((example) => (
                              <p key={example}>{example}</p>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-milky-way">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Consulting Company Descriptions",
                description:
                  "Explore firm profiles, culture, and key differentiators across top consultancies.",
                href: "/consulting-companies",
              },
              {
                title: "Frameworks",
                description:
                  "Review the core case frameworks and guidance on how to flex them.",
                href: "/frameworks",
              },
              {
                title: "Industry Breakdowns",
                description:
                  "Key drivers, economics, and trends across common case industries.",
                href: "/industry-breakdown",
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
    </div>
  );
}
