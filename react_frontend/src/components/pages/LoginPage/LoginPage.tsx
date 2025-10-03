import React, { useContext, useState } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ActiveUserContext from '../../../Contexts/ActiveUserContext';
import AuthorityService from "../../../Services/AuthorityService";
import Authorities from "../../../config/Authorities";
import GlassCard from '../../atoms/GlassCard';
import AnimatedButton from '../../atoms/AnimatedButton';
import ParticleBackground from '../../atoms/ParticleBackground';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(ActiveUserContext);
  const [error, setError] = useState<string>('');

  const handleSubmit = (values: { email: string; password: string }) => {
    setError('');
    login(values.email.toLowerCase(), values.password)
      .then(() => {
        console.log(values);
        AuthorityService.initAuthoritySet();

        if (AuthorityService.hasAnyAuthority([Authorities.SEE_DASHBOARD])) {
            navigate('/admin');
        } else {
            navigate('/events');
        }
      })
      .catch((err) => {
        if (
          (typeof err.response !== 'undefined' &&
            err.response.status === 401) ||
          err.response?.status === 403
        ) {
          setError('Invalid email or password');
        } else {
          setError('Login error. Please try again.');
        }
      });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <ParticleBackground />

      {/* Animated Monkey Background */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          opacity: 0.1,
          zIndex: 0
        }}
      >
        <img
          src="/monkey.jpg"
          alt="background decoration"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            filter: 'blur(3px)'
          }}
        />
      </motion.div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '20px',
          position: 'relative',
          zIndex: 1
        }}
        data-testid="login-page"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', maxWidth: '450px' }}
        >
          <GlassCard data-testid="login-card">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <motion.h1
                className="text-gradient"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  marginBottom: '10px'
                }}
              >
                Welcome Back
              </motion.h1>
              <p style={{ color: '#a1a1aa', fontSize: '1rem' }}>
                Sign in to manage your events
              </p>
            </div>

            {/* Demo Credentials Info */}
            <div
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '24px',
                fontSize: '0.875rem',
                color: '#a1a1aa'
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '6px', color: '#8b5cf6' }}>
                Demo Credentials:
              </div>
              <div>Admin: admin@example.com / 1234</div>
              <div>User: user@example.com / 1234</div>
            </div>

            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              enableReinitialize
              onSubmit={handleSubmit}
              validateOnChange
              isInitialValid
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: '#fff',
                        fontSize: '0.875rem',
                        fontWeight: 500
                      }}
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='Enter your email'
                      required
                      autoFocus
                      onChange={props.handleChange}
                      value={props.values.email}
                      data-testid="login-email-input"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '1px solid #8b5cf6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                        e.target.style.boxShadow = 'none';
                        props.handleBlur(e);
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label
                      htmlFor="password"
                      style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: '#fff',
                        fontSize: '0.875rem',
                        fontWeight: 500
                      }}
                    >
                      Password
                    </label>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      placeholder='Enter your password'
                      required
                      onChange={props.handleChange}
                      value={props.values.password}
                      data-testid="login-password-input"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '1px solid #8b5cf6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                        e.target.style.boxShadow = 'none';
                        props.handleBlur(e);
                      }}
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      data-testid="login-error-message"
                      style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '8px',
                        padding: '12px',
                        marginBottom: '20px',
                        color: '#ef4444',
                        fontSize: '0.875rem'
                      }}
                    >
                      {error}
                    </motion.div>
                  )}

                  <AnimatedButton
                    type='submit'
                    fullWidth
                    data-testid="login-submit-button"
                  >
                    Sign In
                  </AnimatedButton>
                </Form>
              )}
            </Formik>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
