import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sword, Zap, Trophy, Crosshair, Cpu, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBattlefield from "@/assets/hero-battlefield.jpg";
import sparkLogo from "@/assets/spark-logo.png";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const xSpring = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const ySpring = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const bgX = useTransform(xSpring, [-0.5, 0.5], ["-3%", "3%"]);
  const bgY = useTransform(ySpring, [-0.5, 0.5], ["-3%", "3%"]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Improved Cyber Text Component (No Red/Blue)
  const CyberText = ({ text }: { text: string }) => {
    return (
      <div className="relative inline-block group">
        <span className="relative z-10">{text}</span>
        {/* Holographic duplicate */}
        <span className="absolute top-0 left-0 text-cyan-400 opacity-0 group-hover:opacity-50 animate-pulse transition-opacity duration-300 transform translate-x-[2px] blur-[1px]">
          {text}
        </span>
      </div>
    );
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background with reduced movement range for performance */}
      <motion.div
        className="absolute inset-[-5%]"
        style={{ x: bgX, y: bgY }}
      >
        <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: `url(${heroBattlefield})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)]" />
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* HUD Elements - Hidden on Mobile */}
      <div className="absolute inset-0 pointer-events-none p-4 md:p-8 flex flex-col justify-between z-20 hidden md:flex">
        {/* Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 text-primary/80 font-orbitron text-xs tracking-widest">
            <Crosshair className="w-7 h-8 animate-spin-slow" />
            SYSTEM ONLINE
          </div>
          <div className="w-32 h-[2px] bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        {/* Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-right"
        >
          <div className="text-secondary/80 font-orbitron text-xs tracking-widest mb-1">COORDINATES</div>
          <div className="font-mono text-xs text-muted-foreground">34.0522° N, 118.2437° W</div>
        </motion.div>

        {/* Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-black/40 border border-white/10 rounded backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-white/80">SERVER STATUS: STABLE</span>
          </div>
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-right"
        >
          <div className="text-xs font-orbitron text-primary/60 tracking-[0.2em]">SPARK_PROTOCOL_V2.0</div>
        </motion.div>
      </div>

      {/* Center Content */}
      <div className="relative z-30 container mx-auto px-4 text-center mt-[-10vh] md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >

          <div className="relative mb-6 flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.img
                src={sparkLogo}
                alt="SPARK 2026"
                className="w-full max-w-[600px] h-auto object-contain drop-shadow-[0_0_30px_rgba(195,13,22,0.6)]"
                animate={{
                  y: [0, -10, 0],
                  filter: [
                    "drop-shadow(0 0 30px rgba(195,13,22,0.6))",
                    "drop-shadow(0 0 50px rgba(195,13,22,0.8))",
                    "drop-shadow(0 0 30px rgba(195,13,22,0.6))"
                  ]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-muted-foreground font-exo max-w-2xl mx-auto mb-10 tracking-wide"
          >
            Deploy into the ultimate <span className="text-white font-bold">Battlezone</span> of Tech, Cult, and Sports.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              className="relative overflow-hidden group bg-primary hover:bg-primary/90 text-black font-bold font-orbitron text-lg px-8 py-6 rounded-none skew-x-[-10deg] border border-primary/50 shadow-[0_0_20px_rgba(234,179,8,0.4)] w-full sm:w-auto"
              onClick={() => scrollToSection("events")}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 skew-x-[10deg]">
                <Sword className="w-5 h-5" /> JOIN THE FIGHT
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>

            <Button
              variant="outline"
              className="relative overflow-hidden group bg-transparent hover:bg-white/5 text-white font-bold font-orbitron text-lg px-8 py-6 rounded-none skew-x-[-10deg] border border-white/30 hover:border-white/60 w-full sm:w-auto"
              onClick={() => navigate("/events")}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 skew-x-[10deg]">
                <Trophy className="w-5 h-5" /> VIEW INTEL
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Live Stats - Responsive Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 md:mt-16 border-t border-white/10 pt-8"
        >
          {[
            { label: "PLAYERS", value: "500+" },
            { label: "FACTIONS", value: "12" },
            { label: "ZONES", value: "47" },
            { label: "REWARDS", value: "₹1L+" },
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-2xl md:text-3xl font-bold font-orbitron text-white group-hover:text-primary transition-colors">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-exo tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none"
      >
        <div className="text-[10px] font-orbitron tracking-[0.3em] text-white/50">SCROLL TO DEPLOY</div>
        <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
      </motion.div>

      {/* Decorative Corners - Only on Desktop */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 opacity-30 hidden md:block">
        <defs>
          <linearGradient id="corner-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Top Left Corner */}
        <path d="M 40 40 L 40 100 M 40 40 L 100 40" stroke="url(#corner-grad)" strokeWidth="2" fill="none" />
        {/* Bottom Right Corner */}
        <path d="M calc(100% - 40px) calc(100% - 40px) L calc(100% - 40px) calc(100% - 100px) M calc(100% - 40px) calc(100% - 40px) L calc(100% - 100px) calc(100% - 40px)" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
      </svg>
    </section>
  );
};

export default Hero;
