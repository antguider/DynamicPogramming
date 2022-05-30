//Find the pair that sums upto k

//Solution 1
// function hasSumValue(inputArr, pairvalue) {
//     for(let i= 0; i < inputArr.length; i++) {
//         for(let j = i+1; j < inputArr.length; j++) {
//             const joinedValue = inputArr[i] + inputArr[j];
//             if(joinedValue === pairvalue) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// function hasSumValue(inputArr, pairvalue) {
//   const sortedArray = inputArr.sort((a, b) => a - b);
//   console.log("sortedArray", sortedArray);
//   let end = sortedArray.length - 1,
//     start = 0;
//   return findTotal(sortedArray, start, end, pairvalue);
// }

// function findTotal(sortedArray, start, end, pairvalue) {
//   console.log(start, end);
//   const total = sortedArray[start] + sortedArray[end];
//   console.log(total + "pairvalue=" + pairvalue);
//   if (total > pairvalue) {
//     return findTotal(sortedArray, start, --end, pairvalue);
//   } else if (total < pairvalue) {
//     return findTotal(sortedArray, ++start, end, pairvalue);
//   } else if (Number(total) === Number(pairvalue)) {
//     return true;
//   }
//   return false;
// }

const inputArr = [5, 6, 3, 4];
const pairvalues = 7;
const pair = findPair(inputArr, pairvalues);
console.log("pair", pair);

function findPair(arr, k) {
  let visited = {};
  //   arr.forEach((element) => { //For Each won't break at any case
  for (const element of arr) {
    console.log("k-element", element);
    if (visited[k - element]) {
      console.log("visited", visited);
      return true;
    } else {
      console.log("visited", visited);
      visited[element] = true;
    }
  }
  return false;
}
