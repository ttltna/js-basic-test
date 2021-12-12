let arr = [200, 100, 300];

const solution = (arr) => {
  arr.splice(2, 0, 10000);
  return arr;
};

export default solution;
