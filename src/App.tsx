import React, { FunctionComponent } from "react";
import { Flex } from "@chakra-ui/core";
import LoginForm from "./LoginForm";

const App: FunctionComponent = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    mt={-12}
    h="100%"
    direction="column"
  >
    <LoginForm />
  </Flex>
);

export default App;
