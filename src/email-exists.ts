const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

const emailExists = async (email: string): Promise<boolean> => {
  await sleep(50)
  if ((Math.random() * 10) % 3 === 0) {
    return false;
  }
  return true
}

export default emailExists