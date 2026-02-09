"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  HelpCircle,
  Layers,
  Search,
  Users,
  X,
} from "react-feather";
import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";

type CompanySection = {
  title: string;
  items: string[];
};

type Company = {
  name: string;
  category: string;
  image: string;
  description: string;
  sections: CompanySection[];
};

const COMPANIES: Company[] = [
  {
    name: "McKinsey & Company",
    category: "MBB",
    image: "/company-backgrounds/McKinsey.jpeg",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "McKinsey was originally founded in 1926 in Chicago by James O. McKinsey. It evolved after WWII under Marvin Bower into the modern, archetypal global strategy firm with a strong presence in corporate, public sector, and societal work.",
        ],
      },
      {
        title: "Offices & countries",
        items: ["Roughly 130+ offices in about 65+ countries worldwide."],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Financial services, TMT, healthcare, public sector, energy, advanced industries, consumer, travel and logistics.",
          "Functions: Corporate strategy, large-scale transformations, implementation, digital & analytics, operations, organization, risk, sustainability, marketing & sales.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "McKinsey & Company (core strategy & operations).",
          "McKinsey Digital (technology, digital transformation, platforms, cyber).",
          "QuantumBlack, AI by McKinsey (advanced analytics / AI).",
          "Implementation / RTS / transformation units focused on delivering impact and change on the ground.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "To help our clients make distinctive, lasting, and substantial improvements in their performance and to build a great firm that attracts, develops, excites, and retains exceptional people.",
          "Values: client impact, professional standards, obligation to dissent, non-hierarchical teaming, and strong apprenticeship.",
          "Culture: demanding, data-driven, globally integrated; strong feedback culture and high mobility.",
        ],
      },
      {
        title: "When to choose McKinsey?",
        items: [
          "You want maximum global mobility and access to almost any geography or sector.",
          "You are targeting public sector, mega-transformations, or very brand-sensitive exits (C-suite strategy, multilaterals, policy).",
          "You like structured development, formal feedback, and can handle intensity and travel.",
        ],
      },
    ],
  },
  {
    name: "Boston Consulting Group",
    category: "MBB",
    image: "/company-backgrounds/boston-consulting-group.jpg",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "BCG was founded in 1963 by Bruce Henderson as the management consulting arm of Boston Safe Deposit and Trust.",
          "Since then, it has been known for creating classic strategy frameworks such as the growth-share matrix and experience curve.",
        ],
      },
      {
        title: "Offices & countries",
        items: ["Around 90+ offices across roughly 50 countries."],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Tech, Media & Telecom, Health Care, Industrial Goods, Consumer, Energy, Finance & Insurance, Public Sector, PE & Infrastructure",
          "Functions: Corporate Finance & Strategy, Marketing, Sales & Pricing, People & Organization, Operations, Tech & Digital Advantage, Global Advantage, Social Impact, Risk & Compliance, Climate & Sustainability",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Core BCG (Strategy & Operations).",
          "BCG X (Build/AI/Design unit with technologists, scientists, engineers, designers).",
          "BCG Platinion (Architecture, cyber, enterprise solutions advisory).",
          "Digital and AI integrated through BCG X and digital-tagged consultants across practices.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Unlocking the potential of those who advance the world",
          "Purpose Principles: Challenge & Innovate | Look Ahead & Collaborate | Analyze & Identify | Act with Integrity | Serve & Empower.",
          "Values: integrity |  respect for the individual | partnership | clients-come-first | strategic perspective | expanding the art of the possible | long-term value delivered | diversity, and social impact.",
          "Culture: strong apprenticeship and feedback, structured teaming rituals (e.g., Case Connects, surveys), explicit focus on growth mindset, team trust, and sustained impact",
        ],
      },
      {
        title: "When to choose BCG?",
        items: [
          "You want strong digital and AI exposure (BCG X, Platinion) anchored in top-tier strategy work.",
          "You value a social-impact-oriented culture, formal teaming structures, and clear talent management support.",
          "You want broad industry exploration early with a path to specialize in tech, climate, or social impact.",
        ],
      },
    ],
  },
  {
    name: "Bain & Company",
    category: "MBB",
    image: "/company-backgrounds/bain.jpg",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "Bain was founded in 1973 by Bill Bain and colleagues, leaving BCG under the motto “results, not reports,”. Back in time their huge differeniator wasoften accepting equity or tied economics.",
          "Additionally, the company was built around deep client relationships and private equity support.",
        ],
      },
      {
        title: "Offices & countries",
        items: ["Roughly 65+ offices in 40+ countries."],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Aerospace & defense, automotive & mobility, agribusiness, aviation, consumer products, energy & natural resources, financial services, healthcare, industrials, media & entertainment, metals & mining, oil & gas, private equity, real estate, retail, social & public sector, technology, telecom, transportation, utilities & renewables.",
          "Functions: Strategy, operations, performance improvement, private equity (≈25% of business), M&A, procurement, sales & marketing, change management, sustainability & responsibility, transformation, digital (≈40% of business).",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Core Bain consulting.",
          "Private Equity practice (market-leading by share of PE work).",
          "Digital practice (enterprise tech, AI, insights & solutions) with thousands of products/GenAI solutions.",
          "Sector and functional practices with heavy focus on PE, transformation, and customer-centric work.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Help clients create such high levels of value that together they set new standards of excellence.",
          "“True North” Values: passion & commitment | honesty & openness | practical orientation | “one team” globally.",
          "Tied Economics: fee structures linked to client results and outcomes.",
          "Culture: strong mentorship, home-office staffing model, very cohesive “Bainie” identity, heavy results focus.",
        ],
      },
      {
        title: "When to choose Bain?",
        items: [
          "You want heavy exposure to private equity, commercial due diligence, and value-creation plans.",
          "You prefer a tight home-office culture with strong social fabric and mentorship.",
          "You’re drawn to results-obsessed, implementation-heavy projects rather than purely conceptual strategy.",
        ],
      },
    ],
  },
  {
    name: "Monitor Deloitte",
    category: "Big 4",
    image: "/company-backgrounds/deloitte.webp",
    description:
      "Monitor Deloitte is Deloitte’s strategy arm with strong implementation exposure and scale.",
    sections: [
      {
        title: "Brief history",
        items: [
          "The Monitor Group was founded in 1983 by HBS professors including Michael Porter; known for his competitive strategy work.",
          "It was later acquired by Deloitte in 2013 after financial difficulties and integrated as Monitor Deloitte, the global strategy practice of Deloitte.",
        ],
      },
      {
        title: "Offices & countries",
        items: [
          "Present globally wherever Deloitte operates (150+ countries), with strategy teams concentrated in major markets (US, UK, DACH, NL, etc.).",
        ],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Strong in corporate/competitive strategy, growth and innovation, customer & marketing, and public sector.",
          "Functions: Leverages Deloitte’s strengths in financial services, TMT, consumer, and government.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Monitor Deloitte sits within Deloitte’s consulting business alongside Technology, Human Capital, and Operations.",
          "Access to Deloitte’s implementation, risk, data, cyber, tax, and audit capabilities for end-to-end programs.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Making an impact that matters” for clients and society.",
          "Values: Lead the way | Serve with integrity | Take care of each other | Foster inclusion | Collaborate for measurable impact.",
          "Culture: Mix of strategy-firm and Big-4 corporate, often more local staffing and slightly more predictable lifestyle than pure strategy houses.",
        ],
      },
      {
        title: "When to choose Monitor Deloitte?",
        items: [
          "You want strategy work with strong implementation exposure and access to a large professional-services platform.",
          "You prioritize local staffing, lower travel, and potential exits into industry roles or internal Deloitte functions.",
          "You’re comfortable with a Big-4 brand in exchange for breadth and relative stability.",
        ],
      },
    ],
  },
  {
    name: "Strategy&",
    category: "Big 4",
    image: "/company-backgrounds/strategy&.webp",
    description:
      "Strategy& is PwC’s strategy arm combining Booz heritage with global advisory scale.",
    sections: [
      {
        title: "Brief history",
        items: [
          "It‘s founding traces back to Booz & Company (originally part of Booz Allen Hamilton’s commercial practice), an early pioneer in management consulting. It was acquired by PwC in 2014 and rebranded as Strategy&",
          "Acquired by PwC in 2014 and rebranded as Strategy&.",
        ],
      },
      {
        title: "Offices & countries",
        items: [
          "Integrated into PwC’s global network (150 countries), with strategy hubs in North America, Europe (notably Germany), and the Middle East.",
        ],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Strong in industrials, aerospace & defense, public sector, and sovereign work (Middle East in particular).",
          "Functions: corporate and business unit strategy, operating model and organization, operations and transformation, deals and commercial strategy.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Strategy& as the strategy brand inside PwC’s Advisory/Consulting (often part of Deals or Consulting).",
          "Works closely with PwC’s tax, assurance, and deals practices for integration and execution.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Build trust in society and solve important problems.",
          "Culture: Culture is built on a dual commitment: trusted leadership and distinctive outcomes. Professionals are expected to lead with integrity, inclusion, and accountability, while consistently translating that leadership into high-quality, practical results for clients and society.",
          "Values: Act with integrity | Make a difference | Care | Work together | Reimagine the possible.",
        ],
      },
      {
        title: "When to choose Strategy&?",
        items: [
          "You want strategy work with strong exposure to industrials, public sector, and sovereign/ME work.",
          "You’re interested in transactions and deals work within a strategy context.",
          "You value Big-4 scale and resources, and you’re comfortable with somewhat more corporate culture.",
        ],
      },
    ],
  },
  {
    name: "EY Parthenon",
    category: "Big 4",
    image: "/company-backgrounds/EY.webp",
    description:
      "EY-Parthenon is EY’s dedicated strategy brand with strong PE and sector focus.",
    sections: [
      {
        title: "Brief history",
        items: [
          "The Parthenon Group was founded in 1991 as a boutique strategy firm. It began integrating with EY from 2014 onwards and is now EY’s dedicated global strategy brand.",
        ],
      },
      {
        title: "Offices & countries",
        items: [
          "Embedded in EY’s 120-country network with strategy offices across the Americas, EMEIA, and Asia-Pacific (large hubs in US, UK, Germany, India, etc.).",
        ],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Strong in education, consumer/retail, and private equity/commercial due diligence.",
          "Functions: growth strategy, portfolio strategy, M&A strategy, commercial due diligence, value creation, sector-specific strategy.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "EY-Parthenon sits within EY’s consulting and transaction services, working closely with EY’s Corporate Finance and Assurance practices.",
          "Teams often specialize by sector (e.g., education, consumer, TMT, life sciences).",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Building a better working world.",
          "Values: Build trust and confidence in the capital markets | Develop outstanding leaders | Team to deliver on promises to all stakeholders.",
          "Culture: Purpose-led and people-first, empowering teams with the right mindsets and skills to navigate what’s next.",
        ],
      },
      {
        title: "When to choose EY-Parthenon?",
        items: [
          "You want high commercial-DD / PE exposure without necessarily going to Bain or Oliver Wyman.",
          "You like the combination of strategy brand with Big-4 infrastructure and mobility.",
          "You’re interested in sector specializations such as education, consumer, or TMT, depending on office.",
        ],
      },
    ],
  },
  {
    name: "KPMG",
    category: "Big 4",
    image: "/company-backgrounds/KMPG.jpg",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "KPMG was initially formed via merger of several accounting firms in 1987 with its consulting and strategy offerings expandingover time.",
          "The Global Strategy Group (GSG) is KPMG’s dedicated strategy practice within its advisory arm with strong financial services and public sector work.",
        ],
      },
      {
        title: "Offices & countries",
        items: [
          "Presence in over 143 countries; GSG operates in most major markets but is smaller than audit and tax.",
        ],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Strong in financial services, public sector, infrastructure, and regulated industries.",
          "Functions: corporate strategy, growth, deals & transaction strategy, cost reduction, risk and regulatory strategy.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "GSG within KPMG Advisory works closely with Deal Advisory, Risk Consulting, and Management Consulting.",
          "Additional specialist units in cyber, tech, and forensic work.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Inspire Confidence. Empower Change.",
          "Values: Integrity | Excellence | Courage | Together | For Better.",
          "Culture: values-led and trust-focused, with emphasis on doing what is right and continuous improvement.",
        ],
      },
      {
        title: "When to choose KPMG?",
        items: [
          "You want strategy + deals exposure with strong FS or public-sector focus.",
          "You prioritize location stability and can accept less prestige vs. MBB/Tier-2 for better balance.",
          "You see value in possibly pivoting internally into risk, tax, or audit-adjacent roles later.",
        ],
      },
    ],
  },
  {
    name: "Oliver Wyman",
    category: "Tier 2",
    image: "/company-backgrounds/OliverWyman.webp",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "Founded 1984, Oliver Wyman later merged with other units and integrated into Marsh & McLennan.",
          "Today it is known for its deep specialization in financial services and risk.",
        ],
      },
      {
        title: "Offices & countries",
        items: ["Around 60 offices in 30+ countries, strong presence in North America and Europe."],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Very strong in financial services (banking, insurance, capital markets); also active in retail, transportation, energy, and public sector.",
          "Functions: risk management, strategy, pricing, digital and analytics, organizational effectiveness, operations.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Oliver Wyman (strategy and risk) as part of Marsh & McLennan Companies.",
          "Sister businesses: Mercer (HR), Marsh (insurance), Guy Carpenter (reinsurance) for integrated solutions.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Big moments. Bold moves. Real impact, together.",
          "Values: Be Brave | Lead With Heart | Strive For Breakthroughs | Work As One | Own Our Impact.",
          "Culture: Entrepreneurial and inclusive, built around courage, heart, and unified teamwork.",
        ],
      },
      {
        title: "When to choose Oliver Wyman?",
        items: [
          "You want to specialize in financial services early (risk, banking, insurance, capital markets).",
          "You value deep analytic work and strong FS prestige in Europe/US more than a broad generalist brand.",
          "You’re comfortable with a narrower brand outside FS in exchange for depth inside it.",
        ],
      },
    ],
  },
  {
    name: "Kearney",
    category: "Tier 2",
    image: "/company-backgrounds/kearney.jpg",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "Kearney's origin is in its early split from McKinsey. Then called A.T. Kearney, it was later acquired by EDS and then became independent again after a management buyout in 2005.",
          "After being rebranded to “Kearney” in recent years, it has become a generalist strategy firm with strong operations and supply chain focus.",
        ],
      },
      {
        title: "Offices & countries",
        items: [
          "Roughly 60 offices in over 40 countries, with strong presence in Europe, Middle East, and North America.",
        ],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Generalist across industries but particularly strong in operations & supply chain, industrials, and consumer.",
          "Functions: operations, procurement, transformation, strategy, implementation.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Kearney operates as a global partnership with sector and functional practices (e.g., Operations, Procurement, Digital Transformation).",
          "Focus on integrated strategy-to-implementation work.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Be the difference of purpose for our clients, people, communities, and the planet by pursuing sustainable positive results in everything we do, as established in our principle of “essential rightness.",
          "Values: Curiosity and drive to explore new ground | Generosity of spirit to care deeply about the well-being of others | Boldness to be distinctive and break from the status quo | Solidarity to be a winning team that supports each other and their well-being | Passion and presence to be your best self.",
          "Culture: relationship-oriented, slightly less formal than MBB, with more regional than global travel in many offices.",
        ],
      },
      {
        title: "When to choose Kearney?",
        items: [
          "You want strong ops/SCM exposure and industrial or consumer work, particularly in EMEA.",
          "You prefer a somewhat more relaxed culture with high-quality work but less hype.",
          "You like a medium-sized global footprint with solid European and Middle Eastern strength.",
        ],
      },
    ],
  },
  {
    name: "Roland Berger",
    category: "Tier 2",
    image: "/company-backgrounds/roland-berger.jpg",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "Founded 1967 in Germany by Roland Berger, the firm is an European strategy champion with deep DACH and France presence, being the first major global strategy house originating from Europe.",
        ],
      },
      {
        title: "Offices & countries",
        items: [
          "Around 50 offices in roughly 30–35 countries, with particularly strong presence in Germany, France, and broader Europe.",
        ],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Strong in industrials, automotive & mobility, energy, and public sector in Europe.",
          "Functions: corporate strategy, restructuring, performance improvement, transformation, digital strategy.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Core strategy consulting plus specialized units for restructuring and digital initiatives.",
          "Partner-owned and relatively entrepreneurial compared with MBB.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
            "Help organizations, businesses and entrepreneurs to reimagine their reality and shift the world towards a new sustainable paradigm.",
          "Values: Entrepreneurship | Excellence | Empathy.",
          "Culture: Entrepreneurial, excellence-driven, and empathetic in how teams work with clients and each other.",
        ],
      },
      {
        title: "When to choose Roland Berger?",
        items: [
          "You want to build your career in continental Europe, especially DACH or France.",
          "You care about industrials, automotive, and public sector with strong local influence.",
          "You value an entrepreneurial partnership rather than a US-centric global model.",
        ],
      },
    ],
  },
  {
    name: "L.E.K. Consulting",
    category: "Tier 2",
    image: "/company-backgrounds/lek-consulting.jpg",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "Founded 1983 in London by three Bain partners, L.E.K. is a specialist strategy firm with strong healthcare and PE exposure.",
          "Over time, it built a strong reputation in strategy and transaction support.",
        ],
      },
      {
        title: "Offices & countries",
        items: ["Active in 12 countries across Europe, the Americas, and Asia-Pacific."],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Strong in life sciences & healthcare, aviation, consumer, and private equity/commercial due diligence.",
          "Functions: corporate strategy, market entry, pricing and growth, transaction support.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Global partnership with sector-focused practice groups (e.g., Life Sciences, Aviation, Consumer).",
          "Work mix spans strategy and many commercial-DD projects; limited full-scale implementation.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
            "Unleashing momentum by illuminating the pattern in the noise, challenging what’s possible and inspiring the confidence that drives conviction.",
          "Values: Excellence | Collaboration | Enablement | Empowerment | Drive.",
          "Culture: Collaborative and high-performing, with a strong emphasis on development and inclusion.",
        ],
      },
      {
        title: "When to choose L.E.K.?",
        items: [
          "You want to focus on healthcare/life sciences or a PE/commercial-DD heavy path.",
          "You’re okay with a smaller brand than MBB for more rapid specialization and exposure.",
        ],
      },
    ],
  },
  {
    name: "Alvarez & Marsal",
    category: "Restructuring & Performance",
    image: "/company-backgrounds/alvarez-marsal.jpg",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "Founded 1983 by Tony Alvarez II and Bryan Marsal, Alvarez & Marsal is a hands-on turnaround and restructuring specialist with PE ties.",
          "It gained global prominence via major bankruptcy and restructuring mandates, often working as operators as well as advisors.",
        ],
      },
      {
        title: "Offices & countries",
        items: [
          "80+ offices in over 30 countries across North America, Europe, Asia, Latin America, and the Middle East.",
        ],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Specializes in turnaround & restructuring, performance improvement, disputes & investigations, and transaction advisory.",
          "Functions:Sector coverage is broad but skewed toward distressed industries and PE portfolios.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Service Lines: Corporate Performance Improvement, Turnaround & Restructuring, Disputes & Investigations, Transaction Advisory, Tax, etc.",
          "Often takes interim management roles (CFO/CRO), working as operators as well as advisors.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
            "Providing practical solutions to the unique problems of companies, investors and government entities.",
          "Values: Integrity | Quality | Objectivity | Fun | Personal Reward | Inclusive Diversity.",
          "Culture: entrepreneurial, high-pressure, high-pay, tight links with private equity and creditors.",
        ],
      },
      {
        title: "When to choose Alvarez & Marsal?",
        items: [
          "You want to work in turnarounds and distressed situations, often on-site with management teams.",
          "You’re aiming for exits into PE portfolio ops, restructuring, CFO/CRO, or special situations.",
          "You prefer operator-style work vs pure slide-driven strategy.",
        ],
      },
    ],
  },
  {
    name: "AlixPartners",
    category: "Restructuring & Performance",
    image: "/company-backgrounds/alixpartners.webp",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "AlixPartnersis a high-stakes performance improvement and restructuring specialist, founded in 1981 by Jay Alix, initially focused on corporate restructuring. It is now a global leader in restructuring and performance improvement, and is associated with major restructurings and bankruptcies (e.g., automotive and industrial cases).",
        ],
      },
      {
        title: "Offices & countries",
        items: [
          "11+ countries across North America, Europe, Middle East, and Asia.",
        ],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Functions: Specializes in turnaround & restructuring, performance improvement, financial advisory, investigations, and digital transformation.",
          "Industries: Strong in automotive, retail, manufacturing, and consumer sectors.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Service Lines: Turnaround & Restructuring, Performance Improvement, Risk & Disputes, Digital, Transaction Advisory.",
          "Teams integrate financial, operational, and legal aspects; often small, senior-heavy.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Results. Fast. Together. When it really matters.",
          "Values: Commitment | Professionalism | Teamwork | Common Sense | Personal Respect | Communication",
          "Culture: intense, hands-on, high expectations, compensation aligned with stakes and complexity.",
        ],
      },
      {
        title: "When to choose AlixPartners?",
        items: [
          "You want high-stakes restructuring and performance improvement work similar to A&M in a smaller, more boutique environment.",
          "You’re comfortable working closely with creditors, boards, and PE sponsors in stressed situations.",
        ],
      },
    ],
  },
  {
    name: "Simon-Kucher",
    category: "Specialists",
    image: "/company-backgrounds/simon-kucher.jpg",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "Founded 1985 in Bonn, Germany, Simon-Kucher is a pricing and revenue growth specialist with a global reputation.",
          
        ],
      },
      {
        title: "Offices & countries",
        items: ["Around 45+ offices in 30+ countries worldwide."],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Core strength: pricing, marketing, sales, and revenue growth management across industries (CPG, SaaS, FS, industrials, healthcare, etc.).",
          "Functions: Projects often focus on monetization, subscription models, and commercial strategy.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Practice clusters by sector (Consumer, Financial Services, Life Sciences, Industrials, Tech & Media) and by capability (Pricing, Sales, Marketing).",
          "Mix of strategy, pricing implementation, and commercial excellence work.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "We unlock a better kind of growth that creates opportunity for everyone.",
          "Values: Create Positive Impact | Foster an Entrepreneurial Spirit | Unlock the Power of Opportunity | Value Authentic Relationships",
          "Culture: analytical but commercial, often slightly better W-L-B than top generalist strategy firms; strong European flavor in many offices.",
        ],
      },
      {
        title: "When to choose Simon-Kucher?",
        items: [
          "You want to become a pricing/commercial strategy expert.",
          "You like the idea of being the “pricing person” for future employers (CPG, SaaS, marketplaces).",
          "You’re fine with a more focused niche and somewhat narrower brand vs generalist firms.",
        ],
      },
    ],
  },
  {
    name: "FTI Consulting",
    category: "Specialists",
    image: "/company-backgrounds/FTI.webp",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "FTI originated in the 1980s as Forensic Technologies International, focusing on litigation support. Over time, it expanded via acquisitions into a global consulting and advisory firm, skilled in disputes, restructuring, and strategic communications.",
        ],
      },
      {
        title: "Offices & countries",
        items: [
          "30+ offices with key hubs in the US, UK, continental Europe, and Asia.",
        ],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Functions: Corporate Finance & Restructuring, Forensic & Litigation Consulting, Economic Consulting, Strategic Communications, Technology.",
          "Industries: Especially strong in regulated industries, litigation, investigations, and crisis communications.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Five main segments operate as separate business units with distinct P&Ls and capabilities.",
          "Roles can be more specialized (economists, forensic accountants, communications experts) than generalist strategy.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Help organizations manage change, mitigate risk, and resolve disputes.",
          "Values: Integrity | Creativity | Achievement | Respect | Empathy",
          "Culture: expert-driven, cross-disciplinary (law, economics, accounting, communications), more “advisory” than classic strategy.",
        ],
      },
      {
        title: "When to choose FTI Consulting?",
        items: [
          "You want forensic, disputes, economic consulting, or restructuring experience.",
          "You like being in expert-driven, high-stakes matters (litigation, arbitration, regulatory investigations, crises).",
          "You’re comfortable with more specialized work rather than broad generalist consulting.",
        ],
      },
    ],
  },
  {
    name: "OC&C Strategy Consultants",
    category: "Specialists",
    image: "/company-backgrounds/OC&C.jpg",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "Founded 1987 in London as a pure-play strategy boutique, OC&C Strategy Consultants is a specialist strategy firm with strong consumer and PE DD focus.",
          "Over time, it expanded across Europe, US, and Asia with selective mergers.",
        ],
      },
      {
        title: "Offices & countries",
        items: [
          "11+ countries across the UK, continental Europe, the US, and China.",
        ],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Strong in retail, consumer, media & entertainment, TMT, B2B services, and private equity/commercial DD.",
          "Functions: corporate strategy, growth, portfolio, commercial due diligence, pricing, and sometimes organization.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Single brand, partner-owned, with industry-focused practices.",
          "Work is predominantly pure strategy and DD rather than full implementation.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Values: Uncommon Sense™ | Relentless Pursuit of the Right Answer | Creative, Practical, Actionable Strategies.",
          "Culture: Lean, analytical, and client‑embedded teams focused on solving complex problems with rigor and creativity.",
        ],
      },
      {
        title: "When to choose OC&C?",
        items: [
          "You want pure strategy work in consumer/retail/media with strong PE DD exposure.",
          "You prefer smaller, collegial offices and closer partner contact.",
          "You’re fine with a more niche brand concentrated in Europe and select other markets.",
        ],
      },
    ],
  },
  {
    name: "Accenture",
    category: "Large Tech & Implementation",
    image: "/company-backgrounds/accenture.jpg",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "Accenture is a global strategy and technology powerhouse with massive scale that Originated as the consulting arm of Arthur Andersen. After sepeation, it rebranded as Accenture in 2001.",
          "Over time, it grew into one of the world’s largest technology and consulting companies.",
        ],
      },
      {
        title: "Offices & countries",
        items: [
          "200+ offices across roughly 50+ countries; several hundred thousand employees globally.",
        ],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Financial services, communications & media, health, public service, products, resources, among others.",
          "Functions: Strategy & consulting, technology, operations, digital, cloud, security.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Accenture Strategy & Consulting (business and functional strategy, operating models).",
          "Accenture Song (ex-Interactive): marketing, design, customer experience, and creative.",
          "Accenture Technology (application services, cloud, platforms) and Accenture Operations (BPO, managed services).",
          "Industry groups and innovation centers providing vertical depth.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Deliver on the promise of technology and human ingenuity.",
          "Values: client value creation | one global network | respect for the individual | integrity | stewardship | best people.",
          "Culture: very large-company and tech-oriented, travel and hours vary widely by role (strategy vs. tech vs. operations).",
        ],
      },
      {
        title: "When to choose Accenture?",
        items: [
          "You want to work at the intersection of strategy and technology, with large-scale digital transformations.",
          "You’re open to moving between strategy, digital, technology, and operations internally.",
          "You care about scale, tech depth, and long-term internal mobility more than pure strategy prestige.",
        ],
      },
    ],
  },
  {
    name: "Capgemini",
    category: "Large Tech & Implementation",
    image: "/company-backgrounds/capgemini.webp",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "Founded 1967 in Grenoble, France, as Sogeti, Capgemini is a European tech and digital transformation leader with a strong engineering base. Over time, it expanded and rebranded to Capgemini.",
          "Camgemini grew through acquisitions (including parts of Ernst & Young Consulting) into a major IT and consulting player.",
        ],
      },
      {
        title: "Offices & countries",
        items: ["Operates in about 50+ countries with more than 300k employees globally."],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: financial services, public sector, manufacturing, utilities, consumer products, telecom.",
          "Functions: consulting, technology services, outsourcing, cloud, data & AI, engineering services.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "Capgemini Invent (strategy, innovation, and digital consulting).",
          "Capgemini Engineering (formerly Altran – engineering and R&D services).",
          "Core Capgemini for applications, infrastructure services, and business services.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "With you, we create and deliver business and technology solutions that fit your needs and drive the results you want",
          "Values: Honesty | Boldness | Team Spirit | Modesty | Trust | Freedom | Fun",
          "Culture: strong European base, engineering-heavy, often more local staffing and less travel than classic strategy firms.",
        ],
      },
      {
        title: "When to choose Capgemini?",
        items: [
          "You want digital transformation and tech implementation with a strong European anchor.",
          "You’re interested in engineering, data & AI, and sector-specific technology programs.",
          "You prefer an engineering/IT culture rather than pure strategy.",
        ],
      },
    ],
  },
  {
    name: "IBM Consulting",
    category: "Large Tech & Implementation",
    image: "/company-backgrounds/IBM-consulting.jpg",
    description:
      "",
    sections: [
      {
        title: "Brief history",
        items: [
          "IBM has consulted for decades, but IBM Global Business Services rebranded themselves to IBM Consulting in 2021.",
          "As an Enterprise tech transformation consultancy integrated with IBM’s platform, the company is focused on hybrid cloud, AI, and deep enterprise IT transformations.",
        ],
      },
      {
        title: "Offices & countries",
        items: ["100+ offices across ~170 countries in line with IBM’s presence."],
      },
      {
        title: "Industry & area focus / specialization",
        items: [
          "Industries: Strong in industries with complex legacy IT: financial services, public sector, industrials, telecom, and others.",
          "Functions: digital strategy, cloud modernization, AI & analytics, process and enterprise transformation.",
        ],
      },
      {
        title: "Structure / different arms",
        items: [
          "IBM Consulting: strategy, business transformation, and technology services.",
          "Closely integrated with IBM Software (Red Hat, Data & AI, Security, Automation) and IBM Infrastructure.",
        ],
      },
      {
        title: "Mission, culture & values",
        items: [
          "Be a catalyst that makes the world work better.",
          "Values: Excellence in Your Work | Service to the Customer",
          "Culture: tech-company feel, focused on solution architecture and delivery; mix of consultants and technical specialists.",
        ],
      },
      {
        title: "When to choose IBM Consulting?",
        items: [
          "You want to work at the cloud/AI plus consulting intersection, especially around hybrid cloud and large IT estates.",
          "You’re interested in deep enterprise IT and data transformations rather than front-end corporate strategy alone.",
          "You prefer a technology-centric career path with consulting as the client-facing wrapper.",
        ],
      },
    ],
  },
];

