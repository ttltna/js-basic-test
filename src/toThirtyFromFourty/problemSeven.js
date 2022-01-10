// 입력
// 원범 원범 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

const appendAndCompareProperty = (str) => {
    let student= {}; //빈 객체 만들기
    let compareKeys=[]; //key값을 받아올 배열 만들기
    let compareValue= []; //value값을 받아올 배열 만들기
    let mostPopularity = 0; //가장 많은 득표를 넣어줄 변수
    for(let i=0; i<str.length; i++){
        // student[str[i]] = i;
        if(`${str[i]}` in student){
            student[str[i]] += 1;
        }else{
            student[str[i]] = 1;
        }
    }
    console.log(student);
    compareValue = Object.values(student);
    compareKeys = Object.keys(student);
    // console.log(compareValue.length);
    // console.log(compareKeys.length);
    for(let i=0; i<compareValue.length; i++){
        for(let j=i; j<compareValue.length; j++){
            // console.log(i,j)
            if(compareValue[i] < compareValue[j]){
                // console.log(`student[${i}] = ${compareValue[i]}, student[${j}] = ${compareValue[j]}`);
                mostPopularity = compareValue[j];
                // console.log("mostPopularity = ", mostPopularity);
                i++;
            }else if(compareValue[i] > compareValue[j]){
                mostPopularity = compareValue[i];
                if(j + 1  === compareValue.length){
                    i += compareValue.length;
                }
            }else if(i !== j){
                if(compareValue[i] === compareValue[j]){
                    console.log("표가 동률입니다! 재투표를 해주세요.");
                    return;
                }
            }
        }
    }
    mostPopularity = compareValue.indexOf(mostPopularity);
    // console.log(mostPopularity);
    console.log(`${compareKeys[mostPopularity]}(이)가 총 ${compareValue[mostPopularity]}표로 반장이 되었습니다.`)
    // for(let key in student){
    //     compareValue[key] = student[key];
    //     console.log("for compareValue = ",compareValue);
    // }
    // console.log("total compareValue = ",compareValue);
}

const stringToArray = (str) => {
    str= str.split(" ");
    appendAndCompareProperty(str);
}

const solution = (str) => {
    stringToArray(str);
}

solution("유진 유진 혜진 원범 혜진 혜진 혜원 원범 혜진 혜진 혜진 혜진 유진 혜진 혜진 유진 혜원 유진 혜원 유진 혜원 혜원 혜원 혜원 유진 유진 원범 혜원");
solution("원범 원범 혜원 혜원 혜원 혜원 유진 유진")
solution("태원 원석 세진 다정 산들 태원 태원 주희 태원")