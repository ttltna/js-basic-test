// 버블정렬 구현하기
// 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용함

//앞자리와 뒷자리를 비교
//앞자리가 뒷자리숫자보다 크면 자리를 바꿈
//뒷자리가 앞자리보다 크면 통과

const _split = (str) => {
    let strToArray = str.split(" ");
    // console.log(strToArray); // split한 배열 출력
    for(let i=0; i<strToArray.length; i++){
        if(isNaN(parseInt(strToArray[i]))){ //문자일경우
            strToArray[i] = parseInt(strToArray[i]);
            // console.log("숫자만 입력해주세요.");
            throw '숫자만 입력해주세요!!';
        }else{
            strToArray[i] = parseInt(strToArray[i]);
        }
    }
    // console.log(strToArray); // number type 배열 출력
    return strToArray;
}

const bubbleSort = (arr) => {
    let copyArray = [...arr]; // 원본 값을 바꾸지 않기위해
    // console.log("복사배열!! = ", copyArray);

    let bubbleTemp = 0;
    for(let i=0; i<copyArray.length; i++){
        for(let j=0; j<copyArray.length; j++){
            if(copyArray[i] < copyArray[j]){ //4가 2보다 크면
                //copyArray[i] > copyArray[j]가 조건이 맞다고 생각했는데 내림차순이되어버림.
                //왜 copyArray[i] < copyArray[j]가 오름차순이 되는건지 머리가 잘 안돌아감.
                bubbleTemp = copyArray[i]; // 큰 값 임시저장 //4저장
                copyArray[i] = copyArray[j]; //뒷자리값 앞자리로 바꿈 //첫번째 2로바꿈
                copyArray[j] = bubbleTemp //임시저장된 큰 값을 뒷자리로 바꿈 //두번째4
            }
        }
    }
    // console.log("정렬!!",copyArray);
    return copyArray;
}

const solution = (str) => {
    let answer = bubbleSort(_split(str));
    console.log("원본 : ", str, " 오름차순 정렬!! = ",answer);
    console.log("\n");
    return answer;
}

solution("4 2 3 8 5");
solution("1 가 2 3");
solution("나 1 4 5");
solution("10 9 8 7 6 5 4 3 2 1");
solution("1 2 3 4 5 6 7 8 9 10");

// const bubbleSort = (arr) => {
//     let noSwaps;

//     if (Array.isArray(arr) && arr.length !== 0){
//         arr = arr.map(e => parseInt(e))
//         for (let i = arr.length; i > 0; i--) {
//             noSwaps = true;
//             for (let j = 0; j < i-1; j++) {
//                 if (arr[j] > arr[j+1]) {
//                     let temp = arr[j];
//                     arr[j] = arr[j+1];
//                     arr[j+1] = temp;
//                     noSwaps = false;
//                 }
//             }
//             if (noSwaps) break;
//         }
//         return arr;
//     } else {
//         return 'This is not Array Please input array parameter'
//     }
// }

// const f = (array) => { // 5, 4, 3, 2, 1
//     let noSwap
//     for (let i = array.length-1; i > 0; i--) { //4; 4,3,2,1; --
//         noSwap = true
//         for (let j = 0; j < i; j++) { //0; 0,1,2,3,4 || 0,1,2,3 || 0,1,2 || 0,1 || 0 ; ++
//             if (array[j] > array[j+1]) { //5 3
//                 // 바꿈
//                 let temp = array[j];
//                 array[j] = array[j+1]
//                 array[j+1] = temp //4 5 3 2 1, //4 3 5 2 1
//                 noSwap = false
//             }
//         }
//         if (noSwap) break;
//     }
// }