type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

const registerUser = async (values: Inputs): Promise<boolean> => {
  await sleep(50)
  if ((Math.random() * 10) % 3 === 0) {
    return false;
  }
  return true
}

export default registerUser