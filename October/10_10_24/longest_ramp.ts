/*
962. Maximum Width Ramp
A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i.

Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.

 

Example 1:

Input: nums = [6,0,8,2,1,5]
Output: 4
Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
Example 2:

Input: nums = [9,8,1,0,1,9,4,0,4,1]
Output: 7
Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.

*/


function maxWidthRamp(ar: number[]): number {
    var max: number = 0;
    var stack: number[] = [];
    for (let i: number = 0; i < ar.length; i++) {
        if (stack.length == 0 || ar[stack[stack.length - 1]] > ar[i])
            stack.push(i);
    }
    var maxWidth: number = 0;
    for (var j = ar.length - 1; j > -1; j--) {
        while (ar[j] >= ar[stack[stack.length - 1]]) {
            if (maxWidth < j - stack[stack.length - 1]) {
                maxWidth = j - stack[stack.length - 1];
            }
            stack.pop();
        }
    }

    return maxWidth;
};
