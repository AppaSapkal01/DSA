function reverseArr(arr) {
    let ansArr = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        ansArr.push(arr[i]);
    }

    return ansArr
}

let ans = reverseArr([1, 2, 3, 4, 5]);

console.log(ans)