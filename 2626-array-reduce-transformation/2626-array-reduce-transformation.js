/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    
//     const n = [1, 2, 7, 4, 5];
//     function fn(init, n) {
//         return init * n;
//     }
    
//     console.log(nums.reduce(fn, 0));
    
    return nums.reduce(fn, init);
    
    // let res = init;
    // for (let i=0; i < nums.length; i++) {
    //     res += (fn, nums[i]);
    // }
    // return res;
    
};