function sortArray(arr) {

    // Method 1: selection sort (brute force approch)
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
}

const ansArr = sortArray([9, 2, 3, 4, 5, 78, 1, 67, 9, 65, 11, 79]);

console.log(ansArr)