function isPrimeNumber(num) {
    if (num <= 1) {
        console.log(`num ${num} isn't prime number`);
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(`num ${num} isn't prime number`);
            return;
        }
    }

    console.log(`num ${num} is prime number`);

}

isPrimeNumber(2)