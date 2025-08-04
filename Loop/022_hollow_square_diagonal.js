function hollowSquareDiagonal(num) {
    for(let i = 1; i <= num; i++) {
        let row = '';

        for(let j = 1; j <= num; j++) {
            if(j === 1 || j === num || j === i || j === (num - i) + 1) {
                row += '*'
            } else {
                row += ' '
            }
        }
        console.log(row)
    }
}
hollowSquareDiagonal(5);