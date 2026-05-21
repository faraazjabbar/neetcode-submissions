class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;
        while(l<=r) {
            let m = Math.floor((r + l) / 2);
            let temp = 0;
            for(let p of piles) {
                temp += Math.ceil(p/m);
            }
            if(temp <= h) {
                console.log(temp);
                r = m - 1;
                res = m
            }
            else if(temp > h) {
                l = m + 1;
            }
        }
        return res;
    }
}
