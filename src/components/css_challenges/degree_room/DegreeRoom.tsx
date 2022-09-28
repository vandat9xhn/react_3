import * as React from "react";

import { useNumTranslateX } from "_hooks/useNumTranslateX";

import "./DegreeRoom.scss";

//
export interface DegreeRoomProps {}
export interface DegreeRoomNumProps {
  arr_num: number[];
  trans_x: string;
  ix_num: number;
}

const MAX_DEGREE = 46;

//
const DegreeRoomNum = ({ arr_num, trans_x, ix_num }: DegreeRoomNumProps) => {
  return (
    <div className="DegreeRoomNum">
      <div
        className="DegreeRoomNum_row"
        style={{
          transform: `translateX(${trans_x})`,
        }}
      >
        {arr_num.map((item, ix) => (
          <div
            key={item}
            className={`DegreeRoomNum_item ${
              ix === ix_num
                ? "DegreeRoomNum_item-active"
                : "DegreeRoomNum_item-inactive"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

//
function DegreeRoom({}: DegreeRoomProps) {
  //
  const { arr_num, ix_num, trans_x, handleUp, handleDown } = useNumTranslateX({
    initial_num: 19,
  });

  //
  return (
    <div className="DegreeRoom flex-center">
      <div
        className="DegreeRoom_contain"
        onMouseEnter={handleUp}
        onMouseLeave={handleDown}
      >
        <div className="pos-rel wh-100per">
          <div className="DegreeRoom_bg"></div>

          <div className="DegreeRoom_in h-100per">
            <div className="DegreeRoom_in_row flex-center h-100per text-center">
              <div className="DegreeRoom_dot">
                <div
                  className="DegreeRoom_dot_contain"
                  style={{
                    transform: `rotate(${
                      (arr_num[ix_num] * (360 - 90)) / MAX_DEGREE
                    }deg)`,
                  }}
                ></div>
              </div>

              <div>
                <div>{MAX_DEGREE / 2}</div>

                <div className="DegreeRoom_num">
                  <DegreeRoomNum
                    arr_num={arr_num}
                    ix_num={ix_num}
                    trans_x={trans_x}
                  />
                </div>

                <div>Bedroom</div>
              </div>
            </div>
          </div>
        </div>

        <div className="DegreeRoom_bg_bot"></div>
      </div>
    </div>
  );
}

export default DegreeRoom;
