import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const location = useLocation();
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const navLinks = [
        { path: '/', label: 'Home', testId: 'navbar-home' },
        { path: '/events', label: 'Events', testId: 'navbar-events' },
        { path: '/admin', label: 'Dashboard', testId: 'navbar-admin' },
        { path: '/profile', label: 'Profile', testId: 'navbar-profile' }
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                background: 'rgba(10, 10, 31, 0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1rem 2rem',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}
            data-testid="navbar"
        >
            <div
                style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '2rem'
                }}
            >
                {/* Logo/Brand */}
                <Link
                    to="/"
                    data-testid="navbar-logo"
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <span>🎉</span>
                    EventHub
                </Link>

                {/* Nav Links */}
                <div
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        alignItems: 'center'
                    }}
                >
                    {navLinks.map((link) => (
                        <div
                            key={link.path}
                            style={{ position: 'relative' }}
                            onMouseEnter={() => setHoveredLink(link.path)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <Link
                                to={link.path}
                                data-testid={link.testId}
                                style={{
                                    color: isActive(link.path) ? '#8b5cf6' : '#fff',
                                    textDecoration: 'none',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    transition: 'color 0.3s ease',
                                    position: 'relative',
                                    padding: '0.5rem 0'
                                }}
                            >
                                {link.label}
                            </Link>

                            {/* Animated Underline */}
                            {(isActive(link.path) || hoveredLink === link.path) && (
                                <motion.div
                                    layoutId="navbar-underline"
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #8b5cf6, #06b6d4, #ec4899)',
                                        borderRadius: '2px'
                                    }}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;