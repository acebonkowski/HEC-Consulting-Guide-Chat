import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Users,
  BarChart2,
  MessageCircle,
  Clipboard,
  Zap,
  Target,
  Award,
  Briefcase,
  ArrowUpRight,
  Mail,
  MessageSquare,
} from "react-feather";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { DayInLifeDonut } from "@/components/DayInLifeDonut";

const DAY_IN_LIFE_BREAKDOWN = [
  { label: "Analysis", hours: 22.5, display: "20–25h", color: "#334EAC" },
  { label: "Client Meetings", hours: 12.5, display: "10–15h", color: "#7096D1" },
  { label: "Slide Building", hours: 11, display: "10–12h", color: "#8FB6D8" },
  { label: "Team Coordination", hours: 6.5, display: "5–8h", color: "#5F86A6" },
  { label: "Travel (If Needed)", hours: 4, display: "3–5h", color: "#CFE3F1" },
  { label: "Learning/Admin", hours: 3.5, display: "3–5h", color: "#243A5E" },
] as const;

const DAY_IN_LIFE_TOTAL = 60;

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
      <div className="inline-flex items-center gap-2 rounded-full bg-[#BAD6EB] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#081F5C] ring-1 ring-venus">
        <span className="h-1.5 w-1.5 rounded-full bg-[#081F5C]" aria-hidden="true" />
        {kicker}
      </div>
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

function SourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="text-[11px] font-light uppercase text-[#BAD6EB] underline underline-offset-4 hover:text-[#7096D1]"
    >
      {label}
    </a>
  );
}

