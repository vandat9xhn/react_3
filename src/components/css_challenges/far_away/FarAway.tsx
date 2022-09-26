import * as React from "react";

import "./FarAway.scss";

//
export interface FarAwayProps {}

const ARR = Array.from({ length: 10 });

//
function FarAway({}: FarAwayProps) {
  //
  return (
    <div className="FarAway">
      <div className="FarAway_contain">
        <div className="FarAway_list">
          {ARR.map((item, ix) => (
            <div key={ix}>Hello World</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FarAway;
