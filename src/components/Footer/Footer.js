import React from 'react';
import Copyright from '../Copyright/Copyright';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Social from '../Social/Social';
import Wrapper from '../Wrapper/Wrapper';
import styles from './Footer.css';

const Footer = () => (
  <footer className={styles.root}>
    <Wrapper>
      <Header text="Let's Get In Touch!" />
      <p>Look over my resume, give me a call, or send an email.</p>
      <Contact />
      <p>Or check me out here:</p>
      <Social />
      <Copyright />
    </Wrapper>
  </footer>
);

export default Footer;