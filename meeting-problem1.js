const canAttendMeeting = (intervals) => {
    if (!intervals?.length) {
        return false;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    let currMeetingEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        let nextMeetingStart = intervals[i][0];
        if (currMeetingEnd > nextMeetingStart) {
            return false;
        }
        currMeetingEnd = intervals[i][1];
    }
    return true;
}





console.log(canAttendMeeting([[0, 30], [5, 10], [15, 20]])); // Output: false
console.log(canAttendMeeting([[7, 10], [2, 4]])); // Output: true
