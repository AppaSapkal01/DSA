function intersectionOfArrays(arr1, arr2) {
    const ansArr = [];
    // for duplicate elements in ans array
    // for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //         if (arr1[i] === arr2[j]) {
    //             ansArr.push(arr1[i]);
    //         }
    //     }
    // }

    // for unique elements in ans array
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if(!checkNumInArray(ansArr, arr1[i]))
                    ansArr.push(arr1[i]);
            }
        }
    }

    return ansArr;
}

const arr1 = [1, 2, 2, 3, 4]
const arr2 = [2, 2, 4, 6]

const ans = intersectionOfArrays(arr1, arr2);
console.log(ans);

function checkNumInArray(arr, find) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === find) {
            return true;
        }
    }
    return false;
}