var eraseOverlapIntervals = function (intervals) {
    if (!intervals?.length) {
        return 0;
    }

    let count = 0;
    intervals.sort((a, b) => a[0] - b[0]);

    let end = intervals[0][1];
    console.log('end', end);

    for (let i = 1; i < intervals.length; i++) {
        let currInterval = intervals[i];
        let startInterval = currInterval[0];
        let endInterval = currInterval[1];
        if(startInterval < end) {
            count++;
            end = Math.min(endInterval, end);
        } else {
            end = endInterval;
        }
    }
    return count;
};


const input1 = [[1, 100], [1, 2], [2, 4], [4, 5]];
const input2 = [[1, 3], [1, 2], [2, 4], [4, 5]];

const output = eraseOverlapIntervals(input1);
console.log('output', output);