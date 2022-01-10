// 숫자가 소수인지 아닌지 판별하는 프로그램 작성
// 소수는 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수
// 소수면 YES, 소수가 아니면 NO

// 1 or myself 1,2,3,5,7,11,13,17

const solution = (num) => {
    for(let i=2; i < num; i++){
        console.log("num = ",num," i = ",i);
        if(num % i === 0){
            console.log("num = ",num," i = ",i," num % i = ",num%i);
            console.log("소수가 아닙니다.");
            return false;
        }
    }
    console.log(num,"은 소수입니다.");
    return true;
}

solution(1);
solution(2);
solution(3);
solution(4);
/*
solution(5);
solution(6);
solution(7);
solution(8);
solution(9);
solution(10);
solution(11);
solution(12);
solution(13);
solution(14);
solution(15);
solution(16);
solution(17);
solution(18);
solution(19);
solution(20);
solution(21);
solution(22);
solution(81);
solution(82);
solution(83);
solution(84);
solution(85);
solution(86);
*/