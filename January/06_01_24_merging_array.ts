/**
 * 56. Merge Intervals
Solved
Medium
Topics
Companies
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

function merge(intervals: number[][]): number[][] {
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    var ans : number[][] = [];
    var start : number = intervals[0][0];
    var end : number = intervals[0][1];
    var pointer : number = 1;
    while( pointer < intervals.length ){
        console.log(start,end,pointer);
        if(end < intervals[pointer][0] ){
            ans.push([start,end]);
            start = intervals[pointer][0];
            end = intervals[pointer][1];
            pointer++;
        }
        else{
            if(end < intervals[pointer][1])
                end = intervals[pointer][1];
            if(pointer < intervals.length && start > intervals[pointer][0])
                start = intervals[pointer][0];
            pointer++;
        }
    }
    ans.push([start,end]);
    return ans;
};