import { roles } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

export function Career() {
  return (
    <section id="career" className="px-6 sm:px-8 py-28">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            Career
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-14">
            14+ years of building &amp; scaling
          </h2>
        </ScrollReveal>
        <div className="space-y-0">
          {roles.map((role, i) => (
            <ScrollReveal key={`${role.company}-${role.period}`} delay={i * 60}>
              <div
                className={`relative pl-10 pb-14 ${
                  i < roles.length - 1
                    ? "border-l-2 border-card-border"
                    : "border-l-2 border-transparent"
                }`}
              >
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-accent -translate-x-[8px] ring-[5px] ring-background" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-heading font-semibold text-lg">
                      {role.title}
                    </h3>
                    <p className="text-base">
                      <span className="text-accent font-medium">
                        {role.company}
                      </span>
                      <span className="text-muted"> · {role.location}</span>
                    </p>
                  </div>
                  <p className="text-muted text-sm font-mono shrink-0">
                    {role.period}
                  </p>
                </div>
                {role.team && (
                  <p className="text-muted text-sm mb-3 font-medium">
                    {role.team}
                  </p>
                )}
                <ul className="space-y-2">
                  {role.highlights.map((item, j) => (
                    <li
                      key={j}
                      className="text-muted text-sm leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-accent/70 mt-[7px] shrink-0 block w-1.5 h-1.5 rounded-full bg-accent/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
