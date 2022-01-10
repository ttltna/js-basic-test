import solution from "../../src/toOneFromTen/problemOne";

const num = [100, 200, 300, 400, 500];

test("Array value same as [100, 200, 300].", () => {
  expect(solution(num,2)).toEqual([100, 200, 300]);
});
