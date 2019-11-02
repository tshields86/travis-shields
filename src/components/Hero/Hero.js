import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Canvas from '../../containers/Canvas/Canvas';
import Glitch from '../Glitch/Glitch';
import Button from '../Button/Button';
import styles from './Hero.css';

const Hero = ({ hasEntered, onEnter }) => (
  <header className={cx(styles.header, { [styles['has-gradient']]: hasEntered })}>
    <img
      src={require('../../img/hero--large.jpg')}
      alt="Manhattan bridge in Dumbo"
      className={styles.header__img}
    />
    {!hasEntered && <Canvas />}
    <Glitch hasEntered={hasEntered} />
    {!hasEntered && 
      <Button
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
