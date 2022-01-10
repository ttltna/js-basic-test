/*
입력 : 18234
출력 : 18

입력 : 3849
출력 : 24
*/

const totalSumFn = (arr) => {
    console.log("arr.length = ",arr.length);
    let count = arr.length;
    let totalSum = 0;
    console.log("count = ",count);
    for(let i=0; i<count; i++){
        totalSum += parseInt(arr[i]); // way 1 (no map)
        // totalSum += arr[i]; // way 2 (no parseInt)
        console.log("for in totalSum = ",totalSum);
    }
    console.log("result = ",totalSum);
    return totalSum;
}

const stringToSplit = (string) => {
    let arr = string.split(""); // way 1 (no map)
    // let arr = string.split("").map(Number); // way 2 (no parseInt)
    console.log("arr = ", arr);
    return arr;
}

const numberToString = (number) => {
    let str = number + "";
    console.log("str = ", str);
    return str;
}

const solution = (number) => {
    totalSumFn(stringToSplit(numberToString(number)));
}

solution(128372);
solution(18324);
solution(3849);