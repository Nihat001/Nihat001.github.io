import { profile } from '../data/portfolio.js';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-identity">
        <strong>{profile.name}</strong>
        <p>Built with React and Vite.</p>
        <p className="footer-email">
          Professional inquiries:{' '}
          <a href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </p>
      </div>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
