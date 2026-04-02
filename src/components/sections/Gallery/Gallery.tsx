import React, { useState, useCallback, useEffect, useMemo, memo } from 'react';
import styles from './Gallery.module.css';

const cerchasModules = import.meta.glob<{ default: string }>(
  '../../../assets/cerchas/*.{jpg,jpeg,png,webp}',
  { eager: true }
);
const cerramientosModules = import.meta.glob<{ default: string }>(
  '../../../assets/cerramientos/*.{jpg,jpeg,png,webp}',
  { eager: true }
);
const cortinasModules = import.meta.glob<{ default: string }>(
  '../../../assets/cortinas/*.{jpg,jpeg,png,webp}',
  { eager: true }
);
const cubiertasModules = import.meta.glob<{ default: string }>(
  '../../../assets/cubiertas/*.{jpg,jpeg,png,webp}',
  { eager: true }
);
const escalerasModules = import.meta.glob<{ default: string }>(
  '../../../assets/escaleras/*.{jpg,jpeg,png,webp}',
  { eager: true }
);
const estructurasModules = import.meta.glob<{ default: string }>(
  '../../../assets/estructuras/*.{jpg,jpeg,png,webp}',
  { eager: true }
);
const metalMaderaModules = import.meta.glob<{ default: string }>(
  '../../../assets/metalmadera/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

const toUrls = (modules: Record<string, { default: string }>) =>
  Object.values(modules).map(m => m.default);

const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'cerchas', label: 'Cerchas' },
  { id: 'cerramientos', label: 'Cerramientos' },
  { id: 'cortinas', label: 'Cortinas Enrollables' },
  { id: 'cubiertas', label: 'Cubiertas Metálicas' },
  { id: 'escaleras', label: 'Escaleras Metálicas' },
  { id: 'estructuras', label: 'Estructuras' },
  { id: 'metalmadera', label: 'Metal-Madera' },
] as const;

type CategoryId = (typeof CATEGORIES)[number]['id'];

const IMAGE_MAP: Record<Exclude<CategoryId, 'all'>, string[]> = {
  cerchas: toUrls(cerchasModules),
  cerramientos: toUrls(cerramientosModules),
  cortinas: toUrls(cortinasModules),
  cubiertas: toUrls(cubiertasModules),
  escaleras: toUrls(escalerasModules),
  estructuras: toUrls(estructurasModules),
  metalmadera: toUrls(metalMaderaModules),
};

const PAGE_SIZE = 12;

// ─── GalleryItem ─────────────────────────────────────────────────────────────
// Memoizado: solo re-renderiza si cambia src u onClick
interface GalleryItemProps {
  src: string;
  index: number;
  onClick: (index: number) => void;
}

const GalleryItem = memo(function GalleryItem({ src, index, onClick }: GalleryItemProps) {
  return (
    <button
      className={styles.item}
      onClick={() => onClick(index)}
      aria-label={`Ver imagen ${index + 1}`}
    >
      <img
        src={src}
        alt={`Proyecto ${index + 1}`}
        loading="lazy"
        decoding="async"
        className={styles.img}
      />
      <div className={styles.itemOverlay}>
        <span className={styles.zoomIcon}>⊕</span>
      </div>
    </button>
  );
});

// ─── Lightbox ─────────────────────────────────────────────────────────────────
// Gestiona su propio índice para que navegar NO re-renderice el grid
interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox = memo(function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  const goPrev = useCallback(() =>
    setIndex(i => (i - 1 + images.length) % images.length), [images.length]);

  const goNext = useCallback(() =>
    setIndex(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, goPrev, goNext]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <button className={styles.lbClose} onClick={onClose} aria-label="Cerrar">✕</button>
      <button
        className={`${styles.lbNav} ${styles.lbPrev}`}
        onClick={e => { e.stopPropagation(); goPrev(); }}
        aria-label="Anterior"
      >‹</button>
      <img
        src={images[index]}
        alt={`Imagen ${index + 1}`}
        className={styles.lbImg}
        onClick={e => e.stopPropagation()}
      />
      <button
        className={`${styles.lbNav} ${styles.lbNext}`}
        onClick={e => { e.stopPropagation(); goNext(); }}
        aria-label="Siguiente"
      >›</button>
      <span className={styles.lbCounter}>{index + 1} / {images.length}</span>
    </div>
  );
});

// ─── Gallery ──────────────────────────────────────────────────────────────────
interface LightboxState {
  images: string[];
  initialIndex: number;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const allFiltered = useMemo(() => {
    if (activeCategory === 'all') return Object.values(IMAGE_MAP).flat();
    return IMAGE_MAP[activeCategory];
  }, [activeCategory]);

  const visibleImages = useMemo(
    () => allFiltered.slice(0, visibleCount),
    [allFiltered, visibleCount]
  );

  const handleCategoryChange = useCallback((id: CategoryId) => {
    setActiveCategory(id);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const loadMore = useCallback(() => setVisibleCount(prev => prev + PAGE_SIZE), []);

  // openLightbox pasa la lista completa al Lightbox, no la paginada
  const openLightbox = useCallback(
    (index: number) => setLightbox({ images: allFiltered, initialIndex: index }),
    [allFiltered]
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const hasMore = visibleCount < allFiltered.length;

  return (
    <section id="galeria" className={`section ${styles.gallery}`}>
      <div className="container">
        <p className={styles.eyebrow}>Proyectos Realizados</p>
        <h2 className="section-title">
          Gale<span>ría</span>
        </h2>
        <div className="section-divider" />

        <div className={styles.filtersWrapper}>
          <div className={styles.filters}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {visibleImages.map((src, i) => (
            <GalleryItem key={src} src={src} index={i} onClick={openLightbox} />
          ))}
        </div>

        {hasMore && (
          <div className={styles.loadMoreWrapper}>
            <button className={styles.loadMoreBtn} onClick={loadMore}>
              Ver más ({allFiltered.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.initialIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
};

export default Gallery;
