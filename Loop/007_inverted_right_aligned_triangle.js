function invertedRightAlignedTriangle(num) {
    for(let i = 1; i <= num; i++) { 
        let rows = '';

        for(let j = 1; j <= i - 1; j++) { 
            rows += ' ';
        }

        for(let k = 1; k <= num - i + 1; k++) { 
            rows += '*'; 
        }

        console.log(rows);
    }
}

invertedRightAlignedTriangle(5);