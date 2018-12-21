import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouterURL from './router/rerouter';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <RouterURL/>
        </div>
      </Router>
    );
  }
}

export default App;
