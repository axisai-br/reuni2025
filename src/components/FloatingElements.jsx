import { useEffect, useState } from 'react';
import { Users, TrendingUp, Heart, Star, Zap, Target } from 'lucide-react';

const FloatingElements = () => {
  const [elements, setElements] = useState([]);

  const icons = [Users, TrendingUp, Heart, Star, Zap, Target];
  const colors = ['text-orange-primary', 'text-green-support', 'text-blue-support'];

  useEffect(() => {
    const generateElements = () => {
      const newElements = [];
      for (let i = 0; i < 6; i++) {
        const IconComponent = icons[i % icons.length];
        newElements.push({
          id: i,
          Icon: IconComponent,
          color: colors[i % colors.length],
          left: Math.random() * 100,
          animationDelay: Math.random() * 5,
          animationDuration: 10 + Math.random() * 10,
          size: 16 + Math.random() * 8
        });
      }
      setElements(newElements);
    };

    generateElements();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
      {elements.map((element) => {
        const { id, Icon, color, left, animationDelay, animationDuration, size } = element;
        return (
          <div
            key={id}
            className={`absolute ${color} opacity-10`}
            style={{
              left: `${left}%`,
              animation: `float ${animationDuration}s ease-in-out infinite`,
              animationDelay: `${animationDelay}s`,
              fontSize: `${size}px`
            }}
          >
            <Icon size={size} />
          </div>
        );
      })}
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
            transform: translateY(-10vh) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingElements;

