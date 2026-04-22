import { skillGroups } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

export function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-8 py-28 bg-background-alt">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            Expertise
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-14">
            Skills &amp; Technologies
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.label} delay={i * 80}>
              <div>
                <h3 className="text-heading font-semibold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-divider">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-card text-muted text-sm px-3 py-1.5 rounded-lg border border-card-border hover:text-accent hover:border-accent/30 transition-colors duration-200 cursor-default"
                    >
                      {item}
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
