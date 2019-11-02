import React from 'react';
import Header from '../Header/Header';
import { Parallax } from 'react-parallax';
import styles from './About.css';
import { FaCoffee } from 'react-icons/fa';

const size = '1.8rem';
const color = '#FFF';
const iconProps = {
  className: styles.about__icon,
  color,
  size
};

const About = () => (
  <section className={styles.about}>
    <Parallax
      className={styles.about__parallax}
      bgImage={require('../../img/bridge--dark.jpg')}
      bgImageAlt="Brooklyn bridge at night with lights"
      strength={500}
    >
      <div className={styles.about__content}>
        <Header text="Hello World" />
        <p>
          My name is Travis Shields.
          I am a full-stack engineer based out of New York City.
          I am originally from Philadelphia and went to the University of Pennsylvania.
          My background is in finance and I once had a knack for creating complex financial models.
          Now as a developer, I am building dynamic web applications and am currently working at The Madison Square Garden Company.
          I enjoy programming in many languages and have contributed to multiple projects there.
          When I'm not building apps, you can catch me discovering new parts of the city, listening to live music or trying to find the best cup of coffee.
          <FaCoffee {...iconProps} />
        </p>
      </div>
    </Parallax>
  </section>
);

export default About;