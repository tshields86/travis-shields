import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Glitch.css';

const Glitch = ({ hasEntered }) => (
  <div className={cx(styles.glitch, { [styles.glitch__off]: hasEntered })}>
    <div className={styles.glitch__area}>
      <h1 className={styles.glitch__title}>Travis<span>Shields</span></h1>
      <h2 className={styles.glitch__text}>
        <span>><span className={styles.glitch__blink}>_</span></span>
        fullstack engineer
      </h2>
    </div>
  </div>
);

Glitch.propTypes = {
  hasEntered: PropTypes.bool.isRequired
};

export default Glitch;