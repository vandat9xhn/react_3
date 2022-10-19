import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/styles.scss";

import ContextApiComponent from "context/ContextApiComponent";
import CommonPg from "pages/common/CommonPg";
import AppChakra from "pages/chakra/AppChakra";
import WatchYouTubeMb from "pages/watch_youtube_mb/WatchYouTubeMb";
import WorkerPg from "pages/worker/WorkerPg";
import CssChallengesPg from "pages/css_challenges/CssChallengesPg";
import RegisterPg from "pages/register/RegisterPg";
import LoginPg from "pages/login/LoginPg";
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
          <Route path="/worker" element={<WorkerPg />} />
          <Route path="/css-challenges" element={<CssChallengesPg />} />

          <Route path="/register" element={<RegisterPg />} />
          <Route path="/login" element={<LoginPg />} />
        </Routes>
      </ContextApiComponent>
    </BrowserRouter>
  );
};

export default App;
