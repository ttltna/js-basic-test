// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

const solution = (number) => {
    let gugudan= [];
    for(let i=0; i<9; i++){
        gugudan[i]= number * (i+1);
    }
    console.log(gugudan.join(" "));
}

solution(0);
solution(1);
solution(3);
solution(9);
solution(12);