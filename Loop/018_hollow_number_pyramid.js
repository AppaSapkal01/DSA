function hollowNumberPyramid(num) {
    for(let i = 1; i <= num; i++) {
        let row = '';

        for(let j = 1; j <= num - i; j++) {
            row += ' ';
        };

        for(let k = 1; k <= i; k++) { 
            if(k === 1 || k === i || i === num) {
                row += k 
            } else {
                row += ' ' 
            }

            if(k < i) {
                row += ' '
            }
        }
        console.log(row)
    }
}
hollowNumberPyramid(4);
