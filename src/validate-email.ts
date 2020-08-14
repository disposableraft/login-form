export default async function validateEmail(email: string) {
  const payload = {
    campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
    data: {
      email: email,
    },
  };
  const req = new Request("https://api.raisely.com/v3/check-user ", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });
  return fetch(req)
    .then((res) => {
      return res.ok ? res.json() : new Error(`Error: ${res.status}; ${res}`);
    })
    .then((res) => {
      console.debug(res);
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
}
