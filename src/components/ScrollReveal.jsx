import { useInView } from 'react-intersection-observer';

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = '' 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(50px)';
      case 'down': return 'translateY(-50px)';
      case 'left': return 'translateX(50px)';
      case 'right': return 'translateX(-50px)';
      case 'scale': return 'scale(0.8)';
      default: return 'translateY(50px)';
    }
  };

  const animationStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0) translateX(0) scale(1)' : getTransform(),
    transition: `all ${duration}s ease-out ${delay}s`,
  };

  return (
    <div ref={ref} className={className} style={animationStyle}>
      {children}
    </div>
  );
};

export default ScrollReveal;

