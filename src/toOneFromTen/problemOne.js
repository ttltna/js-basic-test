// let arr = [100, 200, 300, 400, 500];

// const solution = (arr, count) => {
//     arr.length -= count;
//     return arr;
// }

// export default solution;

/* gugudan level 1 */
// for(let i=1; i<10; i++){
//     console.log(2*i);
// }

/* gugudan level 2 */
// const gugu = (number) => {
//     for(let i=1; i<10; i++){
//         console.log(number * i);
//     }
// }
// gugu(5);

/* gugudan level 3 */
// for(let i=1; i<10; i++){
//     for(let j=1; j<10; j++){
//         console.log(i*j);
//     }
// }

/* gugudan level 4 */
// for(let i=2; i<10; i+=2){
//     for(let j=1; j<10; j++){
//         console.log(i * j);
//     }
// }

/* gugudan level 5 */
// for(let i=3; i<10; i+=2){
//     for(let j=1; j<10; j+=2){
//         console.log(i*j);
//     }
// }

/* gugudan level 6 */
// for(let i=9; i>0; i--){
//     for(let j=9; j>0; j--){
//         console.log(i*j);
//     }
// }

/* star level 1 */
// const square = (width,height) => {
//     let star = "";
//     for(let i = 0; i < width; i++){
//         for(let j = 0; j < height; j++){
//             star += "*";
//         }
//         console.log(star);
//         star = ""
//     }
// }

// square(5,5);
// square(10,10);

/* star level 2 */
// const leftBottomTryangle = (row, column) => { //왼쪽 아래 정렬 삼각형
//     let star = "";
//     if(column > row){
//         column = row;
//     }
//     for(let i = 0; i < column; i++){
//         for(let j = 0; j < row; j++){
//             if(i>=j){
//                 star += "*";
//             }
//         }
//         console.log(star);
//         star ="";
//     }
// }
// leftBottomTryangle(8,10);

// const leftTopTryangle = (row, column) => { //왼쪽 위 정렬 삼각형
//     let star = "";
//     if(column > row){
//         column = row;
//     }
//     for(let i = 0; i < column; i++){
//         for(let j = 0; j < row; j++){
//             if(i<=j){
//                 star += "*";
//             }
            
//         }
//         console.log(star);
//         star ="";
//     }
// }
// leftTopTryangle(5,12);

/* star level 3 */
// const rightBottomTryangle = (row, column) => { //오른쪽 아래 정렬 삼각형
//     let star = "";
//     if(column > row){
//         column = row;
//     }
//     for(let i = row; i>0; i--){
//         for(let j = 1; j<=column; j++){
//             if(i>j){
//                 star += " ";
//             }else{
//                 star += "*";
//             }
//         }
//         console.log(star);
//         star = "";
//     }
// }
// rightBottomTryangle(6,10);

// const rightTopTryangle = (row, column) => { //오른쪽 위 정렬 삼각형
//     let star = "";
//     if(column > row){
//         column = row;
//     }
//     for(let i=0; i<column; i++){
//         for(let j=0; j<row; j++){
//             if(i<=j){
//                 star += "*";
//             }else{
//                 star += " ";
//             }
//         }
//         console.log(star);
//         star= "";
//     }
// }
// rightTopTryangle(6,10);

/* star level 4 */
// const equilateralTriangle = (height) => {
//     let star = "";
//     let count = 1;
//     for(let i=height; i>0; i--){
//         for(let j=1; j<=height; j++){
//             if(i>j){
//                 star += " ";
//             }
//         }
//         for(let k=0; k<count; k++){
//             star += "*";
//         }
//         console.log(star);
//         star = "";
//         count += 2;
//     }
// }
// equilateralTriangle(4);

/* star level 5 */
// const invertedTriangle = (height) => {
//     let star = "";
//     let count = (height*2) - 1;
//     for(let i=0; i<height; i++){
//         for(let j=0; j<height; j++){
//             if(i>j){
//                 star += " ";
//             }
//         }
//         for(let k=count; k>0; k--){
//             star += "*";
//         }
//         console.log(star);
//         star = "";
//         count -= 2;
//     }
// }
// invertedTriangle(7);

