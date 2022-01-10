// 1부터 20까지의 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하기

const solution = (startNumber, endNumber) => {
    let str = "";
    let strToArr = [];
    let totalSum = 0;
    for(let i=startNumber; i<=endNumber; i++){
        str += (i + "");
        // str = str + (i + "");
        // str += 2;
        // str = str + 2
        console.log("str = ", str);
    }
    console.log("result = ",str);
    
    strToArr = str.split("").map(Number);
    console.log(strToArr);

    for(let i=0; i<strToArr.length; i++){
        totalSum += strToArr[i];
    }
    console.log(totalSum);
    return totalSum;
}

solution(10,15);
solution(1,20);