import React from "react";
import LoginForm from "./LoginForm";
import { Box, Heading } from "@chakra-ui/core"

const Page = () => {
  return (
    <Box margin="auto" textAlign="center">
      <Heading data-testid='welcome'>Welcome to a login form!</Heading>
      <LoginForm />
    </Box>
  );
};

export default Page;
