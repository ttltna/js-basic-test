// 중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶다
// 실제 접수 인원을 출력

// const people = [ // way 1
//   ("이호준", "01050442903"),
//   ("이호상", "01051442904"),
//   ("이준호", "01050342904"),
//   ("이호준", "01050442903"),
//   ("이준", "01050412904"),
//   ("이호", "01050443902"),
//   ("이호준", "01050442903"),
// ];

const people = [  // way 2
  ["이호준", "01050442903"],
  ["이호상", "01051442904"],
  ["이준호", "01050342904"],
  ["이호준", "01050442903"],
  ["이준", "01050412904"],
  ["이호", "01050443902"],
  ["이호준", "01050442903"],
];

const solution = (arr) => {
  let removeDuplication = {};
  //way 1
  // for(let i=0; i<arr.length; i++){
  //   if(arr[i] in removeDuplication){
  //     removeDuplication[arr[i]] += 1;
  //   }else{
  //     removeDuplication[arr[i]] = 1;
  //   }
  // }
  
  // //way 2 
  for(let i=0; i<arr.length; i++){
    removeDuplication[arr[i][0]] = arr[i][1];
  }
  console.log(removeDuplication);
}

solution(people);

