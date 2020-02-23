import React from 'react';
import GridItem from './GridItem';
import gridItems from './grid-items.json';
import styles from './Grid.css';

const Grid = () => (
  <div className={styles.root}>
    {gridItems.map(({ icon, label, type }) => (
      <GridItem icon={icon} key={icon} label={label} type={type}></GridItem>
    ))}
  </div>
);

export default Grid;