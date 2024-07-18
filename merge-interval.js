var merge = function (intervals) {
    if (!intervals?.length) {
        return [];
    }

    intervals.sort((a, b) => a[0] - b[0]);

    const resArr = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currInterval = intervals[i];
        const lastInterval = resArr[resArr.length - 1];
        if(currInterval[0] <= lastInterval[1]) {
            lastInterval[1] = Math.max(lastInterval[1], currInterval[1]);
        } else {
            resArr.push(currInterval);
        }
    }
    return resArr;
};

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

