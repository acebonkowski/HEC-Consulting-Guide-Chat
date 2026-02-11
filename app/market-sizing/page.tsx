import { ArrowLeft, ArrowRight, ArrowUpRight } from "react-feather";
import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Market Sizing Numbers | HEC MBA Consulting Club",
  description:
    "Market sizing guidance and benchmark numbers for common case interview assumptions.",
};

const MARKET_SIZING_TIPS = [
  "Clarify exactly what you are estimating (annual revenue, users, units) and why it matters.",
  "Confirm definitions and boundaries: geography, segment, time horizon.",
  "Choose a structure (demand vs supply, top-down vs bottom-up) and state assumptions explicitly.",
  "Sense-check each step with realistic ranges and capacity bottlenecks.",
  "Interpret results in business terms, not just a number.",
  "Benchmark figures are approximate. You should adapt them for the specific country and office.",
];

const MARKET_SIZING_TABLES = [
  {
    title:
      "Population, Households, and Business Baselines",
    rows: [
      {
        metric: "Population",
        world: "8.30B",
        eu: "450M",
        us: "350M",
        china: "1.4B",
        india: "1.5B",
        germany: "830M",
        uk: "670M",
        france: "650M",
        asia: "4.8B",
      },
      {
        metric: "Life Expectancy",
        world: "–",
        eu: "82",
        us: "80",
        china: "–",
        india: "–",
        germany: "–",
        uk: "–",
        france: "–",
        asia: "73.00",
      },
      {
        metric: "People per Household",
        world: "–",
        eu: "2",
        us: "2.5",
        china: "3",
        india: "4.5",
        germany: "–",
        uk: "–",
        france: "–",
        asia: "–",
      },
      {
        metric: "Number of Households",
        world: "2.2B",
        eu: "220M",
        us: "130M",
        china: "520M",
        india: "300M",
        germany: "43M",
        uk: "30M",
        france: "32M",
        asia: "–",
      },
      {
        metric: "Population Growth",
        world: "–",
        eu: "0%",
        us: "0.5%",
        china: "−0.2%",
        india: "1%",
        germany: "–",
        uk: "–",
        france: "–",
        asia: "–",
      },
      {
        metric: "Number of Businesses",
        world: "–",
        eu: "26M",
        us: "33M",
        china: "–",
        india: "–",
        germany: "3M",
        uk: "6M",
        france: "5M",
        asia: "–",
      },
    ],
  },
  {
    title: "Work & Labor Participation",
    rows: [
      {
        metric: "Annual Work Hours",
        world: "–",
        eu: "1,700",
        us: "2000",
        china: "2,400",
        india: "2,400",
        germany: "–",
        uk: "–",
        france: "–",
        asia: "–",
      },
      {
        metric: "Labor Force Participation",
        world: "–",
        eu: "76%",
        us: "62%",
        china: "66%",
        india: "45%",
        germany: "–",
        uk: "–",
        france: "–",
        asia: "–",
      },
    ],
  },
  {
    title: "Income & Wealth",
    rows: [
      {
        metric: "GDP (in $)",
        world: "105T",
        eu: "18T",
        us: "27T",
        china: "18T",
        india: "4T",
        germany: "4T",
        uk: "3T",
        france: "3T",
        asia: "–",
      },
      {
        metric: "Median Household Income (in $)",
        world: "–",
        eu: "–",
        us: "90K",
        china: "–",
        india: "–",
        germany: "70K",
        uk: "80K",
        france: "60K",
        asia: "10K",
      },
    ],
  },
];

export default function MarketSizingPage() {
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
              <Badge>Market Sizing</Badge>
              <h1 className="text-3xl font-semibold tracking-tight text-galaxy sm:text-5xl">
                Market Sizing Numbers to Remember
              </h1>
              <p className="text-base text-[#090814]">
                Practical guidance and benchmark figures to speed up your sizing
                logic in case interviews.
              </p>
            </div>
            <ButtonLink
              href="https://notebooklm.google.com/notebook/5a83bbed-4486-45ed-b290-f2750dc9b868"
              external
              variant="secondary"
              className="gap-2"
              ariaLabel="Open Practice Numbers in a new tab"
            >
              Practice Numbers <ArrowUpRight size={16} />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-sky/40 border-b border-venus">
        <Container className="py-14 sm:py-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-galaxy sm:text-3xl">
              Market Sizing Guidance
            </h2>
            <p className="text-sm text-[#090814] sm:text-base">
              To size markets in case interviews, start by clarifying exactly what
              you are estimating and why it matters for the client’s decision.
              Confirm key definitions and boundaries (geography, segment, time
              horizon), draw a clear structure, and set explicit assumptions.
              Sense-check each step, watch for capacity limits, and interpret the
              output in business terms. Benchmarks are approximate—adapt and verify
              them for the specific country and office.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[#090814] sm:text-base">
              {MARKET_SIZING_TIPS.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-milky-way border-b border-venus">
        <Container className="py-14 sm:py-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-galaxy sm:text-3xl">
              Numbers
            </h2>
            <div className="space-y-6">
              {MARKET_SIZING_TABLES.map((table) => (
                <Card key={table.title} className="bg-meteor">
                  <div className="text-base font-semibold text-galaxy">
                    {table.title}
                  </div>
                  <div className="mt-4 overflow-x-auto rounded-[12px] border border-venus">
                    <table className="min-w-full text-left text-sm text-[#090814]">
                      <thead className="bg-[#081F5C] text-xs uppercase tracking-[0.2em] text-white">
                        <tr>
                          <th className="px-4 py-3">Category</th>
                          <th className="px-4 py-3">World</th>
                          <th className="px-4 py-3">EU</th>
                          <th className="px-4 py-3">US</th>
                          <th className="px-4 py-3">China</th>
                          <th className="px-4 py-3">India</th>
                          <th className="px-4 py-3">Germany</th>
                          <th className="px-4 py-3">UK</th>
                          <th className="px-4 py-3">France</th>
                          <th className="px-4 py-3">Asia</th>
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, rowIndex) => (
                          <tr
                            key={row.metric}
                            className={`border-b border-venus last:border-b-0 ${
                              rowIndex % 2 === 1 ? "bg-[#E9F2F9]" : "bg-[#F4F8FD]"
                            }`}
                          >
                            <td className="px-4 py-3 font-semibold text-[#081F5C]">
                              {row.metric}
                            </td>
                            <td className="px-4 py-3">{row.world}</td>
                            <td className="px-4 py-3">{row.eu}</td>
                            <td className="px-4 py-3">{row.us}</td>
                            <td className="px-4 py-3">{row.china}</td>
                            <td className="px-4 py-3">{row.india}</td>
                            <td className="px-4 py-3">{row.germany}</td>
                            <td className="px-4 py-3">{row.uk}</td>
                            <td className="px-4 py-3">{row.france}</td>
                            <td className="px-4 py-3">{row.asia}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sky/40">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Framework Overview",
                description:
                  "Quick refreshers on classic case frameworks and when to adapt them.",
                href: "/frameworks",
              },
              {
                title: "Industry Breakdown",
                description:
                  "Key drivers, economics, and trends across common case industries.",
                href: "/industry-breakdown",
              },
              {
                title: "CV & Cover Letter Tips",
                description:
                  "Practical guidance to refine your application materials before you submit.",
                href: "/resume-cover-letter-tips",
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
