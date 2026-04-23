"use client";

import { ScrollReveal } from "./ScrollReveal";

const interests = [
  {
    label: "Trekking",
    detail:
      "I try to get out on a trail every few weeks. Nothing clears the head like 20 km through the Niagara Escarpment or scrambling up a ridge in the Rockies. I've done a few multi-day treks in the Himalayas and keep a running list of trails I want to hit next.",
  },
  {
    label: "Gaming",
    detail:
      "I've been playing games since I was a kid. These days it's mostly strategy and RPGs when the house is quiet. I don't stream or anything, I just like the problem solving.",
  },
  {
    label: "Building things",
    detail:
      "I tinker constantly. Home automation, side projects, new frameworks. Most of it never ships, some of it turns into something real. SupplyGuard started as a weekend prototype.",
  },
];

export function Beyond() {
  return (
    <section className="px-6 sm:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-heading text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            When I&apos;m not working
          </h2>
          <p className="text-muted text-base mb-10 max-w-xl">
            I spend most of my time with my family. The rest usually looks
            something like this.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {interests.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 80}>
              <div className="group">
                <h3 className="text-heading font-semibold text-base mb-2">
                  {item.label}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
