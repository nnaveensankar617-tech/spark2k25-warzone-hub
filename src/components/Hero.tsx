import { Button } from "@/components/ui/button";
import { Sword, Zap, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBattlefield from "@/assets/hero-battlefield.jpg";
import FireExplosion from "@/components/effects/FireExplosion";
import ScrollSmoke from "@/components/effects/ScrollSmoke";
import BulletFire, { useBulletFire } from "@/components/effects/BulletFire";

const Hero = () => {
  const navigate = useNavigate();
  const { bullets, fireBullet } = useBulletFire();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Game Effects */}
      <FireExplosion />
      <ScrollSmoke />
      <BulletFire bullets={bullets} />
      
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBattlefield}
          alt="SPARK 2K26 Battlefield"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Animated Particles - Enhanced */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-spark-trail"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: i % 3 === 0 ? 'hsl(var(--primary))' : i % 3 === 1 ? 'hsl(var(--secondary))' : 'hsl(var(--neon-blue))',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
              transform: `scale(${Math.random() * 1.5 + 0.3}) rotate(${Math.random() * 360}deg)`,
              filter: `blur(${Math.random() * 1}px)`,
              boxShadow: i % 2 === 0 
                ? '0 0 10px hsl(var(--primary) / 0.8)' 
                : '0 0 10px hsl(var(--secondary) / 0.8)',
            }}
          />
        ))}
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div>
          {/* Event Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 mb-8 animate-scale-bounce" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <Zap className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="text-sm font-orbitron font-semibold text-foreground uppercase tracking-wider">
              SV College, Tirupati
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black mb-6">
            <span className="inline-block text-glow-cyan animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
              SPARK
            </span>
            <br />
            <span className="inline-block text-glow-orange text-primary animate-float" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
              2K26
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl font-exo font-light text-muted-foreground mb-4 tracking-wide animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
            Where Innovation Meets Adrenaline
          </p>

          {/* Feature Icons */}
          <div className="flex items-center justify-center gap-8 mb-12 text-foreground/80 animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "both" }}>
            <div className="flex items-center gap-2 animate-slide-in" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
              <Sword className="w-6 h-6 text-primary animate-bounce-subtle" />
              <span className="text-sm font-orbitron">Gaming</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2 animate-scale-in" style={{ animationDelay: "1.3s", animationFillMode: "both" }}>
              <Zap className="w-6 h-6 text-secondary animate-bounce-subtle" style={{ animationDelay: "0.2s" }} />
              <span className="text-sm font-orbitron">Technical</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2 animate-slide-in-right" style={{ animationDelay: "1.4s", animationFillMode: "both" }}>
              <Trophy className="w-6 h-6 text-primary animate-bounce-subtle" style={{ animationDelay: "0.4s" }} />
              <span className="text-sm font-orbitron">Cultural</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              onClick={(e) => {
                fireBullet(e);
                setTimeout(() => scrollToSection("contact"), 300);
              }}
              className="animate-scale-bounce"
              style={{ animationDelay: "1.5s", animationFillMode: "both" }}
            >
              Join the Battle
            </Button>
            <Button
              variant="battle"
              size="xl"
              onClick={(e) => {
                fireBullet(e);
                setTimeout(() => navigate("/events"), 300);
              }}
              className="animate-scale-bounce"
              style={{ animationDelay: "1.6s", animationFillMode: "both" }}
            >
              Explore Events
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
      </section>
    </>
  );
};

export default Hero;
