import React, { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Text } from "@chakra-ui/core";
import TextInput from "./text-input";
import registerUser from "./register-user";
import validateEmail from "./validate-email";

/**
 * LoginForm is the main component in this app.
 *
 * Features include:
 *   - asynchronous email validation;
 *   - basic form validations for an email string and checking that inputs contain
 *     at least one character;
 *   - a disabled submit button until all form validations pass; success and error messages;
 *   - and responsive design.
 *
 * One edge case I discovered is when an email has been submitted, but an account
 * has not been created (?). In this case, the async email validation passes (that is,
 * the server sends an "OK" and not an "EXISTS"), but when registration is submitted,
 * the server response with "This email (foo@bar.com) address has already been
 * registered. Have you tried logging in?" I found this message from the server
 * helpful and displayed it to the user in a message above the form.
 *
 * There are many improvements that could be made. The first I would make would be to
 * redirect the successful registrant to the next page. Others would be to expand
 * error handling. And consider the flow of data.
 */

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const LoginForm: FunctionComponent = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit, formState, errors, trigger, watch } = useForm<
    Inputs
  >();

  const watchAllFields: Inputs = watch();

  const onSubmit = async (values: Inputs) => {
    const registration = await registerUser(values);
    if (registration.errors) {
      // Yolo. Here I just take the first error message.
      // Handling multiple errors here would make the login more robust.
      // I could see breaking this out into its own error handling component.
      setMessage(registration.errors[0].message);
    } else {
      setMessage(registration.message);
    }
  };

  const isSubmitDisabled = (watchedFields: object): boolean => {
    // Disable submit when none of the fields contain values
    if (Object.keys(watchedFields).length === 0) {
      return true;
    }
    const hasValue = (s: string): boolean => {
      return s.length > 0;
    };
    // Check if all the fields have values and return the opposite.
    return !Object.values(watchedFields).every(hasValue);
  };

  const emailValidator = async (email: string) => {
    let error: string = String();
    if (!email) {
      error = "Email required";
    }

    let validEmail: { data: { status: string } } = Object();
    // A simple email test: Strings containing multiple periods and at-signs will pass.
    if (/\S+@\S+\.\S+/.test(email)) {
      validEmail = await validateEmail(email);
    } else {
      error = "Please enter a valid email";
    }

    if (validEmail.data && validEmail.data.status === "EXISTS") {
      error = `Email ${email} exists`;
    }

    return error || true;
  };

  return (
    <div>
      {message && (
        <Text color="262861" fontStyle="italic" textAlign="center">
          {message}
        </Text>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="email"
          text="Email"
          type="email"
          errors={errors.email}
          register={register}
          validator={emailValidator}
          // Trigger emailValidator when user exits the input
          onBlur={() => trigger("email")}
        />

        <TextInput
          name="password"
          text="Password"
          type="password"
          errors={errors.password}
          register={register}
        />

        <TextInput
          name="firstName"
          text="First Name"
          type="text"
          errors={errors.firstName}
          register={register}
        />

        <TextInput
          name="lastName"
          text="Last Name"
          type="text"
          errors={errors.lastName}
          register={register}
        />

        {/* Disabling the submit button, given the correct conditions was a fun challenge. */}

        <Button
          isDisabled={isSubmitDisabled(watchAllFields) || !!errors.email}
          _hover={{ bg: "#432CB3", cursor: "pointer" }}
          color="#FFF"
          bg="#432CB3"
          border="1px #CCC"
          rounded="20px"
          isFullWidth={true}
          type="submit"
          isLoading={formState.isSubmitting}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
