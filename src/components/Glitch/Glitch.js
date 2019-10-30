import React from 'react';
import cx from 'classnames';
import styles from './Glitch.css';

const Glitch = ({ hasEntered }) => (
  <div className={cx(styles.glitch, { [styles.noGlitch]: hasEntered })}>
    <div className={styles.glitch__area}>
      <h1 className={styles.glitch__title}>Travis<span>Shields</span></h1>
      <p className={styles.glitch__text}>
        <span>><span className={styles.glitch__blink}>_</span></span>
        fullstack engineer
      </p>
    </div>
  </div>
);

export default Glitch;