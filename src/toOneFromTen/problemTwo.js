// let array = [200, 100, 300]; 

// const solution = (arr) => {
//   arr.splice(2, 0, 10000);
//   return arr;
// };

//추상화 및 함수 작게
// const _push_number = (array, add_number, index) => {
//   //자릿수가 배열보다 클 때 배열끝에 추가
//   let length_number = array.length;
//   console.log("length_number = ", length_number);
//   array[length_number] = add_number;
//   return array;
// }

// const replace_array = (array, index) => {//현재 배열 복사
//   let new_array= [];
//   // index -1 < 0 ? index= 0 : index;
//   // console.log("index = ",index);
//   for(let i=index; i<array.length; i++){
//     new_array[i-index] = array[i];
//   }
//   return new_array;
// } //2가지 기능이 있다 쪼개야함

// const _splice_number = (array, add_number, index) => {//
//   let count= 0;
//   let insertion_array= [];
//   insertion_array= replace_array(array,index);
//   console.log("insertion_array = ",insertion_array);
//   console.log("insertion_array_length = ",insertion_array.length);
//   if(index-1 < 0){
//     array[0]= add_number;
//     console.log("array[index] = ",array[index]);
//     index=1;
//   }else{
//     array[index] = add_number;
//     console.log("array[index] = ",array[index]);
//   }
//   for(let i=index; i<insertion_array.length+index; i++){
//     array[i] = insertion_array[count];
//     count++;
//   }
//   console.log("array = ",array);
//   return array;
// }



// const solution = (array, add_number, index) =>
// index >= array.length ?
// _push_number(array, add_number, index) :
// _splice_number(array, add_number, index);

/* const solution = (arr, add_number, index) => { 
  let replace=[];
  let count=0;

  for(let i=index; i<arr.length; i++){
    replace.push(arr[i]);
  }

  console.log(replace);

  arr[index] = add_number;

  for(let i = 0; i < replace.length; i++){//arr.length + 1; i++){
    arr.push(replace[count]);
    // arr[i] += replace[count];
    count++;
  }

  return arr.length <= index ? // 추가할 자리보다 길이가 짧으면
  (arr[arr.length] = add_number) : //끝자리에 숫자를 추가
  arr //arr반환
} */

let array = [200, 300, 400, 500, 600];

const solution = (array, addNumber, index) => {
  if(index>array.length){
    array[array.length]=addNumber;
  }
  else{
    let includeAddNumberArray=[];
    if(index==0){
      for(let i=0; i<array.length; i++){
        includeAddNumberArray[i+1] = array[i]; 
      }
      includeAddNumberArray[0]=addNumber;
      return includeAddNumberArray;
    }
    else{
      for(let i=0; i<array.length+1; i++){
        if(i<index){
          includeAddNumberArray[i]=array[i];
          console.log("i<index includeArray = ", includeAddNumberArray);
        }else if(i==index){
          includeAddNumberArray[i]=addNumber;
          console.log("i == index includeArray = ", includeAddNumberArray);
        }else if(i>index){
          console.log("array[",i,"] = ",array[i]);
          includeAddNumberArray[i] = array[i-1];
          console.log("i>index includeArray = ", includeAddNumberArray);
        }
      }
      return includeAddNumberArray;
    }
  }
}
// const whatisindex = (index) => {
//   index == 0 ?   
// }

// const insertNumber = (array, add_number, index) => {

// }

// const pushNumber = (array, add_number, index) =>
// index >= array.length ?
// array[array.length] = add_number :
// //false 일때 과정을 적어야함
// }

export default solution;