const inputArr = [5, 2, 3, 8];
const pairvalues = 5;
const pair = findPair(inputArr, pairvalues);
console.log("pair", pair);

function findPair(arr, k) {
  let visited = {};
  for (const element of arr) {
    if (visited[k - element]) {
      return true;
    } else {
      visited[element] = true;
    }
  }
  return false;
}
