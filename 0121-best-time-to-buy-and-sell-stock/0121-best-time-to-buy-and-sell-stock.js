/**
 * @param {number[]} prices
 * @return {number}
 */

// Time O(N) | Space O(1)

var maxProfit = function(prices) {
    
    let l = 0; //buy
    let r = 1; //sell
    let maxP = 0;
    
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l]; //current profit
            maxP = Math.max(maxP, profit);
        } else {
            l = r;
        } 
            r+=1; 
        }
   
    return maxP;
    
};