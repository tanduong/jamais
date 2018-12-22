import React from 'react';
import styles from './main.module.css';
export const Intro = () => (
  <div className={styles.profile}>
    <div className={styles.home}>
      <img
        alt="avatar"
        src="https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif"
      />
      <h1>Trương Nghĩa</h1>
      <h2>Developer</h2>
    </div>
  </div>
);
