function countDigits(num) {
    let tempNum = num;
    let digits = 0;

    while(tempNum > 0) {
        tempNum = Math.floor(tempNum / 10);
        digits++;
    }

    console.log(`count of Digits in given num: ${num} are ${digits}`)
}

countDigits(126778);