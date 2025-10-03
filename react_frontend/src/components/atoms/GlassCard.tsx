import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  'data-testid'?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', 'data-testid': testId }) => {
  return (
    <div
      className={`glass ${className}`}
      data-testid={testId}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
