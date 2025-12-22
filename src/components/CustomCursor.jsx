import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    let sparkleId = 0;

    const handleMouseMove = (e) => {
      // Create sparkle trail
      if (Math.random() > 0.7) {
        const newSparkle = {
          id: sparkleId++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 10 + 5,
          duration: Math.random() * 1000 + 500,
          color: ['#c084fc', '#e879f9', '#a855f7', '#f0abfc'][Math.floor(Math.random() * 4)]
        };

        setSparkles(prev => [...prev, newSparkle]);

        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, newSparkle.duration);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
            animation: `sparkle ${sparkle.duration}ms ease-out forwards`,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`
          }}
        />
      ))}
      
      <style>{`
        @keyframes sparkle {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
