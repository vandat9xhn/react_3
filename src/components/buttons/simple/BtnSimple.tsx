import * as React from "react";
import { Link } from "react-router-dom";

Link;
//
export interface BtnSimpleProps extends React.ComponentProps<"button"> {}

//
function BtnSimple({ children = "Click Me!", ...props }: BtnSimpleProps) {
  //
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

export default BtnSimple;
