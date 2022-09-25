import * as React from "react";

import "./CirclesChain.scss";

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

const WIDTH_OVER = 25;

//
export interface CirclesChainProps {
  arr_circle?: typeof ARR_CIRCLE;
}

//
function CirclesChain({ arr_circle = ARR_CIRCLE }: CirclesChainProps) {
  //
  return (
    <div className="CirclesChain">
      <div className="CirclesChain_contain">
        <div className="CirclesChain_row">
          {arr_circle.map((item, ix) => (
            <div
              key={ix}
              className="CirclesChain_item"
              style={{
                width: `calc(${100 / arr_circle.length}% - ${WIDTH_OVER}px)`,
              }}
            >
              <div
                className="CirclesChain_circle"
                style={{
                  width: `calc(100% + ${WIDTH_OVER}px)`,
                }}
              >
                <div className="CirclesChain_circle_contain">
                  <div
                    className="CirclesChain_circle_child CirclesChain_circle_child1"
                    style={{ zIndex: arr_circle.length - ix }}
                  >
                    <div
                      className="CirclesChain_circle_child_contain"
                      style={{ borderColor: item.color }}
                    ></div>
                  </div>

                  <div className="CirclesChain_circle_child CirclesChain_circle_child2">
                    <div
                      className="CirclesChain_circle_child_contain"
                      style={{ borderColor: item.color }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CirclesChain;
