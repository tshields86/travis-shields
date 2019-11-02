import React from 'react';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Footer from '../Footer/Footer';
import styles from './Main.css';

const Main = () => (
  <main className={styles.main}>
    <Skills />
    <About />
    <Footer />
  </main>
);

export default Main;
