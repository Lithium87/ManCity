import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";

export default class Blocks extends Component {
  state = {
    matches: [],
  };

  showMatches = () => <div>match</div>;

  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}
