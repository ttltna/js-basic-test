// a, b 두수를 입력 받아 2020년 a월 b일이 무슨 요일인지 리턴
// 요일의 각 명칭은 SUN, MON, TUE, WED, THU, FRI, SAT

// a는 월의 갯수를 넘어가지 않는다.
// b는 각 달의 일의 갯수를 넘어가지 않는다.

const checkMonth = (month) => {
    if(month > 0 &&  month < 13){
        return month;
    }else{
        console.log(month,"월이 존재하지 않는 월입니다. 다시 입력해 주세요.")
        return false;
    }
}

// const checkDay = (month, day) => {
//     if(day<1){ //day가 1보다 적을때
//         console.log("1일보다 적을순 없습니다. 다시 입력해주세요.");
//         return false;
//     }

//     if(month === 2 && day > 30){ //2월 29일 검사
//         console.log(month,"월은 29일이 끝입니다.");
//         return false;
//     }

//     if(month % 2 === 0 && month<7){//4,6월일때
        
//     }
// }

const CheckDay = (month,day) => {
    if(day < 1){
        console.log("1일보다 큰 날을 입력해 주세요.");
        return false;
    }
    // switch(month){
    //     case 2: day>29 ? console.log("2월은 29일이 끝입니다.") : console.log(`${month}월 ${day}일 입니다.`);
    //         break;
    //     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    //         if(day>31){
    //             console.log(`${month}월은 31일을 넘길수 없습니다.`);
    //             return false;
    //         }else{
    //             console.log(`${month}월 ${day}일 입니다.`);
    //             return day;
    //         }
    //         break;
    //     case 4: case 6: case 9: case 11:
    //         day>30 ? console.log(`${month}월은 30일을 넘길수 없습니다.`) : console.log(`${month}월 ${day}일 입니다.`);
    //     break;
    // }
    // return day;
    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        if(day>31){
            console.log(`${month}월은 31일을 넘길수 없습니다.`);
            return false;
        }else{
            console.log(`${month}월 ${day}일 입니다.`);
            return day;
        }
    }else if(month === 4 || month === 6 || month === 9 || month === 11){
        if(day>30){
            console.log(`${month}월은 31일을 넘길수 없습니다.`);
            return false;
        }else{
            console.log(`${month}월 ${day}일 입니다.`);
            return day;
        }
    }else if(month === 2){
        if(day>29){
            console.log(`${month}월은 31일을 넘길수 없습니다.`);
            return false;
        }else{
            console.log(`${month}월 ${day}일 입니다.`);
            return day;
        }
    }else{
        return false;
    }
}

const weeks = (month, day) => {
    if(month===false || day === false){
        return false,false;
    }
    let oneweeks = [
        ["WED","THU","FRI","SAT","SUN","MON","TUE"],//1
        ["SAT","SUN","MON","TUE","WED","THU","FRI"],//2
        ["SUN","MON","TUE","WED","THU","FRI","SAT"],//3
        ["WED","THU","FRI","SAT","SUN","MON","TUE"],//4
        ["FRI","SAT","SUN","MON","TUE","WED","THU"],//5
        ["MON","TUE","WED","THU","FRI","SAT","SUN"],//6
        ["WED","THU","FRI","SAT","SUN","MON","TUE"],//7
        ["SAT","SUN","MON","TUE","WED","THU","FRI"],//8
        ["TUE","WED","THU","FRI","SAT","SUN","MON"],//9
        ["THU","FRI","SAT","SUN","MON","TUE","WED"],//10
        ["SUN","MON","TUE","WED","THU","FRI","SAT"],//11
        ["TUE","WED","THU","FRI","SAT","SUN","MON"] //12
    ]
    let replaceDay = day-1;
    if(day-1 < 0){
        replaceDay = 6;
    }
    if(day > 7 && day % 7 !== 0){
        replaceDay = (day % 7)-1;
    }else if(day % 7 === 0){
        replaceDay = 6;
    }
    // console.log(oneweeks[month-1][replaceDay]);
    return (oneweeks[month-1][replaceDay]);
}

const solution = (month,day) => {
    let rm, rd;
    rm = checkMonth(month);
    rd = CheckDay(rm,day);
    console.log(weeks(rm,rd));
}

solution(0,12);
solution(13,12);
solution(3,5);
solution(2,21);
solution(11,27);
solution(11,1);
solution(1,0);
solution(2,0);
solution(3,0);
solution(2,30);
solution(2,29);
// solution(3,32);
// solution(4,31);
solution(4,30);
solution(7,28);
// solution(7,32);