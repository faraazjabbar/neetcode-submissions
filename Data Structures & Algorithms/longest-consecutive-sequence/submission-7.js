class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numHash = {};
        let res = 0;
        for(let i =0;i <nums.length; i++) {
            numHash[nums[i]] = nums[i] + 1
        }
        for (let i = 0; i <nums.length; i++) {
            if(nums[i] -1 in numHash) {
                continue;
            } else {
                let temp = [];
                let curr = nums[i]
                while(curr in numHash) {
                    console.log(curr)
                    temp.push(curr);
                    curr++;
                } 
                if(res < temp.length) res = temp.length;
            }
        }
        return res;
    }
}
