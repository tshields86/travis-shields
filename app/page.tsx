import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
