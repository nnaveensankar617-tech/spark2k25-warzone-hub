import { useEffect, useState } from "react";

interface Bullet {
  id: number;
  top: number;
  delay: number;
  size: number;
  color: string;
  reverse?: boolean;
}

const BulletEffects = () => {
  const [bullets, setBullets] = useState<Bullet[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(var(--fire-orange))',
      'hsl(var(--neon-cyan))',
      'hsl(var(--primary))',
      'hsl(var(--secondary))',
    ];

    const initialBullets = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      top: 10 + Math.random() * 80,
      delay: Math.random() * 3,
      size: 2 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      reverse: Math.random() > 0.5,
    }));
    setBullets(initialBullets);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {bullets.map((bullet) => (
        <div
          key={bullet.id}
          className="absolute"
          style={{
            top: `${bullet.top}%`,
            left: bullet.reverse ? '100%' : '-10%',
            animation: bullet.reverse 
              ? `bullet-fire-reverse ${0.8 + Math.random() * 0.4}s linear infinite`
              : `bullet-fire ${0.8 + Math.random() * 0.4}s linear infinite`,
            animationDelay: `${bullet.delay}s`,
          }}
        >
          {/* Bullet trail */}
          <div
            className="relative"
            style={{
              width: `${bullet.size * 8}px`,
              height: `${bullet.size}px`,
              background: `linear-gradient(90deg, ${bullet.color} 0%, transparent 100%)`,
              boxShadow: `0 0 ${bullet.size * 4}px ${bullet.color}`,
              opacity: 0.8,
            }}
          >
            {/* Bullet head */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2"
              style={{
                width: `${bullet.size * 2}px`,
                height: `${bullet.size * 2}px`,
                background: bullet.color,
                borderRadius: '50%',
                boxShadow: `0 0 ${bullet.size * 6}px ${bullet.color}`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BulletEffects;
