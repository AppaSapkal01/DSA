function diamondPattern(num) {
    // upper half
    for(let i = 1; i <= num; i++) {
        let rows = '';

        for(let j = 1; j <= num - i; j++) {
            rows += ' ';
        }

        for(let k = 1; k <= (i * 2) - 1; k++) {
            rows += '*';
        }
        console.log(rows)
    }

    // lower half
    for(let p = 1; p <= num - 1; p++) { 
        let rows = '';

        for(let m = 1; m <= p; m++) { 
            rows += ' ';
        }

        for(let n = 1; n <= 2 * ((num - 1) - p + 1) - 1; n++) { 
            rows += '*'
        }
        console.log(rows)
    }
}

diamondPattern(4)
