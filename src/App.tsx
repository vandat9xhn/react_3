import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ContextApiComponent from "context/ContextApiComponent";
import CommonPg from "pages/common/CommonPg";
import AppChakra from "pages/chakra/AppChakra";
import WatchYouTubeMb from "pages/watch_youtube_mb/WatchYouTubeMb";
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

          <Route path="/watch-youtube" element={<WatchYouTubeMb />} />
        </Routes>
      </ContextApiComponent>
    </BrowserRouter>
  );
};

export default App;
