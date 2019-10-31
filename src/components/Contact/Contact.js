import React from 'react';
import styles from './Contact.css';
import Link from '../Link/Link';
import { MdEmail, MdPhoneIphone } from 'react-icons/md';
import { IoIosDocument } from 'react-icons/io';

const size = '5rem';
const color = '#000';
const linkProps = {
  className: styles.contact__link,
  target: '_blank'
};

const Contact = () => (
  <div className={styles.contact}>
    <div className={styles.contact__item}>
      <IoIosDocument color={color} size={size} />
      <Link {...linkProps} label="Resume" src="#" />
    </div>
    <div className={styles.contact__item}>
      <MdPhoneIphone color={color} size={size} />
      <Link {...linkProps} label="(610) 842-8162" src="tel:1-610-842-8162"/>
    </div>
    <div className={styles.contact__item}>
      <MdEmail color={color} size={size} />
      <Link {...linkProps} label="travis.shields@gmail.com" src="mailto:travis.shields@gmail.com" />
    </div>
  </div>
);

export default Contact;