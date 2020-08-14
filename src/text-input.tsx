import * as React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/core";

const ValidatedIcon = (props: { errors: boolean}) => {
  if (props.errors) {
    return <Icon name="warning" color="red.500" />;
  }
  return null;
};

type TextInputType = {
  errors: any,
  name: string,
  text: string,
  type: string,
  register?: any,
  validator?: any,
  onBlur?: any
}

// This component provides a generic wrapper for form inputs.
// It supports a default validator, which assumes any field is required.
// It also supports custom validators, which is used by the email input.

export default function TextInput(props: TextInputType) {
  const validateField = (value: string): string | boolean => {
    let error;
    if (!value) {
      error = "This field is required";
    }
    return error || true;
  };

  const errors = (): boolean => {
    return props.errors ? true : false;
  };

  return (
    <Box mb={4}>
      <FormControl isInvalid={errors()}>
        <FormLabel fontSize="sm" color="#432CB3">
          <Text as="span">{props.text}</Text>
          <Text pl="3" as="span" color="red.500">
            {props.errors && props.errors.message}
          </Text>
        </FormLabel>
        <InputGroup>
          <Input
            borderWidth="1"
            rounded="none"
            backgroundColor="#F1F1F7"
            variant="filled"
            onBlur={props.onBlur}
            type={props.type}
            name={props.name}
            ref={props.register({ validate: props.validator || validateField })}
            size="lg"
          />
          <InputRightElement children={<ValidatedIcon errors={errors()} />} />
        </InputGroup>
      </FormControl>
    </Box>
  );
}
