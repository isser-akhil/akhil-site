import { education } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

export function Education() {
  return (
    <section className="px-6 sm:px-8 py-24 bg-background-alt">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            Education
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-14">
            Education &amp; Certification
          </h2>
        </ScrollReveal>
        <div className="flex flex-col sm:flex-row gap-6">
          {education.map((item, i) => (
            <ScrollReveal key={item.heading} className="flex-1" delay={i * 100}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-card-border/60 hover:shadow-md hover:border-accent/20 transition-all duration-300 h-full">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
                  {item.tag}
                </p>
                <h3 className="text-heading font-semibold text-xl mb-1">
                  {item.heading}
                </h3>
                <p className="text-muted">{item.subheading}</p>
                <p className="text-muted text-sm mt-2">{item.institution}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
