import React, {Component} from 'react';
import styles from './main.module.css';

class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.maindetail}>
          <div className={styles.about}>
            <div className={styles.photo}>
              <img
                src="https://images7.alphacoders.com/353/thumb-1920-353276.jpg"
                alt="about"
              />
            </div>
            <div className={styles.text}>
              <h2>About</h2>
              <p>
                - Revamped UI and app interface for customer-facing e-commerce
                site with 200,000+ unique visitors per month
                <br />- Designed and developed front-end for 20+ websites, using
                jQuery, AJAX, RequireJS, and Handlebars.js
                <br />- Created custom AngularJS components for internal
                framework
                <br />- Automated image optimization, using Grunt and minified
                JS and CSS, which reduced page load times by up to 30%
              </p>
              <a href="#">Download CV</a>
            </div>
            <div className={styles.clear} />
          </div>
        </div>

        <div className={styles.detail}>
          <div className={styles.skills}>
            <div className={styles.title}>
              <h2>Skills</h2>
            </div>
            <div className={styles.bardiv}>
              <h3>HTML</h3>
              <div className={styles.progressbar}>
                <span className={styles.html} />
              </div>
              <h3>CSS</h3>
              <div className={styles.progressbar}>
                <span className={styles.css} />
              </div>
              <h3>JavaScript</h3>
              <div className={styles.progressbar}>
                <span className={styles.javascript} />
              </div>
              <h3>C++</h3>
              <div className={styles.progressbar}>
                <span className={styles.cplus} />
              </div>
            </div>
          </div>
        </div>

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

export default Main;
