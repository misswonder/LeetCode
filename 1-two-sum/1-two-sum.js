/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const map = {};
    
    for (let i=0; i < nums.length; i++) {
        
        let value = nums[i];
        let diff = target - value;
        
        if (diff in map) {
            return [map[diff], i]
        } else {
            map[value] = i;
        }
    }
    
};