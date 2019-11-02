import React from 'react';
import cx from 'classnames';
import styles from './GridItem.css';

const GridItem = ({ icon, label, type }) => (
  <div className={styles.root}>
    <i className={cx(styles.icon, `devicon-${icon}-${type} colored`)}></i>
    <span>{label}</span>
  </div>
);

export default GridItem;