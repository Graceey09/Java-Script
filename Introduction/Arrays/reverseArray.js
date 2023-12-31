let array = [];

function reverseMyArray(array=[]){
let reversedArray = []
for (let index = array.length -1; index >= 0; index--){
    reversedArray.push(array[index]);
}
return reversedArray
}


function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

let arrayToReverse = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayToReverse);
console.log(reverseMyArray([1, 2, 3, 4, 5]))
console.log("Reversed Array In Place:", arrayToReverse);

