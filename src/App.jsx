import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import Register from "./components/Register";
import Home from "./components/Home";
import { ConfirmEmail } from "./components/Stateless";
import FormExample from "./components/FormExample";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/confirmemail" exact component={ConfirmEmail} />
            <Route path="/formexample" exact component={FormExample} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
