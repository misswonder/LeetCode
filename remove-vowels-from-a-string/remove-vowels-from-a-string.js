/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let splitS = s.split("");
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i=0; i < splitS.length; i++) {
        for (let j=0; j < vowels.length; j++) {
            if (splitS[i] === vowels[j]) {
                splitS.splice(i, 1)
                i--;
            }
        }
    }
    return splitS.join("");
};