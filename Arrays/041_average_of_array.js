function avgOfArr(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    let avg = sum / arr.length;
    return avg
}

let ans = avgOfArr([1, 2, 3, 4, 5, 6])

console.log(ans)