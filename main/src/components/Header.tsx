import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Shield, Zap, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';

const Header: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <header className="platform-header">
        <div className="header-container">
          <div className="logo-section">
            <Link to="/" className="logo-link">
              <Brain className="logo-icon" />
              <div className="logo-text">
                <h1>Phinova</h1>
              </div>
            </Link>
          </div>
          
          <nav className="navigation">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Start
            </Link>
            {isAuthenticated && (
              <Link 
                to="/sandboks" 
                className={`nav-link ${location.pathname === '/sandboks' ? 'active' : ''}`}
              >
                Sandboks
              </Link>
            )}
            <Link 
              to="/loesninger" 
              className={`nav-link ${location.pathname === '/loesninger' ? 'active' : ''}`}
            >
              Løsninger
            </Link>
            <Link 
              to="/om-os" 
              className={`nav-link ${location.pathname === '/om-os' ? 'active' : ''}`}
            >
              Om os
            </Link>
            <Link 
              to="/kontakt" 
              className={`nav-link ${location.pathname === '/kontakt' ? 'active' : ''}`}
            >
              Kontakt
            </Link>
          </nav>

          <div className="header-right">
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

            <div className="auth-section">
              {isAuthenticated ? (
                <div className="user-menu">
                  <div className="user-info">
                    <User size={16} />
                    <span>{user?.name}</span>
                  </div>
                  <button 
                    className="logout-button"
                    onClick={handleLogout}
                    title="Log ud"
                  >
                    <LogOut size={16} />
                  </button>
                </div>
              ) : (
                <button 
                  className="login-button"
                  onClick={() => setShowLoginModal(true)}
                >
                  <LogIn size={16} />
                  <span>Log ind</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
};

export default Header;