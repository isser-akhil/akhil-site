import { education } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

export function Education() {
  return (
    <section className="px-6 sm:px-8 py-20 bg-background-alt">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            Education
          </p>
          <h2 className="text-heading text-2xl sm:text-3xl font-bold tracking-tight mb-10">
            Education &amp; Certification
          </h2>
        </ScrollReveal>
        <div className="flex flex-col sm:flex-row gap-6">
          {education.map((item, i) => (
            <ScrollReveal key={item.heading} className="flex-1" delay={i * 100}>
              <div className="bg-card rounded-2xl p-7 shadow-sm border border-card-border/60 h-full">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
                  {item.tag}
                </p>
                <h3 className="text-heading font-semibold text-lg mb-1">
                  {item.heading}
                </h3>
                <p className="text-muted text-sm">{item.subheading}</p>
                <p className="text-muted/60 text-sm mt-1">{item.institution}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
