import React from "react";
import { render } from "@testing-library/react";
import Page from "./Page";

describe("Page", () => {
  test("renders and matches its snapshot", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
