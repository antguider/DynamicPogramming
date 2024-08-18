function findMissingNumber(arr) {
    arr.sort((a, b) => a - b);
    const missNumbers = [];
    let nextval = arr[0] + 1;
    for (let i = 1; i < arr.length; i++) {
        while(nextval < arr[i]) {
            missNumbers.push(nextval);
            nextval++;
        }
        nextval++;
    }
    return missNumbers
}

const res = findMissingNumber([1, 2, 4, 5, 9]);
console.log('res', res);