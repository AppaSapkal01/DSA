function maxNumInArray(numArr) {
    let maxNum = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < numArr.length; i++) {
        if(numArr[i] > maxNum) {
            maxNum = numArr[i];
        }
    }

    return maxNum
};

const ans = maxNumInArray([2, 5, 7, 1, 19, 7]);

console.log(ans)