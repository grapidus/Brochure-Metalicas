import React from 'react';
import styles from './Portfolio.module.css';

const PORTFOLIO_ITEMS = [
  'Estructura pesada y liviana',
  'Mezanines',
  'Cerchas',
  'Pérgolas',
  'Escaleras metálicas',
  'Cortinas enrollables',
  'Domos corredizos',
  'Cerramientos en tubo y malla',
  'Automatización',
  'Puertas, Portones y Rejas',
  'Cubiertas metálicas',
  'Metal - Madera',
];

const Portfolio: React.FC = () => {
  return (
    <section id="portafolio" className={`section ${styles.portfolio}`}>
      <div className="container">
        <p className={styles.eyebrow}>Nuestro Trabajo</p>
        <h2 className="section-title">
          Porta<span>folio</span>
        </h2>
        <div className="section-divider" />

        <div className={styles.grid}>
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div key={item} className={styles.item}>
              <span className={styles.itemIndex}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.itemLabel}>{item}</span>
              <span className={styles.itemArrow}>→</span>
            </div>
          ))}
          <div className={`${styles.item} ${styles.itemMore}`}>
            <span className={styles.itemLabel}>Y mucho más...</span>
          </div>
        </div>

        <div className={styles.cta}>
          <p>¿Tienes un proyecto en mente? Cuéntanos sobre él.</p>
          <a href="#contacto" className={styles.ctaButton}>
            Solicitar Cotización →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
