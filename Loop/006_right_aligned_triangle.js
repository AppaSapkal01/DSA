function rightAlignedTriangle(num) {
    for(let i = 1; i <= num; i++) {
        let rows = '';

        for(let j = 1; j <= num - i; j++) {
            rows += ' '
        };

        for(let k = 1; k <= i; k++) {
            rows += '*'
        }

        console.log(rows)
    }
}

rightAlignedTriangle(5)