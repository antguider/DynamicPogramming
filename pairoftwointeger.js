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
      // k-element --> first and element second pair
      return true;
    } else {
      console.log("visited", visited);
      visited[element] = true;
    }
  }
  return false;
}
