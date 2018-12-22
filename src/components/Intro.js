import React from 'react';
import styles from './Intro.module.css';
export const Intro = ({name, title}) => (
  <div className={styles.profile}>
    <div className={styles.home}>
      <img
        alt="avatar"
        src="https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif"
      />
      <h1>{name}</h1>
      <h2>{title}</h2>
    </div>
  </div>
);
