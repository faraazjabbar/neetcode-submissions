class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        let cSet = new Set();
        for(let i =0; i<s.length; i++) {
            cSet.add(s[i]);
            let curr = i + 1;
            res = Math.max(res, cSet.size)
            while(curr<s.length) {
                if(cSet.has(s[curr])) {
                    cSet = new Set();
                    break;
                } else {
                    cSet.add(s[curr]);
                    res = Math.max(res, cSet.size)
                    console.log(cSet.size)
                    curr++;
                }
            }
        } return res;
    }
}
