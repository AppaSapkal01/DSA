function spiralPattern(num) {
    let arr = Array.from({ length: num }, () => Array(num).fill(0)); 

    let top = 0, bottom = num - 1; 
    let left = 0, right = num - 1; 
    let num = 1; 

    while (top <= bottom && left <= right) { 
        // move left → right
        for (let i = left; i <= right; i++) { 
            arr[top][i] = num++;
        }
        top++;

        // move top → bottom
        for (let i = top; i <= bottom; i++) {
            arr[i][right] = num++; 
        }
        right--;

        // move right → left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                arr[bottom][i] = num++;
            }
            bottom--;
        }

        // move bottom → top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                arr[i][left] = num++;
            }
            left++;
        }
    }

/*
 1 => 0|1|2|3|
 
 0 => 1|2|3|4|
 1 => 1|2|3|5|
 2 => 1|2|3|4|
 3 => 1|2|3|4|
*/

    // print array
    for (let i = 0; i < num; i++) {
        console.log(arr[i].join(' '));
    }
}

spiralPattern(3);
