import React, { FunctionComponent } from "react";
import { string, object } from "yup";
import { Formik, Form, FormikHelpers } from "formik";
import TextInput from "./TextInput";
import emailExists from "./email-exists";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const FormSchema = object().shape({
  firstName: string()
    .min(2, "Too short")
    .max(100, "Too long!")
    .required("Required"),
  lastName: string()
    .min(2, "Too short")
    .max(100, "Too long!")
    .required("Required"),
  email: string()
    .email("Invalid email")
    .required("Required")
    .test("does-email-exist", "Email exists", (value) => {
      if (value && /\S+@\S+\.\S+/.test(value)) {
        return emailExists(value);
      }
      return false;
    }),
  password: string().required("Required"),
});

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
        validationSchema={FormSchema}
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
