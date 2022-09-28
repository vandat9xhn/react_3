import * as React from "react";

export interface useNumChangeProps {
  initial_num: number;
  time_reset?: number;
}

//
export const useNumChange = ({
  initial_num,
  time_reset = 1000,
}: useNumChangeProps) => {
  //
  const [state_obj, setStateObj] = React.useState({
    arr_num: [initial_num - 1, initial_num, initial_num + 1],
    ix_num: 1,
  });

  const refTimeout = React.useRef<NodeJS.Timeout>(null);

  // ----

  const handleReset = () => {
    if (refTimeout.current) {
      clearTimeout(refTimeout.current);
    }

    refTimeout.current = setTimeout(() => {
      setStateObj((state_obj) => {
        const num = state_obj.arr_num[state_obj.ix_num];
        const new_arr_num = [num - 1, num, num + 1];

        return {
          ...state_obj,
          arr_num: new_arr_num,
          ix_num: 1,
        };
      });
    }, time_reset);
  };

  const handleUp = () => {
    setStateObj((state_obj) => {
      const new_arr_num = [...state_obj.arr_num];
      const new_ix = state_obj.ix_num + 1;
      if (new_ix === new_arr_num.length - 1) {
        const new_num = new_arr_num.slice(-1)[0] + 1;
        new_arr_num.push(new_num);
      }

      return {
        ...state_obj,
        arr_num: new_arr_num,
        ix_num: new_ix,
      };
    });

    handleReset();
  };

  const handleDown = () => {
    setStateObj((state_obj) => {
      const new_arr_num = [...state_obj.arr_num];
      let new_ix = state_obj.ix_num;

      if (new_ix === 1) {
        const new_num = new_arr_num[0] - 1;
        new_arr_num.unshift(new_num);
      } else {
        new_ix = state_obj.ix_num - 1;
      }

      return {
        ...state_obj,
        arr_num: new_arr_num,
        ix_num: new_ix,
      };
    });

    handleReset();
  };

  // -----

  return {
    ...state_obj,
    handleUp,
    handleDown,
  };
};
