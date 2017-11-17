import React, { Component } from "react";
import { Link } from 'react-router-dom';

import styles from './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <nav id="menu" className={ styles.menu }>
        <ul>
          <li>
            <button><Link to="/">Home</Link></button>
          </li>
          <li> 
            <button><Link to="/about">About</Link></button>
          </li>
        </ul>
      </nav>
    );
  }
}