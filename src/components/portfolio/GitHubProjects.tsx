import { Github, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Dahlia",
    description: "Java Swing application featuring an advanced shader editor with live updates, allowing for real-time shader development and visualization",
    language: "Java",
    updated: "Feb 23, 2025",
    url: "https://github.com/thatoneaiguy/Dahlia",
    featured: true
  },
  {
    name: "carnation",
    description: "Minecraft mod - Graves designed to minimise bugs, but maximise visual quality",
    language: "Java",
    updated: "Jun 22, 2025",
    url: "https://github.com/thatoneaiguy/carnation",
    featured: true
  },
  {
    name: "Procedurally-Animated-Nodal-Polyhedrons", 
    description: "Showcase of the use of Pygame outside of the gaming intentions",
    language: "Python",
    updated: "Jan 24, 2025",
    url: "https://github.com/thatoneaiguy/Procedurally-Animated-Nodal-Polyhedrons",
    stars: 1,
    featured: true
  },
  {
    name: "glyphic",
    description: "Local fork of the Epedition's animation util",
    language: "Rust",
    updated: "Apr 7, 2025", 
    url: "https://github.com/thatoneaiguy/glyphic"
  },
  {
    name: "astray",
    description: "Java project with Creative Commons Zero license",
    language: "Java",
    updated: "Jun 9, 2025",
    url: "https://github.com/thatoneaiguy/astray"
  },
  {
    name: "debate-club",
    description: "Basic text rendering for debates",
    language: "Python", 
    updated: "Jan 24, 2025",
    url: "https://github.com/thatoneaiguy/debate-club"
  },
  {
    name: "encryption",
    description: "Python encryption utilities",
    language: "Python",
    updated: "Jul 1, 2025",
    url: "https://github.com/thatoneaiguy/encryption"
  },
  {
    name: "Observations",
    description: "Java project with Creative Commons Zero license",
    language: "Java",
    updated: "Feb 17, 2025",
    url: "https://github.com/thatoneaiguy/Observations"
  }
];

const getLanguageColor = (language: string) => {
  const colors: Record<string, string> = {
    Java: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Python: "bg-blue-500/10 text-blue-400 border-blue-500/20", 
    Rust: "bg-orange-600/10 text-orange-300 border-orange-600/20",
    HTML: "bg-red-500/10 text-red-400 border-red-500/20"
  };
  return colors[language] || "bg-muted text-muted-foreground";
};

const GitHubProjects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            GitHub Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of open-source projects showcasing development across multiple languages and domains.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.name}
                className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      {project.stars && (
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <span>⭐</span>
                          <span>{project.stars}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={getLanguageColor(project.language)}>
                      {project.language}
                    </Badge>
                    
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{project.updated}</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start group-hover:bg-primary/10"
                  >
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Repository
                      <ExternalLink className="w-3 h-3 ml-auto" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.name}
                className="bg-card border-border hover:border-primary/30 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${(index + featuredProjects.length) * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h4>
                    <Badge variant="outline" className={getLanguageColor(project.language)}>
                      {project.language}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{project.updated}</span>
                    </div>
                    
                    <Button asChild variant="ghost" size="sm">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="w-3 h-3" />
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;
