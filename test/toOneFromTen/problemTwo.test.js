import solution from "../../src/toOneFromTen/problemTwo";

let array = [200, 300, 400, 500, 600];

test("Array value same as [10, 200, 300, 400, 500, 600].", () => {
  expect(solution(array,10,3)).toEqual([200,300,400, 10, 500, 600]);
});