import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowLeft,
  BarChart2,
  ChevronDown,
  Tag,
  TrendingUp,
  Users,
} from "react-feather";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Industry Breakdown | HEC MBA Consulting Club",
  description:
    "Quick-reference industry snapshots for case interview prep: players, economics, trends, and risks.",
};

type IndustrySection = {
  title: string;
  icon: ReactNode;
  items: string[];
};

type Industry = {
  title: string;
  image: string;
  sections: IndustrySection[];
};

const INDUSTRIES: Industry[] = [
  {
    title: "Airlines & Transportation",
    image: "/industry-placeholder.svg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Airlines: legacy, low-cost carriers (LCC), regional, cargo",
          "Airports and ground handling providers",
          "OEMs and lessors: Airbus, Boeing, aircraft leasing firms",
          "GDS, OTAs, and meta-search platforms",
          "Regulators: FAA/EASA, IATA",
          "Loyalty and credit-card partners (AMEX, Visa)",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Utilization: high fixed costs mean utilization drives profit",
          "Network economics: hub-and-spoke vs point-to-point, spill effects",
          "Revenue management: dynamic pricing, fare classes, overbooking",
          "Ancillary economics: key margin drivers beyond tickets",
          "Distribution power: direct vs GDS/OTA; NDC shift",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        items: [
          "Ticket revenue: sold seats vs capacity",
          "Yield: fare mix, competition, seasonality",
          "Ancillaries: bags, seat selection, change fees, priority boarding",
          "Cargo: belly cargo and dedicated carriers",
          "Loyalty economics: co-branded card partners and miles sales",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        items: [
          "Fuel: largest variable cost; hedging matters",
          "Asset heaviness: ownership/leases and depreciation",
          "Maintenance: reliability and OEM parts",
          "Labor: pilots, cabin crew, ground ops, unions",
          "Airport and navigation fees",
          "Distribution fees: GDS vs direct booking",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        items: [
          "Fuel volatility and oil prices",
          "Demand shocks and underutilization",
          "Regulatory shifts and route approvals",
          "Weather-related disruptions",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        items: [
          "Low-cost carrier expansion",
          "NDC distribution changeover risk",
          "Sustainable aviation fuel and efficiency pressure",
          "Ancillary growth dependence",
        ],
      },
    ],
  },
  {
    title: "Automotive & Industrials",
    image: "/industry-placeholder.svg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "OEMs: design, build, and sell vehicles",
          "Tier 1/2/3 suppliers (e.g., Bosch)",
          "Battery suppliers and charging ecosystem",
          "Rental, ride-hailing, and MaaS players",
          "Regulators and public infrastructure bodies",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Scale and capacity utilization drive fixed-cost absorption",
          "Mix management: segment, geography, and trim mix",
          "Footprint optimization and supply-chain efficiency",
          "Warranty/recall sensitivity; quality matters",
          "After-sales and financing are hidden profit pools",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        items: [
          "New vehicle sales: volume and average selling price",
          "Used vehicle sales",
          "Aftersales parts and service",
          "Financing and leasing",
          "Subscriptions/software and data monetization",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        items: [
          "Materials: steel, aluminum, batteries, electronics",
          "Labor and manufacturing overhead",
          "Warranty and recalls",
          "R&D: EV platforms and autonomous driving",
          "Logistics and inventory carrying costs",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        items: [
          "Tariffs and trade policy shifts",
          "China EV competition and margin pressure",
          "EV adoption and autonomous driving advances",
          "Software monetization and OTA features",
          "MaaS adoption growth",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        items: [
          "Energy and metal availability constraints",
          "Warranty and recall exposures",
          "Price cuts vs utilization trade-offs",
        ],
      },
    ],
  },
  {
    title: "Oil & Gas, Power & Utilities",
    image: "/industry-placeholder.svg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Majors and independent oil companies",
          "Oilfield services, midstream operators, traders",
          "National oil companies and regulators",
          "Generators and independent power producers",
          "TSO/DSO regulated grid operators",
          "Off-takers: households, industrials, data centers",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Price takers: global benchmarks and marginal pricing",
          "Oil & gas value chain: upstream → midstream → downstream",
          "Power value chain: generation → transmission → distribution → retail",
          "Scarcity and ancillary services shape power pricing",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        items: [
          "Oil & gas: price × volume and product mix",
          "Refining spreads and midstream tariffs",
          "Trading (volatile but meaningful)",
          "Power generation: MWh × price or PPA contracts",
          "Networks: regulated returns on RAB",
          "Retail: customer count × usage × margin",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        items: [
          "O&G capex: exploration, drilling, maintenance",
          "Logistics and lifting costs",
          "Carbon taxes and compliance costs",
          "Power capex and fuel opex",
          "Grid renewal, expansion, and outage costs",
          "Retail procurement, billing, and bad debt",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        items: [
          "Energy transition and decarbonization",
          "Electrification and renewables growth",
          "Massive grid capex cycle",
          "Falling renewable capex with grid bottlenecks",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        items: [
          "Oil price shocks and demand substitutes",
          "Regulatory and political shifts",
          "Equipment age and safety events",
        ],
      },
    ],
  },
  {
    title: "Financial Services & Banking",
    image: "/industry-placeholder.svg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Retail, corporate, and investment banks",
          "Payment networks, fintechs, core banking vendors",
          "Regulators and central banks",
          "Credit bureaus and rating agencies",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Net interest margin (NIM) drives profitability",
          "Capital and liquidity constraints",
          "Balance-sheet business: assets generate yield",
          "Risk and credit cycle exposure",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        items: [
          "Net interest income across loan products",
          "Fee income: payments, wealth, advisory, M&A",
          "Underwriting and arbitrage profits",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        items: [
          "Opex: labor, branches, tech, compliance",
          "Funding costs and deposit betas",
          "Credit losses and risk provisions",
          "Regulatory expenses and fines",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        items: [
          "Challenger and digital banks",
          "Expansion of payment options (BNPL)",
          "Mobile-first digitization",
          "Decentralization and crypto",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        items: [
          "Business cycle and central bank dependency",
          "Default risks by product and segment",
          "Regulatory pressure and compliance overhead",
        ],
      },
    ],
  },
  {
    title: "Insurance",
    image: "/industry-placeholder.svg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Insurers and policyholders",
          "Brokers and agents",
          "Reinsurers",
          "Regulators",
          "Investors and asset managers",
          "Claims providers",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Risk pooling and underwriting",
          "Premiums and claims economics",
          "Reserving and solvency requirements",
          "Reinsurance and investment returns",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        items: [
          "Premium growth and coverage expansion",
          "Pricing and underwriting discipline",
          "Product mix and specialized policies",
          "Retention and cross-sell",
          "Market expansion",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        items: [
          "Claims payouts",
          "Underwriting and acquisition costs",
          "Operational and administrative overhead",
          "Regulatory and compliance costs",
          "Reinsurance premiums",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        items: [
          "Digital and insurtech automation",
          "ESG and sustainability integration",
          "Regulatory evolution and transparency",
          "Customer-centric product design",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        items: [
          "Underwriting and catastrophe risk",
          "Market and investment volatility",
          "Liquidity pressure in large events",
        ],
      },
    ],
  },
  {
    title: "Healthcare",
    image: "/industry-placeholder.svg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Providers: hospitals, clinics, labs",
          "Payers: private insurers and public payers",
          "PBMs (US-heavy)",
          "Suppliers: pharma, medtech, diagnostics, EMR",
          "Regulators: reimbursement and quality rules",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Provider vs payer power dynamics",
          "Occupancy and readmissions drive economics",
          "Throughput: ED → bed → treatment → discharge",
          "Pricing and frequency both matter",
          "Revenue cycle: coding, billing, collections",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        items: [
          "Provider revenue: volume × reimbursement × service mix",
          "Ancillary services: labs, imaging, procedures",
          "Payer revenue: premiums and public subsidies",
          "Investment income on float",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        items: [
          "Labor: nurses, physicians, agency staffing",
          "Medical supplies and implants",
          "Facilities and equipment (high fixed cost)",
          "IT/EMR and administrative overhead",
          "Payer medical claims and reinsurance",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        items: [
          "Labor shortages and wage pressure",
          "Cybersecurity and privacy focus",
          "Claims and care automation",
          "AI in coding, diagnostics, throughput",
          "Shift to outpatient and home care",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        items: [
          "Supplier dependency and shortages",
          "Slow governance adoption for AI",
        ],
      },
    ],
  },
  {
    title: "Pharma & Life Sciences",
    image: "/industry-placeholder.svg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Pharma and biotech manufacturers",
          "Regulators: FDA, EMA",
          "HTA bodies and payers",
          "PBMs (US-heavy) and distributors",
          "CROs and CDMOs/CMOs",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Patent- and access-driven business models",
          "Blockbuster logic: few winners fund many failures",
          "Product selection depends on market size and pipeline success",
          "LOE: post-patent generic erosion",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        items: [
          "Drug sales based on patient pool and adherence",
          "Indication expansion and label growth",
          "Launch sequencing by country and payer segment",
          "Time to LOE and exclusivity window",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        items: [
          "R&D and clinical trial failures",
          "Manufacturing complexity (biologics, sterile)",
          "Sales and marketing by country",
          "Gross-to-net leakage: rebates and discounts",
          "Medical affairs and pharmacovigilance",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        items: [
          "Wearables and real-world evidence",
          "Value-based arrangements and pricing experiments",
          "Therapy-area focus (oncology, immunology)",
          "Manufacturing localization and resilience",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        items: [
          "Patent cliffs and generic/biosimilar erosion",
          "Pricing policy risk and transparency pressure",
          "Supply constraints and quality failures",
          "M&A/licensing to refill pipelines",
        ],
      },
    ],
  },
  {
    title: "Consumer & Retail",
    image: "/industry-placeholder.svg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Brands and CPG manufacturers",
          "Retailers and private-label owners",
          "Distributors and wholesalers",
          "Marketplaces (e.g., Amazon)",
          "Logistics carriers and 3PLs",
          "Digital channels and creators",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Store productivity: sales per sqft and traffic",
          "SKU and assortment management",
          "Margin pressure and price wars",
          "Inventory turnover and forecasting",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        items: [
          "Traffic and conversion rates",
          "Purchase volume and basket size",
          "Margin split with distributors",
          "Bundling and cross-selling",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        items: [
          "COGS and labor",
          "Returns and reverse logistics",
          "Inventory carrying costs",
          "Distribution and last-mile delivery",
          "Real estate, tech, and overhead",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        items: [
          "Omnichannel dominance (BOPIS, ship-from-store)",
          "Private label expansion",
          "Personalization via data",
          "Influencer-driven demand",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        items: [
          "Demand volatility and inflation hangover",
          "Returns explosion and margin leakage",
          "Inventory mis-forecasting and markdowns",
          "Dependency on retail partners",
        ],
      },
    ],
  },
  {
    title: "Technology & Media",
    image: "/industry-placeholder.svg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Software and platform companies",
          "Cloud providers and infrastructure vendors",
          "App stores and OS gatekeepers",
          "Advertisers and agencies",
          "Right holders and content creators",
          "Regulators overseeing speech and competition",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Scale and data drive monetization models",
          "Network effects and switching costs",
          "Churn rate and retention economics",
          "Freemium and attention economics",
          "Subscription-model trade-offs",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        items: [
          "Subscriptions and ARPU growth",
          "Transaction fees and take rates",
          "Expansion revenue and upsell",
          "Advertising and content licensing",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        items: [
          "Infrastructure and capex (servers, cloud)",
          "R&D and product development",
          "Content costs and creator payouts",
          "Marketing, growth, and support",
          "Platform moderation and compliance",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        items: [
          "Short-form video dominance",
          "AI-heavy features and agentic workflows",
          "Creator monetization expansion",
          "Cloud cost optimization",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        items: [
          "Growth saturation and rising content costs",
          "Subscription fatigue",
          "Regulatory pressure and scrutiny",
        ],
      },
    ],
  },
  {
    title: "Private Equity",
    image: "/industry-placeholder.svg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Private equity funds (GPs)",
          "Limited partners (pensions, insurers, sovereign funds)",
          "Portfolio companies",
          "Financing providers and private credit",
          "Legal and financial advisors",
          "Regulators (SEC, FCA, EU)",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Value-creation focus with operational improvement",
          "Portfolio logic: a few wins offset underperformers",
          "Investment selection based on sector attractiveness",
          "Exit timing and multiple expansion drive returns",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        items: [
          "Entry multiple and leverage structure",
          "Operational and margin improvements",
          "Exit multiple and timing",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        items: [
          "Financing and interest costs",
          "Transaction, legal, and advisory fees",
          "Operational transformation spend",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        items: [
          "Sector specialization and repeatable playbooks",
          "ESG and digital value-creation focus",
          "Financing innovation and private credit growth",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        items: [
          "Execution and integration risk",
          "Market and exit risk",
          "Financial leverage risk",
          "Regulatory and ESG risk",
        ],
      },
    ],
  },
  {
    title: "Public Sector & Non-Profit",
    image: "/industry-placeholder.svg",
    sections: [
      {
        title: "Players",
        icon: <Users size={18} />,
        items: [
          "Governments, municipalities, and SOEs",
          "International organizations (UN, World Bank, EU)",
          "NGOs and foundations",
          "Private partners and investors",
          "Beneficiaries: citizens and communities",
          "Regulators, auditors, donors, taxpayers",
        ],
      },
      {
        title: "Key Concepts",
        icon: <Tag size={18} />,
        items: [
          "Impact focus over profit maximization",
          "Power dynamics: funders vs executors vs beneficiaries",
          "Program efficiency ratio and cost-per-beneficiary",
          "Political feasibility and stakeholder management",
          "Funding cyclicality and uncertainty",
        ],
      },
      {
        title: "Revenue Drivers",
        icon: <TrendingUp size={18} />,
        items: [
          "Government budgets and tax revenue",
          "Domestic and international grants",
          "Donations and membership fees",
          "Endowment returns",
          "Public–private partnerships",
        ],
      },
      {
        title: "Cost Drivers",
        icon: <ArrowDownRight size={18} />,
        items: [
          "Program delivery costs",
          "Staff and administration",
          "Compliance, reporting, and audits",
          "Infrastructure and IT",
          "Monitoring and evaluation",
        ],
      },
      {
        title: "Trends",
        icon: <BarChart2 size={18} />,
        items: [
          "Digital government and GovTech",
          "Outcome-based funding",
          "ESG-linked public–private partnerships",
          "AI and data for service delivery",
          "Localization of aid execution",
        ],
      },
      {
        title: "Risks",
        icon: <AlertTriangle size={18} />,
        items: [
          "Budget cuts and funding volatility",
          "Political shifts and policy reversals",
          "Bureaucracy, corruption, misuse of funds",
          "Capacity constraints at local level",
          "Scrutiny of administrative overhead",
        ],
      },
    ],
  },
];

function IndustrySectionCard({ section }: { section: IndustrySection }) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full bg-[#334EAC] px-3 py-1 text-sm font-semibold text-[#FFF9F0]">
        <span className="text-[#FFF9F0]">{section.icon}</span>
        {section.title}
      </div>
      <ul className="mt-3 space-y-2 text-sm text-[#090814]">
        {section.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#081F5C]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <details className="group rounded-[18px] border border-venus bg-milky-way">
      <summary className="relative flex cursor-pointer list-none items-center justify-between gap-4 overflow-hidden rounded-[18px] border border-venus bg-[#0B0B0B] px-6 py-5 text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0) 100%), url('${industry.image}')`,
          }}
        />
        <div className="relative z-10 flex w-full items-center justify-between gap-4">
          <h3 className="text-xl font-semibold sm:text-2xl">{industry.title}</h3>
          <ChevronDown
            size={20}
            className="shrink-0 transition-transform duration-200 group-open:rotate-180"
          />
        </div>
      </summary>
      <div className="border-t border-venus px-6 py-6">
        <div className="grid gap-8 md:grid-cols-2">
          {industry.sections.map((section) => (
            <IndustrySectionCard key={section.title} section={section} />
          ))}
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
          <div className="flex items-center gap-3 text-sm text-[#081F5C]">
            <a
              href="/consulting-guide"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#081F5C] hover:text-[#334EAC]"
            >
              <ArrowLeft size={16} />
              Back
            </a>
            <span className="text-[#7096D1]">/</span>
            <a
              href="/consulting-guide"
              className="text-sm font-medium text-[#081F5C] hover:text-[#334EAC]"
            >
              Consulting Guide
            </a>
            <span className="text-[#7096D1]">/</span>
            <span className="text-sm font-semibold text-[#081F5C]">
              Industry Breakdown
            </span>
          </div>

          <div className="mt-8 max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-galaxy sm:text-4xl">
              Industry Breakdown
            </h1>
            <p className="mt-4 text-base text-[#090814] sm:text-lg">
              A quick-reference library of industry snapshots to help you frame
              cases fast: players, key concepts, revenue drivers, cost drivers,
              trends, and risks.
            </p>
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
        </Container>
      </section>
    </main>
  );
}
