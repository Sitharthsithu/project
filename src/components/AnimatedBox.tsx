import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedBoxProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;