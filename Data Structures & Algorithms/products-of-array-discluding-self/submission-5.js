class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [1];
        let suffix = Array(nums.length).fill(1);
        for(let i = 1; i<nums.length; i++) {
            prefix[i] = prefix[i-1] * nums[i-1];
        }

        for(let i = nums.length - 2; i>=0; i--) {
            suffix[i] = suffix[i+1] * nums[i+1];
        }

        let res = [];
        for(let i =0; i<nums.length; i++) {
            res[i] = prefix[i] * suffix[i];
        }
        return res;
    }
}
