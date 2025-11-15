import React from 'react';
import { Brain, Shield, Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="platform-header">
      <div className="header-container">
        <div className="logo-section">
          <Brain className="logo-icon" />
          <div className="logo-text">
            <h1>PPP</h1>
            <span>Plug & Play Pension</span>
          </div>
        </div>
        
        <nav className="navigation">
          <a href="#solutions" className="nav-link active">
            AI Løsninger
          </a>
          <a href="#about" className="nav-link">
            Om Os
          </a>
          <a href="#contact" className="nav-link">
            Kontakt
          </a>
        </nav>

        <div className="header-features">
          <div className="feature-badge">
            <Shield size={16} />
            <span>Sikker</span>
          </div>
          <div className="feature-badge">
            <Zap size={16} />
            <span>Hurtig</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;