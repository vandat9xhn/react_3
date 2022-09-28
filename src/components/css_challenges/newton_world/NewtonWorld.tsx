import * as React from "react";

import './NewtonWorld.scss';

//
export interface NewtonWorldProps {}

const ARR = "HelloWorld".split("");

//
function NewtonWorld({}: NewtonWorldProps) {
  //
  return (
    <div className="NewtonWorld">
      <div className="NewtonWorld_contain">
        <div className="NewtonWorld_row">
          {ARR.map((item, ix) => (
            <div key={ix} className="NewtonWorld_item">
              <div className="NewtonWorld_item_contain">
                <div className="NewtonWorld_item_top"></div>

                <div className="NewtonWorld_item_bot"></div>

                <div className="NewtonWorld_letter">{item}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewtonWorld;
