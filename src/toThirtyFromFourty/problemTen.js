// 입력
/*
50
5
20
20
20
20
20
*/

// 출력
// 2

//원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램!!
//2명이 탈 수 있다고 알려줌

const totalWeight = (weightNumber, friendsNumber, randomNumber) => {
    for(let i=1; i<=friendsNumber; i++){
        if(i===1 && weightNumber < randomNumber){
            console.log("모든 친구가 무게 제한을 넘어서 아무도 못탑니다!!");
            return 0;
        }if(i !== 1 && weightNumber < randomNumber * i){
            console.log(friendsNumber,"명 중 ",i-1,"명만 탈 수 있습니다. 남은 인원은 다음 놀이기구에 탑승 하세요!!");
            return i-1;
        }else if(i === friendsNumber){
            console.log(friendsNumber,"명 중 ",i,"명 다 놀이기구에 탈 수 있습니다!!");
            return i;
        }
    }
}

const randomWeight = (number) => {
    let friendsWeight= 0;
    friendsWeight = Math.floor((Math.random(100 - 1) * 1) * 100);
    return friendsWeight;
}

const solution = (weightLimit, friends) => {
    let friendsWeight = randomWeight(friends);
    console.log("친구들의 무게는 ",friendsWeight,"입니다.");
    totalWeight(weightLimit, friends, friendsWeight);
}

solution(50,5);
solution(300,10);
solution(1000,10);
solution(100,2);