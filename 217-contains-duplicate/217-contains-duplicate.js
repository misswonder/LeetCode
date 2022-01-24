/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    let newNums = new Set(nums);
    return newNums.size !== nums.length;
};


