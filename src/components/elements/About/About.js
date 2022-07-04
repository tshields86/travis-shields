import React from 'react';
import { Header } from '~elements';
import { Parallax } from 'react-parallax';
import { AWS_S3_LOCATION } from '~src/config';
import styles from './About.css';

const About = () => (
  <section className={styles.about}>
    <Parallax
      className={styles.about__parallax}
      bgImage={`${AWS_S3_LOCATION}images/bridge--dark.jpg`}
      bgImageAlt="Brooklyn bridge at night with lights"
      strength={500}
    >
      <div className={styles.about__content}>
        <Header text="Professional Profile" />
        <p>
          Hands-on technical leader with exceptional success in developing web applications for enterprise companies. 
          Determined problem solver employing analytical, technical, and design skills to oversee the full software development lifecycle. 
          Acknowledged for tenacious leadership and project management skills while leading cross-functional teams in dynamic work environments. 
          Record of effective full stack engineering in enterprise web development.
        </p>
      </div>
    </Parallax>
  </section>
);

export default About;