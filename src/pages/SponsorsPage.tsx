import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkEffect from "@/components/SparkEffect";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import battlefieldBg from "@/assets/sponsors-battlefield.jpg";

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

interface SponsorCategory {
  category: string;
  icon: string;
  color: string;
  sponsors: Sponsor[];
}

const sponsorCategories: SponsorCategory[] = [
  {
    category: "Gaming Partners",
    icon: "🎮",
    color: "fire-orange",
    sponsors: [
      { id: 1, name: "Razor Edge", logo: "🎮", description: "Elite gaming gear and peripherals", website: "#" },
      { id: 2, name: "ProGamer Hub", logo: "🕹️", description: "Professional gaming arena", website: "#" },
      { id: 3, name: "GameVault", logo: "🎯", description: "Gaming tournaments & prizes", website: "#" },
    ]
  },
  {
    category: "Food Partners",
    icon: "🍔",
    color: "neon-cyan",
    sponsors: [
      { id: 4, name: "BattleBite Café", logo: "🍔", description: "Fuel your gaming marathon", website: "#" },
      { id: 5, name: "Energy Eats", logo: "🍕", description: "Quick bites for gamers", website: "#" },
      { id: 6, name: "Snack Attack", logo: "🌮", description: "Ultimate gaming snacks", website: "#" },
    ]
  },
  {
    category: "Tech Partners",
    icon: "⚙️",
    color: "fire-orange",
    sponsors: [
      { id: 7, name: "CyberForge", logo: "⚙️", description: "Next-gen tech solutions", website: "#" },
      { id: 8, name: "TechNova", logo: "💡", description: "Innovation at its peak", website: "#" },
    ]
  },
  {
    category: "Media Partners",
    icon: "📺",
    color: "neon-cyan",
    sponsors: [
      { id: 9, name: "StreamWave", logo: "📺", description: "Live streaming excellence", website: "#" },
      { id: 10, name: "PixelCast", logo: "📡", description: "Broadcasting your victories", website: "#" },
    ]
  },
  {
    category: "Event Partners",
    icon: "🏆",
    color: "fire-orange",
    sponsors: [
      { id: 11, name: "PowerPlay Events", logo: "🏆", description: "Creating legendary moments", website: "#" },
      { id: 12, name: "Epic Gatherings", logo: "🎪", description: "Unforgettable experiences", website: "#" },
    ]
  },
];

const SponsorsPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${battlefieldBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>
      
      <SparkEffect />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-8 tracking-tight">
            <span className="text-primary">OUR POWER</span>
            <br />
            <span className="text-foreground">SPONSORS</span>
          </h1>
          <p className="text-xl md:text-2xl font-exo text-muted-foreground max-w-2xl mx-auto">
            The Backbone of Victory — Partners Who Fuel the Battle
          </p>
        </div>
      </section>

      {/* Sponsors by Category */}
      <section className="container mx-auto px-4 py-16 relative z-10 space-y-20">
        {sponsorCategories.map((category, catIndex) => (
          <div key={catIndex} className="space-y-8">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">{category.icon}</span>
              <h2 className={`text-3xl md:text-4xl font-orbitron font-bold uppercase tracking-wider ${
                category.color === "fire-orange" ? "text-primary" : "text-secondary"
              }`}>
                {category.category}
              </h2>
              <div className={`flex-1 h-0.5 ${
                category.color === "fire-orange" 
                  ? "bg-gradient-to-r from-primary to-transparent" 
                  : "bg-gradient-to-r from-secondary to-transparent"
              }`} />
            </div>

            {/* Sponsors Grid for this Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.sponsors.map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onMouseEnter={() => setHoveredCard(sponsor.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card className="relative overflow-hidden border-2 border-border bg-card/50 backdrop-blur-sm h-full group">
                    <CardContent className="p-8">
                      {/* Logo */}
                      <div className="text-8xl mb-6">
                        {sponsor.logo}
                      </div>
                      
                      {/* Name */}
                      <h3 className={`text-2xl font-orbitron font-bold mb-3 ${
                        category.color === "fire-orange" ? "text-primary" : "text-secondary"
                      }`}>
                        {sponsor.name}
                      </h3>
                      
                      {/* Details - Show on hover */}
                      {hoveredCard === sponsor.id && (
                        <div className="mt-4 space-y-3">
                          <p className="text-muted-foreground leading-relaxed">
                            {sponsor.description}
                          </p>
                          <div className={`inline-flex items-center gap-2 text-sm font-semibold ${
                            category.color === "fire-orange" ? "text-primary" : "text-secondary"
                          }`}>
                            Visit Website →
                          </div>
                        </div>
                      )}
                    </CardContent>

                    {/* Subtle border highlight on hover */}
                    <div className={`absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                      category.color === "fire-orange" ? "border-primary/50" : "border-secondary/50"
                    }`} />
                  </Card>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-foreground">
            Join Our Battle Alliance
          </h2>
          <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
            Become a part of the most electrifying college fest. Power up with us and create legendary moments together.
          </p>
          <Button 
            variant="hero" 
            size="xl"
            className="font-semibold"
          >
            Become a Sponsor
          </Button>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center">
          <h3 className="text-2xl font-orbitron font-bold mb-8">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="X"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors"
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
