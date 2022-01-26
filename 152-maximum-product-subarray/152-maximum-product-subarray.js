/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    let preMax = nums[0];
    let preMin = nums[0];
    let result = nums[0];
    
    for (i=1; i < nums.length; i++) {
        
        currMax = Math.max(nums[i] * preMax, nums[i] * preMin, nums[i]);
        currMin = Math.min(nums[i] * preMax, nums[i] * preMin, nums[i]);
    
        preMax = currMax;
        preMin = currMin;
        result = Math.max(result, currMax);
    }
    
    return result;
};