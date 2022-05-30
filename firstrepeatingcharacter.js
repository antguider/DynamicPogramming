// Find first repeating character return null if it din't find



function findRepeated(str) {
    const charArr = str.split("");
    const visited = {};
    for (const char of charArr) {
        if(visited[char]) {
            return true;
        } else {
            visited[char] = true;
        }
    }
    return null;
}

const str = "esdfs";
const result = findRepeated(str);
console.log('result', result);