import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logoText}>Metálicas</span>
          <span className={styles.logoAccent}> GERCS</span>
          <p className={styles.tagline}>Soldadura y Fabricación</p>
          <p className={styles.motto}>La solución perfecta para sus necesidades metálicas</p>
        </div>

        <div className={styles.links}>
          <h4 className={styles.linksTitle}>Navegación</h4>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#equipo">Equipo</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className={styles.contact}>
          <h4 className={styles.linksTitle}>Contacto</h4>
          <a href="tel:+573102265016">+57 310 2265016</a>
          <a href="mailto:metalicasgercs.sas@gmail.com">metalicasgercs.sas@gmail.com</a>
          <p>Calle 57 G sur No. 80 J – 40</p>
          <p>Barrio ClassRoma, Bogotá</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Metálicas GERCS. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
