import React from 'react';

import styles from './Button.css';

const Button = ({ label, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {label}
  </button>
);

export default Button;
