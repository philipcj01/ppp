import { Brain, Users, Target, Award } from 'lucide-react';
import '../App.css';

function OmOs() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Om Phinova Pension Solutions</h1>
        <p>Din partner inden for intelligente automatiseringsløsninger til pensionsbranchen</p>
      </div>

      <div className="page-content">
        <section className="about-section">
          <div className="about-row">
            <div className="about-card">
              <Brain size={48} className="about-icon" />
              <h3>Vores mission</h3>
              <p>
                Vi skaber enestående kundeoplevelser gennem intelligent automatisering af 
                pensionsprocesser. Vores mission er at levere stabile AI-løsninger 
                der transformerer komplekse pensionsworkflows til effektive, præcise og 
                brugervenlige automatiserede systemer, som sætter kundens behov i centrum.
              </p>
            </div>

            <div className="about-card">
              <Users size={48} className="about-icon" />
              <h3>Vores team</h3>
              <p>
                Phinova er grundlagt af erfarne teknologi- og pensionseksperter. 
                Vi kombinerer dyb forståelse af det danske pensionssystem med cutting-edge 
                AI-teknologi for at udvikle og sælge innovative automatiseringsløsninger 
                til pensionsbranchen.
              </p>
            </div>
          </div>

          <div className="about-row">
            <div className="about-card">
              <Target size={48} className="about-icon" />
              <h3>Vores vision</h3>
              <p>
                At blive Danmarks førende leverandør af AI-drevne automatiseringsløsninger 
                til pensionsbranchen, hvor alle pensionsudbydere har adgang til intelligente 
                systemer der forbedrer effektiviteten og skaber bedre kundeoplevelser.
              </p>
            </div>

            <div className="about-card">
              <Award size={48} className="about-icon" />
              <h3>Vores værdier</h3>
              <p>
                Innovation, sikkerhed og pålidelig leverance er kernen i alt, hvad vi gør. 
                Vi prioriterer dataprivatliv og overholder alle GDPR-krav, mens vi leverer 
                automatiseringsløsninger der sætter nye standarder for pensionsbranchen.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OmOs;