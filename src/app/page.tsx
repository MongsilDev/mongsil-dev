import { LocalNav } from "@/components/LocalNav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Play } from "@/components/Play";
import { Favorites } from "@/components/Favorites";
import { Setup } from "@/components/Setup";
import { Contact } from "@/components/Contact";
import { SectionNav } from "@/components/SectionNav";

export default function Home() {
  return (
    <>
      <LocalNav />
      <SectionNav />
      <main>
        <Hero />
        <Projects />
        <Play />
        <Favorites />
        <Setup />
        <Contact />
      </main>
    </>
  );
}
