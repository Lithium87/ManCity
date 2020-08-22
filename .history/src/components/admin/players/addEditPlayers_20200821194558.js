import React, { Component } from "react";
import AdminLayout from "../../../Hoc/AdminLayout";

import FormField from "../../UI/formFields";
import { validate } from "../../UI/misc";

import { firebasePlayers, firebaseDB, firebase } from "../../../firebase";
import { firebaseLooper } from "../../UI/misc";

export default class AddEditPlayers extends Component {
  state = {
    playerId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    defaultImg: "",
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Player Name",
          name: "name_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showLabel: true,
      },
    },
  };

  render() {
    return <div></div>;
  }
}
