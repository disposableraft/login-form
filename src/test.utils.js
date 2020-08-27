import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
