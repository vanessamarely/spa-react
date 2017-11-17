import React, { Component } from "react";
import { connect } from 'react-redux';


import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Header username={this.props.user.data} />
        <div className="sections">
          { this.props.children }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({user: store.user})

export default connect(
    mapStateToProps,
)(App) 

