/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    nums.reduce((acc, curr, i, arr) => arr[i] += acc )
    return nums
};