function chunk(array, limit) {
    const chunkArr = [];
    let start = 0;
    for (let i = 0; i < array.length / limit; i++) {
        let end = start + limit;
        chunkArr.push(array.slice(start, end))
        start = end;
    }
    return chunkArr;
}
const res = chunk([1, 2, 3, 4, 5, 6, 7], 5);
console.log(res);