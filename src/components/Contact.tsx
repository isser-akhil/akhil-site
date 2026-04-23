import { MailIcon, LinkedInIcon, DownloadIcon } from "./icons";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-8 py-28">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-5">
            Let&apos;s connect
          </h2>
          <p className="text-muted text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Currently exploring Senior Engineering Manager and Director-level
            roles. Open to remote positions across Canada and globally.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:isser.akhil@gmail.com"
              className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-3.5 rounded-xl transition-colors duration-200 text-sm inline-flex items-center gap-2 shadow-sm"
            >
              <MailIcon />
              Send me an email
            </a>
            <a
              href="https://linkedin.com/in/akhilssharma"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-card-border hover:border-accent/40 text-heading font-medium px-8 py-3.5 rounded-xl transition-colors duration-200 text-sm inline-flex items-center gap-2 shadow-sm"
            >
              <LinkedInIcon />
              Connect on LinkedIn
            </a>
            <a
              href="/Akhil_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-card-border hover:border-accent/40 text-heading font-medium px-8 py-3.5 rounded-xl transition-colors duration-200 text-sm inline-flex items-center gap-2 shadow-sm"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>
        </ScrollReveal>
      </div>
      <footer className="mt-28 pb-8 text-center">
        <p className="text-muted/40 text-xs">
          &copy; 2026 Akhil Sharma
        </p>
      </footer>
    </section>
  );
}
