/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-z0-9]/ig, "").toLowerCase();
    for (let i=0; i < str.length/2; i ++) {
        let start = str[i];
        let end = str[str.length - 1 - i];
        if (start !== end) {
            return false;
        }
    }
        return true; 
};