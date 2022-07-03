import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];
            int diff = target - n;
            
            if(map.containsKey(n)) {
                return new int[]{map.get(n), i};
            } else {
                map.put(diff, i);
            }
        }
        return new int[0];
    }
}