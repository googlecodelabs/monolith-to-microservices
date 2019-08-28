import React from "react";
import "./App.css";

import ClippedDrawer from "./components/ClippedDrawer";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ClippedDrawer />
    </ThemeProvider>
  );
}

export default App;
