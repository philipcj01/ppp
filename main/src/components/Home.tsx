import React, { useEffect, useState } from "react";
import {
  Brain,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Clock,
  ArrowRight,
  Sparkles,
  BarChart3,
  Bot,
} from "lucide-react";
import "../App.css";

function Home() {
  const [animatedStats, setAnimatedStats] = useState({
    apiResponseTime: 0,
    languageModels: "0",
    dataFormats: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate stats on component mount - defer setState to avoid synchronous update
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    const animateStats = () => {
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setAnimatedStats({
          apiResponseTime: Math.floor(progress * 2.5 * 10) / 10, // 2.5 seconds
          languageModels:
            progress >= 1 ? "∞" : Math.floor(progress * 15).toString(),
          dataFormats: Math.floor(progress * 8),
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const statsTimer = setTimeout(animateStats, 500);
    return () => {
      clearTimeout(timer);
      clearTimeout(statsTimer);
    };
  }, []);

  const features = [
    {
      icon: <Brain className="feature-icon" />,
      title: "Intelligent",
      description:
        "AI-drevet analyse der forstår komplekse pensionsoplysninger",
      color: "blue",
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Sikker ",
      description: "GDPR-kompatibel sikkerhed for følsomme pensionsdata",
      color: "green",
    },
    {
      icon: <Zap className="feature-icon" />,
      title: "Lynhurtig behandling",
      description: "Reducer sagsbehandlingstid fra timer til minutter",
      color: "yellow",
    },
    {
      icon: <TrendingUp className="feature-icon" />,
      title: "Kontinuerlig forbedring",
      description: "Agenter der bliver bedre med hver behandlet sag",
      color: "purple",
    },
  ];

  return (
    <main className="main-content">
      {/* Animated Hero Section */}
      <section className="hero-section enhanced">
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Ny AI-teknologi</span>
          </div>

          <h1 className="hero-title">
            Din pensionspartner
            <span className="gradient-text"> Phinova</span>
          </h1>

          <p className="hero-description">
            Transformer jeres pensionsprocesser med vores intelligente
            automatiseringsløsninger. Vi leverer avancerede AI-systemer der
            skaber enestående kundeoplevelser gennem avanceret automatisering af
            komplekse pensionsprocesser.
          </p>

          <div className="hero-actions">
            <button className="cta-button primary">
              <span>Kom i gang</span>
              <ArrowRight size={16} />
            </button>
            <button className="cta-button secondary">
              <span>Se demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Technology Specifications */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">
                {animatedStats.apiResponseTime}s
              </div>
              <div className="stat-label">
                <Zap size={20} />
                <span>Gennemsnitlig responstid</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{animatedStats.languageModels}</div>
              <div className="stat-label">
                <Brain size={20} />
                <span>AI-modeller tilgængelige</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{animatedStats.dataFormats}+</div>
              <div className="stat-label">
                <BarChart3 size={20} />
                <span>Understøttede filformater</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Hvorfor vælge Phinova?</h2>
            <p>
              Avancerede AI-løsninger designet specifikt til den danske
              pensionsbranche
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${feature.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-header">
                  {feature.icon}
                  <h3>{feature.title}</h3>
                </div>
                <p>{feature.description}</p>
                <div className="feature-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="demo-section">
        <div className="container">
          <div className="demo-content">
            <div className="demo-text">
              <h2>Se Phinova i aktion</h2>
              <p>
                Oplev hvordan vores AI-platform kan revolutionere jeres
                pensionsprocesser med intelligent dokumentanalyse og
                automatiseret sagsbehandling.
              </p>
              <button className="demo-button">
                <span>Book en demo</span>
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="demo-visual">
              <div className="demo-screen">
                <div className="screen-header">
                  <div className="screen-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="screen-content">
                  <div className="processing-animation">
                    <div className="process-step active">
                      <div className="step-icon">📄</div>
                      <span>Dokument modtaget</span>
                    </div>
                    <div className="process-step active">
                      <div className="step-icon">🤖</div>
                      <span>AI analyserer</span>
                    </div>
                    <div className="process-step processing">
                      <div className="step-icon">⚡</div>
                      <span>Behandler data</span>
                    </div>
                    <div className="process-step">
                      <div className="step-icon">✅</div>
                      <span>Færdig behandlet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
