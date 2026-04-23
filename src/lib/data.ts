export interface Project {
  tag: string;
  title: string;
  summary: string;
  description: string;
  pills: string[];
}

export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  team: string | null;
  highlights: string[];
}

export interface Principle {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  relationship: string;
}

export interface EducationItem {
  tag: string;
  heading: string;
  subheading: string;
  institution: string;
}

export const projects: Project[] = [
  {
    tag: "Compliance",
    title: "SOC 2 Type II and KY3P from Scratch",
    summary: "Owned compliance end to end, from gap analysis to external audit. Also led KY3P for major US banking clients.",
    description:
      "Owned Schema App's SOC 2 Type II compliance program end to end. Gap analysis, remediation across access controls, logging, and incident response, and managed the external audit. Also led KY3P compliance for major US banking clients.",
    pills: ["SOC 2 Type II", "KY3P", "Full Ownership"],
  },
  {
    tag: "AI Platform",
    title: "MCP Server for Enterprise Knowledge Graphs",
    summary: "Shipped one of the first production MCP integrations, exposing knowledge graphs to ChatGPT, Copilot, Claude, and Gemini.",
    description:
      "Led the team that shipped Schema App's MCP Server, a secure gateway that exposes enterprise Content Knowledge Graphs to AI assistants including ChatGPT, Copilot, Claude, and Gemini. Designed the auth layer, permissioned entity access, and rate limiting. One of the first production MCP integrations in the structured data space.",
    pills: ["Enterprise AI", "Auth Design", "Production MCP"],
  },
  {
    tag: "Agentic AI",
    title: "BDR Agent Army for Autonomous Outbound",
    summary: "Fleet of AI agents that research prospects, personalize outreach, and run multi-step email sequences autonomously.",
    description:
      "Architected and deployed a fleet of AI-powered BDR agents that autonomously research prospects, personalize outreach, and manage multi-step email sequences. Integrated intent signals, CRM enrichment, and LLM-generated messaging to build pipeline at scale without growing headcount.",
    pills: ["AI Agents", "Pipeline Gen", "LLM Outbound"],
  },
  {
    tag: "Agentic AI",
    title: "Chief of Staff Agent for Executive Workflows",
    summary: "AI agent that triages Slack, summarizes PRs and incidents, and drafts stakeholder updates. Cut status-gathering overhead by 60%.",
    description:
      "Built an agentic workflow system that acts as an AI chief of staff for engineering leadership. Triages Slack threads, summarizes PRs and incidents, drafts weekly stakeholder updates, and flags blockers across teams. Reduced exec overhead on status-gathering by 60%.",
    pills: ["Workflow Agent", "Slack Integration", "Exec Automation"],
  },
  {
    tag: "AI / ML",
    title: "RAG Pipeline with LangChain and AWS Bedrock",
    summary: "Retrieval pipeline over 50K+ entities with chunking, reranking, and Langfuse evaluation to reduce hallucination.",
    description:
      "Led the team that built a RAG retrieval pipeline over the knowledge graph using LangChain, vector embeddings, and AWS Bedrock. Directed chunking strategies and reranking logic across 50K+ entities, with Langfuse for LLM evaluation, reducing hallucination in customer-facing AI integrations.",
    pills: ["50K+ Entities", "LLM Eval", "Langfuse"],
  },
  {
    tag: "Cloud Migration",
    title: "$1.2M Annual Savings with AWS Migration",
    summary: "Migrated 6 services to AWS in 14 months. Cut $1.2M in annual costs and improved uptime to 99.85%.",
    description:
      "Owned the migration of TNGOC's core appraisal engine from on-premise to AWS. A 14-month initiative that moved 6 core services to cloud, cut annual operating costs by $1.2M, and improved platform uptime from 99.2% to 99.85%.",
    pills: ["6 Services", "14 Months", "99.85% Uptime"],
  },
  {
    tag: "AI Platform",
    title: "Entity Hub for AI Search Optimization",
    summary: "Entity management platform with GSC integration so teams could measure AI search visibility per entity.",
    description:
      "Directed engineering for Schema App's Entity Hub, a product that lets enterprise marketing teams identify, manage, and optimize entities across their content at scale. Integrated Google Search Console data with entity-level performance analytics so teams could measure AI search visibility per entity.",
    pills: ["Entity SEO", "GSC Integration", "Knowledge Graphs"],
  },
  {
    tag: "Agentic AI",
    title: "NLWeb Integration for Agentic Search",
    summary: "Connected structured Schema Markup to natural language interfaces for agent-driven discovery.",
    description:
      "Oversaw the integration of NLWeb endpoints into Schema App's platform, enabling enterprise customers to expose their Content Knowledge Graph to agentic search experiences. Built the connection between structured Schema Markup and natural language interfaces, positioning the product for the shift from traditional search to agent-driven discovery.",
    pills: ["NLWeb", "Agentic Search", "Schema.org"],
  },
  {
    tag: "AI Automation",
    title: "Techcom DRS SiVA Virtual Agent for Banking",
    summary: "Omni-channel virtual agent for Canadian banks handling payments, inquiries, and next-best-action in multiple languages.",
    description:
      "Helped build Techcom's DRS SiVA, an omni-channel virtual agent for Canadian financial institutions. Handles customer identification, payment processing, inquiry resolution, and next-best-action recommendations in multiple languages, 24/7. Launched to production across banking and credit union clients.",
    pills: ["Virtual Agent", "Fintech", "Omni-Channel"],
  },
  {
    tag: "AI / ML",
    title: "Techcom Predictive Next-Best-Action Engine",
    summary: "Predictive engine combining reinforcement learning and causal AI for lending lifecycle recommendations.",
    description:
      "Helped build Techcom's predictive next-best-action engine, combining reinforcement learning, causal AI, and customer lifecycle data to recommend the most effective action at each stage of the lending journey. Integrated with AI-prioritized worklists to operationalize model outputs across collections, retention, and cross-sell.",
    pills: ["Next-Best-Action", "Reinforcement Learning", "Fintech AI"],
  },
  {
    tag: "Search / SEO",
    title: "19.7% AI Overview Uplift (Case Study)",
    summary: "Restructured entity graphs to achieve 19.7% AI Overview uplift. Published as a customer case study.",
    description:
      "Drove a 19.7% AI Overview uplift for a flagship customer by restructuring entity graphs and aligning markup with LLM-parseable patterns. Published as a case study and became a key part of Schema App's sales motion.",
    pills: ["19.7% Uplift", "Published Study", "Entity Graphs"],
  },
  {
    tag: "Platform Engineering",
    title: "CDN Edge Deployment with Akamai and Cloudflare",
    summary: "Server-side Schema Markup rendering at the edge, critical for AI crawlers and governance-heavy environments.",
    description:
      "Led the engineering effort to ship server-side Schema Markup rendering at the edge through Akamai and Cloudflare CDN integrations. Enabled enterprise customers to serve structured data without JavaScript execution, critical for AI crawlers and governance-heavy environments.",
    pills: ["Edge Computing", "Akamai", "Cloudflare"],
  },
];

