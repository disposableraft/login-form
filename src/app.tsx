import * as React from "react";
import { ThemeProvider, theme } from "@chakra-ui/core";
import Page from "./page";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}
