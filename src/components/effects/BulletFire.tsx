import { useState, useEffect } from "react";

interface BulletEffect {
  id: number;
  x: number;
  y: number;
}

let bulletIdCounter = 0;

export const useBulletFire = () => {
  const [bullets, setBullets] = useState<BulletEffect[]>([]);

  const fireBullet = (event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const newBullet = {
      id: bulletIdCounter++,
      x,
      y,
    };

    setBullets(prev => [...prev, newBullet]);

    // Remove bullet after animation
    setTimeout(() => {
      setBullets(prev => prev.filter(b => b.id !== newBullet.id));
    }, 800);
  };

  return { bullets, fireBullet };
};

interface BulletFireProps {
  bullets: BulletEffect[];
}

const BulletFire = ({ bullets }: BulletFireProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {bullets.map((bullet) => (
        <div
          key={bullet.id}
          className="absolute"
          style={{
            left: `${bullet.x}px`,
            top: `${bullet.y}px`,
          }}
        >
          {/* Main bullet projectile */}
          <div className="absolute animate-bullet-fire">
            <div 
              className="w-3 h-12 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, #ff4500, #ff8c00, #ffd700)',
                boxShadow: '0 0 20px #ff4500, 0 0 40px #ff8c00',
                filter: 'blur(1px)',
              }}
            />
          </div>

          {/* Muzzle flash */}
          <div className="absolute animate-muzzle-flash">
            <div 
              className="w-16 h-16 -ml-6 -mt-2 rounded-full"
              style={{
                background: 'radial-gradient(circle, #ffff00, #ff8c00, transparent)',
                boxShadow: '0 0 40px #ff4500, 0 0 80px #ff8c00',
                filter: 'blur(8px)',
              }}
            />
          </div>

          {/* Fire burst particles */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            return (
              <div
                key={i}
                className="absolute animate-bullet-spark"
                style={{
                  '--angle': `${angle}deg`,
                  animationDelay: `${Math.random() * 0.1}s`,
                } as React.CSSProperties}
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: '#ff4500',
                    boxShadow: '0 0 10px #ff4500',
                  }}
                />
              </div>
            );
          })}

          {/* Trailing fire effect */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`trail-${i}`}
              className="absolute animate-fire-trail"
              style={{
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <div 
                className="w-4 h-8 rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(255, 69, 0, ${0.8 - i * 0.15}), rgba(255, 140, 0, ${0.5 - i * 0.1}), transparent)`,
                  filter: 'blur(4px)',
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BulletFire;
