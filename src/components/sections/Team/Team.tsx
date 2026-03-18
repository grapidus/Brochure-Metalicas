import React from 'react';
import type { TeamMember } from '../../../types';
import styles from './Team.module.css';

const TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Andres Ardila',
    role: 'Soldador / Ornamentador',
    description:
      'Más de 10 años de experiencia en el sector metalmecánico. Certificado en procesos de soldadura con competencias en trabajos en caliente y en altura. Amplia experiencia en fabricación, modificación, montaje e instalación de estructuras metálicas.'
  },
  {
    id: 2,
    name: 'Nicolás García',
    role: 'Ingeniero Civil',
    description:
      'Sólida formación académica y experiencia práctica en el análisis y supervisión de estructuras metálicas para proyectos industriales, comerciales y de infraestructura. Manejo de normativas AISC, NSR-10 y software SAP2000, ETABS, AutoCAD y Revit.'
  }
];

const Team: React.FC = () => {
  return (
    <section id="equipo" className={`section ${styles.team}`}>
      <div className="container">
        <p className={styles.eyebrow}>Las personas detrás del trabajo</p>
        <h2 className="section-title">
          Nuestro <span>Equipo</span>
        </h2>
        <div className="section-divider" />

        <div className={styles.grid}>
          {TEAM.map((member) => (
            <div key={member.id} className={styles.card}>
              <div className={styles.avatar}>{member.name.charAt(0)}</div>
              <h3 className={styles.name}>{member.name}</h3>
              <span className={styles.role}>{member.role}</span>
              <p className={styles.description}>{member.description}</p>
            </div>
          ))}
        </div>

        <p className={styles.teamNote}>
          Disponemos de un equipo gerencial y administrativo altamente
          calificado, respaldado por personal especializado de apoyo técnico y
          profesionales en seguridad y salud en el trabajo, garantizando gestión
          eficiente y cumplimiento de estándares normativos.
        </p>
      </div>
    </section>
  );
};

export default Team;
