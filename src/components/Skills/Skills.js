import React from 'react';
import Grid from '../Grid/Grid';
import Header from '../Header/Header';
import SkillsItem from './SkillsItem/SkillsItem';
import Wrapper from '../Wrapper/Wrapper';
import styles from './Skills.css';
import { FaCubes, FaDatabase, FaStopwatch, FaTerminal } from 'react-icons/fa';

const size = '5rem';
const color = '#01579B';
const iconProps = {
  className: styles.skills__icon,
  color,
  size
};

const Skills = () => (
  <section className={styles.skills}>
    <Wrapper>
      <Header text="My Skills" />
      <div className={styles.skills__items}>
        <SkillsItem
          label="Powerful Frameworks"
          icon={<FaCubes {...iconProps} />}
        >
          I develop with frameworks and environments such as React, Redux, Node, Express, and Ruby on Rails.
        </SkillsItem>
        <SkillsItem
          label="Secure Storage"
          icon={<FaDatabase {...iconProps} />}
        >
          I employ user authentication and maintain MongoDB, MySQL, PostgreSQL and Redis databases.
        </SkillsItem>
        <SkillsItem
          label="Ready to Go"
          icon={<FaStopwatch {...iconProps} />}
        >
          I work in an agile environment and use Git/Github for version control and deploy with AWS and Heroku.
        </SkillsItem>
        <SkillsItem
          label="Up to Date"
          icon={<FaTerminal {...iconProps} />}
        >
          I keep on my toes with cutting-edge languages such as JavaScript, Python, PHP, and Ruby.
        </SkillsItem>
      </div>
      <Grid />
    </Wrapper>
  </section>
);

export default Skills;