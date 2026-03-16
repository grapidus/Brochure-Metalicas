// ─── Company & Content Types ────────────────────────────────────────────────

export interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  label: string;
}

// ─── Contact Form Types ──────────────────────────────────────────────────────

export type ServiceType =
  | ''
  | 'Estructuras Metálicas'
  | 'Carpintería Metálica'
  | 'Pérgolas'
  | 'Escaleras Metálicas'
  | 'Puertas y Portones'
  | 'Cerramientos'
  | 'Cubiertas Metálicas'
  | 'Mezanines'
  | 'Automatización'
  | 'Otro';

export interface ContactFormData {
  nombre: string;
  telefono: string;
  email: string;
  ciudad: string;
  servicio: ServiceType;
  descripcion: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
