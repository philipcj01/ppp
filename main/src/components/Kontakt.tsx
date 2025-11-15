import { Mail, Phone, MapPin, Clock, Check } from 'lucide-react';
import { useState } from 'react';
import '../App.css';

function Kontakt() {
  const [emailValue, setEmailValue] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailValue(value);
    setIsEmailValid(validateEmail(value));
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Kontakt Phinova</h1>
        <p>Vi er her for at hjælpe jer med spørgsmål om vores AI-automatiseringsløsninger til pensionsbranchen</p>
      </div>

      <div className="page-content">
        <section className="contact-section">
          <div className="contact-info">
            <a href="mailto:kontakt@phinova.dk" className="contact-card contact-email-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Mail size={32} className="contact-icon" />
              <h3>E-mail</h3>
              <span>kontakt@phinova.dk</span>
              <p className="contact-detail">Vi svarer typisk inden for 24 timer</p>
            </a>

            <div className="contact-card">
              <Phone size={32} className="contact-icon" />
              <h3>Telefon</h3>
              <p>+45 29 17 29 90</p>
              <p className="contact-detail">Mandag - Fredag: 9:00 - 17:00</p>
            </div>

            <div className="contact-card">
              <MapPin size={32} className="contact-icon" />
              <h3>Adresse</h3>
              <p>Phinova Pension Solutions ApS<br />
              Upsalagade 24<br />
              2100 København Ø</p>
            </div>

            <div className="contact-card">
              <Clock size={32} className="contact-icon" />
              <h3>Åbningstider</h3>
              <p>Mandag - Fredag: 9:00 - 17:00<br />
              Weekend: Lukket</p>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Kontakt vores team</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Navn</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <div className="input-with-validation">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={emailValue}
                    onChange={handleEmailChange}
                    required 
                  />
                  {isEmailValid && emailValue && (
                    <Check size={20} className="validation-checkmark" />
                  )}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Emne</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Besked</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send besked
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Kontakt;