import type { ContactFormData, ContactFormErrors } from '../types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\+\-\(\)]{7,15}$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.nombre.trim()) {
    errors.nombre = 'El nombre es requerido.';
  } else if (data.nombre.trim().length < 3) {
    errors.nombre = 'El nombre debe tener al menos 3 caracteres.';
  }

  if (!data.telefono.trim()) {
    errors.telefono = 'El teléfono es requerido.';
  } else if (!PHONE_REGEX.test(data.telefono.trim())) {
    errors.telefono = 'Ingresa un número de teléfono válido.';
  }

  if (!data.email.trim()) {
    errors.email = 'El correo electrónico es requerido.';
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = 'Ingresa un correo electrónico válido.';
  }

  if (!data.ciudad.trim()) {
    errors.ciudad = 'La ciudad es requerida.';
  }

  if (!data.servicio) {
    errors.servicio = 'Selecciona un tipo de servicio.';
  }

  if (!data.descripcion.trim()) {
    errors.descripcion = 'La descripción del proyecto es requerida.';
  } else if (data.descripcion.trim().length < 20) {
    errors.descripcion = 'Por favor describe tu proyecto con más detalle (mínimo 20 caracteres).';
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
