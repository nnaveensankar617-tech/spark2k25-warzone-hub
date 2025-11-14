import { useEffect, useState } from "react";

interface Explosion {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  color: string;
}

const FireExplosions = () => {
  const [explosions, setExplosions] = useState<Explosion[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(16, 100%, 60%)',  // orange
      'hsl(0, 100%, 50%)',   // red
      'hsl(35, 100%, 60%)',  // gold
      'hsl(var(--fire-orange))',
      'hsl(var(--neon-cyan))',
    ];

    const initialExplosions = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 10 + Math.random() * 80,
      top: 10 + Math.random() * 80,
      delay: Math.random() * 4,
      duration: 1.2 + Math.random() * 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setExplosions(initialExplosions);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {explosions.map((explosion) => (
        <div
          key={explosion.id}
          className="absolute"
          style={{
            left: `${explosion.left}%`,
            top: `${explosion.top}%`,
          }}
        >
          {/* Main explosion ring */}
          <div
            className="absolute"
            style={{
              width: '80px',
              height: '80px',
              border: `3px solid ${explosion.color}`,
              animation: `fire-explosion ${explosion.duration}s ease-out infinite`,
              animationDelay: `${explosion.delay}s`,
              boxShadow: `0 0 30px ${explosion.color}, inset 0 0 20px ${explosion.color}`,
            }}
          />
          
          {/* Secondary explosion ring */}
          <div
            className="absolute"
            style={{
              width: '80px',
              height: '80px',
              border: `2px solid ${explosion.color}`,
              animation: `fire-explosion ${explosion.duration}s ease-out infinite`,
              animationDelay: `${explosion.delay + 0.2}s`,
              boxShadow: `0 0 20px ${explosion.color}`,
              opacity: 0.6,
            }}
          />

          {/* Center flash */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '20px',
              height: '20px',
              background: explosion.color,
              borderRadius: '50%',
              animation: `muzzle-flash ${explosion.duration * 0.3}s ease-out infinite`,
              animationDelay: `${explosion.delay}s`,
              boxShadow: `0 0 40px ${explosion.color}`,
            }}
          />

          {/* Lingering smoke clouds */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '60px',
                height: '60px',
                background: `radial-gradient(circle, hsl(var(--muted-foreground) / 0.4), transparent)`,
                borderRadius: '50%',
                animation: `smoke-linger ${explosion.duration + 0.5}s ease-out infinite`,
                animationDelay: `${explosion.delay + 0.3 + i * 0.15}s`,
                filter: 'blur(4px)',
                transform: `rotate(${i * 90}deg)`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FireExplosions;
