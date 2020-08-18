import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Formik, Form } from "formik";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";

test("It's disabled by default'", () => {
  const { getByTestId } = render(
    <Formik
      initialValues={{
        fooName: "",
      }}
      validate={() => {}}
      onSubmit={() => {}}
    >
      {props => (
          <Form>
              <TextInput name="fooName" label="fooLabel" type="text" />
              <SubmitButton name="submit" label="Submit" {...props} />
          </Form>
      )}
    </Formik>
  );

  const submit = getByTestId("submit");
  expect(submit).toBeDisabled();
});

test("It's enabled when field has values'", async () => {
    const { getByLabelText, findByTestId } = render(
      <Formik
        initialValues={{
          fooName: "",
        }}
        validate={(values) => {
            let errors: any = {}
            if(!values.fooName) {
                errors.fooName = "Required"
            }
            return errors;
        }}
        onSubmit={() => {}}
      >
        {props => (
            <Form>
                <TextInput name="fooName" label="fooLabel" type="text" />
                <SubmitButton name="submit" label="Submit" {...props} />
            </Form>
        )}
      </Formik>
    );

    const input = getByLabelText('fooLabel')
    fireEvent.blur(input)
    fireEvent.change(input, {target: {value: 'May you be well.'}})
  
    const submit = await findByTestId("submit");
    expect(submit).toBeEnabled();
  });
