import * as React from "react";
import { Link } from "react-router-dom";

Link
//
export interface BtnSimpleProps extends React.ComponentProps<"button"> {}

//
function BtnSimple(props: BtnSimpleProps) {
    //
    return (
        <button type="button" {...props}>
            Click me!
        </button>
    );
}

export default BtnSimple;
