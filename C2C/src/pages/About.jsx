import React from 'react';
import { Monitor, Cpu, Database, Layout as LayoutIcon, Layers, Zap } from 'lucide-react';
import './About.css';

function About() {
  const features = [
    { icon: <Monitor />, title: "Explore", desc: "Vast database of films across all genres, eras, and languages at your fingertips." },
    { icon: <Zap />, title: "Rate", desc: "Share your voice and contribute to a global community of cinema lovers." },
    { icon: <Layers />, title: "Track", desc: "Keep a digital diary of every movie you watch and never forget a masterpiece." }
  ];

  const techStack = [
    { icon: <LayoutIcon />, name: "React", desc: "UI Architecture" },
    { icon: <Layers />, name: "React Router", desc: "Dynamic Navigation" },
    { icon: <Database />, name: "OMDb API", desc: "Movie Data Source" }
  ];

  return (
    <div className="about-page">
      <section className="about-hero container">
        <span className="subtitle">ABOUT OUR PLATFORM</span>
        <h1>Discovering the <span>Best Cinema</span></h1>
        <p>Movie Explorer was created for film enthusiasts to discover the best cinema from around the globe. Whether you're looking for timeless classics or the latest blockbusters, we provide the tools to explore, rate, and track your cinematic journey.</p>
      </section>

      <div className="cinema-visual container">
        <div className="visual-wrapper glass">
          <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop" alt="Cinema" />
        </div>
      </div>

      <section className="features container">
        {features.map((f, i) => (
          <div key={i} className="feature-card glass">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="tech-section container">
        <h2>Built With</h2>
        <div className="tech-grid">
          {techStack.map((t, i) => (
            <div key={i} className="tech-item">
              <div className="tech-icon">{t.icon}</div>
              <h4>{t.name}</h4>
              <span>{t.desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
