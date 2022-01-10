// Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune
// 한글 이름 입력 시 영어 이름을 반환하는 프로그램

const solution = (koreagalaxy) => {
    switch(koreagalaxy){
        case "수성": console.log("Mercury");
            break;
        case "금성": console.log("Venus");
            break;
        case "지구": console.log("Earth");
            break;
        case "화성": console.log("Mars");
            break;
        case "목성": console.log("Jupiter");
            break;
        case "토성": console.log("Saturn");
            break;
        case "천왕성": console.log("Uranus");
            break;
        case "해왕성": console.log("Neptune");
            break;
    }
}

solution("수성");
solution("해왕성");