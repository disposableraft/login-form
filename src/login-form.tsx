import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, Text } from "@chakra-ui/core";
import TextInput from "./text-input";
import registerUser from "./register-user";
import validateEmail from "./validate-email";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function LoginForm() {
  const [message, setMessage] = React.useState("");
  const { register, handleSubmit, formState, errors, trigger, watch } = useForm<
    Inputs
  >();

  const watchAllFields: Inputs = watch();

  const onSubmit = async (values: Inputs) => {
    const registration = await registerUser(values);
    setMessage(registration.message);
  };

  const isSubmitDisabled = (watchedFields): boolean => {
    if (Object.keys(watchedFields).length === 0) {
      return true;
    }
    const hasValue = (s: string): boolean => {
      return s.length > 0;
    };
    return !Object.values(watchedFields).every(hasValue);
  };

  const emailValidator = async (email: string) => {
    let error: string;
    if (!email) {
      error = "Email required";
    }

    let validEmail: { data: { status: string } };
    if (/\S+@\S+\.\S+/.test(email)) {
      validEmail = await validateEmail(email);
    } else {
      error = "Please enter a valid email";
    }

    if (validEmail && validEmail.data.status === "EXISTS") {
      error = `Email ${email} exists`;
    }

    return error || true;
  };

  return (
    <div>
      {message ? (
        <Text color="262861" fontStyle="italic" textAlign="center">
          {message}
        </Text>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="email"
          text="Email"
          type="email"
          errors={errors.email}
          register={register}
          validator={emailValidator}
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
}
