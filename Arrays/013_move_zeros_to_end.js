function moveZerosToEnd(numsArr) {
    let i = 0; 

    for(let j = 0; j < numsArr.length; j++) {
        if(numsArr[j] !== 0) {
            numsArr[i] = numsArr[j];
            i++;
        }
    }

    while(i < numsArr.length) {
        numsArr[i] = 0;
        i++
    }

    return numsArr;
}

const ans = moveZerosToEnd([0, 2, 3, 0, 0, 1, 1, 2]);

console.log(ans)