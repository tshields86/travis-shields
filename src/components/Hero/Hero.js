import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Canvas from '../../containers/Canvas/Canvas';
import Glitch from '../Glitch/Glitch';
import Button from '../Button/Button';
import { AWS_S3_LOCATION } from '../../config';
import styles from './Hero.css';

const Hero = ({ hasEntered, onEnter }) => (
  <header className={cx(styles.hero, { [styles['has-gradient']]: hasEntered })}>
    <img
      src={`${AWS_S3_LOCATION}images/hero--large.jpg`}
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
  hasEntered: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired
};

export default Hero;
