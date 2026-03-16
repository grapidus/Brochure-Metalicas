import React from 'react';
import FormField from '../../form/FormField';
import SelectField from '../../form/SelectField';
import TextareaField from '../../form/TextareaField';
import Button from '../../UI/Button/Button';
import { useContactForm } from '../../../hooks/useContactForm';
import styles from './Contact.module.css';

const SERVICE_OPTIONS = [
  { value: 'Estructuras Metálicas', label: 'Estructuras Metálicas' },
  { value: 'Carpintería Metálica', label: 'Carpintería Metálica' },
  { value: 'Pérgolas', label: 'Pérgolas' },
  { value: 'Escaleras Metálicas', label: 'Escaleras Metálicas' },
  { value: 'Puertas y Portones', label: 'Puertas y Portones' },
  { value: 'Cerramientos', label: 'Cerramientos' },
  { value: 'Cubiertas Metálicas', label: 'Cubiertas Metálicas' },
  { value: 'Mezanines', label: 'Mezanines' },
  { value: 'Automatización', label: 'Automatización' },
  { value: 'Otro', label: 'Otro' },
];

const Contact: React.FC = () => {
  const { formData, errors, status, handleChange, handleSubmit, resetForm } = useContactForm();

  if (status === 'success') {
    return (
      <section id="contacto" className={`section ${styles.contact}`}>
        <div className="container">
          <div className={styles.successCard}>
            <span className={styles.successIcon}>✅</span>
            <h3>¡Mensaje enviado!</h3>
            <p>
              Te hemos redirigido a WhatsApp con tu solicitud. Nuestro equipo te responderá
              a la brevedad posible.
            </p>
            <Button variant="outline" onClick={resetForm}>
              Enviar otra solicitud
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.layout}>
          {/* Info lateral */}
          <div className={styles.info}>
            <p className={styles.eyebrow}>Hablemos</p>
            <h2 className="section-title">
              Contac<span>to</span>
            </h2>
            <div className="section-divider" />
            <p className={styles.infoText}>
              ¿Tienes un proyecto en mente? Completa el formulario y nuestro equipo se
              pondrá en contacto contigo para brindarte una cotización personalizada.
            </p>

            <div className={styles.contactDetails}>
              <a href="tel:+573102265016" className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <span className={styles.contactLabel}>Teléfono / WhatsApp</span>
                  <span className={styles.contactValue}>+57 310 2265016</span>
                </div>
              </a>

              <a href="mailto:metalicasgercs.sas@gmail.com" className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <div>
                  <span className={styles.contactLabel}>Correo Electrónico</span>
                  <span className={styles.contactValue}>metalicasgercs.sas@gmail.com</span>
                </div>
              </a>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <span className={styles.contactLabel}>Dirección</span>
                  <span className={styles.contactValue}>
                    Calle 57 G sur No. 80 J – 40, Barrio ClassRoma, Bogotá
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Solicitar Cotización</h3>
            <p className={styles.formSubtitle}>
              Al enviar, serás redirigido a WhatsApp con tu información prellenada.
            </p>

            <form onSubmit={handleSubmit} noValidate className={styles.form}>
              <div className={styles.row}>
                <FormField
                  id="nombre"
                  name="nombre"
                  label="Nombre completo"
                  placeholder="Ej: Juan Pérez"
                  value={formData.nombre}
                  onChange={handleChange}
                  error={errors.nombre}
                  required
                  autoComplete="name"
                />
                <FormField
                  id="telefono"
                  name="telefono"
                  label="Teléfono / WhatsApp"
                  placeholder="Ej: +57 300 000 0000"
                  value={formData.telefono}
                  onChange={handleChange}
                  error={errors.telefono}
                  required
                  type="tel"
                  autoComplete="tel"
                />
              </div>

              <div className={styles.row}>
                <FormField
                  id="email"
                  name="email"
                  label="Correo electrónico"
                  placeholder="Ej: correo@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                  type="email"
                  autoComplete="email"
                />
                <FormField
                  id="ciudad"
                  name="ciudad"
                  label="Ciudad / Municipio"
                  placeholder="Ej: Bogotá"
                  value={formData.ciudad}
                  onChange={handleChange}
                  error={errors.ciudad}
                  required
                />
              </div>

              <SelectField
                id="servicio"
                name="servicio"
                label="Tipo de servicio"
                placeholder="Selecciona el servicio requerido"
                options={SERVICE_OPTIONS}
                value={formData.servicio}
                onChange={handleChange}
                error={errors.servicio}
                required
              />

              <TextareaField
                id="descripcion"
                name="descripcion"
                label="Descripción del proyecto"
                placeholder="Describe brevemente tu proyecto: dimensiones, materiales, plazo, etc."
                value={formData.descripcion}
                onChange={handleChange}
                error={errors.descripcion}
                required
                rows={4}
              />

              <Button
                type="submit"
                size="lg"
                isLoading={status === 'submitting'}
                style={{ width: '100%' }}
              >
                Enviar por WhatsApp 📲
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
