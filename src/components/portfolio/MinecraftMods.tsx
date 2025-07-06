import { ExternalLink, Download, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mods = [
  {
    name: "Carved",
    description: "A Decor Mod based around new Trees! Adds beautiful decorative elements and new tree varieties to enhance your Minecraft world's aesthetics.",
    downloads: 1315,
    followers: 18,
    updated: "3 months ago",
    categories: ["Adventure", "Decoration", "Utility"],
    platforms: ["Fabric", "Quilt"],
    url: "https://modrinth.com/mod/carved",
    featured: true
  },
  {
    name: "Beaconated", 
    description: "A Machinery Mod based around Beacons! Introduces advanced beacon-powered machinery and automation systems for technical players.",
    downloads: 447,
    followers: 9,
    updated: "3 months ago",
    categories: ["Game Mechanics", "Technology"],
    platforms: ["Fabric", "Quilt"],
    url: "https://modrinth.com/mod/beaconated",
    featured: true
  },
  {
    name: "Carnation",
    description: "Graves designed to minimise bugs, but maximise visual quality. A refined death management system that preserves your items with style.",
    downloads: "N/A",
    followers: "N/A", 
    updated: "Recently",
    categories: ["Adventure", "Game Mechanics"],
    platforms: ["Fabric", "Quilt"],
    url: "https://modrinth.com/mod/carnation",
    featured: true
  }
];

const formatNumber = (num: number | string) => {
  if (typeof num === 'string') return num;
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Adventure: "bg-green-500/10 text-green-400 border-green-500/20",
    Decoration: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    Utility: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "Game Mechanics": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Technology: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  };
  return colors[category] || "bg-muted text-muted-foreground";
};

const MinecraftMods = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Minecraft Mods
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Published through Aconite Studios on Modrinth, creating enhanced gameplay experiences for the Minecraft community.
          </p>
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
            Aconite Studios
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mods.map((mod, index) => (
            <Card 
              key={mod.name}
              className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-500 group animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {mod.name}
                  </CardTitle>
                  <div className="animate-float">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-foreground">M</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {mod.categories.map((category) => (
                    <Badge 
                      key={category} 
                      variant="outline" 
                      className={getCategoryColor(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {mod.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Download className="w-4 h-4 text-success" />
                    <span className="text-muted-foreground">Downloads:</span>
                    <span className="font-medium text-foreground">
                      {formatNumber(mod.downloads)}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Followers:</span>
                    <span className="font-medium text-foreground">
                      {formatNumber(mod.followers)}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Updated {mod.updated}</span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Platforms</span>
                    <div className="flex gap-2 mt-1">
                      {mod.platforms.map((platform) => (
                        <Badge key={platform} variant="secondary">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full shadow-elegant group-hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <a 
                      href={mod.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span>View on Modrinth</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-delay">
          <Button asChild variant="outline" size="lg" className="shadow-elegant">
            <a 
              href="https://modrinth.com/organization/aconite-studios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Aconite Studios
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MinecraftMods;