import Header from './components/Header';
import LetterInterpreter from './components/LetterInterpreter';
import { Brain, Shield, Lock } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h2>PPP - Plug & Play Pensionsløsninger</h2>
            <p>
              Gør komplekse pensionsbreve forståelige med vores intelligente AI-agenter. 
              Start med vores brevfortolker for at få klar og præcis forklaring af dit pensionsbrev.
            </p>
          </div>
        </section>

        <section className="solutions-section" id="solutions">
          <div className="solutions-container">
            <h3>Tilgængelige AI Løsninger</h3>
            <div className="solutions-grid">
              <div className="solution-card active">
                <LetterInterpreter />
              </div>
              
              <div className="solution-card coming-soon">
                <div className="coming-soon-content">
                  <h4>Pensionsberegner AI</h4>
                  <p>Kommer snart - Beregn dine fremtidige pensionsudbetalinger med AI</p>
                </div>
              </div>
              
              <div className="solution-card coming-soon">
                <div className="coming-soon-content">
                  <h4>Investeringsrådgiver AI</h4>
                  <p>Kommer snart - Få personlig investeringsrådgivning baseret på din pensionsprofil</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="platform-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <Brain className="footer-logo-icon" />
                <div className="footer-logo-text">
                  <h3>PPP</h3>
                  <span>Plug & Play Pension</span>
                </div>
              </div>
              <p className="footer-description">
                Intelligent AI-løsninger til den danske pensionssektor. 
                Gør komplekse pensionsbreve forståelige med vores avancerede teknologi.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>AI Løsninger</h4>
                <ul>
                  <li><a href="#letter-interpreter">Pensionsbrev Fortolker</a></li>
                  <li><span className="coming-soon-link">Pensionsberegner AI</span></li>
                  <li><span className="coming-soon-link">Investeringsrådgiver AI</span></li>
                  <li><span className="coming-soon-link">Dokument Sammenligner</span></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Support</h4>
                <ul>
                  <li><a href="#help">Hjælp & Vejledning</a></li>
                  <li><a href="#faq">Ofte Stillede Spørgsmål</a></li>
                  <li><a href="#contact">Kontakt Support</a></li>
                  <li><a href="#documentation">Dokumentation</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Virksomhed</h4>
                <ul>
                  <li><a href="#about">Om PPP</a></li>
                  <li><a href="#privacy">Privatlivspolitik</a></li>
                  <li><a href="#terms">Vilkår & Betingelser</a></li>
                  <li><a href="#security">Sikkerhed & GDPR</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>&copy; 2025 PPP (Plug & Play Pension). Alle rettigheder forbeholdes.</p>
              <p className="footer-tech">Bygget med AWS Bedrock AI teknologi</p>
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
  );
}

export default App;
