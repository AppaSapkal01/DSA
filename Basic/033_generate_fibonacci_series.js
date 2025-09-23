function generateFibSeries(num) {
    const fibArr = [0, 1];

    if(num === 1) {
        console.log(fibArr[0]);
        return;
    } 


    for(let i = 3; i <= num; i++) {
        let nextNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];

        fibArr.push(nextNum);
    }

    fibArr.forEach((i) => console.log(i))
}

generateFibSeries(1)