import { principles } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

export function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-8 py-24 bg-background-alt">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How I lead
          </h2>
          <p className="text-muted text-lg mb-12 max-w-2xl">
            Principles I&apos;ve learned the hard way over 14 years.
            None of these are original — but I&apos;ve seen what happens
            when teams ignore them.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {principles.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 60}>
              <div>
                <h3 className="text-heading font-semibold text-base mb-2">
                  {p.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
