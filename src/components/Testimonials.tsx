import { testimonials } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

export function Testimonials() {
  return (
    <section className="px-6 sm:px-8 py-28">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            What People Say
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-14">
            Working with me
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name + t.title} delay={i * 100}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-card-border/60 hover:shadow-md hover:border-accent/20 transition-all duration-300 flex flex-col h-full">
                <p className="text-accent/30 text-4xl font-serif leading-none mb-2">&ldquo;</p>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                  {t.quote}
                </p>
                <div className="border-t border-divider pt-4">
                  <p className="text-heading font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted text-xs mt-0.5">{t.title}</p>
                  <p className="text-accent text-xs mt-0.5">
                    {t.relationship}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={400}>
          <p className="text-center text-muted/50 text-xs mt-8">
            Names anonymized. Feedback from actual colleagues, shared with
            permission.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
