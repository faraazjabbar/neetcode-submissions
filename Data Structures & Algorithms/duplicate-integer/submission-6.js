class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsCount = {};
        for(let i=0; i<nums.length; i++) {
            if(numsCount[nums[i]]) {
                return true;
            } else {
                numsCount[nums[i]] = 1;
            } 
        }
        return false;
    }
}
