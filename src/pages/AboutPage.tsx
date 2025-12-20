import { Target, Users, Rocket, Zap, Trophy, Calendar, MapPin, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FireParticles from "@/components/FireParticles";
import { Card, CardContent } from "@/components/ui/card";
import Shinky from "@/components/ui/ShinyText";
import sparkLogo from "@/assets/spark-logo.png";
import { TimelineDemo } from "@/components/ui/TimelineDemo";


const AboutPage = () => {
  const features = [
    {
      icon: Target,
      title: "Mission",
      description: "Empowering students through innovation, technology, and competitive sports.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Community",
      description: "Bringing together 10000+ students from across the region for an unforgettable experience.",
      color: "secondary",
    },
    {
      icon: Rocket,
      title: "Breakthroughs",
      description: "Showcasing cutting-edge tech projects, gaming tournaments, and cultural performances.",
      color: "primary",
    },
    {
      icon: Zap,
      title: "Energy",
      description: "High-octane competitions, adrenaline pumping sports, and electrifying entertainment.",
      color: "secondary",
    },
  ];

  const stats = [
    { icon: Users, value: "10000+", label: "Participants", color: "primary" },
    { icon: Trophy, value: "120+", label: "Events", color: "secondary" },
    { icon: Zap, value: "₹10L+", label: "Prize Pool", color: "primary" },
    { icon: Calendar, value: "2", label: "Days of Action", color: "secondary" },
  ];

  const highlights = [
    {
      icon: Trophy,
      title: "Epic Competitions",
      description: "Battle it out in gaming tournaments, coding contests, and cultural showdowns with massive prize pools.",
    },
    {
      icon: MapPin,
      title: "Campus-Wide Experience",
      description: "Every corner of SVCE transforms into a battleground of talent, creativity, and innovation.",
    },
    {
      icon: Heart,
      title: "Unforgettable Memories",
      description: "Create lasting connections, witness incredible performances, and be part of something extraordinary.",
    },
    {
      icon: Rocket,
      title: "Launch Your Future",
      description: "Network with industry professionals, showcase your skills, and discover exciting opportunities.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <FireParticles density={30} />
      <Navbar />



      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-slide-up">
            <div className="inline-block px-4 py-2 rounded-full bg-card/50 border border-primary/30 mb-6">
              <span className="text-sm font-orbitron font-semibold text-primary uppercase tracking-wider">
                About the Event
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6 flex flex-col items-center justify-center gap-4">
              <span className="text-secondary text-glow-cyan">What is</span>{" "}
              <img src={sparkLogo} alt="SPARK 2026" className="h-24 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(195,13,22,0.6)] animate-pulse" />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-exo leading-relaxed">
              <Shinky text="SPARK 2026 is all set to ignite SVCE Tirupati with a vibrant blend of technology, culture, and sports. Students from across the nation will gather to showcase their talents, compete in exciting challenges, and experience an atmosphere buzzing with innovation. This year’s spotlight events include the inspiring Youth Summit and impactful Leadership Talks, bringing together brilliant minds to share ideas and vision. From high-energy hackathons and creative tech/non-tech events to thrilling sports competitions, SPARK 2026 promises a nonstop wave of excitement. As the day winds down, vibe with your friends and enjoy electrifying performances and entertainment nights that turn the campus into a festival of lights and music. Brace yourself SPARK 2026 is going to be epic." />
            </p>
          </div>
        </div>


      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-8 bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--fire-orange)/0.3)] hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-exo">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              Our <span className="text-secondary text-glow-cyan">Core Values</span>
            </h2>
            <p className="text-muted-foreground font-exo max-w-2xl mx-auto">
              The principles that drive SPARK 2K26 and make it an extraordinary experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--fire-orange)/0.3)] animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-exo leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              Why <span className="text-secondary text-glow-cyan">SPARK 2026</span>?
            </h2>
            <p className="text-muted-foreground font-exo max-w-2xl mx-auto">
              Experience the ultimate celebration of talent, technology, and entertainment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)] animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-orbitron font-bold mb-3 text-foreground">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground font-exo leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-to-br from-card/80 to-card/40 border-primary/30">
              <CardContent className="p-0 text-center">
                <div className="inline-block w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Rocket className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
                  Our <span className="text-secondary text-glow-cyan">Vision</span>
                </h2>
                <p className="text-lg text-muted-foreground font-exo leading-relaxed mb-6">
                  To create an ecosystem where creativity meets competition, where innovation thrives,
                  and where every participant walks away with memories that last a lifetime. SPARK 2K26
                  is more than just an event it's a movement that celebrates the spirit of youth,
                  the power of technology, and the beauty of collaboration.
                </p>
                <p className="text-xl font-orbitron font-bold text-primary">
                  Join us in igniting the SPARK!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
              <section className="py-16 relative">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
        Event <span className="text-secondary text-glow-cyan">Timeline</span>
      </h2>
      <p className="text-muted-foreground font-exo max-w-2xl mx-auto">
        A journey through the evolution and milestones of SPARK
      </p>
    </div>

    <TimelineDemo />
  </div>
</section>


     

      <Footer />
    </div>
  );
};

export default AboutPage;
