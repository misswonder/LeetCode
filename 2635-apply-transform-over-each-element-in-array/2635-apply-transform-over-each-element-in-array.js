/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // return arr.map(fn);
    
    // for (cost i in arr) => i = index
    // for (cost n of arr) => n = value
    
   const res = [];
    
    for (const i in arr) {
        res.push(fn(arr[i], Number(i)));
    }
    
    return res;
};