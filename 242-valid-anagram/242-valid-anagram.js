/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// time O(n) space O(n)
// var isAnagram = function(s, t) {
//     if(s.length !== t.length) {
//         return false
//     }
    
//     const hashMap = new Map()
    
//     for(const letter of s) {
//         hashMap.set(letter, hashMap.get(letter) + 1 || 1)
//     }
    
//     for(const letter of t) {
//         if(!hashMap.get(letter)) {
//             return false
//         }
//         hashMap.set(letter, hashMap.get(letter) - 1)
//     }
    
//     return true
// };

// time O(n log n) space O(n)
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false
    }
    
    return s.split('').sort().join('') === t.split('').sort().join('')
};
