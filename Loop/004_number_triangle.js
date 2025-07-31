function numberTriangle(num) {
    for(let i = 1; i <= num; i++) {
        let rows = '';

        for(let j = 1; j <= i; j++) {
            rows += j
        }

        console.log(rows)
    }
}

numberTriangle(5);