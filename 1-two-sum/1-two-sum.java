// class Solution {
//     public int[] twoSum(int[] nums, int target) {
//         HashMap<Integer, Integer> map = new HashMap<>();
//         int[] ans = new int[2];
        
//         for(int i = 0; i<nums.length; i++){
//             if(map.containsKey(target - nums[i])){
//                 ans[0] = map.get(target - nums[i]);
//                 ans[1] = i;
//                 return ans;
//             }
            
//              map.put(nums[i], i);
//         }
        
//         return null;
//     }
// }


public class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        HashMap<Integer,Integer> hash = new HashMap<Integer,Integer>();
        for(int i = 0; i < nums.length; i++){

            Integer diff = (Integer)(target - nums[i]);
            if(hash.containsKey(diff)){
                int toReturn[] = {hash.get(diff), i};
                return toReturn;
            }

            hash.put(nums[i], i);

        }
        
        return null;
        
    }
}