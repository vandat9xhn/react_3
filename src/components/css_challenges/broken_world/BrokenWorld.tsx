import * as React from "react";

import "./BrokenWorld.scss";

//
export interface BrokenWorldProps {}

const BrokenWorldText = ({}) => {
  return <div>Hello World</div>;
};

//
function BrokenWorld({}: BrokenWorldProps) {
  //
  return (
    <div className="BrokenWorld">
      <div className="BrokenWorld_contain">
        <BrokenWorldText />

        <div className="BrokenWorld_1">
          <div className="BrokenWorld_1_contain">
            <BrokenWorldText />
          </div>
        </div>

        <div className="BrokenWorld_hr"></div>
      </div>
    </div>
  );
}

export default BrokenWorld;
