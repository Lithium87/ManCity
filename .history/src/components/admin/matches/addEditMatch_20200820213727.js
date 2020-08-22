import React, { Component } from "react";

import AdminLayout from "../../../Hoc/AdminLayout";

import FormField from "../../UI/formFields";
import { validate } from "../../UI/misc";

export default class AddEditMatch extends Component {
  state = {
    matchId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    teams: [],
    formData: {
      date: {
        element: "input",
        value: "",
        config: {
          label: "Event date",
          name: "date_input",
          type: "date",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: "",
        showLabel: true,
      },
    },
  };

  render() {
    return (
      <AdminLayout>
        <FormField
          id={"date"}
          formData={this.state.formData.date}
          change={(element) => this.updateForm(element)}
        />
      </AdminLayout>
    );
  }
}
