import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './main.css';

import App from './App';
import Home from './components/Home';
import About from './components/About';

ReactDOM.render((

  <Router>
    <Switch>
        <App>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
      </App>
    </Switch>
  </Router>

),
  document.getElementById('root')
);