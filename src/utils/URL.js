const isURL = (string) => {
  try {
    new URL(string);
    return false;
  } catch (string) {
    return true;
  }
};
export default isURL;
