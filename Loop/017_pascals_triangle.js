function pascalsTriangle(num) {
    let triangle = [];

    for (let i = 0; i < num; i++) {
        let row = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);  
            } else {
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }
        triangle.push(row);
        let spaces = ' '.repeat(num - i - 1);
        console.log(spaces + row.join(' '));
    }
}

pascalsTriangle(5);
