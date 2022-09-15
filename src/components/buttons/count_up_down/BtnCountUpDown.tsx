import * as React from "react";

import BtnSimple from "components/buttons/simple/BtnSimple";

//
export interface BtnCountUpDownProps {
  initialCount?: number;
  is_up?: boolean;
}

//
function BtnCountUpDown({
  initialCount = 0,
  is_up = true,
}: BtnCountUpDownProps) {
  //
  const [count, setCount] = React.useState(initialCount);

  //
  const handleCountUpDown = () => {
    setCount((count) => count + (is_up ? 1 : -1));
  };

  //
  return <BtnSimple onClick={handleCountUpDown}>{count}</BtnSimple>;
}

export default BtnCountUpDown;
