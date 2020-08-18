import React from "react";

import Featured from "./featured";
import Matches from "./matches";
import MeetPlayers from "./meetPlayers";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
    </div>
  );
};

export default Home;
