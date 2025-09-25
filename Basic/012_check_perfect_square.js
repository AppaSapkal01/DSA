function checkPerfectSqr(num) {
    if(num >= 1 && num <= 3 ) {
        console.log(`num: ${num} is not the perfect square.`);
        return;
    }

    for(let i = 1; i <= num; i++) {

        if(num === i * i) {
            console.log(`num: ${num} is the perfect square.`);
            return;
        }
    }

    console.log(`num: ${num} is not the perfect square.`)
}

checkPerfectSqr(5)
checkPerfectSqr(4)
checkPerfectSqr(16)
checkPerfectSqr(2)
checkPerfectSqr(25)