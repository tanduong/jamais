import React, {Component} from 'react';
import Main from './main';
import Footer from './footer';
import {Intro} from './Intro';

class Unies extends Component {
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

export default Unies;
