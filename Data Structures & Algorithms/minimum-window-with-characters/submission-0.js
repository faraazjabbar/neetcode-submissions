class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let count = {};
        let subString = "";
        for(let c of t) {
            count[c] = (count[c] || 0) + 1;
        }
        for(let l = 0; l<s.length; l++) {
            let temp = 0;
            if(count[s[l]]) {
                let r = l;
                let tempCount = {...count}
                while(r<s.length && temp <= t.length) {
                    if(tempCount[s[r]] > 0) {
                        tempCount[s[r]]--;
                        temp++;
                        if(temp === t.length) {
                            let tempSub = s.substring(l, r + 1);
                            if(subString == "" || tempSub.length <= subString.length) {
                                subString = tempSub
                            }
                        }
                    }
                    r++;
                }
            }

        }
        return subString;
    }
}
