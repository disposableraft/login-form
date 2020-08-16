import React from "react";
import LoginForm from "./login-form";
import { Box, Text } from "@chakra-ui/core";

// Having a page component is perhaps decomposing too much for this exercise,
// but I think it demonstrates how I would go about organizing components irl.

const Page = () => {
  return (
    <Box margin="auto" maxW="650px">
      <Box mt={8}>
        <Text textAlign="center" color="#432CB3" as="h2">
          Welcome to Raisely
        </Text>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Page;
