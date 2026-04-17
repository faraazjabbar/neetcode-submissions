class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numInd = {}
        for (let i=0; i<nums.length; i++) {
            numInd[nums[i]] = i
        }
        for (let i=0; i<nums.length; i++) {
            const diff = target - nums[i];
            if(numInd[diff] && i !== numInd[diff]) {
                return [i, numInd[diff]]
            }
        }
        return false
    }
}