const CATEGORY_ORDER = ["MBB", "Big 4", "Tier 2", "Restructuring & Performance", "Specialists", "Large Tech & Implementation"];

function extractStats(text: string) {
  const numbers = text.match(/\d+[\+]?/g) ?? [];
  const lower = text.toLowerCase();

  const stats: Array<{ value: string; label: string }> = [];
  if (lower.includes("offices")) stats.push({ value: numbers[0] ?? "—", label: "Offices" });
  if (lower.includes("countries"))
    stats.push({
      value: numbers[stats.length] ?? numbers[numbers.length - 1] ?? "—",
      label: "Countries",
    });
  if (!stats.length && lower.includes("cities")) {
    stats.push({ value: numbers[0] ?? "—", label: "Cities" });
    if (lower.includes("countries") && numbers[1]) {
      stats.push({ value: numbers[1], label: "Countries" });
    }
  }
  if (!stats.length && numbers.length) {
    stats.push({ value: numbers[0] ?? "—", label: "Locations" });
  }
  return stats;
}

function getSection(company: Company, title: string) {
  return company.sections.find((section) => section.title === title);
}

function getWhenToChooseSection(company: Company) {
  const section = company.sections.find((item) =>
    item.title.startsWith("When to choose")
  );
  return section ?? null;
}

