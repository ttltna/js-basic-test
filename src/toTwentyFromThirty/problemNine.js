// 주어진 알파벳 하나만을 입력하고 그 알파벳이 대문자면 YES 아니면 NO를 출력

const solution = (str) => 65<=str.charCodeAt(0) && str.charCodeAt(0)<=89 ?
    console.log("YES") : console.log("NO")

solution("a");
solution("A");
solution("b");
solution("B");
solution("c");
solution("C");