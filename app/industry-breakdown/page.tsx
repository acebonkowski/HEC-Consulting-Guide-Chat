import Image from "next/image";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  BarChart2,
  ChevronDown,
  Tag,
  TrendingUp,
  Users,
} from "react-feather";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Industry Breakdown | HEC MBA Consulting Club",
  description:
    "Quick-reference industry snapshots for case interview prep: players, economics, trends, and risks.",
};

type SectionLayout = "full" | "half" | "callout";
type SectionTone = "default" | "trend" | "risk";

type IndustrySection = {
  title: string;
  icon: ReactNode;
  items: Array<
    | string
    | {
        label: string;
        description?: string;
        subitems: string[];
      }
  >;
  layout?: SectionLayout;
  tone?: SectionTone;
};

type Industry = {
  title: string;
  image: string;
  sections: IndustrySection[];
};

const INDUSTRIES: Industry[] = [
  {
    title: "Airlines & Transportation",
    image: "/airlines.jpg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          {
            label: "Airline Types",
            description:
              "Segment airline types before analyzing: different models react differently to fuel prices, demand shocks, and regulation.",
            subitems: [
              "Network / legacy carriers: hub-and-spoke networks; connectivity from combining origin-destination flows; higher fixed costs, complex operations, unionized labor, weaker cost flexibility.",
              "Low-cost / ultra-low-cost carriers (LCC/ULCC): win on cost per seat mile; single aircraft type, fast turnarounds, minimal service; profitability depends on volume and ancillaries, not premium pricing.",
              "Regional airlines: feed passengers into hubs for major carriers; low margins; labor shortages are existential; often dependent on capacity purchase agreements (CPAs).",
              "Cargo players: integrators run time-critical networks; passenger airlines rely on belly cargo as margin enhancer; cargo demand is cyclical and tied to global trade.",
            ],
          },
          "Aircraft OEMs and engine OEMs: long-cycle, capital-intensive bottlenecks; delivery delays constrain airline growth; engine maintenance issues can ground planes and destroy capacity; industry profitability is often supply-constrained, not demand-constrained.",
          "Aircraft lessors: own large share of global fleets; airlines lease to preserve balance-sheet flexibility; lease rates usually USD-denominated -> FX risk; leasing shifts risk but increases exposure to interest rates and currency swings; lease obligations do not disappear in downturns.",
          "Distribution stack (GDS, OTAs, direct): traditional GDS charge per booking; airlines push direct sales to reduce distribution costs, control pricing/bundling, and sell ancillaries more effectively; distribution is a margin lever.",
          "Airports and air navigation service providers: control slots, gates, runway access; ATC capacity limits flight volumes; many airports have monopolistic pricing power; capacity constraints cap growth even on profitable routes.",
          "Regulators: safety regulators are non-negotiable; competition authorities manage slots and mergers; consumer protection covers delays and refunds; regulation fixes parts of the cost structure and limits strategic freedom.",
          "Loyalty program partners: airlines sell miles to banks and partners; loyalty is one of the highest-margin businesses; airlines are also data and financial intermediaries.",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Utilization economics: aircraft and crews are mostly fixed costs; profitability hinges on keeping planes flying; one grounded plane destroys margin fast.",
          "Interview signal: always talk about load factor and utilization before pricing.",
          "Revenue management: prices change constantly to maximize total revenue, not seat prices; overbooking is rational because no-shows are predictable; network effects mean a flight can be profitable even if one leg is not.",
          "Ancillary revenue: bags, seats, priority boarding, food, Wi-Fi; especially critical for LCCs; high margin, low incremental cost.",
          "Interview signal: ancillaries are structural, not optional.",
          "FX and USD cost base: fuel, leases, maintenance in USD; revenue often in local currency; a strengthening USD can wipe out margins even with stable demand.",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        layout: "half",
        items: [
          "Passenger yield: price per seat.",
          "Load factor: seats filled.",
          "Ancillaries: bags, seats, priority boarding, food, Wi-Fi.",
          "Cargo: belly cargo and dedicated carriers.",
          "Loyalty monetization: selling miles to partners.",
          "Interview shortcut: Profit ≈ (Yield x Load Factor x Capacity) + Ancillaries - Fuel - Labor - Fixed Costs.",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        layout: "half",
        items: [
          "Fuel: largest variable cost; volatility matters more than absolute level.",
          "Labor: pilots are scarce; unions reduce flexibility.",
          "Maintenance: aging fleets increase cost non-linearly.",
          "Airport and ATC fees: quasi-fixed, often rising.",
          "Distribution fees: controllable through channel shift.",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        layout: "callout",
        tone: "trend",
        items: [
          "Aircraft and engine supply constraints: OEM and engine issues cap capacity growth; airlines keep older planes longer -> higher maintenance; supply discipline can prop up pricing even when demand softens.",
          "Distribution and retailing modernization: shift from selling seats to selling offers; personalization, bundling, dynamic pricing.",
          "Sustainability pressure: SAF mandates and emissions pricing increase cost with limited near-term substitutes.",
          "Industry consolidation: fewer players -> more pricing power; regulators slow but rarely reverse the trend.",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        layout: "callout",
        tone: "risk",
        items: [
          "Fuel price shocks: hedging helps but does not eliminate risk; sudden spikes compress margins immediately.",
          "Labor shortages: pilot supply is the hardest constraint; wage inflation is sticky downward.",
          "Demand shocks: pandemics, recessions, geopolitical events; airlines are high beta to macro cycles.",
          "Regulatory risk: environmental rules, passenger compensation laws, slot reallocations.",
        ],
      },
    ],
  },
  {
    title: "Automotive & Industrials",
    image: "/automotive.jpg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          {
            label: "OEMs",
            description:
              "Design, engineer, assemble, and market vehicles; sell mostly via dealer networks (agency model emerging but limited); bear brand risk, recall risk, and platform R&D cost; asset-heavy with thin margins on new car sales; profitability depends on scale, mix, and aftersales.",
            subitems: [
              "Tier 1 suppliers: deliver complete systems (powertrain, braking, electronics); highly dependent on OEM volumes and specs; operate on lower margins and suffer most from OEM price pressure, late design changes, and volume volatility.",
              "Tier 2/3 suppliers: provide components, materials, sub-assemblies; highly dependent on OEM volumes and specs; operate on lower margins and suffer most from OEM price pressure, late design changes, and volume volatility.",
            ],
          },
          "Battery suppliers and charging ecosystem: batteries are a huge share of EV cost; charging availability affects EV adoption more than vehicle specs; vertical integration vs outsourcing battery supply is a strategic make-or-break decision.",
          "Rental, ride-hailing, and MaaS players: large fleet buyers; influence demand mix; sensitive to depreciation and residual values; stabilize volume but compress margins and affect brand perception.",
          "Regulators and public infrastructure: emissions standards, safety rules, subsidies; charging infrastructure rollout often state-driven; regulation can force massive CAPEX shifts faster than market demand.",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Scale and capacity utilization: plants have huge fixed costs; underutilized plants destroy margins.",
          "Interview signal: volume is often more important than per-unit margin in the short term.",
          "Volume vs margin trade-off: OEMs may cut prices to keep plants running; discounts protect utilization but damage brand and residual values.",
          "Mix management: profit varies massively by vehicle size (SUV vs compact), powertrain (ICE vs EV), geography (US/China/EU), trim level; selling fewer cars at a better mix can outperform growth strategies.",
          "Fixed-cost absorption: high utilization spreads fixed costs over more units; supply chain efficiency directly impacts margin.",
          "Warranty and recall sensitivity: small quality issues -> massive financial exposure; tail risks dominate expected profits; automotive has asymmetric downside risk.",
          "Aftersales and financing (hidden profit pools): parts, servicing, warranties, financing; high-margin, recurring, and less cyclical.",
          "Interview signal: OEMs increasingly behave like service companies; automotive profit is made after the sale, not at the sale.",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        layout: "half",
        items: [
          "New vehicle sales: volume x ASP x mix.",
          "Used vehicles: buffer during downturns.",
          "Aftersales: parts and service (often highest-margin, recurring).",
          "Financing and leasing: interest spread + residual value control.",
          "Software and subscriptions: OTA features, connectivity.",
          "Data monetization: emerging, still limited.",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        layout: "half",
        items: [
          "Materials: steel, aluminum, batteries (lithium, nickel), semiconductors.",
          "Labor: less flexible than assumed.",
          "Warranty and recalls: unpredictable but catastrophic.",
          "R&D: EV platforms, software, autonomy.",
          "Manufacturing overhead: plants, tooling, depreciation.",
          "Logistics and inventory: inventory carry is expensive.",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        layout: "callout",
        tone: "trend",
        items: [
          "EV transition: capex heavy; uncertain elasticity; margin-dilutive short term.",
          "China competition: cost-advantaged EV challengers compress margins.",
          "Software monetization push via OTA subscriptions (consumer resistance risk).",
          "MaaS adoption shifting ownership assumptions.",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        layout: "callout",
        tone: "risk",
        items: [
          "Tariffs and trade policy fragment supply chains.",
          "Warranty/recall events (one issue can wipe years of profit).",
          "Commodity volatility (battery metals, energy).",
          "Demand cyclicality (rates, confidence).",
        ],
      },
    ],
  },
  {
    title: "Oil & Gas, Power & Utilities",
    image: "/oil-gas.jpg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Majors vs independents: majors are integrated across upstream/midstream/downstream; diversification smooths earnings; independents are upstream-heavy, higher beta to oil prices, leaner but riskier; integration reduces volatility but dilutes pure upside.",
          "Oilfield services: provide drilling/completion/equipment; paid per activity; volume/capex-cycle plays that suffer when E&P capex is cut.",
          "Midstream operators: pipelines/storage/processing; often contract-based or regulated; cash flow stability depends on utilization and contract structure.",
          "Traders: arbitrage location/time/quality; thin margins, big volumes.",
          "NOCs and regulators: control reserves; objectives mix profit and politics; geopolitics can override commercial logic.",
          "Generators / IPPs: merchant vs contracted (PPA) revenue models; risk profile is defined by price exposure.",
          "Transmission (TSO) and distribution (DSO): natural monopolies; regulated returns on RAB; utilities are finance-like with regulation defining economics.",
          "Retailers: thin margins, churn, procurement risk.",
          "Regulators: set allowed returns, tariffs, and reliability.",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Value chain: upstream exploration and production (high risk, high margin), midstream process/pipelines/storage (low risk, steady), downstream refining/marketing (spread-driven).",
          "Interview signal: always locate the problem in the chain.",
          "Price taker reality: global benchmarks set prices; firms influence realized price differentials, volume, and hedging.",
          "Lifting cost: extraction cost per barrel is a key competitiveness metric; low lifting-cost assets survive downturns, high-cost assets get shut in.",
          "Marginal pricing: the last unit dispatched sets price; scarcity spikes matter.",
          "CAPEX vs OPEX: renewables have high capex and low opex; thermal has fuel risk.",
          "Grid bottleneck: generation can outpace transmission; congestion caps renewable growth.",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        layout: "half",
        items: [
          "Oil and gas: price x volume and product mix.",
          "Refining margins (crack spreads) and midstream fees.",
          "Trading gains (volatile but meaningful).",
          "Power generation: MWh x price or PPA contracts.",
          "Networks: regulated returns on RAB.",
          "Retail: customer count x usage x margin.",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        layout: "half",
        items: [
          "Oil and gas: capex (exploration/drilling), opex (lifting), logistics, carbon costs.",
          "Power: generation capex/fuel (thermal), grid capex/maintenance, retail procurement/bad debt.",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        layout: "callout",
        tone: "trend",
        items: [
          "Capital discipline and transition-driven capex reallocation.",
          "Localization and security of supply.",
          "Electrification and decarbonization.",
          "Massive grid capex cycle.",
          "Falling renewable LCOE with rising system integration costs.",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        layout: "callout",
        tone: "risk",
        items: [
          "Oil price shocks and political/regulatory intervention.",
          "Safety/environmental incidents.",
          "Asset stranding.",
          "Regulatory resets.",
          "Reliability failures/outages.",
          "Political backlash to price increases.",
        ],
      },
    ],
  },
  {
    title: "Financial Services & Banking",
    image: "/financial-services.jpg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Retail banks: deposits, consumer credit, mortgages.",
          "Corporate banks: lending, cash management, trade finance.",
          "Investment banks: underwriting, M&A advisory, trading.",
          "Payment networks and fintechs: rails vs interface/innovation.",
          "Core banking vendors: infrastructure layer.",
          "Regulators and central banks: capital rules, liquidity, monetary policy.",
          "Credit bureaus and rating agencies.",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Balance-sheet business: assets generate yield; liabilities fund them.",
          "Net interest margin (NIM): loan yield minus deposit cost (relative to assets).",
          "Deposit betas: how much deposit rates move with market rates.",
          "Constraint heaviness: capital, liquidity, compliance constrain growth.",
          "Credit cycle: growth today can be loss tomorrow.",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        layout: "half",
        items: [
          "Net interest margin (NIM).",
          "Fee income: payments, wealth/asset management, advisory, underwriting.",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        layout: "half",
        items: [
          "Labor and branches.",
          "Tech infrastructure.",
          "Compliance.",
          "Funding costs.",
          "Credit losses and provisions.",
          "Fines.",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        layout: "callout",
        tone: "trend",
        items: [
          "Digitization and branch rationalization.",
          "Challenger banks/fintech unbundling.",
          "Expansion of payment options (including BNPL).",
          "Decentralization/crypto (select pockets).",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        layout: "callout",
        tone: "risk",
        items: [
          "Business cycle sensitivity and central bank dependency.",
          "Default risk by product/segment.",
          "Regulatory tightening.",
          "Tech debt and cyber risk.",
        ],
      },
    ],
  },
  {
    title: "Insurance",
    image: "/insurance.jpg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Insurers: offer products, manage risk.",
          "Policyholders: buy coverage.",
          "Brokers/agents: distribution.",
          "Reinsurers: transfer/share tail risk.",
          "Regulators: solvency and consumer protection.",
          "Investors/asset managers: invest premiums.",
          "Claims providers: settle claims.",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Risk pooling and underwriting: price risk correctly.",
          "Premiums and claims: core P&L.",
          "Reserving and solvency: capital buffers for future claims.",
          "Reinsurance and investments: shape risk and returns.",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        layout: "half",
        items: [
          "Premiums.",
          "Investment income.",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        layout: "half",
        items: [
          "Claims payouts.",
          "Underwriting/acquisition.",
          "Operations/admin.",
          "Compliance/capital.",
          "Reinsurance premiums.",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        layout: "callout",
        tone: "trend",
        items: [
          "Digital and insurtech automation/AI.",
          "ESG and climate factor incorporation.",
          "Customer-centric, flexible products; personalization.",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        layout: "callout",
        tone: "risk",
        items: [
          "Underwriting risk: mispriced policies.",
          "Market/investment risk.",
          "Liquidity risk: cash for claims.",
          "Regulatory evolution.",
          "Catastrophe risk.",
        ],
      },
    ],
  },
  {
    title: "Healthcare",
    image: "/healthcare.jpg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Providers: hospitals, clinics, labs.",
          "Payers: private insurers and public programs.",
          "PBMs: formulary/rebate dynamics (US-heavy).",
          "Suppliers: pharma, medtech, diagnostics, EMR vendors.",
          "Regulators: reimbursement rules, quality, budgets.",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Power dynamic: providers control delivery and have limited pricing power; payers control pricing and access.",
          "Occupancy: bed occupancy, ALOS, readmissions are key.",
          "Throughput economics: ED -> bed -> treatment -> discharge.",
          "Pricing and frequency: utilization management can matter as much as price.",
          "Revenue cycle: coding -> billing -> collections.",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        layout: "half",
        items: [
          "Providers: volume x reimbursement (commercial often higher than public) x service line mix x complexity.",
          "Payers: premiums (members x rate), subsidies, investment income on float.",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        layout: "half",
        items: [
          "Providers: labor (nurses/physicians, overtime, agency staffing), supplies/implants, facilities/equipment (24/7 fixed cost), IT/EMR and admin.",
          "Payers: medical claims, reinsurance, admin/tech.",
          "Core equations: Provider profit = Volume x Reimbursement - Cost. Payer profit = Premiums - Claims - Admin.",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        layout: "callout",
        tone: "trend",
        items: [
          "Labor shortage and wage pressure.",
          "Cybersecurity and privacy concerns.",
          "Automation of claims and care management.",
          "AI for coding/diagnostics/throughput (slow adoption due governance).",
          "Shift from inpatient to outpatient/home.",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        layout: "callout",
        tone: "risk",
        items: [
          "Workforce constraints.",
          "Reimbursement cuts.",
          "Supplier dependency.",
          "Cyber events.",
        ],
      },
    ],
  },
  {
    title: "Pharma & Life Sciences",
    image: "/life-sciences.jpg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Pharma/biotech manufacturers.",
          "Regulators: FDA (US), EMA (EU).",
          "HTA bodies: value assessment influencing reimbursement (EU-heavy).",
          "Payers/providers.",
          "PBMs: rebates/formularies (US-heavy).",
          "Distributors: wholesalers, retail and specialty pharmacies.",
          "CROs: run trials.",
          "CDMOs/CMOs: outsourced development/manufacturing.",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Patent- and access-driven business: buy future revenue via R&D risk; monetize in limited exclusivity window; win/lose on access more than marketing.",
          "Blockbuster logic: few winners fund many failures.",
          "Product selection: market size, reimbursement, time-to-market, success probability, safety, cannibalization.",
          "LOE: loss of exclusivity -> generic/biosimilar erosion.",
          "Gross-to-net leakage: rebates/chargebacks/discounts vs list price.",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        layout: "half",
        items: [
          "Eligible patient pool -> diagnosed -> treated -> adherence/persistence.",
          "Price x volume; indication expansion; launch sequencing.",
          "Simplified profit logic: Profit ≈ Patent life x Price x Volume - R&D.",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        layout: "half",
        items: [
          "R&D (trial costs + failures).",
          "Manufacturing (biologics/sterile complex).",
          "Sales and marketing (varies by country).",
          "Pharmacovigilance/medical affairs.",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        layout: "callout",
        tone: "trend",
        items: [
          "Patent cliffs and generic erosion.",
          "Pricing/policy risk and transparency.",
          "Supply constraints (sterile capacity, quality failures).",
          "M&A/licensing to refill pipelines.",
          "Therapy-area focus: oncology/immunology/specialty.",
          "Real-world data (wearables) and analytics.",
          "Value-based arrangements (pay-for-performance experiments).",
          "Manufacturing localization/resilience.",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        layout: "callout",
        tone: "risk",
        items: [
          "Regulatory setbacks and R&D failure.",
          "Net price compression.",
          "Supply disruptions.",
          "LOE cliff.",
        ],
      },
    ],
  },
  {
    title: "Consumer & Retail",
    image: "/consumer.jpg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Brands/CPG manufacturers.",
          "Retailers: shelf power, pricing, promotions, private label.",
          "Distributors/wholesalers.",
          "Marketplaces (e.g., Amazon): fees + ranking power can erode brand pricing.",
          "Logistics carriers/3PLs.",
          "Digital channels: social platforms, creators/influencers (demand shaping).",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Store productivity: sales/sqft, sales/traffic, traffic per labor hour, inventory turnover, same-store sales.",
          "SKUs: complexity drives inventory and forecasting issues.",
          "Margin pressure: low-margin category except luxury; price wars/promo spirals.",
          "Loss leadership: strategic margin sacrifice for share.",
          "Returns economics: reverse logistics can wipe out margin (especially apparel/e-com).",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        layout: "half",
        items: [
          "Traffic x conversion.",
          "Basket size and price.",
          "Purchase frequency.",
          "Bundling/cross-sell.",
          "Margin split across channels.",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        layout: "half",
        items: [
          "COGS.",
          "Labor.",
          "Returns/reverse logistics.",
          "Inventory holding/markdowns.",
          "Distribution/last-mile.",
          "Real estate, tech, overhead.",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        layout: "callout",
        tone: "trend",
        items: [
          "Omnichannel dominance: BOPIS, ship-from-store.",
          "Private label rise.",
          "Personalization via data.",
          "Influencer-driven seasonality and volatility.",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        layout: "callout",
        tone: "risk",
        items: [
          "Price wars and promo spirals.",
          "Demand volatility (confidence, inflation).",
          "Returns explosion (abuse + leakage).",
          "Inventory mis-forecasting (markdowns + cash squeeze).",
          "Dependency on retailers/marketplaces.",
        ],
      },
    ],
  },
  {
    title: "Technology & Media",
    image: "/technology.jpg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Software/platform companies: distribute content or provide services.",
          "Cloud providers: infrastructure and AI/compute stack.",
          "App store/OS gatekeepers: distribution control.",
          "Advertisers/agencies: monetize attention.",
          "Right holders: music/sports/content.",
          "Creators/influencers/brands.",
          "Regulators: copyright, competition, speech.",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Scale and data economics: marginal cost low, fixed cost high.",
          "Network effects and switching costs: value increases with users; churn is critical.",
          "Freemium/attention economics: trade-off ads vs UX.",
          "Subscription model mechanics: retention, ARPU, expansion.",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        layout: "half",
        items: [
          "Profit (tech): users x ARPU - fixed costs - variable costs.",
          "Profit (media): audience x monetization - content costs - operating costs.",
          "Subscriptions (volume x ARPU), transaction fees/take rate, expansion revenue, ads, licensing.",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        layout: "half",
        items: [
          "Infrastructure/cloud/capex (especially AI).",
          "R&D and product development.",
          "Content and creator payouts.",
          "Marketing/growth/support.",
          "Moderation and compliance.",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        layout: "callout",
        tone: "trend",
        items: [
          "Short-form video dominance.",
          "Creator monetization expansion.",
          "Cloud cost optimization.",
          "AI-heavy features and agentic functionality (ROI uncertainty).",
          "Subscription fatigue.",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        layout: "callout",
        tone: "risk",
        items: [
          "Growth saturation; rising content costs.",
          "Regulatory pressure.",
          "Cloud cost blowouts.",
          "AI bubble narrative/misallocated capex.",
        ],
      },
    ],
  },
  {
    title: "Private Equity",
    image: "/private-equity.jpg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "PE funds (GPs): raise capital, acquire, drive value creation, exit.",
          "LPs: pensions, insurers, sovereign funds, endowments.",
          "Portfolio companies.",
          "Financing providers: banks and private credit.",
          "Advisors: legal/financial/M&A.",
          "Regulators: SEC/FCA/EU.",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Value-creation focus: improve operations/scale/strategy; monetize via exit.",
          "Portfolio logic: few outsized successes offset underperformers.",
          "Exit and multiple expansion: timing plus operational/financial enhancements drive value at sale.",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        layout: "half",
        items: [
          "EBITDA growth (ops/pricing).",
          "Leverage (capital structure).",
          "Exit multiple and timing.",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        layout: "half",
        items: [
          "Financing cost and covenant risk.",
          "Integration/execution cost.",
          "Fees and transaction costs.",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        layout: "callout",
        tone: "trend",
        items: [
          "Sector focus/specialization.",
          "ESG and digital transformation in portfolios.",
          "Financing innovation: private credit, minority deals, creative structures.",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        layout: "callout",
        tone: "risk",
        items: [
          "Execution risk (ops underperformance).",
          "Market/exit risk (multiple compression).",
          "Financial/leverage risk (liquidity).",
          "Regulatory/ESG risk.",
        ],
      },
    ],
  },
  {
    title: "Public Sector & Non-Profit",
    image: "/public.jpg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Governments: ministries, municipalities, SOEs.",
          "International organizations: UN agencies, World Bank, EU bodies.",
          "NGOs and foundations.",
          "Private partners: consulting firms, investors, corporates.",
          "Beneficiaries: citizens, communities.",
          "Regulators, auditors, donors, taxpayers.",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Power dynamic: funders decide priorities; executors face operational reality; beneficiaries often lack voice.",
          "Impact focus: do not optimize profit; define outcomes and maximize.",
          "Program efficiency ratio (PER) and cost-per-beneficiary.",
          "Political feasibility and stakeholder management as constraints.",
          "Funding cyclicality and uncertainty.",
          "Impact equation: Impact = Outcomes Achieved / Resources Used (outcomes: lives improved, services delivered, emissions reduced; resources: budget, staff, time, political capital).",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        layout: "half",
        items: [
          "Government budget (taxes/transfers/debt).",
          "Grants.",
          "Donations.",
          "Membership fees.",
          "Endowment returns.",
          "PPPs.",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        layout: "half",
        items: [
          "Program delivery.",
          "Staff/admin.",
          "Compliance/reporting/audits.",
          "Infrastructure/IT.",
          "Monitoring and evaluation.",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        layout: "callout",
        tone: "trend",
        items: [
          "Digital government and GovTech.",
          "Outcome-based funding.",
          "ESG-linked PPPs.",
          "AI and data for service delivery.",
          "Localization of aid.",
          "Increased scrutiny on admin overhead.",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        layout: "callout",
        tone: "risk",
        items: [
          "Budget cuts and volatility.",
          "Political shifts and policy reversals.",
          "Bureaucracy/corruption/misuse.",
          "Local capacity constraints.",
        ],
      },
    ],
  },
];

function IndustrySectionCard({ section }: { section: IndustrySection }) {
  const toApaTitleCase = (value: string) => {
    const smallWords = new Set([
      "a",
      "an",
      "and",
      "as",
      "at",
      "but",
      "by",
      "for",
      "from",
      "in",
      "nor",
      "of",
      "on",
      "or",
      "per",
      "the",
      "to",
      "up",
      "via",
      "with",
    ]);

    return value
      .split(/\s+/)
      .map((word, index, words) => {
        if (!word) return word;
        const lower = word.toLowerCase();
        const isFirst = index === 0;
        const isLast = index === words.length - 1;
        if (!isFirst && !isLast && smallWords.has(lower)) {
          return lower;
        }
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      })
      .join(" ");
  };

  const tone = section.tone ?? "default";
  const isCallout = section.layout === "callout";
  const toneStyles = {
    default: {
      header: "text-[#334EAC]",
      line: "bg-[#334EAC]",
      bullet: "bg-[#081F5C]",
      container: "",
      background: "",
      text: "text-[#090814]",
    },
    trend: {
      header: "text-[#1E7A5C]",
      line: "bg-[#1E7A5C]",
      bullet: "bg-[#1E7A5C]",
      container: "border-emerald-300",
      background: "!bg-emerald-50/70",
      text: "text-emerald-700",
    },
    risk: {
      header: "text-[#C2185B]",
      line: "bg-[#C2185B]",
      bullet: "bg-[#C2185B]",
      container: "border-red-300",
      background: "!bg-red-50/70",
      text: "text-red-700",
    },
  } as const;

  const styles = toneStyles[tone];
  return (
    <Card
      className={
        isCallout
          ? `border ${styles.container} ${styles.background} ${styles.text}`
          : "bg-[#FCFDFF]"
      }
    >
      <div className={`flex items-center gap-2 text-sm font-semibold ${styles.header}`}>
        <span className={styles.header}>{section.icon}</span>
        <span>{section.title}</span>
      </div>
      <div className={`mt-2 h-px w-full ${styles.line}`} />
      <ul className={`mt-3 space-y-2 text-sm ${styles.text}`}>
        {section.items.map((item) => {
          if (typeof item !== "string") {
            return (
              <li key={item.label} className="flex gap-2">
                <span
                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${styles.bullet}`}
                />
                <div>
                  <span className="font-semibold">
                    {toApaTitleCase(item.label)}
                  </span>
                  {item.description ? (
                    <span className={styles.text}>: {item.description}</span>
                  ) : null}
                  <ul className={`mt-2 space-y-1 pl-4 text-sm ${styles.text}`}>
                    {item.subitems.map((subitem) => {
                      const [label, ...rest] = subitem.split(":");
                      const detail = rest.join(":").trim();
                      const hasLabel = rest.length > 0;

                      return (
                        <li key={subitem} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4C6FBF]" />
                          <span>
                            {hasLabel ? (
                              <>
                                <strong className="font-semibold">
                                  {toApaTitleCase(label.trim())}:
                                </strong>{" "}
                                {detail}
                              </>
                            ) : (
                              subitem
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          }

          const [label, ...rest] = item.split(":");
          const detail = rest.join(":").trim();
          const hasLabel = rest.length > 0;

          return (
            <li key={item} className="flex gap-2">
              <span
                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${styles.bullet}`}
              />
              <span>
                {hasLabel ? (
                  <>
                    <strong className="font-semibold">
                      {toApaTitleCase(label.trim())}:
                    </strong>{" "}
                    {detail}
                  </>
                ) : (
                  item
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
  const fullSections = industry.sections.filter(
    (section) => section.layout !== "half" && section.layout !== "callout",
  );
  const halfSections = industry.sections.filter(
    (section) => section.layout === "half",
  );
  const calloutSections = industry.sections.filter(
    (section) => section.layout === "callout",
  );

  return (
    <details className="group rounded-[10px] bg-[#FCFDFF] shadow-sm">
      <summary className="relative flex min-h-[140px] cursor-pointer list-none items-end justify-between gap-4 overflow-hidden rounded-[10px] bg-[#0B0B0B] px-6 pb-6 pt-10 text-white group-open:rounded-b-none">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0) 100%), url('${industry.image}')`,
          }}
        />
        <div className="relative z-10 flex w-full items-end justify-between gap-4">
          <h3 className="text-xl font-semibold sm:text-2xl">{industry.title}</h3>
          <ChevronDown
            size={20}
            className="shrink-0 transition-transform duration-200 group-open:rotate-180"
          />
        </div>
      </summary>
      <div className="border-t border-[#E2E2E2] bg-[#FCFDFF] px-6 py-6">
        <div className="space-y-8">
          <div className="space-y-8">
            {fullSections.map((section) => (
              <IndustrySectionCard key={section.title} section={section} />
            ))}
          </div>
          {halfSections.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {halfSections.map((section) => (
                <IndustrySectionCard key={section.title} section={section} />
              ))}
            </div>
          ) : null}
          {calloutSections.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {calloutSections.map((section) => (
                <IndustrySectionCard key={section.title} section={section} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </details>
  );
}

export default function IndustryBreakdownPage() {
  return (
    <main className="bg-sky/40">
      <section className="border-b border-venus">
        <Container className="py-10 sm:py-12">
          <div className="mb-16">
            <a
              href="/consulting-guide"
              className="inline-flex items-center text-sm font-semibold text-[#081F5C] no-underline"
            >
              <ArrowLeft size={18} className="mr-2 text-[#081F5C]" />
              Back
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-semibold tracking-tight text-galaxy sm:text-4xl">
                Industry Breakdown
              </h1>
              <p className="mt-4 text-base text-[#090814] sm:text-lg">
                A quick-reference library of industry snapshots to help you frame
                cases fast: players, key concepts, revenue drivers, cost drivers,
                trends, and risks.
              </p>
            </div>
            <ButtonLink
              href="https://notebooklm.google.com/notebook/42ae5d31-8105-4f4c-8789-c7fde8c5edda"
              external
              variant="secondary"
              className="w-fit gap-2 rounded-[12px] px-5 py-2 text-base"
              ariaLabel="Open Take Quiz"
            >
              <Image src="/link-2.svg" alt="" width={18} height={18} />
              Take Quiz
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-b border-venus">
        <Container className="py-12 sm:py-14">
          <div className="space-y-6">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.title} industry={industry} />
            ))}
          </div>

          <div className="mt-10 border-t border-venus pt-10">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Framework Overview",
                  description:
                    "Quick refreshers on classic case frameworks and when to adapt them.",
                  href: "/consulting-guide",
                },
                {
                  title: "CV & Cover Letter Tips",
                  description:
                    "Practical guidance to refine your application materials before you submit.",
                  href: "/consulting-guide#process-interview",
                },
                {
                  title: "Market Sizing Numbers",
                  description:
                    "Core figures and benchmarks to speed up structured sizing math.",
                  href: "/consulting-guide#case-interview",
                },
              ].map((item) => (
                <Card key={item.title} className="bg-[#FCFDFF]">
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
    </main>
  );
}
