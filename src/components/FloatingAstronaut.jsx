import { useEffect, useState } from 'react';

export default function FloatingAstronaut() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState({ x: 0.5, y: 0.3 });

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const newX = prev.x + velocity.x;
        const newY = prev.y + velocity.y;

        // Bounce off edges
        const maxX = window.innerWidth - 175; 
        const maxY = window.innerHeight - 175;

        let newVelX = velocity.x;
        let newVelY = velocity.y;

        if (newX <= 0 || newX >= maxX) {
          newVelX = -velocity.x;
          setVelocity((v) => ({ ...v, x: newVelX }));
        }

        if (newY <= 0 || newY >= maxY) {
          newVelY = -velocity.y;
          setVelocity((v) => ({ ...v, y: newVelY }));
        }

        return {
          x: Math.max(0, Math.min(maxX, newX)),
          y: Math.max(0, Math.min(maxY, newY))
        };
      });
    };

    const interval = setInterval(animate, 16); // ~60fps

    return () => clearInterval(interval);
  }, [velocity]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 hidden lg:block">
      <div
        className="absolute transition-all duration-100 ease-linear"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '180px',
          height: '180px'
        }}
      >
        <div className="relative animate-float-rotate">
          {/* Purple glow */}
          <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
          
          {/* Astronaut image */}
          <img
            src="/screenshots/DrawingOfAstronautByPaula-EleniPopovici.png"
            alt="Floating Astronaut by Paula-Eleni"
            className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <style>{`
        @keyframes float-rotate {
          0%, 100% {
            transform: rotate(-5deg) translateY(0px);
          }
          50% {
            transform: rotate(5deg) translateY(-10px);
          }
        }

        .animate-float-rotate {
          animation: float-rotate 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
