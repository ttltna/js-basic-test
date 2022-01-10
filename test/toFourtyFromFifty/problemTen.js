// 버블정렬 구현하기
const bubbleSort = (arr) => {
    let noSwaps;

    if (Array.isArray(arr) && arr.length !== 0){
        arr = arr.map(e => parseInt(e))
        for (let i = arr.length; i > 0; i--) {
            noSwaps = true;
            for (let j = 0; j < i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    noSwaps = false;
                }
            }
        if (noSwaps) break;
        }
        return arr;
    } else {
        return 'This is not Array Please input array parameter'
    }
}
