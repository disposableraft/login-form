import React, { FunctionComponent } from "react";
import { Flex, Heading } from "@chakra-ui/core";
import LoginForm from "./LoginForm";

const App: FunctionComponent = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    mt={-12}
    h="100%"
    direction="column"
  >
    <Heading pb={4} data-testid="welcome">Welcome to a registration form!</Heading>
    <LoginForm />
  </Flex>
);

export default App;
