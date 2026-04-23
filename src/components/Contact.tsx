"use client";

import { useState, type FormEvent } from "react";
import { LinkedInIcon, DownloadIcon } from "./icons";
import { ScrollReveal } from "./ScrollReveal";

const APPS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_CONTACT_FORM_URL ||
  "https://script.google.com/macros/s/AKfycbxnJxHgsex3sTfbHPN8eLDrtiF7PBXyxREWWMbiPBiPxg0WDlGhdLsPGS_FfvfaFUQ/exec";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 sm:px-8 py-28">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <ScrollReveal>
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                Contact
              </p>
              <h2 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-5">
                Let&apos;s connect
              </h2>
              <p className="text-muted text-base leading-relaxed mb-8">
                Currently exploring Senior Engineering Manager and Director-level
                roles. Open to remote positions across Canada and globally.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/akhilssharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-card-border hover:border-accent/40 text-heading font-medium px-6 py-3 rounded-xl transition-colors duration-200 text-sm inline-flex items-center gap-2 shadow-sm w-fit"
                >
                  <LinkedInIcon />
                  Connect on LinkedIn
                </a>
                <a
                  href="/Akhil_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-card-border hover:border-accent/40 text-heading font-medium px-6 py-3 rounded-xl transition-colors duration-200 text-sm inline-flex items-center gap-2 shadow-sm w-fit"
                >
                  <DownloadIcon />
                  Download Resume
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-heading text-sm font-medium mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-card border border-card-border rounded-lg px-4 py-2.5 text-sm text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-heading text-sm font-medium mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-card border border-card-border rounded-lg px-4 py-2.5 text-sm text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors duration-200"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-heading text-sm font-medium mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-card border border-card-border rounded-lg px-4 py-2.5 text-sm text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors duration-200 resize-none"
                  placeholder="What would you like to discuss?"
                />
              </div>

              {status === "sent" ? (
                <div className="bg-accent/10 text-accent text-sm font-medium px-4 py-3 rounded-lg">
                  Thanks! I&apos;ll get back to you soon.
                </div>
              ) : status === "error" ? (
                <div className="bg-red-50 text-red-700 text-sm font-medium px-4 py-3 rounded-lg">
                  Something went wrong. Try emailing me directly at{" "}
                  <a href="mailto:isser.akhil@gmail.com" className="underline">
                    isser.akhil@gmail.com
                  </a>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-accent hover:bg-accent/90 disabled:opacity-60 text-white font-medium px-8 py-3 rounded-xl transition-colors duration-200 text-sm shadow-sm w-full sm:w-auto"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
      <footer className="mt-28 pb-8 text-center">
        <p className="text-muted/40 text-xs">
          &copy; 2026 Akhil Sharma
        </p>
      </footer>
    </section>
  );
}
