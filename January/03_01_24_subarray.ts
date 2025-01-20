// 560. Subarray Sum Equals K
// Attempted
// Medium
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

function subarraySum(nums: number[], k: number): number {
    let i: number = 0;
    let j: number = 1;
    let sum: number = nums[i];
    let count: number = 0;
    while (j < nums.length || i < nums.length) {
        if (sum == k) {
            count++;
            if( nums[j] + sum == k)
                j++;
            else{
                sum -= nums[i];
                i++;
            }
        }
        else if (j == nums.length) {
            sum -= nums[i];
            i++;
        }
        else if (sum < k) {
            sum += nums[j];
            j++;
        }
        else {
            sum -= nums[i];
            i++;
        }
        console.log(i + " " + j + " " + sum + " " );
    }
    return count;
};