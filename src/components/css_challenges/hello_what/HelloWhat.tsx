import * as React from "react";

import "./HelloWhat.scss";

//
export interface HelloWhatProps {}

//
function HelloWhat({}: HelloWhatProps) {
  //
  return (
    <div className="HelloWhat">
      <div>
        {"Hello".split("").map((item, ix) => (
          <span
            key={ix}
            className="HelloWhat_letter"
            style={{ fontSize: `${2 ** (5 - ix + 1)}px` }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default HelloWhat;
