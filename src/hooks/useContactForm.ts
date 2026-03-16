import { useState } from 'react';
import type { ContactFormData, ContactFormErrors, FormStatus } from '../types';
import { validateContactForm, hasErrors } from '../utils/validators';

const INITIAL_FORM: ContactFormData = {
  nombre: '',
  telefono: '',
  email: '',
  ciudad: '',
  servicio: '',
  descripcion: '',
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);

    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    // Build WhatsApp message and redirect
    const message = buildWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/573102265016?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setStatus('success');
    setFormData(INITIAL_FORM);
    setErrors({});
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setStatus('idle');
  };

  return { formData, errors, status, handleChange, handleSubmit, resetForm };
}

function buildWhatsAppMessage(data: ContactFormData): string {
  return (
    `Hola Metálicas GERCS, me interesa cotizar un proyecto.\n\n` +
    `*Nombre:* ${data.nombre}\n` +
    `*Teléfono:* ${data.telefono}\n` +
    `*Correo:* ${data.email}\n` +
    `*Ciudad:* ${data.ciudad}\n` +
    `*Servicio:* ${data.servicio}\n` +
    `*Descripción:* ${data.descripcion}`
  );
}
