function sumOfArr(arr) {
    let sum = 0;

    // 1st method
    // for(let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }

    // 2nd method
    sum = arr.reduce((acc, curr) => acc + curr, 0);


    return sum;
}

let ans = sumOfArr([1, 2, 3, 4, 5]);

console.log(ans);