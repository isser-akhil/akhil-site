import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Running SOC 2 and KY3P as an Engineering Manager — Akhil Sharma",
  description:
    "What it actually looks like to own compliance end to end as an engineering leader. Gap analysis, auditor management, and getting your team to care.",
};

export default function Soc2Essay() {
  return (
    <main className="flex-1 pt-24 pb-20">
      <article className="px-6 sm:px-8">
        <div className="max-w-2xl mx-auto w-full">
          <header className="mb-12">
            <p className="text-accent/70 text-sm font-medium mb-3">
              March 2026
            </p>
            <h1 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-4">
              Running SOC 2 and KY3P as an Engineering Manager
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              What it actually looks like to own compliance end to end,
              and why it made me better at the rest of my job.
            </p>
          </header>

          <div className="prose-custom text-muted text-base leading-[1.85] space-y-6">
            <p>
              When I took on SOC 2 Type II at Schema App, there was no existing
              compliance program. No gap analysis, no control documentation, no
              relationship with an auditor. The board wanted certification, and
              it landed on my desk because I was the engineering leader closest
              to the infrastructure.
            </p>
            <p>
              Most engineering managers I know treat compliance as something that
              happens to them. An auditor shows up, someone from legal sends a
              spreadsheet, and you spend two weeks finding evidence for controls
              you didn&apos;t know existed. I decided to run it differently.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              Starting from zero
            </h2>
            <p>
              The first thing I did was a gap analysis against the SOC 2 Trust
              Services Criteria. Not the simplified version you find in blog
              posts, but the actual AICPA criteria mapped to our infrastructure.
              We had decent practices in some areas (access controls were
              reasonable, we had monitoring) and significant gaps in others
              (no formal incident response plan, no documented change management,
              logging retention was inconsistent).
            </p>
            <p>
              I mapped every gap to an owner on the engineering team. Not
              &ldquo;the engineering team is responsible&rdquo; but
              &ldquo;Sarah owns the incident response runbook and it&apos;s due
              in three weeks.&rdquo; That level of specificity matters because
              compliance work is the easiest thing to deprioritize when a
              production issue comes in.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              Getting the team to actually care
            </h2>
            <p>
              Nobody wakes up excited about compliance documentation. The way I
              got my team to engage with it was by connecting each control to
              something they already cared about. Access review? That&apos;s
              the same principle as least-privilege in your infrastructure code.
              Change management? That&apos;s the PR review process you already
              follow, just documented. Incident response? You already do
              postmortems, we&apos;re just making the process explicit.
            </p>
            <p>
              Once people saw SOC 2 as a formalization of good engineering
              practices rather than a bureaucratic checkbox, resistance dropped.
              Not to zero, but enough that the work moved forward.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              Managing the auditor relationship
            </h2>
            <p>
              I chose to manage the auditor relationship directly rather than
              delegating it to someone in operations. This meant I was on every
              call, reviewed every evidence request, and knew exactly where we
              were strong and where we were stretching. Some managers might see
              this as a waste of their time. I found it was the fastest way to
              unblock the process and avoid surprises.
            </p>
            <p>
              The auditors were thorough but reasonable. They cared about
              evidence of consistent practice, not perfection. A control that
              you follow 95% of the time with documented exceptions is better
              than a control that you claim to follow 100% of the time but
              can&apos;t prove.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              KY3P for US banking clients
            </h2>
            <p>
              Around the same time, we started getting KY3P (Know Your Third
              Party) questionnaires from US banking customers evaluating Schema
              App as a vendor. KY3P is a standardized third-party risk
              assessment used heavily in financial services. The questions
              overlap with SOC 2 in places but go deeper on data residency,
              business continuity, and subprocessor management.
            </p>
            <p>
              Having the SOC 2 program in place made KY3P significantly easier.
              About 60% of the KY3P responses could reference SOC 2 controls
              directly. The remaining 40% required new documentation, mostly
              around data flow diagrams and disaster recovery specifics. We
              built a response template that we could adapt per customer, which
              cut the time per questionnaire from weeks to days.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              What compliance taught me about management
            </h2>
            <p>
              Running compliance end to end changed how I think about
              engineering management. It forced me to document things that
              should have been documented already. It gave me a clearer picture
              of who on the team owned what. And it built trust with the
              executive team because I could show them exactly where we stood
              at any point.
            </p>
            <p>
              The engineers who worked on compliance controls with me are
              better engineers for it. They think about audit trails when
              they design systems now. They write change management into their
              PRs without being asked. That&apos;s the part that doesn&apos;t
              show up in the certification but matters more than the badge.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-divider">
            <p className="text-muted text-sm">
              Have thoughts on this? I&apos;d like to hear them:{" "}
              <a
                href="mailto:isser.akhil@gmail.com?subject=Re: SOC 2 essay"
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
