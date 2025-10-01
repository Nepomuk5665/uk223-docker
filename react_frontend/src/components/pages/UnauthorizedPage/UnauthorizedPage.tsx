import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UnauthorizedPage.css';

const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate();
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setEyePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const excuses = [
    "🚫 You shall not pass!",
    "🔒 This page is having a private party, and you're not on the list",
    "🕵️ Nice try, but we saw you coming",
    "🎭 This isn't the page you're looking for *waves hand*",
    "🍪 No cookie, no entry. That's the rule.",
    "🔑 You need the secret handshake first",
    "👮 STOP! You've violated the law!",
    "🎪 The circus is closed. Come back never.",
    "🏰 The princess is in another castle",
    "🎮 Error 403: Achievement Locked"
  ];

  const [excuse] = useState(excuses[Math.floor(Math.random() * excuses.length)]);

  return (
    <div className="unauthorized-container">
      <div className="guard-container">
        <div className="guard-face">
          <div className="guard-eyes">
            <div
              className="eye left-eye"
              style={{ transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)` }}
            >
              <div className="pupil"></div>
            </div>
            <div
              className="eye right-eye"
              style={{ transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)` }}
            >
              <div className="pupil"></div>
            </div>
          </div>
          <div className="guard-mouth"></div>
        </div>
        <div className="guard-arms">
          <div className="arm left-arm">✋</div>
          <div className="arm right-arm">✋</div>
        </div>
      </div>

      <h1 className="error-code rainbow">403</h1>
      <h2 className="error-title">{excuse}</h2>

      <div className="message-box">
        <p className="typing-text">
          Our security guard Bob is watching you... 👀
        </p>
        <p className="small-text">
          (He takes his job VERY seriously)
        </p>
      </div>

      <div className="button-container">
        <button className="fun-btn back-btn" onClick={() => navigate(-1)}>
          🏃 Run Away!
        </button>
        <button className="fun-btn home-btn" onClick={() => navigate('/')}>
          🏠 Go Home
        </button>
        <button className="fun-btn retry-btn" onClick={() => window.location.reload()}>
          🎰 Try Again (0% success rate)
        </button>
      </div>

      <div className="floating-emojis">
        <span className="emoji emoji-1">🚫</span>
        <span className="emoji emoji-2">🔐</span>
        <span className="emoji emoji-3">⛔</span>
        <span className="emoji emoji-4">🚷</span>
      </div>
    </div>
  );
};

export default UnauthorizedPage;