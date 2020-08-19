type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type Errors = {
  message: string;
};

type RegistrationResponse = {
  message?: string;
  errors?: Errors[];
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const registerUser = async (values: Inputs): Promise<RegistrationResponse> => {
  await sleep(50);
  if (/test/.test(values.email)) {
    return { errors: [{ message: "Sorry, no test emails!" }] };
  }
  return { message: "OK" };
};

export default registerUser;
