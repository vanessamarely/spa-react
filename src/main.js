import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Router */ 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Redux */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

/* Styles */
import styles from './main.css';

/* Components */
import App from './App';
import Home from './components/Home';
import About from './components/About';

import rootReducer from './reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
          <App>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </App>
      </Switch>
    </Router>
  </Provider>
),
  document.getElementById('root')
);

const Main = (props) => <App {...props}/>;
