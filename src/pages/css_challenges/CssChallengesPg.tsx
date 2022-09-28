import * as React from "react";

import "./CssChallengesPg.scss";

import BrokenWorld from "components/css_challenges/broken_world/BrokenWorld";
import HelloWhat from "components/css_challenges/hello_what/HelloWhat";
import MissingBorder from "components/css_challenges/missing_border/MissingBorder";
import FarAway from "components/css_challenges/far_away/FarAway";
import NewtonWorld from "components/css_challenges/newton_world/NewtonWorld";
import DegreeRoom from "components/css_challenges/degree_room/DegreeRoom";

//
export interface CssChallengesPgProps {}

//
function CssChallengesPg({}: CssChallengesPgProps) {
  //
  return (
    <div className="CssChallengesPg">
      {/* <div>
        <BrokenWorld />
      </div> */}

      {/* <div>
        <HelloWhat />
      </div> */}

      {/* <div>
        <MissingBorder />
      </div> */}

      {/* <div>
        <FarAway />
      </div> */}

      {/* <div>
        <NewtonWorld />
      </div> */}

      <div>
        <DegreeRoom  />
      </div>
    </div>
  );
}

export default CssChallengesPg;
