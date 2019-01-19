import React from 'react';
import Canvas from '../../containers/Canvas/Canvas';
import Glitch from '../Glitch/Glitch';
import styles from './Hero.css';

const Hero = (props) => (
  <header className={styles.header}>
    <Canvas />
    <Glitch />
  </header>
);

export default Hero;
