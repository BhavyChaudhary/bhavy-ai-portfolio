import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import GooeyBackground from "../components/GooeyBackground";

export const Home = () => {
  return (
    <div className="h-screen overflow-hidden bg-background text-foreground">
      {/* Fixed Background Effects */}
      <GooeyBackground />
      
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* THE KEY: Scroll Container - starts below navbar, has its own scroll */}
      <div 
        id="scroll-container"
        className="fixed top-16 md:top-20 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* All scrollable content goes here */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};