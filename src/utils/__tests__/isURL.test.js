import { isURL } from "../URL";

describe("isURL testing", () => {
  test("correct value URL", () => {
    expect(isURL("https://stackoverflow.com/questions/41324636/how-can-i-import-jest")).toBe(true);
  });

  test("correct value string", () => {
    expect(isURL("Hello")).toBe(false);
  });

  test("correct value empty string ", () => {
    expect(isURL("")).toBe(false);
  });

  test("correct value number ", () => {
    expect(isURL(4)).toBe(false);
  });

  test("correct value object ", () => {
    expect(
      isURL({ URL: "https://stackoverflow.com/questions/41324636/how-can-i-import-jest" }),
    ).toBe(false);
  });
});
