import { sum } from "./sum.js";

test("correct value", () => {
  // expect(
  //   ((a, b) => {
  //     return a + b;
  //   })(1, 2),
  // ).toBe(3);
  expect(sum(1, 2)).toBe(3);
});
