function invertedRightAngleTriangle(num) {
    for(let i = 0; i < num; i++) {
        let rows = '';

        for(let j = i; j < num; j++) {
            rows += '*';
        }

        console.log(rows)
    }
}

invertedRightAngleTriangle(5)