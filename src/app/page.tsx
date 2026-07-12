import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { SectionNav } from "@/components/SectionNav";

export default function Home() {
  return (
    <>
      <SectionNav />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
