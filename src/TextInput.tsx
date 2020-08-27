import React, { FunctionComponent } from "react";
import { Input, FormControl, FormLabel, FormErrorMessage, Box } from "@chakra-ui/core";
import { useField } from "formik";

type TextInputType = {
  label: string;
  name: string;
  type: string;
};

const TextInput: FunctionComponent<TextInputType> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
      <FormLabel display="none" htmlFor={props.name}>{label}</FormLabel>
      <Input 
        id={props.name} 
        variant="flushed" 
        placeholder={label} 
        {...field} 
        {...props} 
        />
        <Box 
          display={Boolean(meta.touched && meta.error) ? 'none' : 'block'}
          pb="17px"
        />
      <FormErrorMessage data-testid={`error-${field.name}`}>
          {meta.error}
      </FormErrorMessage>
    </FormControl>
  );
};

export default TextInput;
