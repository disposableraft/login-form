import * as React from "react";
import { ThemeProvider, theme } from "@chakra-ui/core";
import Page from "./page";

// Here I add the theme provider and the page component.

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}
