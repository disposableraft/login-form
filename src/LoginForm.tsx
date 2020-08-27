import React, { FunctionComponent } from "react";
import { string, object } from "yup";
import { Formik, Form, FormikHelpers } from "formik";
import TextInput from "./TextInput";
import emailExists from "./email-exists";
import { Box, Flex, Stack } from "@chakra-ui/core";
import SubmitButton from "./SubmitButton";

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
    <Flex
      data-testid="form-login"
      bg="white"
      rounded={10}
      width={["100%", "450px"]}
    >
      <Box p={6} w="100%">
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
            <Stack spacing={4}>
              <TextInput name="firstName" type="text" label="First Name" />
              <TextInput name="lastName" type="text" label="Last Name" />
              <TextInput name="email" type="email" label="Email" />
              <TextInput name="password" type="password" label="Password" />
              <SubmitButton label="Register" name="submit" />
            </Stack>
          </Form>
        </Formik>
      </Box>
    </Flex>
  );
};

export default LoginForm;
