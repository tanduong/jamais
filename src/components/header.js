import React, {Component} from 'react';
import styles from './main.module.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.menu}>
            <ul>
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/skills">SKILLS</NavLink>
              </li>
              <li>
                <NavLink to="/qualification">QUALIFICATION</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
