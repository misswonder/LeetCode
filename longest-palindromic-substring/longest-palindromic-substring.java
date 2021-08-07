import java.util.*;

class Solution {
    public String longestPalindrome(String s) {
        int start = 0;
        int length = 1;
        
        for (int i = 0; i < s.length(); i++) {
            for (int j = i + length + 1; j <= s.length(); j++) {
                if (
                    isPalindrome(s.substring(i, j))
                ) {
                    start = i;
                    length = j - i;
                }
            }
        }
        
        return s.substring(start, start + length);
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