import React, { FunctionComponent } from "react";
import { Input } from "@chakra-ui/core";
import { useField } from "formik";

type TextInputType = {
  label: string;
  name: string;
  type: string;
};

const TextInput: FunctionComponent<TextInputType> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <Input variant="flushed" {...field} {...props} id={props.name} />
      {meta.touched && meta.error ? (
        <div data-testid={`error-${field.name}`}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
