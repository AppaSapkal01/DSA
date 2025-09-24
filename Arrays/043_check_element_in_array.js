function elementInArr(arr, num) {
    // method 1
    // for(let i = 0; i < arr.length; i++) {
    //     if(num === arr[i]) 
    //         return true
    // }
    // return false

    // method 2
    let ans = false;
    arr.forEach((el) => {
        if (num === el) {
            ans = true;
        }
    })
    return ans
};

let ans = elementInArr([1, 37, 87, 9, 5, 6], 80)

console.log(ans)