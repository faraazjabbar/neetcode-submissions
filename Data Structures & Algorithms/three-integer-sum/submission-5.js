class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        let res=[];
        for(let a = 0; a<nums.length; a++) {
            if(nums[a] > 0) break;
            if (a > 0 && nums[a] === nums[a - 1]) continue;          
            let l=a+1;
            let r = nums.length-1;
            while(l<r) {
                let sum = nums[a]+nums[l]+nums[r];
                if(sum < 0) l++;
                else if(sum > 0) r--;
                else {
                    res.push([nums[a],nums[l],nums[r]]);
                    l++;
                    r--; 
                     while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
                
               
            }
        }
        return res;
    }
    
}
