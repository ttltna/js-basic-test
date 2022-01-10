// 입력
// Javascript

// 출력
/**
 * J a
 * a v
 * v a
 * a s
 * s c
 * c r
 * r i
 * i p
 * p t
 */

const twoGram = (str) => {
    for(let i=0; i<str.length-1; i++){
        console.log(str[i],str[i+1]);
    }
}

const stringSplit = (str) => {
    str = str.split("");
    twoGram(str);
}

const solution = (str) => {
    stringSplit(str);
}

solution("Javascript");
solution("김태원");
solution("무궁화삼천리화려강산");