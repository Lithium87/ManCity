import React from "react";

import { Tag } from "../../UI/misc";
import Blocks from "./Blocks";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag bck="#031731" size="50px" color="#fff">
          Matches
        </Tag>
        <Blocks />
        <Tag
          bck="#fff"
          size="22px"
          color="#031731"
          link={true}
          linkTo="/the_matches"
        >
          See more matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
