import registerUser from "./register-user";

describe("registerUser", () => {
  test("on success it returns OK", async () => {
    const values = {
      firstName: "coco",
      lastName: "frisco",
      email: "coco@example.com",
      password: "waverider",
    };
    const result = await registerUser(values);
    expect(result).toMatchObject({ message: "OK" });
  });

  test("on failure it returns errors", async () => {
    const values = {
      firstName: "billy",
      lastName: "goat",
      email: "bill@goat.test",
      password: "grasseater",
    };
    const result = await registerUser(values);
    expect(result).toMatchObject({
      errors: [{ message: "Sorry, no test emails!" }],
    });
  });
});
