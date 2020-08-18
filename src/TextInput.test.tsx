import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Formik } from "formik";
import TextInput from "./TextInput";

test("It render a label", () => {
    const fieldName = 'fieldFoo'
    const labelName = 'labelFoo'
    const { getByLabelText } = render(
        <Formik
            initialValues={{
                fieldFoo: ''
            }}
            validate={() => {}}
            onSubmit={() => {}}
        >
            <TextInput name={fieldName} label={labelName} type="text" />
        </Formik>
    )

    const input = getByLabelText(labelName)
    expect(input).toBeTruthy()
});

test('It renders an error message', async () => {
    const fieldName = 'fieldFoo'
    const labelName = 'labelFoo'
    const { getByLabelText, findByTestId } = render(
        <Formik
            initialValues={{
                fieldFoo: ''
            }}
            validate={(values) => {
                let errors: {fieldFoo?: string} = {}
                if(!values.fieldFoo) {
                    errors.fieldFoo = 'Required'
                }
                return errors
            }}
            onSubmit={() => {}}
        >
            <TextInput name={fieldName} label={labelName} type="text" />
        </Formik>
    )

    const input = getByLabelText(labelName)
    fireEvent.blur(input)
    const validationErrors = await findByTestId(`error-${fieldName}`)
    expect(validationErrors.innerHTML).toBe('Required')
})
