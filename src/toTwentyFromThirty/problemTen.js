// 입력
/*
pineapple is yummy
apple
*/

// 출력
// 4

// const solution = (firstString, findString) => {
//     let count= 0;
//     for(let i=0; i<firstString.length; i++){
//         if(firstString[i] == findString[count]){
//             count++;
//             if(findString.length == count){
//                 // console.log(findString.length,count);
//                 console.log(i - findString.length + 1);
//             }
//         }
//     }
// }

const solution = (firstString, findString) => {
    for(let i=0; i<firstString.length; i++){
        if(firstString[i] == findString[findString.length-1]){
            console.log(i - findString.length + 1);
            return;
        }
    }
}

// solution("pineapple is yummy","apple");

solution("다음다음은 다음은 다음은","다음은");


// function 문자찾는기계 (x, i) {
//     const 입력된문자 = `${x}`;
//     const 몇번째 = 입력된문자.indexOf(i)
//     console.log(몇번째)
// }
  
// 문자찾는기계('pineapple is yummy', 'pine');
