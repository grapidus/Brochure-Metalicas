import React from 'react';
import type { Service } from '../../../types';
import styles from './Services.module.css';

const SERVICES: Service[] = [
  {
    id: 1,
    number: '01',
    title: 'Estructuras Metálicas',
    description:
      'Creación de elementos fabricados principalmente en acero, diseñados para soportar cargas y servir de base en edificaciones y otras construcciones. Incluye vigas, columnas y cerchas, caracterizadas por su gran resistencia, durabilidad y versatilidad.',
  },
  {
    id: 2,
    number: '02',
    title: 'Carpintería Metálica',
    description:
      'Especialización en la fabricación de estructuras, muebles y otros objetos metálicos. Combinamos técnicas de soldadura, corte y moldeado aplicadas en diversas áreas, desde la construcción hasta el diseño de interiores.',
  },
  {
    id: 3,
    number: '03',
    title: 'Oferta de Valor',
    description:
      'Suministro e instalación de carpintería metálica y estructuras conforme a planimetría y especificaciones técnicas. Nuestro alcance incluye ajustes y reparaciones en soldadura, instalación de cubiertas, canales y cerramientos metálicos.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className={`section ${styles.services}`}>
      <div className="container">
        <p className={styles.eyebrow}>Lo que hacemos</p>
        <h2 className="section-title">
          Nuestros <span>Servicios</span>
        </h2>
        <div className="section-divider" />
        <p className={styles.intro}>
          En Metálicas GERCS ofrecemos una amplia gama de servicios diseñados para
          satisfacer las diversas necesidades de nuestros clientes en el ámbito metálico.
        </p>

        <div className={styles.grid}>
          {SERVICES.map(service => (
            <div key={service.id} className={styles.card}>
              <span className={styles.number}>{service.number}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardBody}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
