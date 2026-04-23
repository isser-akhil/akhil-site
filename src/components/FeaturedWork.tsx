import { projects } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

export function FeaturedWork() {
  return (
    <section id="work" className="px-6 sm:px-8 py-28 bg-background-alt">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            Selected Work
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-14">
            Projects &amp; Impact
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 80}>
              <div className="group bg-card rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col border border-card-border/60 hover:border-accent/30 h-full border-t-[3px] border-t-accent/40 hover:border-t-accent">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                  {project.tag}
                </p>
                <h3 className="text-heading font-semibold text-lg mb-3 leading-snug group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
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
  );
}
