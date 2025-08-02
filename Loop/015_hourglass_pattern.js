function hourglassPatterns(num) {
    // upper half
    for(let i = 1; i <= num; i++) {
        let rows = '';

        for(let j = 1; j <= i - 1; j++) {
            rows += ' ';
        }

        for(let k = 1; k <= 2 * (num - i + 1) - 1; k++) {
            rows += '*'
        }
        console.log(rows)
    }

    for(let i = 2; i <= num; i++) { 
        let rows = ''

        for(let j = 1; j <= num  - i; j++) { 
            rows += ' ';
        }

        for(let k = 1; k <= (i * 2) - 1; k++) {
            rows += '*'
        }

        console.log(rows)
    }
};

hourglassPatterns(5);
