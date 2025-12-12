import React from "react";
import { currentSkills, futureSkills } from "../data/skills";
import SkillBadge from "../components/SkillBadge";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container" id="home">
      <h2>Chi sono</h2>

      <p className="bio-intro">
        Trasformo dati complessi in dashboard intuitive.
        <br />
        <span className="text-blue">
          Sviluppatore Frontend focalizzato su performance e pulizia del codice.
        </span>
      </p>
      <div className="bio-grid">
        <div className="bio-card">
          <div className="card-icon">⚡</div>
          <h3>Il mio Focus attuale</h3>
          <p>
            Sviluppo componenti <strong>UI</strong> per piattaforme Smart City.
            Sono responsabile della <strong>funzionalitá</strong> e dell'
            <strong>estetica</strong>
          </p>
          <div className="tech-stack">
            {currentSkills.map((text, index) => (
              <SkillBadge key={index} text={text} />
            ))}
          </div>
        </div>
        <div className="bio-card">
          <div className="card-icon">🚀</div>
          <h3>Prossimo Step</h3>
          <p>
            Voglio specializzarmi in architetture
            <strong>Frontend</strong> scalabili utilizzando
            <strong>framework</strong> moderni.
          </p>
          <div className="tech-stack">
            {futureSkills.map((text, index) => (
              <SkillBadge key={index} text={text} />
            ))}
          </div>
        </div>
      </div>
      <NavLink to="/contatti">
        <button
          onclick="location.href='#contatti'"
          type="button"
          className="submit-btn"
        >
          Parliamone!
        </button>
      </NavLink>
    </div>
  );
};

export default Home;
