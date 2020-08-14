import * as React from "react";
import LoginForm from "./login-form";
import { Box, Text } from "@chakra-ui/core";

const Page = () => {
  return (
    <Box margin="auto" maxW="650px">
      <Box mt={8}>
        <Text textAlign="center" color="#432CB3" as="h2">
          Welcome to Raisley
        </Text>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Page;