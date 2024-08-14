const arr = [1,2,3, [4, [5, 6]], 7, 8, 9];

const flatArray = [];
function flattenArray(currArr) {
     currArr.forEach((item) => {
        if(typeof item === 'number') {
            flatArray.push(item);
        } else {
            flattenArray(item);
        }
    });
}
flattenArray(arr);
console.log(flatArray)