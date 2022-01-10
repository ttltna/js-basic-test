// 입력
/*
Yujin Hyewon
70 100
*/

// 출력
// {'Yujin': 70, 'Hyewon': 100}

// let student = {
//     Yujin: 70,
//     Hyewon: 100
// }

// console.log(student);

const makeaObject = (str1, str2) => {
    let student = {};
    for(let i=0; i<str1.length; i++){
        student[str1[i]] = str2[i];
    }
    console.log(student);
}

const checkStrLength = (str1, str2) => {
    str1 = str1.split(" ");
    str2 = str2.split(" ");
    str1.length === str2.length ?
    makeaObject(str1,str2) :
    console.log("갯수를 통일 시켜 주세요");
}

const solution = (str1, str2) => {
    checkStrLength(str1, str2);
}

solution("Yujin Hyewon","70 100");
solution("y j a", "1 5 10");
solution("a s d", "1 1");