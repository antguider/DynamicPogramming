function mergeArray(arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    const resArr = [];
    for(let i = 0, j = 0; i < arr1.length; ) {
        console.log('i', i)
    }

    

}

const res = mergeArray([2, 4, 1], [7, 5, 3]);
console.log("res", res);
