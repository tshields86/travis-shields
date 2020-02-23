import React from 'react';
import { string } from 'prop-types';
import styles from './Header.css';

const Header = ({ text }) => (
  <header className={styles.root}>
    <h3>{text}</h3>
    <hr />
  </header>
);

Header.propTypes = {
  text: string.isRequired
};

export default Header;