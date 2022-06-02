//Find duplicate number in the interger array

function getDuplicate(intArr) {
  const visited = {};
  for (const int of intArr) {
    if (visited[int]) {
      return int;
    }
    visited[int] = true;
  }
  return null;
}

const input = [1, 2, 3, 3, 3, 5, 8];
const result = getDuplicate(input);
console.log("result", result);
