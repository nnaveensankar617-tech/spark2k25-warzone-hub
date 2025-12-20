import { Gamepad2, Code, Music, Lightbulb, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const eventCategories = [
    {
      icon: Gamepad2,
      title: "Sport Tournaments",
      description: "BGMI, Valorant, FIFA, and more competitive gaming battles",
      events: ["BGMI Championship", "Valorant Strike", "FIFA League", "Chess Arena"],
      color: "primary",
    },
    {
      icon: Code,
      title: "Technical Events",
      description: "Coding challenges, hackathons, and tech competitions",
      events: ["", "Web Warriors", "AI Showdown", "Hardware Hack"],
      color: "secondary",
    },
    {
      icon: Music,
      title: "Cultural Programs",
      description: "Dance, music, drama, and fashion shows",
      events: ["Battle of Beats", "Rhythm of One", "Art Gallery", "Echoes of Soul"],
      color: "primary",
    },
    {
      icon: Lightbulb,
      title: "Spotlight Events",
      description: "Interactive games, treasure hunts, and surprise challenges",
      events: ["Leadership talks", "Youth summit", "Startup Stories", "Pitch Fest"],
      color: "secondary",
    },
  ];

  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-secondary/30 mb-4">
            <Trophy className="w-4 h-4 text-secondary" />
            <span className="text-sm font-orbitron font-semibold text-secondary uppercase tracking-wider">
              What's Happening
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-secondary">Event</span>{" "}
            <span className="text-primary">Lineup</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-exo">
            Choose your arena. Multiple competitions across gaming, tech, arts, and academics.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {eventCategories.map((category, index) => {
            const Icon = category.icon;
            const isOrange = category.color === "primary";

            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card */}
                <div className="relative p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  {/* Animated Background Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isOrange
                        ? "bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
                        : "bg-gradient-to-br from-secondary/10 via-transparent to-secondary/5"
                      }`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${isOrange
                            ? "bg-primary/20"
                            : "bg-secondary/20"
                          }`}
                      >
                        <Icon
                          className={`w-8 h-8 ${isOrange ? "text-primary" : "text-secondary"
                            }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-orbitron font-bold mb-2 text-foreground">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground font-exo">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Event List */}
                    <div className="grid grid-cols-2 gap-2 mt-6">
                      {category.events.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className={`px-3 py-2 rounded-md border text-sm font-exo transition-all duration-300 ${isOrange
                              ? "border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50"
                              : "border-secondary/30 bg-secondary/5 hover:bg-secondary/10 hover:border-secondary/50"
                            }`}
                        >
                          {event}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40 ${isOrange ? "bg-primary" : "bg-secondary"
                      }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-border">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-exo text-muted-foreground">
              Registration opens soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
