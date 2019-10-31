import React from 'react';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';
import styles from './Main.css';

const Main = () => (
  <main className={styles.main}>
    <Skills />
    <Footer />
  </main>
);

export default Main;
