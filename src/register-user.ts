type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const registerUser = async (values: Inputs) => {
  const payload = {
    campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
    data: {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    },
  };
  const req = new Request("https://api.raisely.com/v3/signup", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });
  return fetch(req)
    .then((res) => res.json())
    .then((data) => {
      console.debug(data);
      return data;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}


export default registerUser