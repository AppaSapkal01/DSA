function hollowRightTriangle(num) {
    for(let i = 1; i <= num; i++) {
        let rows = '';

        for(let j = 1; j <= num; j++) {
            if(i === num || j === 1 || i === j) {
                rows += '*'
            } else {
                rows += ' '
            }
        }
        console.log(rows)
    }
}
hollowRightTriangle(5)
