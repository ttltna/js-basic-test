import solution from "../../src/toOneFromTen/problemThree";

let arr = [100, 200, 300];

// 정답 작성

test("arr value is [Object].", () => {
    expect(solution(arr)).toEqual("object");
  });