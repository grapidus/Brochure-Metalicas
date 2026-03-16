import React from 'react';
import styles from './FormField.module.css';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, error, id, ...props }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {props.required && <span className={styles.required}>*</span>}
      </label>
      <input
        id={id}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default FormField;
