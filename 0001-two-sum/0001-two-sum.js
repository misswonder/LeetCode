/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time O(N) | Space O(N)

var twoSum = function(nums, target) {
    
    const map = {};
    
    for (i=0; i < nums.length; i++) {
        let curr = nums[i];
        let diff = target - curr;
        
        if (diff in map ) {
            return [i, map[diff]];
        } else {
            map[curr] = i;
        }
    }
    
};