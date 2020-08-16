import React, { FunctionComponent } from "react";
import { ThemeProvider, theme } from "@chakra-ui/core";
import Page from "./page";

// Here I add the theme provider and the page component.

const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Page />
  </ThemeProvider>
);

export default App;
