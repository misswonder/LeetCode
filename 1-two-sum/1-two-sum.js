/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    // {value, index} //
    let hash = {}; 
    
    for (let i=0; i<nums.length; i++) {
        let n = nums[i];
        let diff = target - n;
        if(hash[diff] !== undefined) {
            return [hash[diff], i];
        } else {
            hash[n] = i;
        }
    }
    // return [];   
};