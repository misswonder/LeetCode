/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }
    let result = "";
    for (let i=0; i < strs[0].length; i++) {     
        if (strs.every((str) => str[i] === strs[0][i])) {
            result += strs[0][i];
        } else {
            break;
        }
    }
    return result;
}; 

