import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Agentic Workflows That Actually Work — Akhil Sharma",
  description:
    "BDR agents, a Chief of Staff bot, and what I learned about when AI agents help and when they just create more work.",
};

export default function AgenticEssay() {
  return (
    <main className="flex-1 pt-24 pb-20">
      <article className="px-6 sm:px-8">
        <div className="max-w-2xl mx-auto w-full">
          <header className="mb-12">
            <p className="text-accent/70 text-sm font-medium mb-3">
              April 2026
            </p>
            <h1 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-4">
              Building Agentic Workflows That Actually Work
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              BDR agents, a Chief of Staff bot, and what I learned about
              when AI agents help and when they just create more noise.
            </p>
          </header>

          <div className="prose-custom text-muted text-base leading-[1.85] space-y-6">
            <p>
              Over the last year I&apos;ve built two agentic systems that are
              actually running in production. One is a fleet of BDR agents
              that handle outbound prospecting. The other is what I call the
              Chief of Staff agent, which handles a bunch of the administrative
              overhead that comes with managing an engineering org. Both work.
              Neither works the way I expected.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              The BDR agent army
            </h2>
            <p>
              The idea was simple: automate the research and initial outreach
              that business development reps do manually. The agents pull data
              from intent signals and public sources, enrich it against CRM
              records, generate personalized email sequences, and manage the
              follow-up cadence. No human touches the outbound until a prospect
              responds.
            </p>
            <p>
              The first version was terrible. The emails were technically
              personalized but felt generic. &ldquo;I noticed your company
              recently raised a Series B&rdquo; is personalized in the same
              way a form letter with your name at the top is personalized. The
              agents were doing the easy part of the research (company size,
              funding, tech stack) and skipping the hard part (what specific
              problem would make this person respond to a cold email).
            </p>
            <p>
              The fix was adding more context to the research step. We started
              feeding the agents recent job postings, engineering blog posts,
              and conference talks from the target company. That gave them
              enough signal to write emails that referenced something the
              recipient actually cared about. Response rates went from under
              2% to around 8%, which is strong for cold outbound.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              The Chief of Staff agent
            </h2>
            <p>
              As an engineering leader, I was spending hours every week on
              tasks that were important but repetitive: reading through Slack
              threads to catch blockers, summarizing PRs for stakeholder
              updates, pulling together incident timelines, drafting the weekly
              status email. None of this was hard. All of it ate time.
            </p>
            <p>
              The Chief of Staff agent connects to Slack, GitHub, and our
              incident management system. Every morning it produces a summary
              of what happened overnight: PRs merged, incidents opened or
              resolved, threads where someone is blocked and waiting for a
              response. On Fridays it drafts a stakeholder update that I
              edit and send. It also flags when someone has been waiting
              more than 24 hours for a review or a decision.
            </p>
            <p>
              The part that surprised me: the blocker detection is the most
              valuable feature. Not the summaries, not the status updates.
              The ability to surface &ldquo;this person asked a question in
              a thread 26 hours ago and nobody responded&rdquo; catches things
              I would have missed until the next standup. That alone reduced
              exec overhead on status-gathering by about 60%.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              When agents don&apos;t help
            </h2>
            <p>
              Not everything should be an agent. I tried automating sprint
              retrospective summaries and it was worse than useless. The
              agent would summarize what people said without capturing why
              it mattered. A retro summary that says &ldquo;the team
              discussed deployment frequency&rdquo; tells you nothing. The
              value of a retro is the emotional context and the commitments
              people make to each other, and that doesn&apos;t compress well.
            </p>
            <p>
              I also tried having an agent triage incoming support tickets
              and route them to the right team. It worked 80% of the time.
              The 20% it got wrong created more work than the 80% saved,
              because misrouted tickets sit in the wrong queue until someone
              notices. We went back to a human doing the initial triage with
              the agent as a suggestion tool rather than a decision maker.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              What I&apos;ve learned so far
            </h2>
            <p>
              Agentic workflows work best when the task has clear inputs,
              a well-defined success criteria, and low cost of failure. BDR
              outbound fits: if an email is slightly off, nothing bad happens.
              Incident triage doesn&apos;t fit as well: if the routing is
              wrong, you lose time and trust.
            </p>
            <p>
              Start with the agent as an assistant, not an autonomous actor.
              Let it draft, suggest, and flag. Let humans approve, edit, and
              decide. You can increase autonomy over time as you build
              confidence in the outputs. Trying to go fully autonomous on
              day one is how you end up with a system nobody trusts and
              everyone works around.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-divider">
            <p className="text-muted text-sm">
              Have thoughts on this? I&apos;d like to hear them:{" "}
              <a
                href="mailto:isser.akhil@gmail.com?subject=Re: Agentic workflows essay"
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
