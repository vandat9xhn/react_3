import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ContextApiComponent from "context/ContextApiComponent";
import CommonPg from "pages/common/CommonPg";
import AppChakra from "pages/chakra/AppChakra";
// import BtnSimple from "./components/buttons/simple/BtnSimple";

//
interface AppProps {}

//
const App: React.FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <ContextApiComponent>
        <Routes>
          <Route path="/common" element={<CommonPg />} />

          <Route path="/chakra" element={<AppChakra />} />
        </Routes>
      </ContextApiComponent>
    </BrowserRouter>
  );
};

export default App;
