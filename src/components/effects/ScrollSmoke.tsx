import { useEffect, useState, useRef } from "react";

interface SmokeParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
}

const ScrollSmoke = () => {
  const [particles, setParticles] = useState<SmokeParticle[]>([]);
  const lastScrollY = useRef(0);
  const particleIdCounter = useRef(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastEmitTime = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      
      if (scrollDelta > 5) {
        const now = Date.now();
        
        // Emit particles more frequently during scroll
        if (now - lastEmitTime > 30) {
          const newParticles: SmokeParticle[] = [];
          
          // Create 3-5 particles per scroll movement
          const particleCount = 3 + Math.floor(Math.random() * 3);
          
          for (let i = 0; i < particleCount; i++) {
            newParticles.push({
              id: particleIdCounter.current++,
              x: Math.random() * 100,
              y: (window.scrollY / document.documentElement.scrollHeight) * 100,
              size: 20 + Math.random() * 40,
              opacity: 0.4 + Math.random() * 0.3,
              delay: Math.random() * 0.2,
            });
          }
          
          setParticles(prev => {
            const updated = [...prev, ...newParticles];
            // Keep only last 50 particles for performance
            return updated.slice(-50);
          });
          
          lastEmitTime = now;
        }
        
        lastScrollY.current = currentScrollY;
      }
    };

    const animate = () => {
      handleScroll();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-smoke-trail"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 69, 0, 0.6), rgba(255, 140, 0, 0.3), transparent)',
              filter: 'blur(15px)',
              boxShadow: '0 0 30px rgba(255, 69, 0, 0.5)',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollSmoke;
