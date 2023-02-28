const getBoolForUrl = (string) => {
  try {
    new URL(string);
    return false;
  } catch (string) {
    return true;
  }
};
export default getBoolForUrl;
