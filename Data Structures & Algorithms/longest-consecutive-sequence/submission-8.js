class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let unique = new Set(nums);
        let res = 0;
        for(let i = 0;i<nums.length; i++) {
            if(unique.has(nums[i]-1)) {
                continue;
            }
            let current = nums[i];
            let temp = 1;
            while(unique.has(current+1)) {
                temp++;
                current++;
            }
            res = Math.max(res, temp);
        }
        return res;
    }
}
