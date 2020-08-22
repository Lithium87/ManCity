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
        },
        valid: false,
        validationMessage: "",
        showLabel: true,
      },
      local: {
        element: "select",
        value: "",
        config: {
          label: "Select a local team",
          name: "select_local",
          type: "select",
          options: [],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showLabel: false,
      },
      resultLocal: {
        element: "input",
        value: "",
        config: {
          label: "Result local",
          name: "result_local_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showLabel: false,
      },
      away: {
        element: "select",
        value: "",
        config: {
          label: "Select a local team",
          name: "select_local",
          type: "select",
          options: [],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showLabel: false,
      },
      resultAway: {
        element: "input",
        value: "",
        config: {
          label: "Result local",
          name: "result_local_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showLabel: false,
      },
    },
  };

  render() {
    return (
      <AdminLayout>
        <div className="editmatch_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={(event) => this.submitForm(event)}>
              <FormField
                id={"date"}
                formData={this.state.formData.date}
                change={(element) => this.updateForm(element)}
              />
              <div className="select_team_layout">
                <div className="label_inputs">Local</div>
                <div className="wrapper">
                  <div className="left">
                    <FormField
                      id={"local"}
                      formData={this.state.formData.local}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                  <div>
                    <FormField
                      id={"resultLocal"}
                      formData={this.state.formData.resultLocal}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                </div>
              </div>
              <div className="select_team_layout">
                <div className="label_inputs">Away</div>
                <div className="wrapper">
                  <div className="left">
                    <FormField
                      id={"away"}
                      formData={this.state.formData.away}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                  <div>
                    <FormField
                      id={"resultAway"}
                      formData={this.state.formData.resultAway}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}
