import React from 'react';
import styles from './MissionVision.module.css';

const MissionVision: React.FC = () => {
  return (
    <section id="mision" className={`section ${styles.mv}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Misión */}
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <span className={styles.icon}>🎯</span>
            </div>
            <h2 className={styles.title}>
              Nuestra <span>Misión</span>
            </h2>
            <div className={styles.divider} />
            <p className={styles.body}>
              Ofrecemos soluciones integrales en carpintería y estructuras metálicas,
              abarcando todo el proceso:{' '}
              <strong>desde la fabricación y el suministro, hasta la instalación final.</strong>
            </p>
            <p className={styles.body}>
              Nos comprometemos a entregar productos de alta calidad, respaldados por un
              enfoque centrado en la{' '}
              <strong>innovación, la seguridad y la sostenibilidad</strong>, con el objetivo
              de superar las expectativas de nuestros clientes y asegurar su plena satisfacción.
            </p>
          </div>

          {/* Visión */}
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <span className={styles.icon}>🔭</span>
            </div>
            <h2 className={styles.title}>
              Nuestra <span>Visión</span>
            </h2>
            <div className={styles.divider} />
            <p className={styles.body}>
              Convertirnos en un referente en el sector de metalmecánica, reconocidos por
              nuestra <strong>calidad y confiabilidad</strong> en el suministro e instalación
              de carpintería y estructura metálica.
            </p>
            <p className={styles.body}>
              Lograr expandir nuestra presencia en el mercado, liderando el camino hacia un{' '}
              <strong>futuro más sostenible y colaborativo</strong> en la industria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
