import React, {Component} from 'react';
import Main from '../Main';
import Footer from '../Footer';
import {Intro} from '../Intro';

class Home extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
