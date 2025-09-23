function powerOfNum(num, pow) {
    let ans = 1;
    if (pow === 0) {
        console.log(`${num} to the power of ${pow} is: ${ans}`)
        return;
    }

    for (let i = 1; i <= pow; i++) {
        ans *= num
    }

    console.log(`${num} to the power of ${pow} is: ${ans}`)
}

powerOfNum(5, 2)
powerOfNum(2, 3)
powerOfNum(5, 0)
powerOfNum(10, 2)