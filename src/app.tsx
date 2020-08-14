import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider, theme } from "@chakra-ui/core";
import Page from "./page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
