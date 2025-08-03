function zPattern(num) {
    for(let i = 1; i <= num; i++) {
        let row = '';

        for(let j = 1; j <= num; j++) {
            if(i === 1 || i === num) {
                row += '*';
            } else if (j === num - i + 1) {
                row += '*'
            } else {
                row += ' '
            }
        }

        console.log(row)
    }
}

zPattern(5)
