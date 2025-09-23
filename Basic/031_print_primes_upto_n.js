function PrintPrimesUptoN(num) {
    for (let i = 2; i <= num; i++) {
        if (checkPrimeHelperFun(i)) {
            console.log(i)
        }
    }

}

PrintPrimesUptoN(30)

function checkPrimeHelperFun(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}