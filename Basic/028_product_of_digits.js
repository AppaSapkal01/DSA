function productOfDigits(num) {
    let tempNum = num;
    let product = 1;

    while(tempNum > 0) {
        product *= tempNum % 10;
        tempNum = Math.floor(tempNum / 10);
    }

    console.log(`product of num ${num} is ${product}`)
}

productOfDigits(193);