/* star level 6 */
// const rhombus = (height) => {
//     let star = "";
//     let starRepetition = 0;
//     let count = 1;
//     if(height % 2 === 0){
//         height = height-1;
//     }
//     if(height < 2){
//         console.log("1줄짜리 마름모는 없습니다!! 다시 입력해 주세요.");
//         return;
//     }
//     for(let i=Math.ceil(height/2); i>0; i--){
//         for(let j=1; j<=Math.ceil(height/2); j++){
//             if(i>j){
//                 star += " ";
//             }
//         }
//         for(let k=0; k<count; k++){
//             star += "*";
//         }
//         console.log(star);
//         star = "";
//         count += 2;
//     }
//     count -= 4;
//     for(let i=0; i<Math.floor(height/2); i++){
//         for(let j=0; j<Math.floor(height/2); j++){
//             if(i>=j){
//                 star += " ";
//             }
//         }
//         for(let k=count; k>0; k--){
//             star += "*";
//         }
//         console.log(star);
//         star = "";
//         count -= 2;
//     }
// }
// rhombus(0);
// rhombus(1);
// rhombus(2);
// rhombus(3);
// console.log("\n");
// rhombus(4);
// console.log("\n");
// rhombus(5);
// console.log("\n");
// rhombus(6);
// console.log("\n");
// rhombus(7);
// console.log("\n");
// rhombus(8);

/* star level 7 */
// const square = (row, column) => {
//     let star = "";
//     for(let i=0; i<column; i++){
//         for(let j=0; j<row; j++){
//             if(i === 0 || i === column-1){
//                 star += "*";
//             }else if(j === 0 || j === row-1){
//                 star += "*";
//             }else{
//                 star += " ";
//             }
//         }
//         console.log(star);
//         star = "";
//     }
// }
// square(10,10);

/* star level 8 */
// const oddNumber = (height) => { //홀수일때
//     let star = "";
//     let count = 1;
//     let topHeight = Math.ceil(height / 2);
//     let bottomHeight = Math.floor(height / 2);
//     if(height < 2){
//         console.log("3이상의 숫자를 입력해 주세요!!");
//         return;
//     }
//     for(let i=0; i<topHeight; i++){
//         for(let j=0; j<count; j++){
//             star += "*";
//         }
//         console.log(star);
//         star = "";
//         count += 2;
//     }
//     count -= 4;
//     for(let i=0; i<bottomHeight; i++){
//         for(let j=0; j<count; j++){
//             star += "*";
//         }
//         console.log(star);
//         star = "";
//         count -= 2;
//     }
// }

// const evenNumber = (height) => { //짝수일때
//     let star = "";
//     let count = 2;
//     height /= 2;
//     if(height < 2){
//         console.log("3이상의 숫자를 입력해 주세요!!");
//         return;
//     }
//     for(let i=0; i<height; i++){
//         for(let j=0; j<count; j++){
//             star += "*";
//         }
//         console.log(star);
//         star = "";
//         count += 2;
//     }
//     count -= 2;
//     for(let i=0; i<height; i++){
//         for(let j=0; j<count; j++){
//             star += "*";
//         }
//         console.log(star);
//         star = "";
//         count -= 2;
//     }
// }

// const rightArrow = (height) => {
//     height % 2 === 0 ? evenNumber(height) : oddNumber(height);
// }

// rightArrow(3);
// console.log("\n");

// rightArrow(5);
// console.log("\n");

// rightArrow(7);
// console.log("\n");

// rightArrow(9);
// console.log("\n");

// rightArrow(2);
// console.log("\n");

// rightArrow(4);
// console.log("\n");

// rightArrow(6);
// console.log("\n");

// rightArrow(8);

/*
var foo = {
    0: 1,
    1: 2,
    2: 3
};

console.log(foo);
console.log(typeof foo)
console.log(typeof foo[1])
//객체의 키값은 문자열or심벌값이 아니면 암묵적 타입 변환으로 묹열이 된다.
//숫자 리터럴을 사용해도 내부적으로는 문자열로 변환된다.
*/

/*
let x= 1, y= 2;

const obj = { x, y};
console.log(obj);

var str = 'string';
// str[0] = "S"; //문자열은 변경 불가능한 값이기 때문에 오류가 난다.

console.log(str);
*/

/*
const o = { x: { y: 1 } };
// 얕은 복사
const c1 = { ...o }; // 35장 "스프레드 문법" 참고
console.log(o,c1)
console.log(c1 === o); // false
console.log(c1.x === o.x); // true
// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행
const _ = require('lodash'); //설치했는데 뭐가 바뀐지 모르겠음
// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false
*/


/* 소수 찾기 */
const solution = (num) => {
    for(let i=2; i*i <num; i++){
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