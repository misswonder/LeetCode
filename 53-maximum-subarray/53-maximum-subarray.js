/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
    
    let maxSub = nums[0];
    let currSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = nums[i];
        } else {
            currSum += nums[i];
        }
        
        if (currSum > maxSub) {
            maxSub = currSum;
        }
    }
    
    return maxSub;
};