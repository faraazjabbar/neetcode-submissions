class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count = new Set();
        for(let num of nums) {
            if(count.has(num)) {
                return true;
            } else {
                count.add(num)
            }
        }
        return false;
    }
}
