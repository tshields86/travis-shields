import React from 'react';
import Footer from '../Footer/Footer';
import styles from './Main.css';

const Main = () => (
  <main className={styles.main}>
    <div className={styles.main__wrapper}>
      <Footer />
    </div>
  </main>
);

export default Main;
