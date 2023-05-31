import React from 'react';
import { bool, func } from 'prop-types';
import cx from 'classnames';
import { Button, Glitch } from '~elements';
import { Canvas } from '~containers';
import { AWS_S3_LOCATION } from '../../../config';
import styles from './Hero.css';

const Hero = ({ hasEntered, onEnter }) => (
  <header className={cx(styles.hero, { [styles['has-gradient']]: hasEntered })}>
    <img
      src={`${AWS_S3_LOCATION}images/hero--workspace--large.jpg`}
      alt="Manhattan bridge in Dumbo"
      className={styles.hero__img}
    />
    {!hasEntered && <Canvas />}
    <Glitch hasEntered={hasEntered} />
    {!hasEntered && 
      <Button
        className={styles.hero__btn}
        label="enter"
        onClick={() => onEnter()}
      />}
  </header>
);

Hero.propTypes = {
  hasEntered: bool.isRequired,
  onEnter: func.isRequired
};

export default Hero;
