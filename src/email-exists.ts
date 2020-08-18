const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const emailExists = async (email: string): Promise<boolean> => {
  await sleep(50);
  if (/.*@example\.com/.test(email)) {
    console.log(`Email (${email}) no exists`);
    return false;
  }
  console.log(`Email (${email}) yes exists`);
  return true;
};

export default emailExists;
