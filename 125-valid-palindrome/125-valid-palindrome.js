/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
  if (s.length === 0) {
    return true;
  }

  // const regex = /[\_\W]/g;
    const regex = /[^a-z0-9$]/gi;
  const cleaned = [...s.toLowerCase().replace(regex, "")];

  let i = 0;
  let j = cleaned.length - 1;

  while (i < j) {
    if (cleaned[i] !== cleaned[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};
