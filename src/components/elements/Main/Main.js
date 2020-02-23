import React from 'react';
import { About, Footer, Skills } from '~elements';
import styles from './Main.css';

const Main = () => (
  <main className={styles.main}>
    <Skills />
    <About />
    <Footer />
  </main>
);

export default Main;
