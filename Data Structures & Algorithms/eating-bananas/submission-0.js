class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const maxPile = Math.max(...piles);
        for(let i = 1; i<maxPile; i++) {
            let res = 0;
            for(let p of piles) {
                res += Math.ceil(p/i);
            } 
            if(res<=h) {
                return i
            }
        }
        return maxPile
    }
}
