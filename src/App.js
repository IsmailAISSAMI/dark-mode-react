import React, { useContext } from "react";
import { GlobalStyles } from "./theme/theme";

import Router from "./configuration/routes";
import { DarkModeContext, DarkModeProvider } from "./context/darkMode.context";

const App = () => {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Router />
    </DarkModeProvider>
  );
};

export default App;
