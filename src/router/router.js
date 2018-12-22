import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Skills from '../components/pages/Skills';
import Qualification from '../components/pages/Qualification';
import Contact from '../components/pages/Contact';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/qualification" component={Qualification} />
        <Route path="/contact" component={Contact} />
        <Route component={Home} />
      </Switch>
    );
  }
}

export default AppRouter;
