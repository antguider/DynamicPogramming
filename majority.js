var majorityElement = function(nums) {
    let count = 0, maj = 0;
    for (let n of nums) {
        console.log(`maj - ${maj}  n - ${n}`)
        if (count === 0) {
            maj = n;
        }
        if (maj === n) {
            count++;
        } else {
            count--;
        }
        console.log('count', count)
    }
    console.log('res', maj)
    return maj;
};

majorityElement([2,2,3,2,1,1,1]);