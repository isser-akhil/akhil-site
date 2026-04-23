import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping One of the First Production MCP Servers — Akhil Sharma",
  description:
    "Auth design, rate limiting, and the decisions that shaped Schema App's MCP integration. What we got right, what we got wrong, and what I'd do differently.",
};

export default function McpEssay() {
  return (
    <main className="flex-1 pt-24 pb-20">
      <article className="px-6 sm:px-8">
        <div className="max-w-2xl mx-auto w-full">
          <header className="mb-12">
            <p className="text-accent/70 text-sm font-medium mb-3">
              April 2026
            </p>
            <h1 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-4">
              Shipping One of the First Production MCP Servers
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Auth design, rate limiting, and the decisions that shaped
              Schema App&apos;s MCP integration.
            </p>
          </header>

          <div className="prose-custom text-muted text-base leading-[1.85] space-y-6">
            <p>
              In late 2025, my team at Schema App shipped a production MCP
              (Model Context Protocol) server that lets enterprise customers
              expose their Content Knowledge Graph to AI assistants —
              ChatGPT, Copilot, Claude, and Gemini. As far as we could tell,
              we were one of the first companies to do this in the structured
              data space.
            </p>
            <p>
              This is what we learned. Not a tutorial — more of a honest
              accounting of the decisions we made, the ones that worked, and
              the ones I&apos;d revisit.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              The problem we were solving
            </h2>
            <p>
              Schema App manages knowledge graphs for enterprise customers.
              These graphs contain structured data about products, organizations,
              locations, events — the kind of information that&apos;s useful to
              AI assistants trying to answer real questions. The gap was:
              customers had this rich structured data, but no way to let AI
              agents access it programmatically with proper access controls.
            </p>
            <p>
              MCP was the right protocol for this. It gives AI assistants a
              standard way to discover and call tools, read resources, and
              interact with external systems. But in late 2025, the spec was
              still evolving. Documentation was sparse. There were maybe a
              handful of production implementations we could reference, none
              in our domain.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              The auth problem
            </h2>
            <p>
              The first big decision was authentication. MCP doesn&apos;t prescribe
              an auth model — it&apos;s transport-agnostic. We had to decide: do we
              use OAuth 2.0 flows, API keys, or something custom?
            </p>
            <p>
              We went with API keys scoped per customer, with a secondary
              permission layer that controlled which graph entities each key
              could access. The reasoning: our customers are enterprises with
              existing API key management workflows. OAuth would have been more
              &ldquo;correct&rdquo; but would have added weeks of integration
              work on their side for a protocol they were already skeptical about.
            </p>
            <p>
              In retrospect, this was the right call for adoption speed. But
              it means we&apos;ll need to add OAuth support eventually — some
              customers are starting to ask for it as their AI integrations
              mature. The lesson: optimize for the adoption you need now, but
              design the abstraction so you can swap the auth layer later. We
              did the second part right, thankfully.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              Rate limiting when you don&apos;t know the traffic pattern
            </h2>
            <p>
              With traditional APIs, you have months of traffic data to inform
              your rate limits. We had zero. Nobody — including us — knew what
              LLM-driven traffic to an MCP server would look like. Would agents
              make 10 requests per session or 10,000? Would they respect
              backoff headers?
            </p>
            <p>
              We started conservative: 60 requests per minute per API key, with
              a token bucket that allowed short bursts. Then we instrumented
              everything and watched. It turned out most AI assistants were
              surprisingly well-behaved — they&apos;d make a few tool-discovery
              calls, then a handful of resource reads. The pathological case
              was agents in loops that kept retrying failed queries with slightly
              different parameters. We added a similarity-based dedup layer
              that caught most of these.
            </p>
            <p>
              The thing I&apos;d do differently: we should have built the rate
              limiting as a separate service from day one instead of embedding
              it in the MCP server process. When we needed to adjust limits
              per-customer, it required a redeploy. That&apos;s a solved problem
              and we just didn&apos;t prioritize it early enough.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              What surprised us
            </h2>
            <p>
              Three things caught us off guard:
            </p>
            <p>
              <strong className="text-heading font-medium">
                Tool descriptions matter more than tool implementations.
              </strong>{" "}
              The quality of the natural-language descriptions we wrote for each
              MCP tool directly affected how well AI assistants used them.
              A poorly described tool would get called with wrong parameters
              or not called at all. We ended up spending almost as much time
              on tool descriptions as on the tool code itself.
            </p>
            <p>
              <strong className="text-heading font-medium">
                Enterprise customers want audit logs, not dashboards.
              </strong>{" "}
              We built a usage dashboard. Nobody looked at it. What they
              wanted was a downloadable audit log showing exactly which AI
              agent accessed which data and when. Compliance teams need
              artifacts, not visualizations.
            </p>
            <p>
              <strong className="text-heading font-medium">
                The spec will change under you.
              </strong>{" "}
              We shipped against an early version of MCP and had to update
              twice in three months as the protocol evolved. Building against
              a moving spec is uncomfortable, but waiting for stability would
              have meant missing the window entirely.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              What I&apos;d tell someone shipping their first MCP server
            </h2>
            <p>
              Start with one tool and one resource type. Get the auth and
              transport layer right first — everything else is iteration.
              Instrument from day one because you genuinely don&apos;t know
              what traffic will look like. Write your tool descriptions like
              you&apos;re explaining the API to a smart intern who&apos;s
              never seen your codebase. And don&apos;t wait for the spec
              to stabilize — by the time it does, your competitors will have
              shipped.
            </p>
            <p>
              The MCP server is now one of Schema App&apos;s key differentiators.
              Customers who were skeptical about &ldquo;another protocol&rdquo;
              are now asking when we&apos;re adding more tools. That shift
              from skepticism to pull — that&apos;s when you know the
              bet paid off.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-divider">
            <p className="text-muted text-sm">
              Have thoughts on this? I&apos;d like to hear them:{" "}
              <a
                href="mailto:isser.akhil@gmail.com?subject=Re: MCP Server essay"
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