function getMissionQuote(items?: string[]) {
  if (!items?.length) return "";
  const quote = items.find((item) => item.toLowerCase().startsWith("purpose:"));
  return quote ?? items[0];
}

function capitalizeFirst(value: string) {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatSpacing(text: string) {
  return text
    .replace(/\u00a0/g, " ")
    .replace(/\s*\|\s*/g, " | ")
    .replace(/,\s*/g, ", ")
    .replace(/\s+/g, " ");
}

function formatIndustriesAndFunctions(text: string) {
  const cleaned = formatSpacing(text.replace(/;/g, " I "));
  const withTitleCase = cleaned
    .split(" ")
    .map((word) => {
      if (!word) return word;
      const leadingMatch = word.match(/^[^A-Za-z0-9]+/);
      const trailingMatch = word.match(/[^A-Za-z0-9]+$/);
      const leading = leadingMatch ? leadingMatch[0] : "";
      const trailing = trailingMatch ? trailingMatch[0] : "";
      const core = word.slice(leading.length, word.length - trailing.length);
      if (!core) return word;
      if (core.toUpperCase() === core && core.length > 1) {
        return `${leading}${core}${trailing}`;
      }
      const parts = core.split("-");
      const casedParts = parts.map((part) => {
        if (!part) return part;
        return part.charAt(0).toUpperCase() + part.slice(1);
      });
      return `${leading}${casedParts.join("-")}${trailing}`;
    })
    .join(" ");
  return formatSpacing(withTitleCase.replace(/\bI\b/g, " I "));
}

function formatBullet(text: string, sectionTitle: string) {
  const withoutSemicolons = formatSpacing(text.replace(/;/g, " I "));
  if (
    sectionTitle.toLowerCase().includes("industry") ||
    sectionTitle.toLowerCase().includes("values") ||
    withoutSemicolons.toLowerCase().startsWith("industries:") ||
    withoutSemicolons.toLowerCase().startsWith("functions:") ||
    withoutSemicolons.toLowerCase().startsWith("values:")
  ) {
    return formatIndustriesAndFunctions(withoutSemicolons);
  }
  return capitalizeFirst(withoutSemicolons.trim());
}

function renderBoldLabel(text: string, sectionTitle: string) {
  const parts = text.split(":");
  if (parts.length < 2) return text;
  const label = parts.shift() ?? "";
  const rest = parts.join(":").trim();
  if (!label) return text;
  if (label.trim().toLowerCase() === "culture") {
    return (
      <>
        <strong className="font-bold">{capitalizeFirst(label)}:</strong>{" "}
        {capitalizeFirst(rest.toLowerCase())}
      </>
    );
  }
  return (
    <>
      <strong className="font-bold">{capitalizeFirst(label)}:</strong>{" "}
      {formatBullet(rest, sectionTitle)}
    </>
  );
}

export function ConsultingCompaniesPage() {
  const [activeCompany, setActiveCompany] = useState<Company | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const groupedCompanies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const filtered = query
      ? COMPANIES.filter((company) =>
          company.name.toLowerCase().includes(query)
        )
      : COMPANIES;
    const byCategory = new Map<string, Company[]>();
    filtered.forEach((company) => {
      if (!byCategory.has(company.category)) byCategory.set(company.category, []);
      byCategory.get(company.category)!.push(company);
    });
    return CATEGORY_ORDER.filter((category) => byCategory.has(category)).map(
      (category) => ({
        category,
        companies: byCategory.get(category)!,
      })
    );
  }, [searchQuery]);

  const flatCompanies = useMemo(
    () => groupedCompanies.flatMap((group) => group.companies),
    [groupedCompanies]
  );

  const activeIndex = activeCompany
    ? flatCompanies.findIndex((company) => company.name === activeCompany.name)
    : -1;

  return (
    <div className="relative">
      <div className={activeCompany ? "blur-sm" : ""}>
        <section className="bg-milky-way">
          <Container className="py-14 sm:py-16">
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
              <Badge>Consulting Companies</Badge>
              <h1 className="text-3xl font-semibold tracking-tight text-galaxy sm:text-5xl">
                Consulting Company Overviews
              </h1>
              <p className="text-base text-[#090814]">
                Explore firms by category, and click each card for a deeper
                profile on history, focus areas, culture, and fit.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-sky/40 border-b border-venus">
          <Container className="py-14 sm:py-16">
            <div className="space-y-10">
              <div className="flex w-full justify-end">
                <div className="relative w-full max-w-[360px]">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search companies"
                    className="w-full rounded-full border border-[#081F5C] bg-transparent px-4 py-2 pr-10 text-sm text-[#081F5C] placeholder:text-[#081F5C]/50 focus:outline-none focus:ring-2 focus:ring-[#334EAC]"
                    aria-label="Search companies by name"
                  />
                  <Search
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#081F5C]"
                    aria-hidden="true"
                  />
                </div>
              </div>
              {groupedCompanies.length ? (
                groupedCompanies.map((group) => (
                  <div key={group.category} className="space-y-4">
                    <Badge>{group.category}</Badge>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {group.companies.map((company) => (
                        <button
                          key={company.name}
                          type="button"
                          onClick={() => setActiveCompany(company)}
                          className="text-left"
                          aria-label={`Open ${company.name} details`}
                        >
                          <div className="relative overflow-hidden rounded-[18px]">
                            <Image
                              src={company.image}
                              alt=""
                              width={560}
                              height={360}
                              className="h-48 w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                              {company.name}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <Card className="bg-meteor">
                  <div className="text-sm font-semibold text-[#081F5C]">
                    Oh no... there are no results for your search.
                  </div>
                </Card>
              )}
            </div>
          </Container>
        </section>

        <section className="bg-milky-way">
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
                  title: "Market Sizing Numbers",
                  description:
                    "Core figures and benchmarks to speed up structured sizing math.",
                  href: "/market-sizing",
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

      {activeCompany ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
          onClick={() => setActiveCompany(null)}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              const prevIndex =
                activeIndex > 0 ? activeIndex - 1 : flatCompanies.length - 1;
              setActiveCompany(flatCompanies[prevIndex]);
            }}
            className="hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/30 text-white shadow-sm"
            style={{ marginRight: "24px" }}
            aria-label="Previous company"
          >
            <ArrowLeft size={28} />
          </button>

          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-[18px] bg-meteor shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-40 w-full">
              <Image
                src={activeCompany.image}
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-4 left-6 text-2xl font-semibold text-white">
                {activeCompany.name}
              </div>
              <button
                type="button"
                onClick={() => setActiveCompany(null)}
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#081F5C]"
                aria-label="Close company details"
              >
                <X size={18} />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto p-6">
              <p className="text-sm text-[#090814]">
                {formatBullet(activeCompany.description, "description")}
              </p>
              <div className="mt-4 text-sm text-[#090814]">
                {formatBullet(
                  getSection(activeCompany, "Brief history")?.items.join(" ") ?? "",
                  "Brief history"
                )}
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {extractStats(
                  getSection(activeCompany, "Offices & countries")?.items[0] ?? ""
                ).map((stat) => (
                  <div key={stat.label}>
                    <div className="text-5xl font-semibold text-[#334EAC]">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-[#090814]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-2 text-lg font-semibold text-[#334EAC]">
                      <Briefcase size={18} />
                      Industries &amp; Functions
                    </div>
                    <div className="mt-2 h-px w-full bg-[#334EAC]" />
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#090814]">
                    {getSection(
                      activeCompany,
                      "Industry & area focus / specialization"
                    )?.items.map((item) => (
                      <li key={item}>
                        {item.includes(":")
                          ? renderBoldLabel(item, "Industry & area focus / specialization")
                          : formatBullet(item, "Industry & area focus / specialization")}
                      </li>
                    ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-lg font-semibold text-[#334EAC]">
                      <Layers size={18} />
                      Company Arms
                    </div>
                    <div className="mt-2 h-px w-full bg-[#334EAC]" />
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#090814]">
                    {getSection(activeCompany, "Structure / different arms")?.items.map(
                      (item) => (
                        <li key={item}>
                          {item.includes(":")
                            ? renderBoldLabel(item, "Structure / different arms")
                            : formatBullet(item, "Structure / different arms")}
                        </li>
                      )
                    )}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-lg font-semibold text-[#334EAC]">
                    <Users size={18} />
                    Values &amp; Culture
                  </div>
                  <div className="mt-2 h-px w-full bg-[#334EAC]" />
                  <p className="mt-4 text-2xl font-light text-[#334EAC]">
                    “
                    {formatBullet(
                      getMissionQuote(
                        getSection(activeCompany, "Mission, culture & values")?.items
                      ),
                      "Mission, culture & values"
                    )}
                    ”
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#090814]">
                    {getSection(activeCompany, "Mission, culture & values")?.items
                      .slice(1)
                      .map((item) => (
                        <li key={item}>
                          {item.includes(":")
                            ? renderBoldLabel(item, "Mission, culture & values")
                            : formatBullet(item, "Mission, culture & values")}
                        </li>
                      ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-lg font-semibold text-[#334EAC]">
                    <HelpCircle size={18} />
                    When to Choose
                  </div>
                  <div className="mt-2 h-px w-full bg-[#334EAC]" />
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#090814]">
                    {getWhenToChooseSection(activeCompany)?.items.map((item) => (
                      <li key={item}>
                        {item.includes(":")
                          ? renderBoldLabel(item, "When to choose")
                          : formatBullet(item, "When to choose")}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              const nextIndex =
                activeIndex < flatCompanies.length - 1 ? activeIndex + 1 : 0;
              setActiveCompany(flatCompanies[nextIndex]);
            }}
            className="hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/30 text-white shadow-sm"
            style={{ marginLeft: "24px" }}
            aria-label="Next company"
          >
            <ArrowRight size={28} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
