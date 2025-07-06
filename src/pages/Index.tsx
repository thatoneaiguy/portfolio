import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import GitHubProjects from "@/components/portfolio/GitHubProjects";
import MinecraftMods from "@/components/portfolio/MinecraftMods";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="about">
          <HeroSection />
        </section>
        
        <section id="projects">
          <GitHubProjects />
        </section>
        
        <section id="mods">
          <MinecraftMods />
        </section>
        
        <ContactSection />
      </main>
      
      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2025 eeverest. Built with modern web technologies.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
