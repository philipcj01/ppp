import React from 'react';
import { 
  Bot, 
  MessageSquare, 
  Workflow, 
  FileCheck, 
  Mail, 
  ArrowRight, 
  CheckCircle2,
  Zap,
  Shield,
  Users
} from 'lucide-react';

const Loesninger: React.FC = () => {
  const solutions = [
    {
      id: 'process-orchestration',
      title: 'End-to-End Process Orkestration',
      subtitle: 'Komplet automatisering af pensionsprocesser',
      description: 'Intelligent procesautomatisering der forbinder alle dele af jeres pensionsworkflow. Vores AI-agenter kan håndtere dynamiske processertilpasninger i realtid.',
      icon: <Workflow size={32} />,
      features: [
        'Automatisk procesidentifikation og -optimering',
        'Dynamiske AI-agenter til komplekse beslutninger',
        'Integration med eksisterende pensionssystemer',
        'Real-time proces monitoring og justering',
        'Compliance og regelefterlevelse indbygget'
      ],
      pricing: 'Fra 25.000 kr/md',
      highlight: true
    },
    {
      id: 'internal-chatbot',
      title: 'Intern Pensionsassistent',
      subtitle: 'AI-chatbot til medarbejdere',
      description: 'Specialiseret AI-assistent der hjælper jeres medarbejdere med pensionsspørgsmål, regelværk og komplekse beregninger.',
      icon: <Bot size={32} />,
      features: [
        'Trænet på dansk pensionslovgivning',
        'Integration til interne systemer og databaser',
        'Sikker håndtering af fortrolige data',
        'Kontinuerlig læring fra interaktioner',
        'Multi-departement support'
      ],
      pricing: 'Fra 15.000 kr/md'
    },
    {
      id: 'two-way-communication',
      title: 'To-vejs AI Kommunikation',
      subtitle: 'Intelligent kunde-dialog system',
      description: 'Avanceret AI-agent der kan føre naturlige samtaler med kunder om deres pension, besvare spørgsmål og indsamle nødvendig information.',
      icon: <MessageSquare size={32} />,
      features: [
        'Naturlig dansk sprogforståelse',
        'Kontekstuel samtalehukommelse',
        'Automatisk escalering til mennesker',
        'Personaliseret kommunikation',
        'Multi-kanal support (chat, telefon, email)'
      ],
      pricing: 'Fra 20.000 kr/md'
    },
    /*{
      id: 'claims-decisions',
      title: 'AI Skadesbehandling',
      subtitle: 'Automatiske erstatningsbeslutninger',
      description: 'Intelligent beslutningssystem der kan analysere og behandle pensionsskader og erstatningskrav automatisk med høj præcision.',
      icon: <FileCheck size={32} />,
      features: [
        'Automatisk dokumentanalyse og validering',
        'Risikovurdering og frauddetection',
        'Regelbaserede og AI-drevne beslutninger',
        'Transparente beslutningsprocesser',
        'Audit-trail og compliance rapportering'
      ],
      pricing: 'Fra 30.000 kr/md'
    },*/
    {
      id: 'email-responses',
      title: 'AI Email Assistent',
      subtitle: 'Automatiske email-svar',
      description: 'Intelligent email-håndteringssystem der kan læse, forstå og besvare kundehenvendelser automatisk med passende tone og indhold.',
      icon: <Mail size={32} />,
      features: [
        'Automatisk klassificering af henvendelser',
        'Kontekstuelle og personlige svar',
        'Integration med kundesystemer',
        'Kvalitetssikring og human-in-the-loop',
        'Sentiment-analyse og tilpasning af tone'
      ],
      pricing: 'Fra 18.000 kr/md'
    }
  ];

  const benefits = [
    {
      icon: <Zap size={24} />,
      title: 'Hurtig implementering',
      description: 'Løsninger der oftest kan implementeres på få uger'
    },
    {
      icon: <Shield size={24} />,
      title: 'Høj sikkerhed',
      description: 'GDPR-compliant med avanceret datasikkerhed og kryptering'
    },
    {
      icon: <Users size={24} />,
      title: 'Support',
      description: 'Dedikeret support team med dyb pensionsbranche-viden'
    }
  ];

  return (
    <div className="loesninger-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>AI-Automatiseringsløsninger til Pensionsbranchen</h1>
          <p className="hero-subtitle">
            Phinova leverer avancerede AI-automatiseringssystemer der transformerer 
            pensionsprocesser. Vores løsninger skaber fremragende kundeoplevelser gennem 
            intelligent automatisering af komplekse workflows og processer.
          </p>
        </div>
      </div>

      <div className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="solutions-section">
        <div className="container">
          <div className="section-header">
            <h2>Vores Automatiseringsløsninger</h2>
            <p>Vælg de AI-systemer der passer til jeres automatiseringsbehov</p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <div key={solution.id} className={`solution-card ${solution.highlight ? 'highlighted' : ''}`}>
                {solution.highlight && (
                  <div className="popular-badge">Mest Populære</div>
                )}
                
                <div className="solution-content">
                  <div className="solution-header">
                    <div className="solution-icon">{solution.icon}</div>
                    <div className="solution-title-group">
                      <h3>{solution.title}</h3>
                      <p className="solution-subtitle">{solution.subtitle}</p>
                    </div>
                  </div>

                  <p className="solution-description">{solution.description}</p>

                  <div className="solution-features">
                    <h4>Inkluderet:</h4>
                    <ul>
                      {solution.features.map((feature, index) => (
                        <li key={index}>
                          <CheckCircle2 size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="solution-footer">
                  <div className="solution-pricing">
                    <span className="price">{solution.pricing}</span>
                  </div>
                  <button className="cta-button">
                    Læs Mere <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Klar til at automatisere jeres pensionsprocesser?</h2>
            <p>
              Kontakt Phinova for en uforpligtende demo og se hvordan vores 
              AI-automatiseringsløsninger kan optimere jeres workflows og levere 
              exceptionelle kundeoplevelser gennem intelligent automatisering.
            </p>
            <div className="cta-buttons">
              <button className="primary-cta">Book demo</button>
              <button className="secondary-cta">Kontakt salg</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loesninger;