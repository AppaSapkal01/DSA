function mergeSortedArray(arr1, arr2) {
    let m = arr1.length; 
    let n = arr2.length;
    let i = 0, j = 0;

    const ansArr = [];

    while(i < m && j < n) {
        if(arr1[i] <= arr2[j]) {
            ansArr.push(arr1[i]);
            i++;
        } else {
            ansArr.push(arr2[j]);
            j++;
        }
    }

    while(i < m) {
       ansArr.push(arr1[i++])
    }

    while(j < n) {
        ansArr.push(arr2[j++])
    }

    return ansArr
    
}

const ans = mergeSortedArray([1, 2, 3], [2, 3, 4]);

console.log(ans)
