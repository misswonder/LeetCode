/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // let sum = 0;
    // let max = nums[0];
    // for (let i=0; i < nums.length; i++) {
    //     for (let j=i+1; j <nums.length-1; j++) {
    //         if (nums[i] + nums[j] > max) {
    //             max = nums[i] + nums[j];
    //         }
    //     }
    //     sum = max;
    // }
    // return sum;
    
//     let max = nums[0];
    
//     for(let i = 0; i < nums.length; i++) { 
//         for(let j = i+1; j < nums.length + 1; j++) {
//             let sum = 0;
//             for(let k = i; k < j; k++) {
//                 sum += nums[k];
//             }
//             if (sum > max) {
//                 max = sum;
//             }
//         }
//     }
    
//     return max;
    
//     let sums = [0];
//     for (let i = 0; i < nums.length; i++) {
//         sums[i+1] = sums[i] + nums[i];
//     }
    
//     let max = nums[0];
    
//     for(let i = 0; i < nums.length; i++) { 
//         for(let j = i+1; j < nums.length + 1; j++) {
//             let sum = sums[j] - sums[i];
//             if (sum > max) {
//                 max = sum;
//             }
//         }
//     }
//     return max;
    
    let max = nums[0];
    let sum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (sum < 0) {
            sum = nums[i];
        } else {
            sum += nums[i];
        }
        
        if (sum > max) {
            max = sum;
        }
    }
    
    return max;
};