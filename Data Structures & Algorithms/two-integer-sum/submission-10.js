class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numInd = {}
        for (let i=0;i<nums.length;i++) {
            numInd[nums[i]] = i
        }
        for(let i=0;i<nums.length;i++) {
            if(numInd[target - nums[i]] && i !== numInd[target - nums[i]]) {
                return [i, numInd[target - nums[i]]]
            }
        }
        return []
    }
}
