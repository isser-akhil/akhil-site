import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Entity Hub: From Concept to Enterprise Product — Akhil Sharma",
  description:
    "How we built Schema App's Entity Hub, integrated Google Search Console at the entity level, and learned what enterprise SEO teams actually need.",
};

export default function EntityHubEssay() {
  return (
    <main className="flex-1 pt-24 pb-20">
      <article className="px-6 sm:px-8">
        <div className="max-w-2xl mx-auto w-full">
          <header className="mb-12">
            <p className="text-accent/70 text-sm font-medium mb-3">
              April 2026
            </p>
            <h1 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-4">
              Shipping Entity Hub: From Concept to Enterprise Product
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Building an entity management platform, integrating Google
              Search Console at the entity level, and learning what
              enterprise SEO teams actually need.
            </p>
          </header>

          <div className="prose-custom text-muted text-base leading-[1.85] space-y-6">
            <p>
              Entity Hub started as a feature request and became one of
              Schema App&apos;s core products. Enterprise customers were
              managing thousands of entities across their content but had
              no centralized way to see what entities existed on their site,
              how they were connected, or whether they were performing well
              in AI search. They were flying blind.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              What the product needed to do
            </h2>
            <p>
              We scoped Entity Hub into three pieces: Entity Manager for
              editing and organizing entities, Entity Reports for a site-wide
              view of entity coverage and gaps, and Entity Performance
              Analytics for tying Google Search Console data to individual
              entities. The first two were relatively straightforward
              engineering. The third was where things got interesting.
            </p>
            <p>
              Google Search Console gives you data at the URL and query level.
              It doesn&apos;t know anything about entities. To show clicks,
              impressions, and CTR at the entity level, we had to build a
              mapping layer that connects GSC URL data to the entities present
              on each page, weighted by entity prominence. That mapping had
              to run at scale (some customers have 10,000+ pages) and update
              regularly as both the content and the search data change.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              The hard part was the data model
            </h2>
            <p>
              Entities aren&apos;t pages. A single entity can appear on
              multiple pages. A single page can contain many entities. When
              a customer asks &ldquo;how is my Organization entity performing
              in search?&rdquo; the answer depends on every page where that
              entity appears, weighted by how prominent it is on each page.
            </p>
            <p>
              We went through three iterations of the attribution model
              before landing on something customers found useful. The first
              version was too simple (just count which pages an entity appears
              on). The second was too complex (a weighted model that nobody
              could explain to their CMO). The third was a middle ground:
              clear attribution with a simple prominence score, and the
              ability to drill down into per-page detail if needed.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              What enterprise customers actually wanted
            </h2>
            <p>
              We assumed customers would spend most of their time in
              Performance Analytics. They didn&apos;t. The most-used feature
              turned out to be Entity Reports, specifically the gap analysis
              view that shows which topics they should have entities for but
              don&apos;t. Enterprise SEO teams use this to make content
              strategy decisions and justify new content investments to
              leadership.
            </p>
            <p>
              The lesson: don&apos;t assume the most technically impressive
              feature is the most valuable one. The GSC integration was hard
              to build and customers appreciated it, but the simple gap
              report is what they open every week.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              Shipping to enterprise
            </h2>
            <p>
              Entity Hub launched as an add-on to Schema App&apos;s existing
              platform. We did a phased rollout, starting with three design
              partners who gave us weekly feedback. That feedback loop was
              critical. Without it we would have shipped a version that was
              technically correct but didn&apos;t match how SEO teams
              actually work.
            </p>
            <p>
              The product is now live with enterprise customers and it&apos;s
              become a core part of how they think about AI search readiness.
              The entities in their Content Knowledge Graph aren&apos;t just
              metadata anymore. They&apos;re a managed, measured asset.
              That shift in how customers think about their data is probably
              the biggest win.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-divider">
            <p className="text-muted text-sm">
              Have thoughts on this? I&apos;d like to hear them:{" "}
              <a
                href="mailto:isser.akhil@gmail.com?subject=Re: Entity Hub essay"
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
