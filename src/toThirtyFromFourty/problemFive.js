const one = (n) => {
  const two = (m) => {
    return m ** m;
  };
  return two;
};

function curry(f) { // 커링 변환을 하는 curry(f) 함수
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}


const makePlusFunction = (n, m) => {
  return n + m
}

const pipe = (f) => {
  return function(n) {
    return function(m) {
      return f(n, m)
    }
  }
} 


let plus = pipe(makePlusFunction)
console.log(plus(5)(8))

const a = one(2);
const b = one(3);
const c = one(4);

console.log(one(2)(10));
console.log(b(10));
console.log(c(10));