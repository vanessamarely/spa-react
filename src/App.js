import React, { Component } from "react";

import Nav from './components/Nav';

import styles from './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '' 
    };
  }


  render() {
    return (
      <div className="container">
        <header className={ styles.header }>
          <div id="logo">
            <a href="#">SPA Vainilla</a>
          </div>
          <Nav />
          <div>username: { this.state.username }</div>
        </header> 
        <div className="sections">
          { this.props.children }
        </div>
      </div>
    );
  }
}