import Image from "next/image";
import { LinkedInIcon, MailIcon, MapPinIcon, DownloadIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center px-6 sm:px-8 pt-16">
      <div className="max-w-4xl mx-auto w-full py-20">
        <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-16">
          <div className="flex-1">
            <div className="animate-fade-up">
              <p className="text-accent font-medium text-lg mb-5">Hey, I&apos;m Akhil</p>
            </div>
            <h1 className="animate-fade-up-delay-1 text-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
              Engineering leader
            </h1>
            <div className="animate-fade-up-delay-2 text-muted text-base sm:text-lg leading-[1.8] max-w-2xl space-y-5">
              <p>
                I lead engineering teams that take AI from prototype to
                production — MCP servers, RAG pipelines, agentic workflows,
                and the infrastructure to run them at enterprise scale. 14+
                years across AI platforms, fintech, and cloud.
              </p>
              <p>
                Most recently at{" "}
                <a
                  href="https://www.schemaapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline underline-offset-4"
                >
                  Schema App
                </a>
                , I led the team that shipped their MCP Server, Entity Hub,
                and NLWeb integration — turning a knowledge graph into the
                data layer enterprise customers use to power AI assistants.
                Before that at{" "}
                <span className="text-foreground">Techcom</span>, I helped
                build the platform&apos;s AI virtual agent and predictive
                next-best-action engine for Canadian banks and credit unions.
              </p>
            </div>
            <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-4 sm:gap-5 mt-8">
              <a
                href="https://linkedin.com/in/akhilssharma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <span className="text-divider hidden sm:inline">|</span>
              <a
                href="mailto:isser.akhil@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
              >
                <MailIcon />
                Email
              </a>
              <span className="text-divider hidden sm:inline">|</span>
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                <MapPinIcon />
                Ontario, Canada
              </span>
              <span className="text-divider hidden sm:inline">|</span>
              <a
                href="/Akhil_Sharma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200"
              >
                <DownloadIcon />
                Resume
              </a>
            </div>
          </div>
          <div className="animate-fade-up mb-8 md:mb-0 md:mt-8 flex-shrink-0">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden ring-4 ring-card-border/60 shadow-lg">
              <Image
                src="/headshot.jpg"
                alt="Akhil Sharma"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
