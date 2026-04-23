import { testimonials } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

export function Testimonials() {
  return (
    <section className="px-6 sm:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            From people I&apos;ve worked with
          </h2>
        </ScrollReveal>
        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name + t.title} delay={i * 80}>
              <blockquote className="border-l-2 border-accent/40 pl-6">
                <p className="text-muted text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-3 text-sm">
                  <span className="text-heading font-medium">{t.name}</span>
                  <span className="text-muted"> · {t.title}</span>
                  <span className="text-muted/60"> · {t.relationship}</span>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={300}>
          <p className="text-muted/50 text-xs mt-10">
            Names withheld at their request. More on{" "}
            <a
              href="https://linkedin.com/in/akhilssharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/60 hover:text-accent underline underline-offset-2"
            >
              LinkedIn
            </a>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
