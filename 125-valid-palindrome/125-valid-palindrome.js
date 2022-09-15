/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    if (s.length === 0) {
        return true;
    }
    
    const s1 = s.replace(/[^a-z0-9]/ig, "").toLowerCase();
    
    let l = 0;
    let r = s1.length - 1;
    
    while (l < r) {
        
        if (s1[l] !== s1[r]) {
            return false;
        }
        
        l++;
        r--;
    }
    
    return true;
    
};