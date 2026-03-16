import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Misión & Visión', href: '#mision' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.logo}>
          <span className={styles.logoText}>Metálicas</span>
          <span className={styles.logoAccent}> GERCS</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto" className={styles.navCta} onClick={handleNavClick}>
            Cotizar
          </a>
        </nav>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
