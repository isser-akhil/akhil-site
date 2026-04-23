import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A $1.2M Cloud Migration in 14 Months — Akhil Sharma",
  description:
    "The playbook for moving 6 legacy services to AWS at TNGOC. What worked, what almost didn't, and how we kept the team intact.",
};

export default function CloudMigrationEssay() {
  return (
    <main className="flex-1 pt-24 pb-20">
      <article className="px-6 sm:px-8">
        <div className="max-w-2xl mx-auto w-full">
          <header className="mb-12">
            <p className="text-accent/70 text-sm font-medium mb-3">
              February 2026
            </p>
            <h1 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-4">
              A $1.2M Cloud Migration in 14 Months
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Moving 6 legacy services to AWS at TNGOC. What worked,
              what almost didn&apos;t, and how we kept the team together.
            </p>
          </header>

          <div className="prose-custom text-muted text-base leading-[1.85] space-y-6">
            <p>
              In 2019, TNGOC&apos;s core appraisal engine ran on aging
              on-premise hardware with maintenance contracts that cost more
              every year. The business case for cloud was obvious on a
              spreadsheet. The execution was 14 months of my life.
            </p>
            <p>
              We moved 6 core services to AWS, cut annual operating costs
              by $1.2M, and improved platform uptime from 99.2% to 99.85%.
              This is how we did it, and what I&apos;d change if I had to
              do it again.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              Getting buy-in was the first project
            </h2>
            <p>
              Leadership approved the migration but didn&apos;t fully trust it.
              Every quarter I had to re-justify the timeline and the spend.
              I learned early that the financial argument alone wasn&apos;t
              enough. What actually moved the conversation was framing the
              migration in terms of risk: what happens when this hardware
              fails and we don&apos;t have a vendor who can replace it in
              48 hours?
            </p>
            <p>
              I built a dashboard that showed migration progress by service,
              not by sprint. Leadership didn&apos;t care about story points.
              They cared about which services were still on-prem and what the
              blast radius was if that hardware went down. Speaking their
              language saved the project from getting deprioritized at least
              twice.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              The order we moved things
            </h2>
            <p>
              We started with the service that had the least downstream
              dependencies and the best test coverage. Not the most important
              service, not the one leadership wanted moved first, but the one
              where we could learn the most with the least risk. That first
              migration took six weeks, which felt slow. But it established
              the patterns, the runbooks, and the confidence we needed to
              move faster on the rest.
            </p>
            <p>
              Services two through four moved in parallel over the next five
              months. By then the team had a rhythm. The last two services
              were the hardest because they had the most legacy dependencies
              and the least documentation. We spent almost as much time
              reverse-engineering the existing behavior as we did building
              the new infrastructure.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              Keeping the team together through month 11
            </h2>
            <p>
              Long migrations are exhausting. Around month 8, I could see
              energy dropping. The initial excitement was gone, the remaining
              services were the hardest, and the team could see the finish
              line but it kept moving. Two engineers started looking at other
              jobs.
            </p>
            <p>
              I made a few changes. I rotated people between migration work
              and feature work so nobody was stuck doing infrastructure for
              months straight. I started celebrating smaller milestones
              publicly, not just at the team level but in front of leadership.
              And I had honest conversations with the engineers who were
              burning out about what they needed. One wanted more ownership on
              the technical decisions. The other wanted to know they&apos;d
              get to work on something new after the migration. Both stayed.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              The results and what I&apos;d change
            </h2>
            <p>
              $1.2M in annual savings. Uptime from 99.2% to 99.85%. Zero
              major incidents during the migration. Nobody quit. Those are the
              numbers I put on my resume, and they&apos;re real.
            </p>
            <p>
              What I&apos;d do differently: I&apos;d push harder for a
              dedicated migration team from the start instead of splitting
              people between migration and feature work. The context-switching
              cost was real. I&apos;d also invest in better observability
              earlier. We added Datadog in month 4, and the first three months
              of flying blind on the new infrastructure were unnecessarily
              stressful.
            </p>
            <p>
              Cloud migrations are a management problem disguised as a
              technical one. The tech is well-understood. The hard part is
              sustaining momentum, managing stakeholder expectations, and
              keeping your engineers engaged through a project that&apos;s
              important but not exciting for most of its duration.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-divider">
            <p className="text-muted text-sm">
              Have thoughts on this? I&apos;d like to hear them:{" "}
              <a
                href="mailto:isser.akhil@gmail.com?subject=Re: Cloud migration essay"
                className="text-accent hover:underline underline-offset-2"
              >
                isser.akhil@gmail.com
              </a>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
