import { useEffect, useState } from "react";

const FireExplosion = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide explosion after animation completes
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Central explosion core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-explosion-core opacity-0" 
             style={{ 
               boxShadow: '0 0 100px 50px rgba(255, 69, 0, 0.8), 0 0 200px 100px rgba(255, 140, 0, 0.6)',
               filter: 'blur(20px)'
             }} 
        />
      </div>

      {/* Explosion particles - radiating outward */}
      {[...Array(40)].map((_, i) => {
        const angle = (i * 360) / 40;
        const distance = 200 + Math.random() * 400;
        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 animate-explosion-particle"
            style={{
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, #ff4500, #ff6347)' 
                : i % 3 === 1 
                ? 'radial-gradient(circle, #ff8c00, #ffa500)'
                : 'radial-gradient(circle, #ffff00, #ffd700)',
              borderRadius: '50%',
              boxShadow: `0 0 ${20 + Math.random() * 40}px rgba(255, 69, 0, 0.8)`,
              filter: `blur(${Math.random() * 3}px)`,
              animationDelay: `${Math.random() * 0.2}s`,
              '--angle': `${angle}deg`,
              '--distance': `${distance}px`,
            } as React.CSSProperties}
          />
        );
      })}

      {/* Fire sparks - smaller, faster particles */}
      {[...Array(60)].map((_, i) => {
        const angle = Math.random() * 360;
        const distance = 300 + Math.random() * 600;
        return (
          <div
            key={`spark-${i}`}
            className="absolute top-1/2 left-1/2 animate-fire-spark"
            style={{
              width: `${2 + Math.random() * 6}px`,
              height: `${2 + Math.random() * 6}px`,
              background: '#ff4500',
              borderRadius: '50%',
              boxShadow: '0 0 10px #ff4500',
              animationDelay: `${Math.random() * 0.3}s`,
              '--angle': `${angle}deg`,
              '--distance': `${distance}px`,
            } as React.CSSProperties}
          />
        );
      })}

      {/* Shockwave rings */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`ring-${i}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 animate-shockwave"
          style={{
            borderColor: 'rgba(255, 69, 0, 0.6)',
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}

      {/* Screen flash overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/40 via-red-500/20 to-transparent animate-screen-flash" />
    </div>
  );
};

export default FireExplosion;
