class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length-1;

        while(l<r) {
            console.log(s[l],  s[r])
            if(!(/^[a-z0-9]+$/i.test(s[l]))) {
                l++;
                continue;
            }
            if(!(/^[a-z0-9]+$/i.test(s[r]))) {
                r--;
                continue;
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
