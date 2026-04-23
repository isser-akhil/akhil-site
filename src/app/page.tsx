import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Career } from "@/components/Career";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { Beyond } from "@/components/Beyond";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content" className="flex-1">
        <Hero />
        <FeaturedWork />
        <Career />
        <Skills />
        <Testimonials />
        <Beyond />
        <Education />
        <Contact />
      </main>
    </>
  );
}
