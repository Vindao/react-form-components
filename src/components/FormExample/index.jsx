import React, { Component } from "react";

// subComponents
import {
  Form,
  Title,
  Input,
  SubmitButton,
  TextField,
  Select
} from "../FormComponents";

import { Select as Sel } from "@material-ui/core";

import Logo from "./assets/logo.svg";

class FormExample extends Component {
  state = {
    testValue: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e => {
    e.preventDefault();
    console.log(e.target);
    this.setState({ testValue: e.target.value });
  };

  selectChange = value => {
    console.log(value);
  };

  render() {
    return (
      <div style={{ margin: "0 auto", width: "50%" }}>
        <h2>Sabali Form</h2>
        <Form onSubmit={this.onSubmit}>
          <Sel value="Hallo">
            <option value="hi">Hello</option>
            <option value="hi">Hello</option>
            <option value="hi">Hello</option>
            <option value="hi">Hello</option>
            <option value="hi">Hello</option>
          </Sel>
          <Select
            currentValue="Hallo"
            options={{ p: "peter", W: "water", B: "bye" }}
            onChange={this.selectChange}
          />
          <Input />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </div>
    );
  }
}

export default FormExample;
