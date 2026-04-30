class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let subSet = new Set();
        let l = 0
        let r = 0
        let res = 0;
        while(r<s.length) {
            while(subSet.has(s[r])) {
                subSet.delete(s[l]);
                l++;
            }
            subSet.add(s[r])
            r++;
            res = Math.max(res, subSet.size)
        }
        return res
    }
}
