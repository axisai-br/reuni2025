import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const AnimatedCounter = ({ 
  end, 
  suffix = '', 
  prefix = '', 
  duration = 2, 
  className = '',
  decimals = 0 
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div ref={ref} className={className}>
      {hasAnimated ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          decimals={decimals}
          prefix={prefix}
          suffix={suffix}
          preserveValue
        />
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </div>
  );
};

export default AnimatedCounter;

