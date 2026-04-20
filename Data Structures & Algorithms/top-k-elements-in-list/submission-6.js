class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}
        for(let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }
        let bucket = Array.from({length: nums.length + 1}, () => [])
        for(let c in count) {
            if(bucket[count[c]]) {
                bucket[count[c]].push(c);
            } else {
                bucket[count[c]] = [c]
            }
        }
        console.log(bucket[0])
        let res = [];
        for(let i = nums.length; i>0; i--) {
            console.log(i)
            for(let n of bucket[i]) {
                res.push(n);
                if(res.length == k) {
                    return res;
                }
            }
        } return []
    }
}
