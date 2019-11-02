import React from 'react';
import styles from './Contact.css';
import Link from '../Link/Link';
import { MdEmail, MdPhoneIphone } from 'react-icons/md';
import { IoIosDocument } from 'react-icons/io';

const size = '5rem';
const color = '#000';
const iconProps = {
  color,
  size
};
const linkProps = {
  className: styles.contact__link,
  target: '_blank'
};

const Contact = () => (
  <div className={styles.contact}>
    <div className={styles.contact__item}>
      <IoIosDocument {...iconProps} />
      <Link {...linkProps} label="Resume" src="https://travis-shields-assets.s3.us-east-2.amazonaws.com/travis_shields_resume_2019.pdf" />
    </div>
    <div className={styles.contact__item}>
      <MdPhoneIphone {...iconProps} />
      <Link {...linkProps} label="(610) 842-8162" src="tel:1-610-842-8162"/>
    </div>
    <div className={styles.contact__item}>
      <MdEmail {...iconProps} />
      <Link {...linkProps} label="travis.shields@gmail.com" src="mailto:travis.shields@gmail.com" />
    </div>
  </div>
);

export default Contact;