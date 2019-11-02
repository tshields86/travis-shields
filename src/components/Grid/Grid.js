import React from 'react';
import GridItem from './GridItem/GridItem';
import gridItems from './grid-items.json';
import styles from './Grid.css';

const Grid = () => (
  <div className={styles.root}>
    {gridItems.map(({ icon, label, type }) => (
      <GridItem icon={icon} label={label} type={type}></GridItem>
    ))}
  </div>
);

export default Grid;