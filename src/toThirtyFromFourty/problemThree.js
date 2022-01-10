// 입력 1 2 3 4 5
// 출력 5 4 3 2 1

// 입력 2 4 6 7 8
// 출력 8 7 6 4 2

const solution = (string) => {
    let replaceString= [];
    string = string.split(" ");
    let count = string.length-1;

    for(let i=0; i<string.length; i++){
        replaceString[count] = string[i];
        count--;
    }

    replaceString = replaceString.join(" ");
    console.log("replaceString is = ", replaceString);
}

solution("1 2 3 4 5");
solution("2 4 6 7 8");
solution("kim tae won");