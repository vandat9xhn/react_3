import * as React from "react";

import { contextApi } from "./contextApi";

//
export interface ContextApiComponentProps {
  children: React.ReactElement;
}

//
function ContextApiComponent({ children }: ContextApiComponentProps) {
  //
  return <contextApi.Provider value={{}}>{children}</contextApi.Provider>;
}

export default ContextApiComponent;
