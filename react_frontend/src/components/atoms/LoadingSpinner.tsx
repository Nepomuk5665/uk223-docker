import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: number;
  'data-testid'?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 40, 'data-testid': testId }) => {
  return (
    <div
      data-testid={testId}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        style={{
          width: size,
          height: size,
          border: '3px solid rgba(255, 255, 255, 0.1)',
          borderTop: '3px solid #8b5cf6',
          borderRadius: '50%'
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
