import { useState } from "react";
import {
  Github,
  ExternalLink,
  MapPin,
  Clock,
  Book,
  Code2,
  Coffee,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FlipCard = ({
  title,
  backText,
}: {
  title: string;
  backText: string;
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative preserve-3d w-full h-64 transition-transform duration-700 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-card rounded-xl shadow-lg p-6 backface-hidden flex items-center justify-center text-center">
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-secondary rounded-xl shadow-lg p-6 backface-hidden rotate-y-180 text-muted-foreground text-sm flex items-center justify-center text-center">
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating or discussing projects? Feel free to
              reach out through any of these channels.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* GitHub Card */}
              <Card className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Github className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    GitHub
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Check out my repositories, contribute to projects, or follow
                    my development journey.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="shadow-elegant"
                  >
                    <a
                      href="https://github.com/thatoneaiguy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      @thatoneaiguy
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Discord Card */}
              <Card
                className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    Discord Community
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Join the community, get support for mods, or just chat
                    about development and gaming.
                  </p>
                  <Button asChild className="shadow-elegant">
                    <a
                      href="https://discord.gg/QhkT6WeQP3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Join Discord
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* About Me Summary */}
            <Card
              className="bg-gradient-card border-border shadow-card animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      I'm a passionate developer based in England, focused on
                      creating innovative Minecraft mods and exploring various
                      programming languages. Through Aconite Studios, I publish
                      mods that enhance gameplay experiences for the Minecraft
                      community.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      My projects span from Java Minecraft mods to Python
                      utilities, Rust applications, and shader development
                      tools. I believe in open-source collaboration and
                      continuously learning new technologies.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I intend to study psychoanalysis at university, with the
                      goal of becoming a child psychologist, specializing in
                      gender and sexuality-affirming therapy. My long-term
                      ambition is to open my own therapy clinic, providing a
                      safe and supportive space for young people, especially
                      those exploring identity, gender, and sexuality. I also
                      dream of running a café one day — a welcoming, creative
                      space that builds community alongside my practice.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          Location
                        </div>
                        <div className="text-sm">England</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          Timezone
                        </div>
                        <div className="text-sm">GMT (UTC+0)</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <Book className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          Studying
                        </div>
                        <div className="text-sm">
                          Psychoanalysis & Psychology
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          Development
                        </div>
                        <div className="text-sm">
                          Minecraft Mods, Rust, Python, Shader Tools
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <Coffee className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          Future Goal
                        </div>
                        <div className="text-sm">Run a Community Café</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New Section - Emmanuel */}
      <section id="emmanuel" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              My Experience with Emmanuel
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A reflection on my growth, learning, and future goals through my
              time at Emmanuel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FlipCard
              title="Post 16"
              backText="(You can write here about your academic path, subject choices, or reflections post-16.)"
            />
            <FlipCard
              title="Aspirations"
              backText="(You can write about your future goals, ambitions, and personal dreams here.)"
            />
            <FlipCard
              title="What I Learnt"
              backText="(Add personal growth, skills developed, or important lessons here.)"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
