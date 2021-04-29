/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let s = Math.abs(x).toString();
  let arr = [];
    for (let i = s.length - 1; i >= 0; i--) {
        arr.push(s[i])
    }
  
  let result = Number(arr.join(''));
    if (result > 2 ** 31 - 1) {
    return 0;
    }
  
  if (x < 0) {
    result *= -1;
  }

  return result;
}