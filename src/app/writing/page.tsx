import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Writing — Akhil Sharma",
  description:
    "Essays on engineering leadership, AI platforms, cloud migrations, and building high-performing teams.",
};

const upcomingTopics = [
  {
    title: "What I Learned Shipping One of the First Production MCP Servers",
    tag: "AI / MCP",
    description:
      "Auth design, rate limiting, and the decisions that shaped Schema App's MCP integration.",
  },
  {
    title: "Leading a $1.2M Cloud Migration Without Losing Sleep (or Engineers)",
    tag: "Cloud / Leadership",
    description:
      "14 months, 6 services, and the playbook for moving critical infra to AWS.",
  },
  {
    title: "Why SOC 2 Compliance Made Me a Better Engineering Manager",
    tag: "Compliance",
    description:
      "How owning compliance end-to-end changes how you think about engineering culture.",
  },
  {
    title: "The RAG Pipeline Playbook: From 50K Entities to Production",
    tag: "AI / ML",
    description:
      "Chunking strategies, reranking, and evaluation patterns with LangChain and Bedrock.",
  },
];

export default function WritingPage() {
  return (
    <main className="flex-1 pt-24">
      <section className="px-6 sm:px-8 pb-16">
        <div className="max-w-3xl mx-auto w-full">
          <ScrollReveal>
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
              Writing
            </p>
            <h1 className="text-heading text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Thoughts on building
              <br />
              <span className="text-muted font-light">
                teams &amp; systems
              </span>
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-xl mb-16">
              Essays on engineering leadership, AI in production, cloud
              architecture, and the messy reality of managing software teams at
              scale. Coming soon.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-heading font-semibold text-sm uppercase tracking-wider mb-6">
              What I&apos;m working on
            </p>
          </ScrollReveal>
          <div className="space-y-4">
            {upcomingTopics.map((topic, i) => (
              <ScrollReveal key={topic.title} delay={150 + i * 80}>
                <div className="group bg-card rounded-xl p-6 border border-card-border/60 border-l-[3px] border-l-accent/40 hover:border-l-accent hover:shadow-md transition-all duration-300">
                  <p className="text-heading font-medium text-base mb-1 group-hover:text-accent transition-colors duration-200">
                    {topic.title}
                  </p>
                  <p className="text-muted text-sm mb-2 leading-relaxed">
                    {topic.description}
                  </p>
                  <p className="text-accent/70 text-xs font-medium uppercase tracking-widest">
                    {topic.tag}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="mt-16 bg-background-alt rounded-2xl p-8 border border-card-border/40">
              <p className="text-heading font-semibold text-lg mb-2">
                Want to know when I publish?
              </p>
              <p className="text-muted text-sm mb-4">
                Send me a note and I&apos;ll reach out when the first piece is
                up.
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
