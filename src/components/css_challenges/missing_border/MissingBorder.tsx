import * as React from "react";

import "./MissingBorder.scss";

//
export interface MissingBorderProps {}

//
function MissingBorder({}: MissingBorderProps) {
  //
  return (
    <div className="MissingBorder">
      <div className="MissingBorder_contain">
        <div className="MissingBorder_border"></div>
        <div className="MissingBorder_missing">
          <div className="MissingBorder_missing_top"></div>
        </div>
      </div>

      <br />
      <br />

      <div className="MissingBorder_contain">
        <svg width="100%" height="100%" fill="none">
          <rect
            className="MissingBorder_rect"
            x="0"
            y="0"
            width="100%"
            height="100%"
            stroke="brown"
            strokeWidth="20%"
            strokeDasharray={`750,45`}
          />
        </svg>
      </div>
    </div>
  );
}

export default MissingBorder;
