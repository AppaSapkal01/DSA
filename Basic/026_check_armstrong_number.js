function isArmStrongNumber(num) {
    let tempNum = num;
    let totalDigit = 0;

    while (tempNum > 0) {
        tempNum = Math.floor(tempNum / 10);
        totalDigit++;
    }

    let sum = 0;
    let temp = num
    while (temp > 0) {
        let digit = temp % 10;
        sum += power(digit, totalDigit);
        temp = Math.floor(temp / 10);
    }

    if (sum === num) {
        console.log(`${num} is Armstrong number`)
    } else {
        console.log(`${num} is not Armstrong number`)
    }
}

isArmStrongNumber(153)
isArmStrongNumber(123)

function power(num, pow) {
    let res = 1;

    for (let i = 1; i <= pow; i++) {
        res *= num;
    }
    
    return res;
}

