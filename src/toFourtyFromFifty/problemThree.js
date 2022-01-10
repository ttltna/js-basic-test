// 사용자에게 숫자를 입력받고 이를 2진수로 바꾸고 그 값을 출력
// const solution = (number) => {
//     let binary = 0b00;
//     console.log("first binary",binary);
//     for(let i=0; i<number; i++){
//         binary += 0b01;
//         console.log("for in binary",binary);
//     }
//     return binary;
// }

// solution(5);
// solution(5);

const solution = (number) => {
    let binary = number.toString(2);
    console.log(number," = ",binary);
}

solution(1);
solution(2);
solution(3);
solution(4);
solution(5);
solution(6);
solution(7);
solution(8);
solution(9);
solution(10);