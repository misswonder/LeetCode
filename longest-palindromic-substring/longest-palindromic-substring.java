import java.util.*;

class Solution {
    public String longestPalindrome(String s) {
        int maxStart = 0;
        int maxEnd = 1;
        int start = 0;
        int end = s.length();
        
        while (start < s.length()) {
            if (
                (end - start) > (maxEnd - maxStart) &&
                isPalindrome(s.substring(start, end))
            ) {
                maxStart = start;
                maxEnd = end;
            }
            
            if (end > start + 1) {
                end--;
            } else {
                start++;
                end = s.length();
            }
        }
        
        return s.substring(maxStart, maxEnd);
    }
    
    public boolean isPalindrome(String s) { 
        for(int i = 0; i < s.length()/2; i++) {
            if (s.charAt(i) != s.charAt(s.length() - i - 1)) {
                return false;
            }
        }
        return true;
    }
}