function binaryPattern(num) {
    for(let i = 1; i <= num; i++) { 
        let row = '';
        let val = (i % 2 === 0) ? 0 : 1

        for(let j = 1; j <= i; j++) { 
            row += val;
            val = 1 - val
        }
        console.log(row)
    }
}

binaryPattern(5)