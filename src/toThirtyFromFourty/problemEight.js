// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6

const compare = (object) => {
    let scoreValue= [];
    let result= 0;
    scoreValue = Object.values(object);
    // console.log(scoreValue);
    for(let i=scoreValue.length-1; i>scoreValue.length-4; i--){
        result += scoreValue[i];
    }
    console.log(result);
    return result;
}

const makeNewObject = (array) => {
    let score = {};
    for(let i=0; i<array.length; i++){
        if(array[i] in score){
            score[array[i]] += 1;
        }else{
            score[array[i]] = 1;
        }
    }
    // console.log(score, typeof(score));
    console.log(score);
    compare(score);
}

const _split = (str) => {
    let stringToArray = [];
    stringToArray = str.split(" ");
    for(let i=0; i<stringToArray.length; i++){
        if(100 < stringToArray[i]){
            console.log("100점을 넘길수는 없습니다.");
            return;
        }
    }
    makeNewObject(stringToArray);
} 

const solution = (str) => {
    _split(str);
}

solution("55 97 86 75 66 55 95 97 85 97 97 95 95 95 83");
solution("97 86 75 66 55 97 85 97 97 95");