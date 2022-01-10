// 입력 176 156 155 165 166 169
// 출력 No

// 입력 155 156 165 166 169 176
// 출력 No

const solution = (key) => {
    let boll= 0;
    key = key.split(" ");
    for(let i=0; i<key.length; i++){
        for(let j=i; j<key.length; j++){
            if(key[i] > key[j]){
                console.log("NO");
                return;
            }
        }
    }
    console.log("YES");
}

solution("1 2 3 4 5");
solution("5 1 2 3 4");
solution("4 5 1 2 3");
solution("3 4 5 1 2");
solution("2 3 4 5 1");

// solution("20 10 5");
// solution("15 20 35 10 12");
// solution("1 2 3 4 5 6");
// solution("176 156 155 165 166 169");
// solution("155 156 165 166 169 176");