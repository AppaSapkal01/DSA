function hollowSquare(num) {
    for(let i = 1; i <= num; i++) {
        let rows = ''

        for(j = 1; j <= num; j++) {
            if(i === 1 || i === num || j === 1 || j === num) {
                rows += '*'
            } else {
                rows += ' '
            }
        }

        console.log(rows)
    }
}

hollowSquare(5);

