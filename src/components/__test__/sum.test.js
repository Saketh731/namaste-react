import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);

  //This is called as Assertion
  expect(result).toBe(7);
});
