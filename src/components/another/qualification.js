import React, { Component } from 'react';
import styles from '../main.module.css';

class Qualification extends Component {
  render() {
    return (
      <div>
        <div className={styles.conteneur}>
      <div className={styles.qualification}>
        <h2>Qualification</h2>
        <div className={styles.lastqualification}>
          <h3>-----------------------------------------</h3>
          <h4>2018 - 20__</h4>
        </div>
        <div className={styles.othqualification}>
          <h3>-----------------------------------------</h3>
          <h4>2018 - 20__</h4>
        </div>
        <div className={styles.othqualification}>
          <h3>-----------------------------------------</h3>
          <h4>2018 - 20__</h4>
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default Qualification;
