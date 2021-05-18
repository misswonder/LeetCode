/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    return [...nums.filter(nums => nums % 2 === 0), ...nums.filter(nums => nums % 2 !== 0)];  
};