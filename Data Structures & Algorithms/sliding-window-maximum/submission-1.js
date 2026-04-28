class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0;
        let r = 0;
        let res = [];
        let tempMax = -1111111;
        while(r< nums.length) {
            tempMax = Math.max(...nums.slice(l, r+1))
            if(r === l + k - 1) {
                console.log(l,r)
                res.push(tempMax);
                l++;
                r++;
            } else {
                r++;
            }
        }
        return res;
    }
}
