import React from 'react';
import Button from '../../UI/Button/Button';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <p className={styles.subtitle}>Soldadura y Fabricación</p>
        <h1 className={styles.title}>
          Metálicas <span>GERCS</span>
        </h1>
        <p className={styles.tagline}>
          La solución perfecta para sus necesidades metálicas
        </p>
        <div className={styles.actions}>
          <Button size="lg" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
            Solicitar Cotización
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Servicios
          </Button>
        </div>

        <div className={styles.infoBar}>
          <a href="tel:+573102265016" className={styles.infoItem}>
            <span className={styles.infoIcon}>📞</span>
            <span>+57 310 2265016</span>
          </a>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>📍</span>
            <span>Calle 57 G sur No. 80 J – 40, Barrio ClassRoma</span>
          </div>
          <a href="mailto:metalicasgercs.sas@gmail.com" className={styles.infoItem}>
            <span className={styles.infoIcon}>✉️</span>
            <span>metalicasgercs.sas@gmail.com</span>
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span />
      </div>
    </section>
  );
};

export default Hero;
