/**
 * @param {number[]} nums
 * @return {number}
 */
 function findMin(nums) {
    let result = nums[0];
    let left = 0;
    let right = nums.length - 1; 
    
     while (left <= right) {
         if (nums[left] < nums[right]) {
             result = Math.min(result, nums[left]);
             break;
         }
         let middle = Math.floor((left + right) / 2);
         result = Math.min(result, nums[middle]);
         if (nums[middle] >= nums[left]) {
             left = middle + 1;
         } else {
             right = middle - 1;
         }
     }     
     return result;
     
     // let newNums = nums.sort((a , b) => (a- b));
     // return newNums[0];
};