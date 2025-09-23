function checkFibNumber(num) {

    if (num === 0 || num === 1) {
        console.log(`${num} is fibonacci no.`);
        return;
    }

    const fibArr = [0, 1];

    for(let i = 1; i <= num; i++) {
        let nextNum = fibArr[i - 1] + fibArr[i];
        if(nextNum > num) {
            console.log(`${num} is not a fibonacci no.`);
            return;
        }

        if(nextNum === num) {
            console.log(`${num} is fibonacci no.`);
            return;
        }

        fibArr.push(nextNum)
    }

}

checkFibNumber(10); 
checkFibNumber(8);  
checkFibNumber(21); 
checkFibNumber(1);  
