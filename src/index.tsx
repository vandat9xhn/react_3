import * as React from "react";
import { createRoot } from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import { HAS_WORKER } from "./constants";
import theme from "./theme/theme";

import App from "./App";
// import App from "App";

const root = createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode="light" />
    <App />
  </ChakraProvider>
);

!HAS_WORKER && serviceWorker.unregister();
