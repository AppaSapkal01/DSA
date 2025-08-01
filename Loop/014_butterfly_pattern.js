function butterflyPattern(num) {
    for(let i = 1; i <= num; i++) {
        let rows = '';

        for(let j = 1; j <= i; j++) {
            rows += '*'
        }

        for(let k = 1; k <= 2 * (num - i + 1) - 2; k++) {
            rows += ' '
        }

        for(let l = 1; l <= i; l++) {
            rows += '*'
        }
        console.log(rows)
    }

    for (let i = 1; i <= num - 1; i++) {
        let rows = '';

        for(let j = i; j <= num - 1; j++) {
            rows += '*'
        }

        for(let k = 1; k <= i * 2; k++) {
            rows += ' '
        };

        for(let l = i; l <= num - 1; l++) {
            rows += '*'
        }

        console.log(rows)
    }
}

butterflyPattern(5)
