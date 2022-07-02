class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> newSet = new HashSet<>();
        
        for(int i = 0; i < nums.length; i++) {
            if(newSet.contains(nums[i])) {
                return true;
            } else {
                newSet.add(nums[i]);
            }
        }
        return false;
    }
}