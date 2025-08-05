function reverseNumber(num) {
    let temp = num;
    let rev = 0;
    while (temp > 0) {
        console.log('temp', temp)
        let digit = temp % 10;
        rev = rev * 10 + digit;
        temp = Math.floor(temp / 10);
    }

    console.log(rev)
}

reverseNumber(1234)