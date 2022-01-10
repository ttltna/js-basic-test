// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

//공백으로 주어지는 문자
//숫자인지 문자인지 NaN?

// const maximumValue = (arr) => {
//     let maximumTemp = arr[0];

//     for(let i=0; i<arr.length; i++){
//         //0: 5
//         for(let j=0; j<arr.length; j++){ // 0: 5, 1: 6
//             if(maximumTemp < arr[j]){
//                 maximumTemp = arr[j];
//             }
//         }
//     }
//     console.log("최대값 = ",maximumTemp);
//     return maximumTemp;
// }

// const checkTypeNumber = (arr) => {
//     let onlyNumber = [];
//     for(let i=0; i<arr.length; i++){
//         // console.log("for!! : ",parseInt(arr[i]));
//         // console.log("for datatype : ",typeof(parseInt(arr[i])));
//         if(isNaN(parseInt(arr[i]))){
//             throw "숫자만 입력해 주세요.";
//         }else{
//             onlyNumber[i] = parseInt(arr[i]);
//         }
//     }
//     // console.log("숫자인지 문자인지!!",onlyNumber);
//     return onlyNumber;
// }

// const _split = (str) => {
//     let strToArray = str.split(" ");
//     // console.log("문자열을 배열로!!",strToArray);
//     return strToArray;
// }

// const solution = (str) => {
//     let answer= maximumValue(checkTypeNumber(_split(str)));
//     return answer;
// }

// solution("1 2 3 4 5");
// solution("10 9 8 7 6 5");
// solution("1 2 3 나 4 5");
// solution("가 나 다 라");

var x = 1;
function foo(){
    var x = 10;
    bar();
}

function bar(){
    console.log(x);
}

foo();
bar();