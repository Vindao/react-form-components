import React, { Component } from "react";

import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="Home">
        <Link to="/register">register</Link>
        <br />
        <Link to="/confirmemail?hallo=peter">confirmemail</Link>
        <br />
        <Link to="/formexample">Form</Link>
      </div>
    );
  }
}

export default Home;
