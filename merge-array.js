function mergeArray(arr1, arr2) {

    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)

    const resArr = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            resArr.push(arr1[i]);
            i++;
        } else {
            resArr.push(arr2[j]);
            j++;
        }
    }

    //Merge remaning
    while(i < arr1.length) {
        resArr.push(arr1[i])
        i++
    }

    while(j < arr2.length) {
        resArr.push(arr2[j])
        j++
    }

 return resArr;
}

const res = mergeArray([2, 4, 1], [7, 5, 3]);
console.log("res", res);
