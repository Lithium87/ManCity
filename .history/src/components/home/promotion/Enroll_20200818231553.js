import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import FormField from "../../UI/formFields";
import { validate } from "../../UI/misc";

export default class Enroll extends Component {
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
    },
  };

  resetFormSuccess = () => {
    const newFormData = { ...this.state.formData };

    for (let key in newFormData) {
      newFormData[key].value = "";
      newFormData[key].valid = false;
      newFormData[key].validationMessage = "";

      this.setState({
        formError: false,
        formData: newFormData,
        formSuccess: "Congratulations!",
      });
    }
  };

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (const key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      this.resetFormSuccess();
    } else {
      this.setState({
        formError: true,
      });
    }
  };

  updateForm = (element) => {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };

    newElement.value = element.event.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;

    this.setState({
      formError: false,
      formData: newFormData,
    });
  };

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={(event) => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormField
                id={"email"}
                formData={this.state.formData.email}
                change={(element) => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">
                  Something went wrong. Try again!
                </div>
              ) : null}
              <div className="success_label">{this.state.formSuccess}</div>
              <button onClick={(event) => this.submitForm(event)}>
                Enroll
              </button>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}
