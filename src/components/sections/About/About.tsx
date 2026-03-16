import React from 'react';
import styles from './About.module.css';

const STATS = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '100+', label: 'Proyectos completados' },
  { value: '3', label: 'Servicios especializados' },
  { value: '100%', label: 'Compromiso de calidad' },
];

const About: React.FC = () => {
  return (
    <section id="nosotros" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.textBlock}>
            <p className={styles.eyebrow}>Quiénes Somos</p>
            <h2 className="section-title">
              Metálicas <span>GERCS</span>
            </h2>
            <div className="section-divider" />
            <p className={styles.body}>
              Fue fundada por un emprendedor con el firme propósito de incursionar en el mundo
              de la carpintería y las estructuras metálicas, impulsado por el deseo de crear
              soluciones innovadoras y de alta calidad.
            </p>
            <p className={styles.body}>
              Desde sus inicios, la empresa se ha caracterizado por la combinación de
              habilidades técnicas y creativas, lo que ha permitido el desarrollo de productos
              funcionales, resistentes y con un diseño distintivo.
            </p>
            <p className={styles.body}>
              Con un enfoque centrado en la excelencia, la atención al detalle y la
              satisfacción del cliente, buscamos posicionarnos como un referente en{' '}
              <strong>calidad, creatividad y confiabilidad.</strong>
            </p>
          </div>

          <div className={styles.statsBlock}>
            {STATS.map(stat => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
