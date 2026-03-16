import React from 'react';
import styles from './FormField.module.css';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  id: string;
  options: SelectOption[];
  placeholder?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  error,
  id,
  options,
  placeholder = 'Selecciona una opción',
  ...props
}) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {props.required && <span className={styles.required}>*</span>}
      </label>
      <select
        id={id}
        className={`${styles.input} ${styles.select} ${error ? styles.inputError : ''}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default SelectField;
