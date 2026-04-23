import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Projects — Akhil Sharma",
  description:
    "Selected projects across AI platforms, agentic workflows, cloud migrations, and compliance.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 pt-24">
      <section className="px-6 sm:px-8 pb-20">
        <div className="max-w-4xl mx-auto w-full">
          <ScrollReveal>
            <h1 className="text-heading text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Projects
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-xl mb-16">
              A fuller picture of what I&apos;ve shipped across AI, compliance,
              cloud, and platform engineering over the last 14 years.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 50}>
                <div className="bg-card rounded-xl p-6 border border-card-border/60 hover:border-accent/30 hover:shadow-md transition-all duration-300 border-l-[3px] border-l-accent/40">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h2 className="text-heading font-semibold text-lg">
                      {project.title}
                    </h2>
                    <span className="text-accent text-[11px] font-semibold uppercase tracking-widest shrink-0">
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.pills.map((pill) => (
                      <span
                        key={pill}
                        className="bg-accent-light text-accent text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
