import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
            <div className="h-24 w-24 flex items-center justify-center rounded-full bg-accent overflow-hidden">
              <img 
                src="/logo.jpg" 
                alt="Logo" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            eeverest
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Koil / Aconite
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Developer crafting Minecraft mods and innovative software solutions. 
            Based in England, creating experiences that blend creativity with technical excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <Button asChild variant="default" size="lg" className="shadow-elegant">
              <a 
                href="https://github.com/thatoneaiguy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View GitHub
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="shadow-elegant">
              <a 
                href="https://discord.gg/QhkT6WeQP3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Discord Community
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
