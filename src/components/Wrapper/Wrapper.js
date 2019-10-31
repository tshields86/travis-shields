import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Wrapper.css';

const Wrapper = ({ children, className }) => (
  <div className={cx(styles.wrapper, className)}>
    {children}
  </div>
);

Wrapper.propTypes = {
  className: PropTypes.string
};

Wrapper.defaultProps = {
  className: null
};

export default Wrapper;
