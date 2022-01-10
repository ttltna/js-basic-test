/*
입력 : querty
출력 : euerty

입력 : hqllo my namq is hyqwon
출력 : hello my name is hyewon
*/


const tempFn = (array) => {
    for(let i=0; i<array.length; i++){
        if(array[i] === 'q'){
            array[i] = 'e';
        }
    }
    console.log(array);
    console.log(array.join(""));
}

const _split = (str) => {
    let newArray = str.split("");
    return tempFn(newArray);
}

const solution = (str) => {
    return _split(str);
}

solution("querty");
solution("hqllo my namq is hyqwon");