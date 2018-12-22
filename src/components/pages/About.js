import React, {Component} from 'react';
import styles from '../main.module.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className={styles.maindetail}>
          <div className={styles.about}>
            <div className={styles.photo}>
              <img src="https://images7.alphacoders.com/353/thumb-1920-353276.jpg" />
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
      </div>
    );
  }
}

export default About;
