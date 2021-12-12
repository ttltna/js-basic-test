import solution from "../../src/toOneFromTen/problemTwo";

let arr = [200, 100, 300];

test("Array value same as [200, 100, 10000, 300].", () => {
  expect(solution(arr)).toEqual([200, 100, 10000, 300]);
});
