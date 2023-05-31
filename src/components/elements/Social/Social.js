import React from 'react';
import Link from '../Link/Link';
import styles from './Social.css';
import {
  FaGithubSquare,
  FaLinkedin,
  FaStackOverflow,
  FaTwitterSquare
} from 'react-icons/fa';

const size = '4.5rem';
const color = '#01579B';
const iconProps = {
  color,
  size
};
const linkProps = {
  className: styles.social__item,
  target: '_blank'
};

const Social = () => (
  <div className={styles.social}>
    <Link {...linkProps} src="https://github.com/tshields86">
      <FaGithubSquare {...iconProps} />
    </Link>
    <Link {...linkProps} src="https://www.linkedin.com/in/trshields">
      <FaLinkedin {...iconProps} />
    </Link>
    <Link {...linkProps} src="https://twitter.com/tshields86">
      <FaTwitterSquare {...iconProps} />
    </Link>
    <Link {...linkProps} src="https://stackoverflow.com/users/6272401/tshields86">
      <FaStackOverflow {...iconProps} />
    </Link>
  </div>
);

export default Social;