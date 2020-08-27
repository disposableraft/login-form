import React, { FunctionComponent } from "react";
import { useFormikContext } from "formik";
import { Box, Button } from "@chakra-ui/core";

type SubmitButtonType = {
  label: string;
  name: string;
};

const SubmitButton: FunctionComponent<SubmitButtonType> = ({
  label,
  ...props
}) => {
  const { errors, touched } = useFormikContext();
  const isDisabled = (): boolean => {
    const noErrors = Object.values(errors).every((v) => !v);
    const unTouched = Object.values(touched).every((v) => !v);
    return noErrors && unTouched;
  };

  return (
    <Box>
      <Button isDisabled={isDisabled()} data-testid="submit" type="submit">
        {label}
      </Button>
    </Box>
  );
};

export default SubmitButton;
