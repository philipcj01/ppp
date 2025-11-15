import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Home from './components/Home';
import OmOs from './components/OmOs';
import Kontakt from './components/Kontakt';
import Loesninger from './components/Loesninger';
import Sandboks from './components/Sandboks';
import ProtectedRoute from './components/ProtectedRoute';
import { Brain, Shield, Lock } from 'lucide-react';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/sandboks" 
              element={
                <ProtectedRoute>
                  <Sandboks />
                </ProtectedRoute>
              } 
            />
            <Route path="/om-os" element={<OmOs />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/loesninger" element={<Loesninger />} />
          </Routes>

          <footer className="platform-footer">
            <div className="footer-container">
              <div className="footer-main">
                <div className="footer-brand">
                  <div className="footer-logo">
                    <Brain className="footer-logo-icon" />
                    <div className="footer-logo-text">
                      <h3>Phinova</h3>
                      <span>Pension Solutions</span>
                    </div>
                  </div>
                  <p className="footer-description">
                    Intelligente AI-automatiseringsløsninger til den danske pensionssektor. 
                    Vi leverer avancerede systemer der skaber exceptionelle kundeoplevelser.
                  </p>
                </div>

                <div className="footer-links">
                  <div className="footer-column">
                    <h4>AI-løsninger</h4>
                    <ul>
                      <li><Link to="/loesninger">Alle løsninger</Link></li>
                      <li><Link to="/#solutions">Dokumentfortolker</Link></li>
                      <li><span className="coming-soon-link">Procesorkestration</span></li>
                      <li><span className="coming-soon-link">AI email assistent</span></li>
                    </ul>
                  </div>

                  <div className="footer-column">
                    <h4>Support og salg</h4>
                    <ul>
                      <li><Link to="/kontakt">Kontakt salg</Link></li>
                      <li><a href="#demo">Book demo</a></li>
                      <li><a href="#integration">Teknisk integration</a></li>
                      <li><a href="#documentation">Dokumentation</a></li>
                    </ul>
                  </div>

                  <div className="footer-column">
                    <h4>Virksomhed</h4>
                    <ul>
                      <li><Link to="/om-os">Om Phinova</Link></li>
                      <li><a href="#privacy">Privatlivspolitik</a></li>
                      <li><a href="#terms">Vilkår og betingelser</a></li>
                      <li><a href="#security">Sikkerhed og GDPR</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-bottom">
                <div className="footer-bottom-left">
                  <p>&copy; 2025 Phinova Pension Solutions ApS. Alle rettigheder forbeholdes.</p>
                  <p className="footer-tech">Automatisering · AI-Løsninger · Pensionsteknologi</p>
                </div>
                
                <div className="footer-bottom-right">
                  <div className="footer-badges">
                    <div className="security-badge">
                      <Shield size={16} />
                      <span>GDPR Compliant</span>
                    </div>
                    <div className="security-badge">
                      <Lock size={16} />
                      <span>SSL Sikret</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
