/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     var result = [];
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 result.push(i, j)
//             }
//         }
//     }
//     return result;   
// };


function twoSum(nums, target) {
//     {value, index}
    const container = {}; 
    for (let i=0; i < nums.length; i++) {
        const potentialNum = target - nums[i];
        if (potentialNum in container) {
            return [container[potentialNum], i];
        } else {
            container[nums[i]] = i;
        }
    } 
    return [];
}

