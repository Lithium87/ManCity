import React, { Component } from "react";

import FormField from "../UI/formFields";
import { validate } from "../UI/misc";

export default class SignIn extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
      },
    },
  };

  submitForm = () => {};

  render() {
    return (
      <div className="container">
        <div className="signin_wrapper" style={{ margin: "100px" }}>
          <form onSubmit={(event) => this.submitForm(event)}>
            <h2>Please Log in</h2>
          </form>
        </div>
      </div>
    );
  }
}
