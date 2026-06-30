import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <Hero />
      <About />
      <Projects />
      <Research />
      <Experience />
      <Leadership />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
