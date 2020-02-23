import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import styles from './Link.css';

const Link = ({ children, className, label, src, target }) => (
  <a
    className={cx(styles.link, className)}
    href={src}
    target={target}
  >
    {children || label}
  </a>
);

Link.propTypes = {
  className: string,
  label: string,
  src: string,
  target: string
};

Link.defaultProps = {
  className: null,
  label: null,
  src: '#',
  target: null,
};

export default Link;
