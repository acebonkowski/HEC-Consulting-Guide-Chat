# Product Requirements Document (PRD)
## HEC Paris MBA Consulting Club – Public Website

---

## 1. Product Vision

A modern, intuitive, responsive website providing MBA students with **all information required to understand, prepare for, and realistically assess management consulting careers and recruiting**.

The website intentionally aggregates **researched, source-backed content** to counter fragmented, anecdotal, and often misleading advice found online.

The website consists of:
1. **Landing Page (one pager with anchors)** covering role and market
2. **Consulting Guide** (linked only; not implemented here)

Primary objective: reduce ambiguity around consulting careers while maintaining a premium, consulting-grade standard in both content and design.

---

## 2. Target User

### Persona: Consulting-Focused MBA Candidate

**Profile**
- MBA student at HEC Paris (age 24–34)
- Actively pursuing a pivot into management consulting

**Goals**
- Secure a consulting internship or full-time role
- Build structured problem-solving and case interview skills
- Gain clarity on recruiting strategies, networking, and firm fit

**Behaviors**
- Actively consumes consulting content (cases, frameworks, firm insights)
- Seeks practical, time-efficient guidance
- Values clear benchmarks and proven preparation methods

**Pain Points**
- Information overload and inconsistent advice
- High competition and opaque recruiting criteria
- Limited time alongside demanding MBA coursework

---

## 3. Information Architecture

### Navigation (Sticky)
Home | The Role | The Market | Key Resources | Contact | **Consulting Guide (CTA)**

---

## 4. Design System

### Color Palette (with Usage Guidance)

| Token | Hex | Usage |
|------|-----|-------|
| Planetary | `#334EAC` | Primary brand color; section headings, key figures, primary CTAs |
| Galaxy | `#081F5C` | Navigation bar, footer background, high-emphasis sections |
| Universe | `#7096D1` | Secondary UI elements, tiles, icons, charts |
| Venus | `#BAD6EB` | Subtle dividers, secondary backgrounds, hover states |
| Sky | `#D0E3FF` | Section background blocks to separate content |
| Meteor | `#F7F2EB` | Card backgrounds and neutral content panels |
| Milky Way | `#FFF9F0` | Main page background for warmth and readability |

All color combinations must meet **WCAG 2.1 AA contrast requirements**.

### Typography
- Primary font: Open Sans  
  https://fonts.google.com/specimen/Open+Sans

### UI Libraries
- https://prebuiltui.com/components
- https://uiverse.io/elements

### Illustrations
- https://undraw.co/illustrations

### Accessibility
- ADA Standards for Accessible Design
- WCAG 2.1 AA  
  https://www.w3.org/WAI/standards-guidelines/wcag/

---

## 5. Technology Stack

- Next.js (latest): https://nextjs.org/docs
- React (latest)
- TypeScript (strict)
- Tailwind CSS (latest): https://tailwindcss.com/docs
- Static-first deployment (Vercel / Netlify)

---

## 6. Content Requirements

---

## 6.1 Home

**Purpose**
Immediately communicate who the Consulting Club is, who the site is for, and why it exists.

**Content**
- Headline: *Welcome to the HEC MBA Consulting Club!*
- Short paragraph describing the club’s mission and role in consulting recruiting
- Corporate-friendly illustration (unDraw)

**CTAs**
- “Get Involved” → #Contact
- “Consulting Guide” → /consulting-guide

---

## 6.2 The Role

### Compensation Benchmarks

- **United States (Top Firms)**  
  Typical MBB post-MBA base: USD 190,000–192,000  
  Bonuses push total compensation above USD 230,000  
  Source:  
  https://www.businessbecause.com/news/in-the-news/9655/management-consultant-salaries-2025

- **Europe (incl. UK)**  
  MBB Associate base in major EU markets (e.g., Germany, UK): EUR/GBP 90,000–110,000  
  Source:  
  https://caselane.ai/blog/mckinsey-salary-2025

- **Middle East (GCC)**  
  Base ~USD 130,000  
  40%+ fixed allowance and up to 25% performance bonus  
  Total cash often exceeds USD 200,000; packages frequently tax-advantaged  
  Source:  
  https://managementconsulted.com/consultant-salary/

---

### Core Consulting Skills

Each skill is presented with a description and a real-world application.

- **Analytical problem-solving**  
  Structure ambiguous problems, apply hypothesis-driven and data-driven analysis, and translate insights into recommendations.  
  *In practice:* building Excel/BI models, pressure-testing assumptions, synthesizing messy data.

- **Communication and presentation**  
  Craft clear narratives, synthesize complexity, and tailor messages to senior stakeholders.  
  *In practice:* slide building, steering-committee presentations.

- **Collaboration and teamwork**  
  Work effectively in cross-functional and multicultural teams.  
  *In practice:* daily coordination with partners, managers, and client teams.

- **Project and time management**  
  Own workstreams end to end and manage competing priorities.  
  *In practice:* weekly planning, milestone tracking.

- **Adaptability and learning agility**  
  Rapidly adjust to new industries, topics, and client needs.  
  *In practice:* learning AI, sustainability, or new sectors on the fly.

