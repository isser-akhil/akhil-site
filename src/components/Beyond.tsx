"use client";

import { ScrollReveal } from "./ScrollReveal";

const interests = [
  {
    label: "Trekking",
    detail:
      "I try to get out on a trail when I can. Weekends on the Niagara Escarpment, longer trips when the schedule allows.",
  },
  {
    label: "Cooking",
    detail:
      "Indian vegetarian dishes, mostly. It's the one thing I do that has nothing to do with screens.",
  },
  {
    label: "Reading",
    detail:
      "The Lean Startup, Let Them, Eat That Frog, Psychology of Money, Take Back Your Time. I keep a rotation going.",
  },
  {
    label: "Gaming",
    detail:
      "Strategy and RPGs when the house is quiet. I don't stream or anything, I just like the problem solving.",
  },
  {
    label: "Building things",
    detail:
      "Home automation, side projects, new frameworks. Most of it never ships, some of it turns into something real. SupplyGuard started as a weekend prototype.",
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
            I value time with family and friends. Outside of that, you can
            usually find me doing something from this list.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
