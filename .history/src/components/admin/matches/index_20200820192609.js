import React, { Component } from "react";
import { Link } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import AdminLayout from "../../../Hoc/AdminLayout";

import { firebaseMatches } from "../../../firebase";
import { firebaseLooper, reverseArray } from "../../UI/misc";

export default class AdminMatches extends Component {
  state = {
    isLoading: true,
    matches: [],
  };

  componentDidMount() {
    firebaseMatches.once("value").then((snapshot) => {
      const matches = firebaseLooper(snapshot);

      this.setState({
        isLoading: false,
        matches: reverseArray(matches),
      });
    });
  }

  render() {
    console.log(this.state);

    return (
      <AdminLayout>
        <div className="admin_progress">
          {this.state.isLoading ? (
            <CircularProgress thickness={7} style={{ color: "#98c5e9" }} />
          ) : (
            ""
          )}
        </div>
      </AdminLayout>
    );
  }
}
