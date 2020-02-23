import React from 'react';
import { func, string } from 'prop-types';
import cx from 'classnames';
import styles from './Button.css';

const Button = ({ children, className, label, onClick }) => (
  <button
    className={cx(styles.button, className)}
    onClick={onClick}
  >
    {children || label}
  </button>
);

Button.propTypes = {
  className: string,
  label: string,
  onClick: func.isRequired
};

Button.defaultProps = {
  className: null,
  label: null
};

export default Button;
