import React from 'react';
import PropTypes from 'prop-types';
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
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  className: null,
  label: null
};

export default Button;
