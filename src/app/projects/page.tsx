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
        <div className="max-w-5xl mx-auto w-full">
          <ScrollReveal>
            <h1 className="text-heading text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Projects
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-xl mb-16">
              A fuller picture of what I&apos;ve shipped across AI, compliance,
              cloud, and platform engineering over the last 14 years.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 50}>
                <div className="group bg-card rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-card-border/60 hover:border-accent/30 h-full border-t-[3px] border-t-accent/40 hover:border-t-accent">
                  <p className="text-accent text-[11px] font-semibold uppercase tracking-widest mb-2">
                    {project.tag}
                  </p>
                  <h2 className="text-heading font-semibold text-[15px] mb-2 leading-snug group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-muted text-sm leading-relaxed pt-3 border-t border-card-border/40 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                        {project.pills.map((pill) => (
                          <span
                            key={pill}
                            className="bg-accent-light text-accent text-[11px] font-medium px-2 py-0.5 rounded-full"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
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
