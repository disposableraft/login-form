import React from "react";
import LoginForm from "./LoginForm";

const Page = () => {
  return (
    <div style={{margin: 'auto', textAlign: 'center'}}>
      <h2 data-testid='welcome'>Welcome to a login form!</h2>
      <LoginForm />
    </div>
  );
};

export default Page;
