function fullPyramid(num) {
    for(let i = 1; i <= num; i++) {
        let rows = '';

        for(let j = 1; j <= num - i; j++) {
            rows += ' ';
        }

        for(let k = 1; k <= i * 2 - 1; k++) {
            rows += '*';
        }
        
        console.log(rows)
    }
}

fullPyramid(4)