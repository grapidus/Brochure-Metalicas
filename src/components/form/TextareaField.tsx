import React from 'react';
import styles from './FormField.module.css';

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  id: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ label, error, id, ...props }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {props.required && <span className={styles.required}>*</span>}
      </label>
      <textarea
        id={id}
        className={`${styles.input} ${styles.textarea} ${error ? styles.inputError : ''}`}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default TextareaField;
