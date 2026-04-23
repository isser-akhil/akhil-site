import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Writing — Akhil Sharma",
  description:
    "Essays on engineering leadership, AI platforms, cloud migrations, and building high-performing teams.",
};

const published = [
  {
    title: "Shipping One of the First Production MCP Servers",
    href: "/writing/mcp-server",
    date: "April 2026",
    description:
      "Auth design, rate limiting, and the decisions that shaped Schema App's MCP integration. What we got right and what I'd do differently.",
  },
  {
    title: "Building Agentic Workflows That Actually Work",
    href: "/writing/agentic-workflows",
    date: "April 2026",
    description:
      "BDR agents, a Chief of Staff bot, and what I learned about when AI agents help and when they just create more noise.",
  },
  {
    title: "Shipping Entity Hub: From Concept to Enterprise Product",
    href: "/writing/entity-hub",
    date: "April 2026",
    description:
      "Building an entity management platform, integrating Google Search Console at the entity level, and learning what enterprise SEO teams actually need.",
  },
  {
    title: "Running SOC 2 and KY3P as an Engineering Manager",
    href: "/writing/soc2-ky3p",
    date: "March 2026",
    description:
      "What it actually looks like to own compliance end to end, and why it made me better at the rest of my job.",
  },
  {
    title: "Building a RAG Pipeline Over 50K Entities",
    href: "/writing/rag-pipeline",
    date: "March 2026",
    description:
      "Chunking strategies, reranking, evaluation with Langfuse, and what we learned building retrieval over a knowledge graph.",
  },
  {
    title: "A $1.2M Cloud Migration in 14 Months",
    href: "/writing/cloud-migration",
    date: "February 2026",
    description:
      "Moving 6 legacy services to AWS at TNGOC. What worked, what almost didn't, and how we kept the team together.",
  },
];

export default function WritingPage() {
  return (
    <main className="flex-1 pt-24">
      <section className="px-6 sm:px-8 pb-16">
        <div className="max-w-3xl mx-auto w-full">
          <ScrollReveal>
            <h1 className="text-heading text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Writing
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-xl mb-16">
              Notes on engineering leadership, AI in production, and the
              messy reality of managing software teams. Not polished
              thought leadership, just what I&apos;ve actually learned.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {published.map((post, i) => (
              <ScrollReveal key={post.href} delay={i * 60}>
                <a
                  href={post.href}
                  className="group block bg-card rounded-xl p-6 border border-card-border/60 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h2 className="text-heading font-semibold text-lg group-hover:text-accent transition-colors duration-200">
                      {post.title}
                    </h2>
                    <span className="text-muted/50 text-sm shrink-0">
                      {post.date}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {post.description}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-16 bg-background-alt rounded-2xl p-8 border border-card-border/40">
              <p className="text-heading font-semibold text-lg mb-2">
                Want to know when I publish?
              </p>
              <p className="text-muted text-sm mb-4">
                Drop me a note and I&apos;ll let you know.
              </p>
              <a
                href="mailto:isser.akhil@gmail.com?subject=Notify me about new essays"
                className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-200 text-sm inline-block shadow-sm hover:shadow-md"
              >
                Email me
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
