function rightRotateArray(arr, k) {
    let n = arr.length;
    k = k % n;

    helperSwap(arr, 0, n - k - 1 );
    
    helperSwap(arr, n - k, n - 1);
    
    helperSwap(arr, 0, n - 1);
    
    return arr;

}

const ansArr = rightRotateArray([1, 2, 3, 4, 5], 2);

console.log(ansArr)

function helperSwap(arr, i, j) {
    while (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

}