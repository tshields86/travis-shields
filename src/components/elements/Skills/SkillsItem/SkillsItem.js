import React from 'react';
import styles from './SkillsItem.css';

const SkillsItem = ({ children, icon, label }) => (
  <div className={styles.root}>
    {icon}
    <h4>{label}</h4>
    <p>{children}</p>
  </div>
);

export default SkillsItem;