import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleBackground from '../atoms/ParticleBackground';
import AnimatedButton from '../atoms/AnimatedButton';
import GlassCard from '../atoms/GlassCard';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <ParticleBackground />

            {/* Floating Monkey.jpg Background */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    width: '300px',
                    height: '300px',
                    opacity: 0.15,
                    zIndex: 0
                }}
            >
                <img
                    src="/monkey.jpg"
                    alt="monkey decoration"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        filter: 'blur(2px)'
                    }}
                />
            </motion.div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    padding: '20px',
                    position: 'relative',
                    zIndex: 1
                }}
                data-testid="home-page"
            >
                {/* Main Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <motion.h1
                        className="text-gradient"
                        style={{
                            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                            fontWeight: 900,
                            marginBottom: '20px',
                            lineHeight: 1.2
                        }}
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                    >
                        Event Management
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                            color: '#a1a1aa',
                            maxWidth: '600px',
                            margin: '0 auto 40px',
                            lineHeight: 1.6
                        }}
                    >
                        Create, manage, and attend amazing events with style
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <AnimatedButton
                            onClick={() => navigate('/login')}
                            data-testid="home-login-button"
                        >
                            Get Started
                        </AnimatedButton>
                    </motion.div>
                </motion.div>

                {/* Feature Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '30px',
                        maxWidth: '1200px',
                        width: '100%'
                    }}
                >
                    {[
                        { title: 'Create Events', desc: 'Set up events in minutes', icon: '🎉', delay: 0.8 },
                        { title: 'Manage Participants', desc: 'Track attendees easily', icon: '👥', delay: 1 },
                        { title: 'Stay Organized', desc: 'Never miss an event', icon: '📅', delay: 1.2 }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: feature.delay, duration: 0.5 }}
                        >
                            <GlassCard data-testid={`feature-card-${index}`}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>
                                        {feature.icon}
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: '1.5rem',
                                            marginBottom: '10px',
                                            color: '#fff'
                                        }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p style={{ color: '#a1a1aa', fontSize: '1rem' }}>
                                        {feature.desc}
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
