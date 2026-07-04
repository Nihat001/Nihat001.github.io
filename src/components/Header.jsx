import { profile } from '../data/portfolio.js';

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
];

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Nihat Masimli home">
        NM
      </a>
      <nav className="nav-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-link" href={profile.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </header>
  );
}

export default Header;
