const arr = [7, 1, 5, 3, 6, 4];

// Time Complexity = O(n^2)
const findMaxProfitSol1 = (arr) => {
    let maxProfit = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            let profit = arr[j] - arr[i];
            if(profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

console.log('using brute force approach', findMaxProfitSol1(arr))


//Time Complexity = O(n)
const findMaxProfitSol2 = (arr) => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i = 0; i < arr.length; i++) { 
        if(arr[i] < minPrice) { 
            minPrice = arr[i];
        } else if (arr[i] - minPrice > maxProfit) { 
            maxProfit = arr[i] - minPrice;
        }
    }
    return maxProfit;
}

console.log('using optimized approach', findMaxProfitSol2(arr));