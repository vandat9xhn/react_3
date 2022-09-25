import * as React from "react";

import "./CirclesChain3d.scss";

//
const ARR_CIRCLE = [
  {
    color: "black",
  },
  {
    color: "green",
  },
  {
    color: "red",
  },
];

const WIDTH_OVER = 45;

//
export interface CirclesChain3dProps {
  arr_circle?: typeof ARR_CIRCLE;
}

//
function CirclesChain3d({ arr_circle = ARR_CIRCLE }: CirclesChain3dProps) {
  //
  const per = 100 / arr_circle.length;

  //
  return (
    <div className="CirclesChain3d">
      <div className="CirclesChain3d_contain" style={{ paddingTop: `${per}%` }}>
        {arr_circle.map((item, ix) => (
          <div
            key={ix}
            className="CirclesChain3d_item"
            style={{
              left: `calc(${ix * per}% - ${WIDTH_OVER * ix}px)`,
              width: `${per}%`,
              // transform: `rotateX(${ix * 0.05}deg)`,
            }}
          >
            <div
              className="CirclesChain3d_circle"
              style={{ borderColor: item.color }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CirclesChain3d;
