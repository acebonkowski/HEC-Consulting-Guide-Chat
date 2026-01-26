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
      <div className="inline-flex items-center gap-2 rounded-full bg-[#7096D1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#081F5C] ring-1 ring-venus">
        <span className="h-1.5 w-1.5 rounded-full bg-[#081F5C]" aria-hidden="true" />
        {kicker}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-galaxy sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-sm leading-6 text-[#090814] sm:text-base">
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
      className="text-sm text-[#090814] underline decoration-universe/60 underline-offset-4 hover:text-galaxy"
    >
      {label}
    </a>
  );
}

export default function HomePage() {
  return (
    <div id="home">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-venus bg-milky-way">
        <Container className="py-14 sm:py-18">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <Badge>Consulting Overview</Badge>
              <h1 className="text-3xl font-semibold tracking-tight text-galaxy sm:text-5xl">
                Welcome to the HEC MBA Consulting Club!
              </h1>
              <p className="text-base leading-7 text-[#090814]">
                A single, source-backed destination for MBA students to understand the
                consulting role, the recruiting market, and how to prepare realistically.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="#contact" variant="primary" className="h-10 gap-2">
                  Get Involved <Users size={16} />
                </ButtonLink>
                <ButtonLink href="/consulting-guide" variant="secondary" className="h-10 gap-2">
                  Consulting Guide <BookOpen size={16} />
                </ButtonLink>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-sky blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl bg-meteor p-6">
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
              <div className="text-lg font-semibold text-galaxy">Core Consulting Skills</div>
              <div className="mt-4 grid gap-6 text-sm text-[#090814] md:grid-cols-2 md:auto-rows-fr md:gap-x-8">
                <div className="flex h-full flex-col gap-3 rounded-lg bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                      <BarChart2 className="text-[#081F5C]" size={18} />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Analytical Problem‑Solving</span>
                  </div>
                  <div>
                    Structure ambiguous problems, apply hypotheses and data, and translate insights into recommendations.
                    <div className="mt-3 text-sm text-[#090814]">
                      <span className="font-semibold">In Practice:</span> building Excel/BI models, pressure-testing assumptions, synthesizing messy data.
                    </div>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-lg bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                      <MessageCircle className="text-[#081F5C]" size={18} />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Communication</span>
                  </div>
                  <div>
                    Craft clear narratives, synthesize complexity, and tailor messages to senior stakeholders.
                    <div className="mt-3 text-sm text-[#090814]">
                      <span className="font-semibold">In Practice:</span> slide building, steering-committee presentations.
                    </div>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-lg bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                      <Users className="text-[#081F5C]" size={18} />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Teamwork</span>
                  </div>
                  <div>
                    Work effectively in cross-functional and multicultural teams.
                    <div className="mt-3 text-sm text-[#090814]">
                      <span className="font-semibold">In Practice:</span> daily coordination with partners, managers, and client teams.
                    </div>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-lg bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                      <Clipboard className="text-[#081F5C]" size={18} />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Project/Time Management</span>
                  </div>
                  <div>
                    Own workstreams end to end and manage competing priorities.
                    <div className="mt-3 text-sm text-[#090814]">
                      <span className="font-semibold">In Practice:</span> weekly planning, milestone tracking.
                    </div>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-lg bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                      <Zap className="text-[#081F5C]" size={18} />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Learning Agility</span>
                  </div>
                  <div>
                    Rapidly adjust to new industries, topics, and client needs.
                    <div className="mt-3 text-sm text-[#090814]">
                      <span className="font-semibold">In Practice:</span> learning AI, sustainability, or new sectors on the fly.
                    </div>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-lg bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                      <Target className="text-[#081F5C]" size={18} />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Client Orientation</span>
                  </div>
                  <div>
                    Design client-centric solutions focused on value creation.
                    <div className="mt-3 text-sm text-[#090814]">
                      <span className="font-semibold">In Practice:</span> scope alignment and implementation support.
                    </div>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-lg bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                      <Award className="text-[#081F5C]" size={18} />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Leadership & People Development</span>
                  </div>
                  <div>
                    Lead modules, mentor juniors, and give feedback.
                    <div className="mt-3 text-sm text-[#090814]">
                      <span className="font-semibold">In Practice:</span> being the “go-to” person for a topic.
                    </div>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-lg bg-meteor p-4 ring-1 ring-venus">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7096D1]">
                      <Briefcase className="text-[#081F5C]" size={18} />
                    </span>
                    <span className="text-lg font-semibold text-galaxy">Business & Commercial Acumen</span>
                  </div>
                  <div>
                    Connect recommendations to value creation (P&amp;L, ROI).
                    <div className="mt-3 text-sm text-[#090814]">
                      <span className="font-semibold">In Practice:</span> tying recommendations to P&amp;L and ROI.
                    </div>
              </div>
              </div>
              </div>
            </Card>

            <Card className="bg-meteor">
              <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-center">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="text-lg font-semibold text-galaxy">Day-in-the-Life</div>
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
          </div>

          <div className="mt-10">
            <Card className="bg-meteor">
              <div className="text-lg font-semibold text-galaxy">Pros & Cons (Community-Reported)</div>
              <div className="mt-4 grid gap-6 lg:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold text-[#090814]">Pros</div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-[#090814]">
                    <li>High compensation and accelerated learning</li>
                    <li>Strong exit opportunities after 2–4 years</li>
                    <li>Variety of industries and problems</li>
                    <li>Early exposure to senior decision-makers</li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#090814]">Cons</div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-[#090814]">
                    <li>Long hours and burnout risk</li>
                    <li>Travel intensity on some projects</li>
                    <li>Unpredictable staffing</li>
                    <li>Up-or-out promotion pressure</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#090814]">
                Source is community discussion (r/consulting); treat as directional, not authoritative.
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
            title="Hiring Is Selective — and Regionally Uneven"
            description="A cautious market with strong pockets (digital/implementation, GCC growth) and tighter selectivity elsewhere."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="bg-meteor">
              <div className="text-lg font-semibold text-galaxy">Hiring Momentum</div>
              <p className="mt-2 text-sm text-[#090814]">
                Reported ~60% YoY increase in consulting roles (H1 2024 → H1 2025).
              </p>
              <div className="mt-4">
                <SourceLink
                  href="https://blog.getaura.ai/management-consulting-job-market-2025"
                  label="Source: AURA"
                />
              </div>
            </Card>

            <Card className="bg-meteor">
              <div className="text-lg font-semibold text-galaxy">Middle East (GCC)</div>
              <p className="mt-2 text-sm text-[#090814]">
                Growth forecast around <span className="font-semibold">12%</span> for 2025,
                driven by large transformation programs.
              </p>
              <div className="mt-4">
                <SourceLink
                  href="https://www.consultancy-me.com/news/11464/consulting-market-of-gcc-to-grow-by-12-to-over-8-billion-in-2025"
                  label="Source: Consultancy Middle East"
                />
              </div>
            </Card>

            <Card className="bg-meteor">
              <div className="text-lg font-semibold text-galaxy">Europe</div>
              <p className="mt-2 text-sm text-[#090814]">
                Strategic consulting growth often cited around <span className="font-semibold">4–5%</span> CAGR
                (2025–2035), alongside disciplined hiring.
              </p>
              <div className="mt-4">
                <SourceLink
                  href="https://www.linkedin.com/pulse/europe-strategic-consulting-services-market-cagr-crxif"
                  label="Source: LinkedIn (market summary)"
                />
              </div>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="bg-meteor">
              <div className="text-lg font-semibold text-galaxy">Trends Impacting Recruiting</div>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-[#090814]">
                <li>Shift toward digital, analytics, and implementation roles.</li>
                <li>Sustainability and ESG demand increases in many practices.</li>
                <li>Precision hiring: stronger emphasis on fit and proof of skills.</li>
                <li>Regional rebalancing (GCC and select US cities).</li>
                <li>Hybrid work: marketed as flexible, intensity remains.</li>
              </ol>
            </Card>

            <Card className="bg-meteor">
              <div className="text-lg font-semibold text-galaxy">Who Hires Consultants</div>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full min-w-[620px] border-separate border-spacing-0 text-sm">
                  <thead>
                    <tr className="text-left">
                      <th className="border-b border-venus bg-meteor px-4 py-3 font-semibold">Category</th>
                      <th className="border-b border-venus bg-meteor px-4 py-3 font-semibold">Example Firms</th>
                      <th className="border-b border-venus bg-meteor px-4 py-3 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-venus px-4 py-3 font-semibold">MBB</td>
                      <td className="border-b border-venus px-4 py-3">McKinsey, BCG, Bain</td>
                      <td className="border-b border-venus px-4 py-3 text-[#090814]">
                        Global strategy leaders with high-impact work, premium compensation, and broad sector coverage.
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-venus px-4 py-3 font-semibold">Big 4</td>
                      <td className="border-b border-venus px-4 py-3">Deloitte, PwC, EY, KPMG</td>
                      <td className="border-b border-venus px-4 py-3 text-[#090814]">
                        Large professional-services firms with strong implementation, risk, deals, and technology practices.
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-venus px-4 py-3 font-semibold">Tier‑2 / Strategy</td>
                      <td className="border-b border-venus px-4 py-3">
                        Oliver Wyman, Strategy&amp;, Kearney, Roland Berger, L.E.K., Alvarez &amp; Marsal
                      </td>
                      <td className="border-b border-venus px-4 py-3 text-[#090814]">
                        Strategy-focused firms often specialized by sector or region, with work similar to MBB in many teams.
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-venus px-4 py-3 font-semibold">Boutiques</td>
                      <td className="border-b border-venus px-4 py-3">AlixPartners, Simon‑Kucher, FTI</td>
                      <td className="border-b border-venus px-4 py-3 text-[#090814]">
                        Deep functional or industry specialization with early responsibility.
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-venus px-4 py-3 font-semibold">Implementation / Digital</td>
                      <td className="border-b border-venus px-4 py-3">Accenture, Capgemini, IBM Consulting</td>
                      <td className="border-b border-venus px-4 py-3 text-[#090814]">
                        Technology, systems integration, and large-scale transformation focus.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">In-house Consulting</td>
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
            title="Tools and Links That Actually Help"
            description="Focused resources for case prep, case books, behavioral interview prep, aptitude tests, and networking."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="bg-meteor">
              <div className="text-lg font-semibold text-galaxy">Case Prep</div>
              <div className="mt-3 space-y-2">
                <SourceLink href="https://casecoach.com/" label="Casecoach" />
                <br />
                <SourceLink href="https://www.rocketblocks.me/" label="Rocketblocks" />
              </div>
            </Card>

            <Card className="bg-meteor">
              <div className="text-lg font-semibold text-galaxy">Case Books</div>
              <p className="mt-2 text-sm text-[#090814]">
                HEC Consulting Club Case Collection (SharePoint).
              </p>
              <div className="mt-3">
                <SourceLink
                  href="https://hecparis.sharepoint.com/teams/HECMBAConsultingClub/Documents%20partages/Forms/AllItems.aspx"
                  label="Open SharePoint collection"
                />
              </div>
            </Card>

            <Card className="bg-meteor">
              <div className="text-lg font-semibold text-galaxy">Behavioral Interviews</div>
              <p className="mt-2 text-sm text-[#090814]">Big Interview (HEC access).</p>
              <div className="mt-3">
                <SourceLink href="https://hec.biginterview.com/login" label="Open Big Interview" />
              </div>
            </Card>

            <Card className="bg-meteor">
              <div className="text-lg font-semibold text-galaxy">Aptitude Tests</div>
              <p className="mt-2 text-sm text-[#090814]">Practice Aptitude Tests.</p>
              <div className="mt-3">
                <SourceLink href="https://www.practiceaptitudetest.com/" label="Open site" />
              </div>
            </Card>

            <Card className="bg-meteor lg:col-span-2">
              <div className="text-lg font-semibold text-galaxy">Networking & Events</div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg bg-meteor p-3 ring-1 ring-venus">
                  <div className="text-xs font-semibold text-[#090814]">HEC Alumni</div>
                  <div className="mt-1">
                    <SourceLink href="https://www.hecalumni.fr/fr/" label="hecalumni.fr" />
                  </div>
                </div>
                <div className="rounded-lg bg-meteor p-3 ring-1 ring-venus">
                  <div className="text-xs font-semibold text-[#090814]">Handshake</div>
                  <div className="mt-1">
                    <SourceLink href="https://hec.joinhandshake.fr/" label="hec.joinhandshake.fr" />
                  </div>
                </div>
                <div className="rounded-lg bg-meteor p-3 ring-1 ring-venus sm:col-span-2">
                  <div className="text-xs font-semibold text-[#090814]">LinkedIn</div>
                  <div className="mt-1 text-sm text-[#090814]">
                    Use alumni paths, recruiter searches, and targeted outreach.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-milky-way">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            kicker="Contact"
            title="Get Involved"
            description="For events, partnerships, and recruiting support: reach out to the club."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="bg-meteor">
              <div className="text-lg font-semibold text-galaxy">Email</div>
              <p className="mt-2 text-sm text-[#090814]">
                For club operations and inquiries.
              </p>
              <div className="mt-4">
                <a
                  href="mailto:mbaclub.consulting@hec.edu"
                  className="inline-flex items-center gap-2 rounded-lg bg-planetary px-4 py-2 text-sm font-semibold text-[#FFF9F0] hover:bg-planetary/90"
                >
                  mbaclub.consulting@hec.edu <ArrowRight size={16} />
                </a>
              </div>
            </Card>

            <Card className="bg-meteor">
              <div className="text-lg font-semibold text-galaxy">LinkedIn</div>
              <p className="mt-2 text-sm text-[#090814]">
                Follow the page for announcements and updates.
              </p>
              <div className="mt-4">
                <ButtonLink
                  href="https://www.linkedin.com/company/hec-paris-mba-consulting-club/"
                  external
                  variant="secondary"
                  className="gap-2"
                  ariaLabel="Open LinkedIn page in a new tab"
                >
                  Open LinkedIn <ArrowRight size={16} />
                </ButtonLink>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
