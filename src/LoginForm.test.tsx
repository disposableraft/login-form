import React from "react";
import LoginForm from "./LoginForm";
import { render, fireEvent } from "@testing-library/react";

describe("LoginForm", () => {
  test("Matches snapshot without values", () => {
    const { container } = render(<LoginForm />);
    expect(container).toMatchSnapshot();
  });

  test("Matches snapshot with values", async () => {
    const { findByTestId, getByLabelText } = render(<LoginForm />);
    const fields = ["First Name", "Last Name", "Email", "Password"];
    fields.forEach((name) => {
      const input = getByLabelText(name);
      fireEvent.change(input, { target: { value: "May you be happy" } });
    });
    const form = await findByTestId('form-login')
    expect(form).toMatchSnapshot();
  });
});
