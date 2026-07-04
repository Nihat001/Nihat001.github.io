import { profile } from '../data/portfolio.js';
import profilePhoto from '../assets/profile.png';

function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-content">
        <p className="eyebrow">{profile.location}</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
            View GitHub
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <img src={profilePhoto} alt="Nihat Masimli" />
        <aside className="hero-panel" aria-label="Development focus">
          <p className="panel-kicker">Available for</p>
          <ul>
            <li>Freelance web app fixes</li>
            <li>React and FastAPI features</li>
            <li>API and database support</li>
            <li>Junior and internship roles</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
