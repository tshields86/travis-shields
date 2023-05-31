import React from 'react';
import { Grid, Header, Wrapper } from '~elements';
import SkillsItem from './SkillsItem';
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
          Leveraging industry-leading frameworks and environments, such as React, Redux, Node, Express, and Ruby on Rails, to build robust and efficient applications.
        </SkillsItem>
        <SkillsItem
          label="Secure Storage"
          icon={<FaDatabase {...iconProps} />}
        >
          Implementing user authentication protocols and managing various databases, including MongoDB, MySQL, PostgreSQL, and Redis, to ensure secure and efficient data storage.
        </SkillsItem>
        <SkillsItem
          label="Ready to Go"
          icon={<FaStopwatch {...iconProps} />}
        >
          Working within Agile methodologies to deliver rapid, incremental value, utilizing Git/Github for version control, and employing AWS for seamless deployment and scalability.
        </SkillsItem>
        <SkillsItem
          label="Up to Date"
          icon={<FaTerminal {...iconProps} />}
        >
          Staying abreast of the latest industry trends, developing skills in languages such as JavaScript, Ruby, Python, and PHP to deliver modern and efficient solutions.
        </SkillsItem>
      </div>
      <Grid />
    </Wrapper>
  </section>
);

export default Skills;