- **Client orientation**  
  Design client-centric solutions focused on value creation.  
  *In practice:* scope alignment and implementation support.

- **Leadership and people development**  
  Lead modules, mentor juniors, and give feedback.  
  *In practice:* being the “go-to” person for a topic.

- **Business and commercial acumen**  
  Understand how clients make money and link advice to impact.  
  *In practice:* tying recommendations to P&L and ROI.

---

### Day in the Life of a Consultant

Typical workload: **50–60 hours of actual work per week**, excluding additional travel/admin.

Breakdown:
- 20–25h: Analysis & problem-solving
- 10–15h: Client meetings & workshops
- 10–12h: Slide building & documentation
- 5–8h: Internal team coordination
- 3–5h: Travel & logistics (if non-local)
- 3–5h: Learning, admin, and networking

Sources:
- https://www.casebasix.com/pages/work-life-balance-consulting
- https://www.consultancy.eu/career/work-life-balance

Regional note:
- Europe: formal 40h contracts, but actual hours often higher
- US & GCC: projects frequently reach 60–80h during peak periods

---

### Pros & Cons of Consulting

Source: r/consulting

**Pros**
- High compensation and accelerated learning
- Strong career optionality after 2–4 years
- Variety of industries and problems
- Early exposure to senior decision-makers

**Cons**
- Long hours and burnout risk
- Travel intensity on some projects
- Unpredictable staffing
- Up-or-out promotion pressure

---

## 6.3 The Market

### Hiring Momentum
- ~60% year-over-year increase in consulting roles (H1 2024 → H1 2025)  
  Source:  
  https://blog.getaura.ai/management-consulting-job-market-2025

---

### Overall Market Condition

The market is characterized by **cautious growth with regional divergence and selective hiring**.

**Europe**
- Largest EMEA consulting market
- Strategic consulting CAGR ~4–5% (2025–2035)
- Disciplined spending and targeted hiring  
  Source:  
  https://www.linkedin.com/pulse/europe-strategic-consulting-services-market-cagr-crxif

**United States**
- Recovery after 2023–24 slowdown
- Growth strongest in digital and implementation roles  
  Source:  
  https://blog.getaura.ai/management-consulting-job-market-2025

**Middle East (GCC)**
- ~12% growth forecast for 2025
- Driven by Vision 2030 transformation programs  
  Source:  
  https://www.consultancy-me.com/news/11464/consulting-market-of-gcc-to-grow-by-12-to-over-8-billion-in-2025

---

### Key Industry Trends Impacting Recruiting

1. Shift toward digital, analytics, and implementation  
   *Recruiting implication:* higher demand for technical fluency.

2. Sustainability and ESG consulting growth  
   *Recruiting implication:* demand for climate and impact expertise.

3. Selective and precision hiring  
   *Recruiting implication:* stronger emphasis on fit and prior experience.

4. Regional rebalancing  
   *Recruiting implication:* more roles in GCC and select US cities.

5. Hybrid work normalization  
   *Recruiting implication:* flexibility marketed, intensity remains.

---

### Who Is Hiring Consultants

| Category | Example Firms | Description |
|--------|---------------|-------------|
| MBB | McKinsey, BCG, Bain | Global strategy leaders with high-impact work, premium compensation, and broad sector coverage. |
| Big 4 | Deloitte, PwC, EY, KPMG | Large professional-services firms with strong implementation, risk, deals, and technology practices. |
| Tier-2 / Strategy | Oliver Wyman, Strategy&, Kearney, Roland Berger, L.E.K., Alvarez & Marsal | Strategy-focused firms often specialized by sector or region, with work similar to MBB in many teams. |
| Boutiques | AlixPartners, Simon-Kucher, FTI | Deep functional or industry specialization with early responsibility. |
| Implementation / Digital | Accenture, Capgemini, IBM Consulting | Technology, systems integration, and large-scale transformation focus. |
| In-house Consulting | Siemens, Amazon, Allianz, TotalEnergies | Internal consulting teams with lower travel and direct paths into line roles. |

---

## 6.4 Key Resources

- **Case prep**  
  Casecoach: https://casecoach.com/  
  Rocketblocks: https://www.rocketblocks.me/

- **Case books**  
  HEC Consulting Club Case Collection:  
  https://hecparis.sharepoint.com/teams/HECMBAConsultingClub/Documents%20partages/Forms/AllItems.aspx

- **Behavioral interviews**  
  Big Interview: https://hec.biginterview.com/login

- **Aptitude tests**  
  https://www.practiceaptitudetest.com/

- **Networking & Events**  
  HEC Alumni: https://www.hecalumni.fr/fr/  
  Handshake: https://hec.joinhandshake.fr/  
  LinkedIn

---

## 6.5 Contact

- LinkedIn:  
  https://www.linkedin.com/company/hec-paris-mba-consulting-club/

- Email:  
  mailto:mbaclub.consulting@hec.edu

---

## 7. Footer

© 2026 HEC Consulting Club. All rights reserved.
