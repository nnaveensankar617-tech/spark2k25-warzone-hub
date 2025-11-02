import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkEffect from "@/components/SparkEffect";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

interface Sponsor {
  id: number;
  name: string;
  category: string;
  icon: string;
  color: string;
}

const sponsors: Sponsor[] = [
  { id: 1, name: "Razor Edge", category: "Gaming Partner", icon: "🎮", color: "fire-orange" },
  { id: 2, name: "BattleBite Café", category: "Food Partner", icon: "🍔", color: "neon-cyan" },
  { id: 3, name: "MedZone", category: "Health Partner", icon: "🏥", color: "fire-orange" },
  { id: 4, name: "CyberForge", category: "Tech Partner", icon: "⚙️", color: "neon-cyan" },
  { id: 5, name: "LearnHub", category: "EdTech Partner", icon: "📚", color: "fire-orange" },
  { id: 6, name: "StreamWave", category: "Media Partner", icon: "📺", color: "neon-cyan" },
  { id: 7, name: "BassZone", category: "Music Partner", icon: "🎵", color: "fire-orange" },
  { id: 8, name: "TechNova", category: "Innovation Partner", icon: "💡", color: "neon-cyan" },
  { id: 9, name: "PowerPlay Events", category: "Event Partner", icon: "🏆", color: "fire-orange" },
  { id: 10, name: "FastLink Fiber", category: "Internet Partner", icon: "🌐", color: "neon-cyan" },
];

const SponsorsPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SparkEffect />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--fire-orange)/0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--neon-cyan)/0.2),transparent_40%)]" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-glow-pulse">
              Our Power Sponsors
            </span>
          </h1>
          <p className="text-xl md:text-3xl font-exo text-muted-foreground animate-fade-in animation-delay-200">
            The Backbone of Victory
          </p>
          <div className="mt-8 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {sponsors.map((sponsor, index) => (
            <Card
              key={sponsor.id}
              className={`
                relative overflow-hidden cursor-pointer transition-all duration-500 
                border-2 bg-card/50 backdrop-blur-sm
                ${hoveredCard === sponsor.id 
                  ? sponsor.color === "fire-orange" 
                    ? "border-primary shadow-[0_0_30px_hsl(var(--fire-orange)/0.6)] scale-105" 
                    : "border-secondary shadow-[0_0_30px_hsl(var(--neon-cyan)/0.6)] scale-105"
                  : "border-border hover:border-muted-foreground"
                }
                animate-fade-in
              `}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(sponsor.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-background opacity-90" />
              
              {/* Animated background glow */}
              <div className={`
                absolute inset-0 opacity-0 transition-opacity duration-500
                ${hoveredCard === sponsor.id ? "opacity-100" : ""}
              `}>
                <div className={`
                  absolute inset-0 
                  ${sponsor.color === "fire-orange" 
                    ? "bg-[radial-gradient(circle_at_50%_50%,hsl(var(--fire-orange)/0.2),transparent_70%)]" 
                    : "bg-[radial-gradient(circle_at_50%_50%,hsl(var(--neon-cyan)/0.2),transparent_70%)]"
                  }
                `} />
              </div>

              <CardContent className="p-8 relative z-10 flex flex-col items-center justify-center min-h-[280px]">
                <div className={`
                  text-6xl mb-4 transition-transform duration-500
                  ${hoveredCard === sponsor.id ? "scale-125 animate-bounce" : "scale-100"}
                `}>
                  {sponsor.icon}
                </div>
                
                <h3 className="text-2xl font-orbitron font-bold mb-2 text-center">
                  {sponsor.name}
                </h3>
                
                <div className={`
                  inline-block px-4 py-2 rounded-full text-sm font-exo font-medium
                  ${sponsor.color === "fire-orange" 
                    ? "bg-primary/20 text-primary border border-primary/50" 
                    : "bg-secondary/20 text-secondary border border-secondary/50"
                  }
                `}>
                  {sponsor.category}
                </div>

                {/* Particle effect on hover */}
                {hoveredCard === sponsor.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`
                          absolute w-2 h-2 rounded-full
                          ${sponsor.color === "fire-orange" ? "bg-primary" : "bg-secondary"}
                          animate-spark-rise
                        `}
                        style={{
                          left: `${Math.random() * 100}%`,
                          bottom: "0",
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 relative z-10">
            Join Our Battle Alliance
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
            Become a part of the most electrifying college fest. Power up with us and create legendary moments.
          </p>
          <Button 
            variant="hero" 
            size="xl"
            className="relative z-10 group"
          >
            <span className="relative z-10">Become a Sponsor</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </Button>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-orbitron font-bold mb-4">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--fire-orange)/0.5)]"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--fire-orange)/0.5)]"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--fire-orange)/0.5)]"
              aria-label="X"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-secondary hover:text-secondary hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.5)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SponsorsPage;
