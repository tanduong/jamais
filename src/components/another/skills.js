import React, { Component } from 'react';
import styles from '../main.module.css';

class Skills extends Component {
  render() {
    return (
      <div>
        <div className={styles.detail}>
      <div className={styles.skills}>
        <div className={styles.title}>
          <h2>Skills</h2>
        </div>
        <div className={styles.bardiv}>
          <h3>HTML</h3>
          <div className={styles.progressbar}>
            <span className={styles.html}></span>
          </div>
          <h3>CSS</h3>
          <div className={styles.progressbar}>
            <span className={styles.css}></span>
          </div>
          <h3>JavaScript</h3>
          <div className={styles.progressbar}>
            <span className={styles.javascript}></span>
          </div>
          <h3>C++</h3>
          <div className={styles.progressbar}>
            <span className={styles.cplus}></span>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default Skills;
