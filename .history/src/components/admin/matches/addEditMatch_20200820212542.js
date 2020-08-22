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
    },
  };

  render() {
    return (
      <AdminLayout>
        add <br />
        edit match
      </AdminLayout>
    );
  }
}
