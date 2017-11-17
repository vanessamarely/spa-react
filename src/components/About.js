import React, { Component } from "react";

import styles from './Common.css';

export default class About extends Component {
  render() {
    return (
      <section className={ styles.section } id="about">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nunc tellus. Cras in fringilla odio, congue suscipit arcu. 
          Vestibulum eget mi ac magna placerat suscipit ut quis mi. Donec feugiat magna purus, nec posuere elit gravida vel. Phasellus egestas elit ut laoreet volutpat. Nullam posuere augue eu velit vehicula hendrerit. Phasellus id metus faucibus, laoreet arcu vitae, vehicula magna. Phasellus lacinia efficitur rutrum.</p>

        <p>Duis tincidunt turpis aliquet massa maximus mattis. Duis non consectetur diam. Proin ac congue enim, at lacinia lectus. Sed id augue sed erat fermentum tristique non ut tellus. 
          Proin a dignissim ante, sed euismod enim. Sed suscipit eros quis tristique volutpat. Donec id fringilla ante, vel malesuada risus. Proin eget orci eros. Curabitur mollis interdum maximus. Nam at massa efficitur, faucibus justo eu, ultrices massa. Proin et ligula ligula. Aenean ante orci, iaculis ut nunc in, ultricies pulvinar nisl. 
          Mauris ullamcorper suscipit mattis. Maecenas et mi eros.</p>
      </section>  
    );
  }
}