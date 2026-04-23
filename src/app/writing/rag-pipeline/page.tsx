import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building a RAG Pipeline Over 50K Entities — Akhil Sharma",
  description:
    "Chunking strategies, reranking, evaluation with Langfuse, and what we learned building retrieval over a knowledge graph at Schema App.",
};

export default function RagEssay() {
  return (
    <main className="flex-1 pt-24 pb-20">
      <article className="px-6 sm:px-8">
        <div className="max-w-2xl mx-auto w-full">
          <header className="mb-12">
            <p className="text-accent/70 text-sm font-medium mb-3">
              March 2026
            </p>
            <h1 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-4">
              Building a RAG Pipeline Over 50K Entities
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              What actually matters when you&apos;re doing retrieval-augmented
              generation over a knowledge graph, not a pile of PDFs.
            </p>
          </header>

          <div className="prose-custom text-muted text-base leading-[1.85] space-y-6">
            <p>
              Most RAG tutorials start with &ldquo;load your documents into a
              vector store.&rdquo; That&apos;s fine if you have a folder of PDFs.
              We had a knowledge graph with 50,000+ entities, each with typed
              relationships, Schema.org properties, and links to external
              knowledge bases. The standard chunking playbook didn&apos;t apply.
            </p>
            <p>
              This is how my team at Schema App built a RAG retrieval pipeline
              using LangChain, AWS Bedrock, and vector embeddings, and what we
              learned along the way.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              Why knowledge graphs are different
            </h2>
            <p>
              A typical document has paragraphs. You chunk by token count or
              sentence boundary, embed each chunk, and call it a day. An entity
              in a knowledge graph is a structured object. It has a type
              (Organization, Product, Person), properties (name, description,
              URL), and relationships to other entities.
            </p>
            <p>
              If you flatten all of that into a single text string and embed it,
              you lose the structure that makes the data valuable in the first
              place. If you embed each property separately, you get too many
              tiny chunks with no context. We needed something in between.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              The chunking strategy we landed on
            </h2>
            <p>
              We ended up with what I&apos;d call entity-centric chunks. For each
              entity, we generate a natural language summary that includes its
              type, key properties, and its most important relationships (parent
              organization, related products, etc.). That summary becomes the
              chunk. One entity, one chunk, with enough context to be useful
              in retrieval.
            </p>
            <p>
              The tricky part was deciding which relationships to include.
              Include too many and the chunk gets noisy. Include too few and
              the retriever misses relevant connections. We started by including
              all direct relationships and then pruned based on retrieval
              performance. It took about three iterations to get this right.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              Reranking made the biggest difference
            </h2>
            <p>
              Initial retrieval accuracy was okay. Not great. The vector search
              would return entities that were semantically similar but not
              actually relevant to the question. A query about &ldquo;product
              pricing&rdquo; would return entities about &ldquo;product
              features&rdquo; because the embeddings are close.
            </p>
            <p>
              Adding a reranking step changed everything. We used a cross-encoder
              reranker that takes the query and each candidate chunk and scores
              relevance more carefully than cosine similarity alone. Top-5
              precision went from around 60% to over 85%. That single addition
              was worth more than any amount of chunking optimization.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              Evaluating with Langfuse
            </h2>
            <p>
              You can&apos;t improve what you don&apos;t measure, and RAG
              evaluation is harder than it sounds. We used Langfuse to track
              every query, the retrieved chunks, the generated response, and
              human feedback scores. Over time this gave us a dataset we could
              use to compare chunking strategies, embedding models, and
              reranking thresholds.
            </p>
            <p>
              The most useful metric turned out to be &ldquo;answer
              groundedness&rdquo; rather than relevance. Users didn&apos;t
              care much if the answer was slightly off-topic, but they cared
              a lot if the model made something up. So we optimized for
              reducing hallucination rather than maximizing recall. That
              changed which tradeoffs we made everywhere else in the pipeline.
            </p>

            <h2 className="text-heading text-xl font-semibold mt-10 mb-4">
              What I&apos;d do differently next time
            </h2>
            <p>
              I&apos;d start with evaluation infrastructure before writing a
              single line of pipeline code. We built Langfuse integration in
              week three, and for the first two weeks we were making chunking
              decisions based on vibes. That&apos;s two weeks of wasted
              iteration.
            </p>
            <p>
              I&apos;d also invest more in hybrid retrieval earlier. We added
              keyword search alongside vector search late in the process and
              it helped a lot for queries with specific entity names or IDs.
              Should have been there from the start.
            </p>
            <p>
              The pipeline is now serving customer-facing integrations and the
              hallucination rate is low enough that customers trust it. That
              took about three months of iteration. If I had to do it again
              with what I know now, I think we could get there in six weeks.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-divider">
            <p className="text-muted text-sm">
              Have thoughts on this? I&apos;d like to hear them:{" "}
              <a
                href="mailto:isser.akhil@gmail.com?subject=Re: RAG Pipeline essay"
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
