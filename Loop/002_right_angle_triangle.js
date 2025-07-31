function rightAngleTriangle(num) {
    for(let i = 0; i < num; i++) {
        let rows = '';

        for(let j = 0; j <= i; j++) {
            rows += '*'
        }

        console.log(rows)
    }
}

rightAngleTriangle(5)