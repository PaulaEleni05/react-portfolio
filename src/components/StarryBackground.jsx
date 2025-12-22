export default function StarryBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-lavender-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 animate-gradient" style={{
        backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 40%, #f3e8ff 100%)'
      }}></div>
      
      {/* Stars Layer 1 - Small stars */}
      <div className="stars-small"></div>
      
      {/* Stars Layer 2 - Medium stars */}
      <div className="stars-medium"></div>
      
      {/* Stars Layer 3 - Large stars */}
      <div className="stars-large"></div>

      <style>{`
        @keyframes gradient {
          0%, 100% { 
            background-position: 0% 50%; 
          }
          50% { 
            background-position: 100% 50%; 
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        
        :root.dark .animate-gradient {
          background-image: linear-gradient(135deg, #030712 0%, #111827 50%, #030712 100%) !important;
        }

        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-20px);
          }
        }

        .stars-small, .stars-medium, .stars-large {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        /* Small stars */
        .stars-small {
          background-image: 
            radial-gradient(circle, rgb(147, 51, 234, 0.5) 1px, transparent 1px),
            radial-gradient(circle, rgb(168, 85, 247, 0.4) 1px, transparent 1px),
            radial-gradient(circle, rgb(139, 92, 246, 0.4) 1px, transparent 1px);
          background-size: 50px 50px, 80px 80px, 100px 100px;
          background-position: 0 0, 40px 60px, 20px 30px;
          animation: twinkle 3s ease-in-out infinite, float 8s ease-in-out infinite;
        }

        :root.dark .stars-small {
          background-image: 
            radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
        }

        /* Medium stars */
        .stars-medium {
          background-image: 
            radial-gradient(circle, rgb(126, 34, 206, 0.6) 1.5px, transparent 1.5px),
            radial-gradient(circle, rgb(147, 51, 234, 0.5) 1.5px, transparent 1.5px);
          background-size: 150px 150px, 200px 200px;
          background-position: 0 0, 100px 100px;
          animation: twinkle 4s ease-in-out infinite 0.5s, float 10s ease-in-out infinite;
        }

        :root.dark .stars-medium {
          background-image: 
            radial-gradient(circle, rgba(255, 255, 255, 0.5) 1.5px, transparent 1.5px),
            radial-gradient(circle, rgba(255, 255, 255, 0.4) 1.5px, transparent 1.5px);
        }

        /* Large stars */
        .stars-large {
          background-image: 
            radial-gradient(circle, rgb(168, 85, 247, 0.7) 2px, transparent 2px),
            radial-gradient(circle, rgb(147, 51, 234, 0.6) 2px, transparent 2px);
          background-size: 250px 250px, 300px 300px;
          background-position: 0 0, 150px 150px;
          animation: twinkle 5s ease-in-out infinite 1s, float 12s ease-in-out infinite;
        }

        :root.dark .stars-large {
          background-image: 
            radial-gradient(circle, rgba(255, 255, 255, 0.6) 2px, transparent 2px),
            radial-gradient(circle, rgba(255, 255, 255, 0.5) 2px, transparent 2px);
        }
      `}</style>
    </div>
  );
}
