import React from 'react';
import { Contact, Copyright, Header, Social, Wrapper } from '~elements';
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