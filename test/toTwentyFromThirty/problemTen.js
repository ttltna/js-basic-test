// 입력
/*
pineapple is yummy
apple
*/

// 출력
// 4
const firstString = "pineapple";
const findString = "apple";

console.log(firstString.length);
for(let i=0; i<firstString.length; i++){
    if(findString[0] == firstString[i]){
        console.log("index is = ",i);
    }
}