export const isURL = (string) => {
  try {
    new URL(string);
    return true;
  } catch (error) {
    return false;
  }
};
