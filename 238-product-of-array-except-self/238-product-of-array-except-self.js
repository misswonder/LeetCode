/**
 * @param {number[]} nums
 * @return {number[]}
 */
 function productExceptSelf(nums) {
     let result = [];
     let leftProduct = 1;
     let rightProduct = 1;
     
     for (let i=0; i < nums.length; i++) {
         result[i] = leftProduct;
         leftProduct *= nums[i];
     }
     
     for (let j = nums.length - 1; j >=0; j--) {
         result[j] *= rightProduct;
         rightProduct *= nums[j];
     }
    
     return result; 
};

