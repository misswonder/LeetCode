class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> newSet = new HashSet<Integer>();
        
        for (int i=0; i<nums.length; i++) {
            newSet.add(nums[i]);
        }
        
        return newSet.size() != nums.length;
    }
}