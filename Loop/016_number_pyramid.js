function numberPyramid(num) {
    for (let i = 1; i <= num; i++) {
        let rows = '';

        for (let j = 1; j <= num - i; j++) {
            rows += ' ';
        }

        for (let k = 1; k <= i; k++) {
            rows += k;
            if (k < i) rows += ' '; // add space only between numbers

        }

        console.log(rows)
    }
}

numberPyramid(4)

/*

   1
  1 2
 1 2 3
1 2 3 4

   1 
  1 2
 1 2 3
1 2 3 4



*/