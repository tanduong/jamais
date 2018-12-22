import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../components/unies';
import About from '../components/another/about';
import Skills from '../components/another/skills';
import Qualification from '../components/another/qualification';
import Contact from '../components/another/contact';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/qualification" component={Qualification} />
          <Route path="/contact" component={Contact} />
          <Route component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
