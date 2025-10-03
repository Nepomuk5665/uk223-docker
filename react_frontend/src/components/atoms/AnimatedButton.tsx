import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  'data-testid'?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  fullWidth = false,
  className = '',
  'data-testid': testId
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        };
      case 'danger':
        return {
          background: 'linear-gradient(135deg, #ef4444, #dc2626)'
        };
      default:
        return {
          background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)'
        };
    }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.5)' }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={className}
      data-testid={testId}
      style={{
        ...getVariantStyles(),
        color: 'white',
        border: 'none',
        padding: '12px 32px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        width: fullWidth ? '100%' : 'auto',
        position: 'relative',
        overflow: 'hidden',
        ...getVariantStyles()
      }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
