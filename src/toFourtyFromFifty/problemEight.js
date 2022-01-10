// 입력 AAABBBcccddd
// 출력 aaabbbCCCDDD

const ascii = (str) => {
    let replaceStr = "";
    for(let i=0; i<str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){ //대문자 일때
            // console.log("대문자입니다.",str[i]);
            replaceStr += strLowCase(str[i]);
        }else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){ //소문자 일때
            // console.log("소문자입니다.",str[i]);
            replaceStr += strUpCase(str[i]);
        }else if(str.charCodeAt(i) === 32){ //띄어쓰기 일때(Space Var)
            replaceStr += " ";
        }else{
            console.log("알파벳만 입력해 주세요.");
            return false;
        }
    }
    console.log("입력한 문자 = ", str);
    console.log("대소문자 바꾼 문자 = ", replaceStr);
    return replaceStr;
}

const strUpCase = (char) => {
    let charUpCase;
    // console.log("strUpCase charCodeAt : ",char.charCodeAt(0)); //현재 들어온 대문자의 아스키코드값 출력
    charUpCase = String.fromCharCode(char.charCodeAt(0) - 32);
    // console.log("strUpcase charUpcase : ",charUpCase); // 소문자로 바꾼 아스키코드값 출력
    return charUpCase;
}

const strLowCase = (char) => {
    let charLowCase;
    // console.log("strLowCase charCodeAt",char.charCodeAt(0)); // 현재 들어온 소문자의 아스키코드값 출력
    charLowCase = String.fromCharCode(char.charCodeAt(0) + 32);
    // console.log("strLowCase charLowCase : ",charLowCase) // 대문자로 바꾼 아스키코드값 출력
    return charLowCase;
}

const solution = (str) => {
    return ascii(str);
}

solution("AAABBBcccddd");
solution("aaabbbCCCDDD");
solution("!@#A#AC");
solution("A!@#A#AC");
solution("KimTaeWon");
solution("Kim Tae Won");