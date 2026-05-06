class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let l = 0;
        let r = heights.length - 1;
        while(l<r) {
            let totalWater = Math.min(heights[l], heights[r]) * (r - l); 
            res = Math.max(totalWater, res);
            if(heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return res;
    }
}
