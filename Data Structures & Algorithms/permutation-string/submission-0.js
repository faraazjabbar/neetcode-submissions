class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Map = {}
        for(let s of s1) {
            s1Map[s] = (s1Map[s] || 0) + 1;
        }
        for(let l = 0; l<s2.length; l++) {
            let temp = {...s1Map};
            let r = l;
            if(temp[s2[l]]) {
                console.log(s2[l], l)
                while((r - l + 1) <= s1.length) {
                    if(temp[s2[r]] > 0) {
                        temp[s2[r]]--;
                         if((r - l + 1) === s1.length) {
                            return true;
                         }
                        r++; 

                    } else {
                        break;
                    }
                }
                
            }
           
        } 
        return false;
    }
}
