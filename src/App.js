import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './router/router';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <AppRouter />
        </Fragment>
      </Router>
    );
  }
}

export default App;