export const roles: Role[] = [
  {
    title: "Senior Manager, Engineering",
    company: "Schema App",
    location: "Guelph, ON (Remote)",
    period: "2025 — 2026",
    team: "12 engineers",
    highlights: [
      "Shipped MCP Server, Entity Hub, NLWeb integration, and CDN edge deployments",
      "Built RAG pipeline with LangChain and AWS Bedrock over 50K+ entities",
      "Delivered SOC 2 Type II certification and KY3P compliance",
      "Led BDR agent army and Chief of Staff agent workflow projects",
      "Served as Head of IT, vendor management, CopperTree integration",
    ],
  },
  {
    title: "Senior Manager, Software Dev & Delivery",
    company: "Techcom Software Solutions",
    location: "Vaughan, ON",
    period: "2022 — 2024",
    team: "22 engineers · $3M budget",
    highlights: [
      "Helped build predictive NBA engine and AI-prioritized worklists",
      "Shipped DRS SiVA virtual agent for Canadian banks and credit unions",
      "Launched 3 product modules, all hit GA within 2 weeks of target",
      "Cut cycle time from 9 weeks to under 5, defect escape 8% to 3%",
      "Built promotion framework, multiple engineers moved to senior/lead",
    ],
  },
  {
    title: "Manager, Software Development",
    company: "TNGOC",
    location: "Toronto, ON",
    period: "2019 — 2022",
    team: "15 developers",
    highlights: [
      "Owned AWS cloud migration, 6 services, $1.2M savings, 99.85% uptime",
      "Moved releases from monthly to bi-weekly with CI/CD pipelines",
      "Introduced code review standards, on-call rotation, PR sizing",
      "Career guidance and mentoring, multiple devs moved into lead roles",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "Mi9 Retail",
    location: "Toronto, ON",
    period: "2016 — 2019",
    team: "8 engineers",
    highlights: [
      "Split monolith into microservices, 60% fewer merge conflicts",
      "Integrated ML models for product recommendations",
      "Mentored developers at all levels into senior roles",
    ],
  },
  {
    title: "Software Developer",
    company: "Dynamic Impex",
    location: "Ludhiana, India",
    period: "2012 — 2016",
    team: null,
    highlights: [
      "Full-stack development across Java, PHP, MySQL, JavaScript",
    ],
  },
];

export const principles: Principle[] = [
  {
    title: "Teams over architectures",
    description:
      "A mediocre system with a strong team will improve. A brilliant system with a weak team will rot. I invest in the team first.",
  },
  {
    title: "Psychological safety isn't optional",
    description:
      "If your mid-level engineers won't push back on a tech lead's design, you have a culture problem that no process can fix.",
  },
  {
    title: "Ship, then iterate",
    description:
      "I'd rather ship something imperfect on Tuesday than something polished next quarter. Feedback from production beats feedback from reviews.",
  },
  {
    title: "Own the boring stuff",
    description:
      "Compliance, incident response, on-call rotations. The unglamorous work is where trust gets built. I don't delegate it and disappear.",
  },
  {
    title: "Grow people out of their roles",
    description:
      "My job is to make my reports ready for the job after this one. Multiple engineers I've managed have moved into lead and senior roles.",
  },
  {
    title: "Measure what matters, skip the rest",
    description:
      "Cycle time, defect escape rate, deployment frequency. Not story points, not lines of code, not hours logged.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "When we needed someone to own SOC 2 from scratch, Akhil didn't just delegate it. He worked with auditors directly and made sure the team understood why it mattered, not just what to do.",
    name: "Former Director, Engineering",
    title: "Schema App",
    relationship: "Cross-functional partner",
  },
  {
    quote:
      "He restructured how we did code reviews, set up career ladders, and helped me prepare for my promotion to team lead. He was building a team that could operate without him.",
    name: "Former Engineering Lead",
    title: "TNGOC",
    relationship: "Direct report",
  },
  {
    quote:
      "The cloud migration was 14 months of legacy systems and skepticism from leadership. Akhil kept us focused and shipped it without a major incident. Nobody burned out getting there, and that was the real win.",
    name: "Senior Engineer",
    title: "TNGOC",
    relationship: "Direct report",
  },
];

export const education: EducationItem[] = [
  {
    tag: "Degree",
    heading: "Master of Engineering",
    subheading: "Information Systems Security",
    institution: "Concordia University, Montreal",
  },
  {
    tag: "Certification",
    heading: "PMP",
    subheading: "Project Management Professional",
    institution: "Project Management Institute (PMI)",
  },
];
