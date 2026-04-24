class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = Array(nums.length);
        let suffix = Array(nums.length);
        let res = Array(nums.length)
        prefix[0] = 1;
        suffix[nums.length-1] = 1;
        console.log(prefix,suffix)
        for(let i = 1;i<nums.length;i++) {
            console.log()
            prefix[i] = prefix[i-1] * nums[i-1];
        }
        for(let i=nums.length-2; i>=0; i--) {
            suffix[i] = suffix[i+1] * nums[i+1]
        }
        console.log(prefix,suffix)
        for(let i=0; i<nums.length; i++) {
            res[i] = prefix[i] * suffix[i]
        }
        return res;
    }
}
