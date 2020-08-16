import React, { FunctionComponent, FocusEventHandler } from "react";
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

interface IProps {
  errors: boolean
}

const ValidatedIcon: FunctionComponent<IProps> = ({ errors }) =>
  errors ? <Icon name="warning" color="red.500" /> : null;

type TextInputType = {
  errors: any;
  name: string;
  text: string;
  type: string;
  register?: any;
  validator?: any;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

// This component provides a generic wrapper for form inputs.
// It supports a default validator, which assumes any field is required.
// It also supports custom validators, which is used by the email input.

const TextInput: FunctionComponent<TextInputType> = ({
  errors,
  name,
  text,
  type,
  register,
  validator,
  onBlur,
}) => {
  const validateField = (value: string): string | boolean => {
    let error;
    if (!value) {
      error = "This field is required";
    }
    return error || true;
  };

  const error = (): boolean => {
    return errors ? true : false;
  };

  return (
    <Box mb={4}>
      <FormControl isInvalid={error()}>
        <FormLabel fontSize="sm" color="#432CB3">
          <Text as="span">{text}</Text>
          <Text pl="3" as="span" color="red.500">
            {errors && errors.message}
          </Text>
        </FormLabel>
        <InputGroup>
          <Input
            borderWidth="1"
            rounded="none"
            backgroundColor="#F1F1F7"
            variant="filled"
            onBlur={onBlur}
            type={type}
            name={name}
            ref={register({
              validate: validator || validateField,
            })}
            size="lg"
          />
          <InputRightElement children={<ValidatedIcon errors={error()} />} />
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default TextInput;
