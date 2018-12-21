import React, { Component } from 'react';
import styles from '../main.module.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className={styles.conteneurcontact}>
          <div className={styles.contact}>
            <h2>CONTACT</h2>
            <form name="formulaire" method="POST" action="">
              <div className={styles.input}>
                <h3>*Name</h3>
                <input type="text" name="nom" />
              </div>
              <div className={styles.input}>
                <h3>*Email</h3>
                <input type="email" name="email" />
              </div>
              <div className={styles.input}>
                <h3>*Message</h3>
                <textarea name="message"></textarea>
              </div>
              <div className={styles.input}>
                <input type="submit" value="Submit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
