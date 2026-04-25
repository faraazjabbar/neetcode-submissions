class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        let l = 0;
        let r = l + 1;
        while(r != prices.length) {
            if(prices[l] > prices[r]) {
                l = r;
                r = l+1;
            } else {
                res = Math.max(res, prices[r] - prices[l]);
                r++;
            }
        }
        return res;
    }
}
