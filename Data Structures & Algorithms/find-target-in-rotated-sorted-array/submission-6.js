class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        let res = -1;
        while(l<=r) {
            let m = Math.floor((l+r)/2);
            if(nums[m] === target) {
                res = m;
                break;
            } else {
                if(nums[l] <= nums[m]) {
                    if(nums[m] <= target || target < nums[l]) {
                        l = m + 1;
                    }else {
                        r = m -1;
                    }
                } else {
                    if(nums[m] > target || nums[r] < target) {
                        r = m -1;
                    } else {
                        l = m +1;
                    }
                }
            }
        }
        return res;
    }
}
