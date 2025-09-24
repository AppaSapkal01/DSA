function countOccurrences(arr, num) {
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        if(num === arr[i]) 
            count++;
    }

    return count;
}

let ans = countOccurrences([1, 3, 3, 4, 2, 7, 6, 8, 2, 1, 4, 3, 3], 8)

console.log(ans);

