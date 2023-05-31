import React from 'react';
import { Header } from '~elements';
import { Parallax } from 'react-parallax';
import { AWS_S3_LOCATION } from '~src/config';
import styles from './About.css';

const About = () => (
  <section className={styles.about}>
    <Parallax
      className={styles.about__parallax}
      bgImage={`${AWS_S3_LOCATION}images/bridge--dark.jpg`}
      bgImageAlt="Brooklyn bridge at night with lights"
      strength={500}
    >
      <div className={styles.about__content}>
        <Header text="Professional Profile" />
        <p>As a results-driven technical leader, I thrive in bringing to life web applications for enterprise companies. My ability to solve problems decisively, utilizing my analytical, technical, and design expertise, makes me proficient at overseeing the entire software development lifecycle. Recognized for my strong leadership and project management capabilities, I've led cross-functional teams successfully in dynamic work environments.</p>
        <p>My proficiency lies in full stack engineering, with a specialization in implementing and managing distributed systems and microservice architectures within enterprise settings. My skill in directing high-performing engineering teams ensures that we consistently surpass project objectives.</p>
        <p>I bring an extensive background in software engineering to the table, encompassing a variety of languages, frameworks, and Agile practices. As a strategic thinker, I am adept at crafting technical roadmaps that align with organizational objectives.</p>
        <p>A commitment to professional development is at the heart of my leadership style. I believe in mentoring engineers to enhance team performance and encourage a culture of continuous learning and improvement. Additionally, I have a knack for swiftly adapting to emerging technologies, enabling me to tackle complex challenges and drive innovation.</p>
        <p>Throughout my career, my ultimate goal has always been to create and implement solutions that help businesses grow and succeed. If you're looking for a passionate, experienced technical leader, let's connect and explore how I can support your team's goals.</p>
      </div>
    </Parallax>
  </section>
);

export default About;