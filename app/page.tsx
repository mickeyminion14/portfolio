import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Navigation />
        <Hero />
        <About />
        <TechStack />
        <Timeline />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </PageTransition>
  );
}
