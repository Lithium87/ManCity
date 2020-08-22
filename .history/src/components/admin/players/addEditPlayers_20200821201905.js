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
      lastname: {
        element: "input",
        value: "",
        config: {
          label: "Player Last Name",
          name: "lastname_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showLabel: true,
      },
      number: {
        element: "input",
        value: "",
        config: {
          label: "Player Number",
          name: "number_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showLabel: true,
      },
      position: {
        element: "select",
        value: "",
        config: {
          label: "Select a position",
          name: "select_position",
          type: "select",
          options: [
            { key: "Keeper", value: "Keeper" },
            { key: "Defence", value: "Defence" },
            { key: "Midfield", value: "Midfield" },
            { key: "Striker", value: "Striker" },
          ],
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
    return (
      <AdminLayout>
        <div className="editplayers_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={(event) => this.submitForm(event)}>
              <FormField
                id={"name"}
                formData={this.state.formData.name}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"lastname"}
                formData={this.state.formData.lastname}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"number"}
                formData={this.state.formData.number}
                change={(element) => this.updateForm(element)}
              />
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}
