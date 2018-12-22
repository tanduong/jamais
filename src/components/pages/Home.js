import React, {Component} from 'react';
import Main from '../Main';
import Footer from '../Footer';
import {Intro} from '../Intro';

const skills = [
  {
    name: 'HTML',
    progress: 80,
  },
  {
    name: 'CSS',
    progress: 70,
  },
  {
    name: 'JavaScript',
    progress: 65,
  },
  {
    name: 'C++',
    progress: 75,
  },
];

class Home extends Component {
  render() {
    return (
      <div>
        <Intro name={'Trương Nghĩa'} title={'Developer'} />
        <Main skills={skills} />
        <Footer />
      </div>
    );
  }
}

export default Home;
