import React, { FunctionComponent, useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import TextInput from "./TextInput";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const LoginForm: FunctionComponent = () => {
  const onSubmit = (values: Inputs, setSubmitting: any) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={(
          values: Inputs,
          { setSubmitting }: FormikHelpers<Inputs>
        ) => {
          onSubmit(values, setSubmitting);
        }}
        validate={(values) => {
          let errors: any = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
      > 
        <Form>
          <TextInput name="firstName" type="text" label="First Name" />
          <TextInput name="lastName" type="text" label="Last Name" />
          <TextInput name="email" type="email" label="Email" />
          <TextInput name="password" type="password" label="Password" />
          <button data-testid="submit" type="submit" disabled={false}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
