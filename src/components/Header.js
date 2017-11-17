import React, { Component } from "react";

import styles from './Header.css';
import Nav from './Nav';

export default class About extends Component {
  render() {
    return (
    <header className={ styles.header }>
    <div id="logo">
      <a href="#">SPA Vainilla</a>
    </div>
    <Nav />
    <div className="username">
      <h5>username: <span>{this.props.username}</span></h5>
      </div>
      </header> 
    );
  }
}