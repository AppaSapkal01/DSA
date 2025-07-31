function sameNumberTriangle(num) {
    for(let i = 1; i <= num; i++) {
        let rows = '';

        for(let j = 1; j <= i; j++) {
            rows += i;
        }

        console.log(rows)
    }
};

sameNumberTriangle(5)