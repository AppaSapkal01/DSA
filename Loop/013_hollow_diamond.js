function hollowDiamond(num) {
    // Upper half
    for (let i = 1; i <= num; i++) { 
        let row = '';

        // spaces
        for (let j = 1; j <= num - i; j++) { 
            row += ' '; // 2 spaces
        }

        // stars and spaces inside
        for (let k = 1; k <= (2 * i - 1); k++) { 
            if (k === 1 || k === (2 * i - 1)) {  
                row += '*'; 
            } else {
                row += ' '; 
            }
        }
        console.log(row);
    }

    // Lower half
    for (let i = num - 1; i >= 1; i--) {
        let row = '';

        // spaces
        for (let j = 1; j <= num - i; j++) {
            row += ' ';
        }

        for (let k = 1; k <= (2 * i - 1); k++) {
            if (k === 1 || k === (2 * i - 1)) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

hollowDiamond(4);
