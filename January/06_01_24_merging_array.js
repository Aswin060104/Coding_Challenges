function merge(intervals) {
    intervals = intervals.sort(function (a, b) { return a[0] - b[0]; });
    var ans = [];
    var start = intervals[0][0];
    var end = intervals[0][1];
    var pointer = 1;
    while (pointer < intervals.length) {
        console.log(start, end, pointer);
        if (end < intervals[pointer][0]) {
            ans.push([start, end]);
            start = intervals[pointer][0];
            end = intervals[pointer][1];
            pointer++;
        }
        else {
            if (end < intervals[pointer][1])
                end = intervals[pointer][1];
            if (pointer < intervals.length && start > intervals[pointer][0])
                start = intervals[pointer][0];
            pointer++;
        }
    }
    ans.push([start, end]);
    return ans;
}
;
