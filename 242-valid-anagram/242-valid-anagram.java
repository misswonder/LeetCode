class Solution {
    public boolean isAnagram(String s, String t) {
        
        if (s.length() != t.length()) {
            return false;
        }
        
        // covert both strings to arrays
        char[] charArr1 = s.toCharArray();
        
        // sort the arrays from a-z
        Arrays.sort(charArr1);
        
        // create new strings to hold the values of the sroted arrays
        String s1 = new String(charArr1);
        
        
        char[] charArr2 = t.toCharArray();
        Arrays.sort(charArr2);
        String t1 = new String(charArr2);
        
        // compare two strings, if they are equal, they are anagrams of each other
        return s1.equals(t1);
        
    }
}

