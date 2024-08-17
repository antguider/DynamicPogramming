//Remove duplicate from the integer array

function removeDuplicate(intArr) {
    const sortedArray = intArr.sort((a, b) => a-b);
    let currInt = sortedArray[0];
    const newArray = [currInt];
    for (const int of sortedArray) {
        if(currInt !== int) {
            newArray.push(int);
        }
        currInt = int;
    }
    return newArray;
}

// function removeDuplicate(intArr) {
//     const visited = {};
//     for (const int of intArr) {
//         visited[int] = true;
//     }
//     return Object.keys(visited).map(x => parseInt(x));
// }

const input = [2, 4, 4,4, 44, 121 , 33];
const result = removeDuplicateUsingHashTable(input);
console.log('result', result); 

