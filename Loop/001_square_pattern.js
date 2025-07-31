function squarePattern(num) {
    for(let i = 0; i < num; i++) {
        let rows = '';

        for(let j = 0; j < num; j++) {
            rows += '*';
        }

        console.log(rows)
    }
}

squarePattern(5);