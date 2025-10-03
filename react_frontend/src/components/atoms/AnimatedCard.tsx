import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  onClick?: () => void;
  'data-testid'?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  delay = 0,
  className = '',
  onClick,
  'data-testid': testId
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.03,
        y: -10,
        boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)'
      }}
      whileTap={{ scale: 0.98 }}
      className={`card-hover ${className}`}
      onClick={onClick}
      data-testid={testId}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '24px',
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