export default function HomePage() {
  return (
    <div id="home">
      {/* Hero */}
      <section className="relative overflow-hidden bg-milky-way">
        <Container className="py-14 sm:py-18">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <Badge>Consulting Overview</Badge>
              <h1 className="text-3xl font-semibold tracking-tight text-galaxy sm:text-5xl">
                Welcome to the HEC MBA Consulting Club!
              </h1>
              <p className="text-base text-[#090814]">
                A single, source-backed destination for MBA students to understand the
                consulting role, the recruiting market, and how to prepare realistically.
              </p>
              <div className="flex flex-wrap gap-3">
              <ButtonLink href="#contact" variant="primary" className="h-10 gap-2">
                Get Involved <MessageSquare size={16} />
                </ButtonLink>
                <ButtonLink href="/consulting-guide" variant="secondary" className="h-10 gap-2">
                  Consulting Guide <BookOpen size={16} />
                </ButtonLink>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[10px] bg-sky blur-2xl" />
              <div className="relative overflow-hidden rounded-[10px] bg-meteor p-6">
                    <Image
                  src="/header-illustration.svg"
                  alt="Consulting illustration"
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

      {/* The Role */}
      <section id="role" className="bg-sky/40 border-b border-venus">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            kicker="The Role"
            title="What Consulting Looks Like in Practice"
            description="As a consultant, you help organizations solve complex problems and improve performance by analyzing how they currently operate, & recommending better strategies, structures, and processes. "
          />

          <div className="mt-10 flex flex-col gap-6">
            <Card className="bg-meteor">
              <div className="text-xl font-bold text-galaxy">Core Consulting Skills</div>
              <div className="mt-4 grid gap-6 text-sm text-[#090814] md:grid-cols-2 md:auto-rows-fr md:gap-x-8">
                <div className="flex h-full flex-col gap-3 rounded-[10px] bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                    <BarChart2 className="text-[#FCFDFF]" size={18} stroke="#FCFDFF" />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Analytical Problem‑Solving</span>
                  </div>
                  <div>
                    Structure ambiguous problems, apply hypotheses and data, and translate insights into recommendations, including building Excel/BI models, pressure-testing assumptions, and synthesizing data.

                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-[10px] bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                    <MessageCircle className="text-[#FCFDFF]" size={18} stroke="#FCFDFF" />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Communication</span>
                  </div>
                  <div>
                    Craft clear narratives, synthesize complexity, and tailor messages to senior stakeholders, including slide building and steering-committee presentations.
                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-[10px] bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                    <Users className="text-[#FCFDFF]" size={18} stroke="#FCFDFF" />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Teamwork & Leadership</span>
                  </div>
                  <div>
                    Work effectively in cross-functional teams. Lead modules, mentor juniors, and give feedback, including daily coordination with partners, managers, and client teams.
                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-[10px] bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                    <Clipboard className="text-[#FCFDFF]" size={18} stroke="#FCFDFF" />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Project Management</span>
                  </div>
                  <div>
                    Own workstreams end to end and manage competing priorities. Take ownership of projects, set milestones, and track progress amidst of changing client demands. 
                    
                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-[10px] bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                    <Zap className="text-[#FCFDFF]" size={18} stroke="#FCFDFF" />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Learning Agility</span>
                  </div>
                  <div>
                    Rapidly adjust to new industries, topics, and client needs, e.g., learning about AI or new sectors on the fly. Connect recommendations to value creation (P&amp;L, ROI).
                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-[10px] bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                    <Target className="text-[#FCFDFF]" size={18} stroke="#FCFDFF" />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Client Orientation</span>
              </div>
                  <div>
                    Design client-centric solutions focused on value creation, travel to client locations, and join meetings to scope alignment and provide implementation support.
            
                  </div>
              </div>
               
              </div>
            </Card>

            <Card className="bg-meteor">
              <div className="grid gap-6 md:grid-cols-2 md:items-center">
                <div className="flex h-full flex-col justify-between">
                <div>
                    <div className="text-xl font-bold text-galaxy">Day-in-the-Life</div>
                    <p className="mt-2 text-sm text-[#090814]">
                      As a consultant, you can expect a typical workload of{" "}
                      <span className="font-semibold">50–60 hours</span> per week (excluding extra travel/admin). <br />{" "}
                      <br /> In comparison, European firms typically have formal 40h contracts (even if actual hours
                      often higher). In the US and GCC, projects frequently reach 60–80h during peak periods.
                    </p>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <SourceLink
                  href="https://www.casebasix.com/pages/work-life-balance-consulting"
                  label="Source: CaseBasix"
                />
                <SourceLink
                  href="https://www.consultancy.eu/career/work-life-balance"
                  label="Source: Consultancy.eu"
                />
                  </div>
                </div>
                <DayInLifeDonut data={DAY_IN_LIFE_BREAKDOWN} total={DAY_IN_LIFE_TOTAL} />
              </div>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Europe (Incl. UK)",
                  value: "€90–110k",
                  description:
                    "MBB Associate base in major EU markets, including Germany and the UK.",
                  flag: "🇪🇺",
                  source:
                    "https://caselane.ai/blog/mckinsey-salary-2025",
                  sourceLabel: "Source: CaseLane.ai",
                },
                {
                  title: "United States",
                  value: "$190–192k",
                  description:
                    "Typical MBB post‑MBA base, total comp commonly exceeds $230k with bonus.",
                  flag: "🇺🇸",
                  source:
                    "https://www.businessbecause.com/news/in-the-news/9655/management-consultant-salaries-2025",
                  sourceLabel: "Source: BusinessBecause",
                },
                {
                  title: "Middle East (GCC)",
                  value: "$130k+",
                  description:
                    "Base around $130k plus allowances and performance bonus, total often exceeds $200k.",
                  flag: "🇦🇪",
                  source:
                    "https://managementconsulted.com/consultant-salary/",
                  sourceLabel: "Source: Management Consulted",
                },
              ].map((item) => (
                <Card key={item.title} className="bg-meteor">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-galaxy">
                      {item.title}
                    </div>
                    <span className="ml-auto text-2xl" aria-hidden="true">
                      {item.flag}
                    </span>
                  </div>
                  <div className="mt-4 text-[50px] font-semibold text-[#7096D1]">
                    {item.value}
                  </div>
                  <p className="mt-3 text-sm text-[#090814]">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <SourceLink href={item.source} label={item.sourceLabel} />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Card className="bg-meteor">
              <div className="text-xl font-bold text-galaxy">What Consultants Like (And Don't Like) About Their Job</div>
              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div>
                  <div className="inline-flex items-center rounded-full bg-[#89D8BA]/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#081F5C]">
                    Pros
                  </div>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-[#090814]">
                    <li><span className="font-semibold">High Compensation & Accelerated Learning:</span> Consultants praise top pay that funds lifestyles and rapid skill-building via diverse projects, likened to "professional speed dating" without errors costing jobs.</li>
                    <li><span className="font-semibold">Strong Career Optionality After 2–4 Years:</span> Exits to private equity, strategy, tech, or startups leverage the resume boost and broad exposure.

</li>
                    <li><span className="font-semibold"> Variety of Industries & Problems:</span> Tackle different sectors & challenges, gaining early access to executives for networking & communication skills.</li>
                  </ul>
                </div>
                <div>
                  <div className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-900">
                    Cons
                  </div>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-[#090814]">
                    <li><span className="font-semibold">Long Hours & Burnout Risk:</span> 80+ hour weeks cause exhaustion, mental health issues, substance use, and medical leaves. Up to 75% time on-site leads to flight fatigue and family strain.</li>
                    <li><span className="font-semibold">Unpredictable Staffing:</span> Fight for billable roles, network internally amid bench risks and chaotic pipelines.</li>
                    <li><span className="font-semibold">Up-or-Out Promotion Pressure:</span> Miss promotions in reviews and face counseling out, driving cutthroat competition.</li>
                  </ul>
                </div>
              </div>
              <p className="mt-10 text-xs text-[#090814]">
              
                <a
                  href="https://www.reddit.com/r/consulting/"
                  className="text-[11px] font-light uppercase text-[#BAD6EB] underline underline-offset-4 hover:text-[#7096D1]"
                >
                  Learn More By Visiting r/consulting
                </a>
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* The Market */}
      <section id="market" className="bg-milky-way border-b border-venus">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            kicker="The Market"
            title="Hiring Is Selective & Regionally Uneven"
            description="The consulting job market in January 2026 shows modest recovery signs amid economic uncertainty, with hiring thawing but remaining selective and competitive."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_2fr]">
            <Card className="bg-meteor">
              <div className="flex h-full flex-col justify-between">
              <div className="flex w-full items-center text-xl font-bold text-galaxy">
                  <span>Change In Job Postings</span>
                  <span className="ml-auto text-2xl" aria-hidden="true">💼</span>
                </div>
                <p className="mt-2 text-sm text-[#090814]">
                  <span className="text-[50px] font-semibold text-[#7096D1]">60%</span>
                  <br /> YoY increase between H1 2024 & H1 2025, showing a rebound in hiring concentrated in specific firms, functions, and regions. 
              </p>
              <div className="mt-4">
                <SourceLink
                  href="https://blog.getaura.ai/management-consulting-job-market-2025"
                  label="Source: AURA"
                />
                </div>
              </div>
            </Card>

            <Card className="bg-meteor">
              <div className="text-xl font-bold text-galaxy">Trends Impacting Recruiting</div>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-[#090814]">
                <li><span className="font-semibold">Shift Of Roles:</span> Firms prioritize candidates with expertise in digital analytics, AI tools, and strategy execution, as seen in rising job postings for roles like Digital Analytics Consultants with productivity gains from AI driving demand for new skills.</li>
                <li><span className="font-semibold">Sustainability and ESG demand increases:</span> ESG hiring is rebounding due to regulatory clarity, especially in Europe, with selective roles tying sustainability skills to business outcomes.</li>
                <li><span className="font-semibold">Emphasis On Fit & Proof Of Skills:</span> Skills-based assessments and AI-driven screening replace degree-focused filters, emphasizing competencies, business acumen, and cultural fit through methods like digital games and chatbot cases.</li>
              </ol>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <Card className="bg-meteor">
              <div className="flex w-full items-center text-xl font-bold text-galaxy">
                <span>Europe</span>
                <span className="ml-auto text-2xl" aria-hidden="true">🇪🇺</span>
              </div>
              <p className="mt-2 text-sm text-[#090814]">
                  <span className="text-[50px] font-semibold text-[#7096D1]">5.99%</span>
                  <br /> CAGR (2026-2033) of the strategy consulting market in Europe as the largest market in EMEA characterized by disciplined hirin. 
              </p>
              <div className="mt-4">
                <SourceLink
                  href="https://www.mordorintelligence.com/industry-reports/europe-management-consulting-services-market"
                  label="Source: Mordor Intelligence"
                />
              </div>
            </Card>

            <Card className="bg-meteor">
              <div className="flex w-full items-center text-xl font-bold text-galaxy">
                <span>United States</span>
                <span className="ml-auto text-2xl" aria-hidden="true">🇺🇸</span>
              </div>
              <p className="mt-2 text-sm text-[#090814]">
                  <span className="text-[50px] font-semibold text-[#7096D1]">4.94%</span>
                  <br /> CAGR (2026-2031) in US for 2025 fueled by AI, cloud migration, and cybersecurity needs, with selective hiring in strategy teams.
              </p>
              <div className="mt-4">
                <SourceLink
                  href="https://www.mordorintelligence.com/industry-reports/us-management-consulting-services-market"
                  label="Source: Mordor Intelligence"
                />
              </div>
            </Card>

            <Card className="bg-meteor">
              <div className="flex w-full items-center text-xl font-bold text-galaxy">
                <span>Middle East (GCC)</span>
                <span className="ml-auto text-2xl" aria-hidden="true">🇦🇪</span>
              </div>
              <p className="mt-2 text-sm text-[#090814]">
                  <span className="text-[50px] font-semibold text-[#7096D1]">12%</span>
                  <br /> Growth forecasted in GCC for 2025 driven by high demand in digital tech, AI, energy transition, and financial services.

</p>
              <div className="mt-4">
                <SourceLink
                  href="https://www.consultancy-me.com/news/11464/consulting-market-of-gcc-to-grow-by-12-to-over-8-billion-in-2025"
                  label="Source: Consultancy Middle East"
                />
              </div>
            </Card>
          </div>

          <div className="mt-10">
            <Card className="bg-meteor">
              <div className="text-xl font-bold text-galaxy">Who Hires Consultants</div>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[620px] border-separate border-spacing-0 text-sm">
                  <thead>
                    <tr className="text-left">
                      <th className="bg-[#081F5C] px-4 py-3 font-semibold text-[#FCFDFF]">
                        Category
                      </th>
                      <th className="bg-[#081F5C] px-4 py-3 font-semibold text-[#FCFDFF]">
                        Example Firms
                      </th>
                      <th className="bg-[#081F5C] px-4 py-3 font-semibold text-[#FCFDFF]">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 font-semibold">MBB</td>
                      <td className="px-4 py-3">McKinsey, BCG, Bain</td>
                      <td className="px-4 py-3 text-[#090814]">
                        Global strategy leaders with high-impact work, premium compensation, and broad sector coverage.
                      </td>
                    </tr>
                    <tr className="bg-[#BAD6EB]/20">
                      <td className="px-4 py-3 font-semibold">Big 4</td>
                      <td className="px-4 py-3">Deloitte, PwC, EY, KPMG</td>
                      <td className="px-4 py-3 text-[#090814]">
                        Large professional-services firms with strong implementation, risk, deals, and technology practices.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Tier‑2/Strategy</td>
                      <td className="px-4 py-3">
                        Oliver Wyman, Strategy&amp;, Kearney, Roland Berger, L.E.K., Alvarez &amp; Marsal
                      </td>
                      <td className="px-4 py-3 text-[#090814]">
                        Strategy-focused firms often specialized by sector or region, with work similar to MBB in many teams.
                      </td>
                    </tr>
                    <tr className="bg-[#BAD6EB]/20">
                      <td className="px-4 py-3 font-semibold">Boutiques</td>
                      <td className="px-4 py-3">AlixPartners, Simon‑Kucher, FTI</td>
                      <td className="px-4 py-3 text-[#090814]">
                        Deep functional or industry specialization with early responsibility.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Implementation/Digital</td>
                      <td className="px-4 py-3">Accenture, Capgemini, IBM Consulting</td>
                      <td className="px-4 py-3 text-[#090814]">
                        Technology, systems integration, and large-scale transformation focus.
                      </td>
                    </tr>
                    <tr className="bg-[#BAD6EB]/20">
                      <td className="px-4 py-3 font-semibold">In-House Consulting</td>
                      <td className="px-4 py-3">Siemens, Amazon, Allianz, TotalEnergies</td>
                      <td className="px-4 py-3 text-[#090814]">
                        Internal consulting teams with lower travel and direct paths into line roles.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Key Resources */}
      <section id="resources" className="bg-sky/40 border-b border-venus">
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
                    <BookOpen className="text-[#FCFDFF]" size={18} stroke="#FCFDFF" />
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
                    <BookOpen className="text-[#FCFDFF]" size={18} stroke="#FCFDFF" />
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
                    <MessageCircle className="text-[#FCFDFF]" size={18} stroke="#FCFDFF" />
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
                    <Clipboard className="text-[#FCFDFF]" size={18} stroke="#FCFDFF" />
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
                    <Users className="text-[#FCFDFF]" size={18} stroke="#FCFDFF" />
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

      {/* Contact */}
      <section id="contact" className="bg-milky-way">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[10px] bg-meteor p-6">
                <Image
                  src="/mailbox.svg"
                  alt="Mailbox illustration"
                  width={520}
                  height={320}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
            <div className="space-y-6">
          <SectionHeading
            kicker="Contact"
                title="We'd Love to Hear From You!"
            description="For events, partnerships, and recruiting support reach out to the club!"
          />
              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href="https://www.linkedin.com/company/hec-paris-mba-consulting-club/"
                  external
                  variant="primary"
                  className="gap-2"
                  ariaLabel="Connect on LinkedIn in a new tab"
                >
                  Connect on LinkedIn <MessageSquare size={16} />
                </ButtonLink>
                <ButtonLink
                  href="mailto:mbaclub.consulting@hec.edu"
                  variant="secondary"
                  className="gap-2"
                  ariaLabel="Email the consulting club"
                >
                  Email Us <Mail size={16} />
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
