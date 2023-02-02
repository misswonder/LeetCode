/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time 0(N) | Space O(N)

var containsDuplicate = function(nums) {
    
    const numsSet = new Set(nums);
    return numsSet.size !== nums.length; 
    
};

