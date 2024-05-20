import React from "react";
import { useEffect } from 'react';
import { createRoot } from "react-dom/client";
import "@pages/popup/index.css";
import Popup from "@pages/popup/Popup";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { PioneerProvider as PP } from "@coinmasters/pioneer-react";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { theme } from "@src/styles/theme";

refreshOnUpdate("pages/popup");

const ForceDarkMode = ({ children }: { children: React.ReactNode }) => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode("dark");
  }, [setColorMode]);

  return <>{children}</>;
};

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(
    <ChakraProvider theme={theme}>
      <ForceDarkMode>
        <PP>
          <Popup />
        </PP>
      </ForceDarkMode>
    </ChakraProvider>
  );
}

init();
