export interface Project {
  tag: string;
  title: string;
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

export interface SkillGroup {
  label: string;
  items: string[];
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
    tag: "AI Platform",
    title: "MCP Server for Enterprise Knowledge Graphs",
    description:
      "Directed the development of Schema App's MCP Server — a system that lets enterprise customers expose their Content Knowledge Graph to major AI assistants. Shaped the technical design for the auth layer, permissioned access, and rate limiting. One of the first production MCP integrations in the structured data space.",
    pills: ["Enterprise AI", "Auth Design", "Production MCP"],
  },
  {
    tag: "AI / ML",
    title: "RAG Pipeline — LangChain & AWS Bedrock",
    description:
      "Led the team that built a RAG retrieval pipeline over the knowledge graph using LangChain, vector embeddings, and AWS Bedrock. Directed chunking strategies and reranking logic across 50K+ entities, with Langfuse for LLM evaluation, reducing hallucination in customer-facing AI integrations.",
    pills: ["50K+ Entities", "LLM Eval", "Langfuse"],
  },
  {
    tag: "Cloud Migration",
    title: "$1.2M Annual Savings — AWS Migration",
    description:
      "Owned the migration of the core appraisal engine from on-premise to AWS at TNGOC. A 14-month initiative that moved 6 core services to cloud, cut annual operating costs by $1.2M, and improved platform uptime from 99.2% to 99.85%.",
    pills: ["6 Services", "14 Months", "99.85% Uptime"],
  },
  {
    tag: "Compliance",
    title: "SOC 2 Type II + KY3P — From Scratch",
    description:
      "Owned Schema App's SOC 2 Type II compliance program end to end — gap analysis, remediation across access controls, logging, and incident response, and managed the external audit. Also led KY3P compliance for major US banking clients.",
    pills: ["SOC 2 Type II", "KY3P", "Full Ownership"],
  },
  {
    tag: "AI Automation",
    title: "GPT-Powered Customer Support",
    description:
      "Responsible for integrating GPT-based automation into Techcom's customer support workflow. Reduced median first-response time from over 3 hours to under 30 minutes, laying the technical foundation for their later virtual agent product.",
    pills: ["3hrs → 30min", "GPT", "Support Automation"],
  },
  {
    tag: "Search / SEO",
    title: "19.7% AI Overview Uplift — Case Study",
    description:
      "Drove a 19.7% AI Overview uplift for a flagship customer by restructuring entity graphs and aligning markup with LLM-parseable patterns. Published as a case study and became a key part of Schema App's sales motion.",
    pills: ["19.7% Uplift", "Published Study", "Entity Graphs"],
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
      "Shipped MCP Server, RAG pipeline with LangChain & AWS Bedrock",
      "Delivered SOC 2 Type II certification and KY3P compliance",
      "Served as Head of IT — vendor management, CopperTree integration",
      "Partnered with University of Guelph for co-op hiring pipeline",
    ],
  },
  {
    title: "Senior Manager, Software Dev & Delivery",
    company: "Techcom Software Solutions",
    location: "Vaughan, ON",
    period: "2022 — 2024",
    team: "22 engineers · $3M budget",
    highlights: [
      "Integrated GPT automation, shipped predictive NBA engine",
      "Launched 3 product modules — all hit GA within 2 weeks of target",
      "Cut cycle time from 9 weeks to under 5, defect escape 8% → 3%",
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
      "Owned AWS cloud migration — 6 services, $1.2M savings, 99.85% uptime",
      "Moved releases from monthly to bi-weekly with CI/CD pipelines",
      "Introduced code review standards, on-call rotation, PR sizing",
      "Career guidance and mentoring — multiple devs moved into lead roles",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "Mi9 Retail",
    location: "Toronto, ON",
    period: "2016 — 2019",
    team: "8 engineers",
    highlights: [
      "Split monolith into microservices — 60% fewer merge conflicts",
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

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    items: [
      "Python",
      "TypeScript",
      "Java",
      "Node.js",
      "React",
      "Next.js",
      "Spring Boot",
    ],
  },
  {
    label: "AI & Semantic Web",
    items: [
      "LangChain",
      "OpenAI API",
      "AWS Bedrock",
      "AWS Agentcore",
      "RAG",
      "Vector Embeddings",
      "Langfuse",
      "Knowledge Graphs",
      "RDF",
      "SPARQL",
      "SHACL",
      "JSON-LD",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Datadog",
      "Cursor",
    ],
  },
  {
    label: "Leadership",
    items: [
      "Org Design & Scaling",
      "Hiring Strategy",
      "Performance Management",
      "Career Frameworks",
      "Roadmap Ownership",
      "Budget Management",
      "SOC 2 / KY3P",
      "Agile / Scrum",
      "PMP Certified",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Akhil has a rare ability to hold both the technical and the human sides of engineering leadership at the same time. When we needed someone to own SOC 2 from scratch, he didn't just delegate it — he understood every control, worked with auditors directly, and made sure the engineering team actually internalized why it mattered. That kind of ownership is hard to find.",
    name: "Former Director of Product",
    title: "Schema App",
    relationship: "Cross-functional partner",
  },
  {
    quote:
      "I was a mid-level developer when Akhil joined. Within a year he'd restructured how we did code reviews, set up proper career ladders, and personally helped me prepare for my promotion to team lead. He wasn't just managing tickets — he was building a team that could operate without him. That's the difference.",
    name: "Former Team Lead",
    title: "TNGOC",
    relationship: "Direct report",
  },
  {
    quote:
      "The cloud migration was the hardest project I've worked on — 14 months, legacy systems everywhere, and a lot of skepticism from leadership. Akhil kept the team focused, fought for the resources we needed, and made sure we shipped without a single major incident. The $1.2M in savings got all the credit, but the real win was that nobody burned out getting there.",
    name: "Senior Developer",
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
