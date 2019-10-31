import React from 'react';
import styles from './Social.css';
import Link from '../Link/Link';
import {
  FaAngellist,
  FaGithubSquare,
  FaLinkedin,
  FaStackOverflow,
  FaTwitterSquare
} from 'react-icons/fa';

const size = '4.5rem';
const color = '#01579B';
const linkProps = {
  className: styles.social__item,
  target: '_blank'
};

const Social = () => (
  <div className={styles.social}>
    <Link {...linkProps} src="https://github.com/tshields86">
      <FaGithubSquare color={color} size={size} />
    </Link>
    <Link {...linkProps} src="https://www.linkedin.com/in/trshields">
      <FaLinkedin color={color} size={size} />
    </Link>
    <Link {...linkProps} src="https://twitter.com/tshields86">
      <FaTwitterSquare color={color} size={size} />
    </Link>
    <Link {...linkProps} src="https://angel.co/travis-shields">
      <FaAngellist color={color} size={size} />
    </Link>
    <Link {...linkProps} src="https://stackoverflow.com/users/6272401/tshields86">
      <FaStackOverflow color={color} size={size} />
    </Link>
  </div>
);

export default Social;