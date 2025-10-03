import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1
      }}
    >
      {/* Animated gradient orbs */}
      <div
        className="particle-orb"
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite'
        }}
      />
      <div
        className="particle-orb"
        style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 10s ease-in-out infinite reverse'
        }}
      />
      <div
        className="particle-orb"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 12s ease-in-out infinite'
        }}
      />

      {/* Floating particles */}
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: ['#8b5cf6', '#06b6d4', '#ec4899'][i % 3],
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.5,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticleBackground;
