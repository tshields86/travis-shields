import React from 'react';
import cx from 'classnames';
import Canvas from '../../containers/Canvas/Canvas';
import Glitch from '../Glitch/Glitch';
import Button from '../Button/Button';
import styles from './Hero.css';

const Hero = ({ hasEntered, onEnter }) => (
  <header className={cx(styles.header, { [styles.hasGradient]: hasEntered })}>
    {!hasEntered && <Canvas />}
    <Glitch hasEntered={hasEntered} />
    {!hasEntered && 
      <Button
        label="_enter"
        onClick={() => onEnter()}
      />}
  </header>
);

export default Hero;
