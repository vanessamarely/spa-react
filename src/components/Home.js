import React, { Component } from "react";

import styles from './Common.css';

export default class Home extends Component {
  render() {
    return (
      <section className={ styles.section } id="home">
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nunc tellus. Cras in fringilla odio, congue suscipit arcu.  Vestibulum eget mi ac magna placerat suscipit ut quis mi. Donec feugiat magna purus, nec posuere elit gravida vel. Phasellus egestas elit ut laoreet volutpat. Nullam posuere augue eu velit vehicula hendrerit. Phasellus id metus faucibus, laoreet arcu vitae, vehicula magna. Phasellus lacinia efficitur rutrum.</p>
      </section>
    );
  }
}