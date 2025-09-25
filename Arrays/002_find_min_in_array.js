function minNumInArr(numArr) {
    let minNum = Number.POSITIVE_INFINITY;

    for(let i = 0; i < numArr.length; i++) {
        if(numArr[i] < minNum) {
            minNum = numArr[i]
        }
    }
    return minNum;
}

const ans = minNumInArr([7, 90, 6, 1, 9])

console.log(ans)

