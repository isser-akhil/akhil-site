import { projects } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

const featured = projects.slice(0, 6);

export function FeaturedWork() {
  return (
    <section id="work" className="px-6 sm:px-8 py-28 bg-background-alt">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            Selected Work
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-14">
            Projects &amp; Impact
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 60}>
              <div className="group bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-card-border/60 hover:border-accent/30 h-full border-t-[3px] border-t-accent/40 hover:border-t-accent">
                <p className="text-accent text-[11px] font-semibold uppercase tracking-widest mb-2">
                  {project.tag}
                </p>
                <h3 className="text-heading font-semibold text-[15px] mb-2 leading-snug group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {project.summary}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={400}>
          <div className="mt-10 text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200"
            >
              See all {projects.length} projects
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
