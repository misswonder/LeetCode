/**
 * @param {number[]} nums
 * @return {number}
 */
 function findMin(nums) {
//     let left = 0;
//     let right = nums.length - 1; 
    
//      while (left <= right) {
//          let middle = (left + right) / 2;
//          if (nums[middle] >= left) {
//              left = middle + 1;
//          } else {
//              right = middle - 1;
//          }
//      }     
//      return nums[left];
     
     let newNums = nums.sort((a , b) => (a- b));
     return newNums[0];
};