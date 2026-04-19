class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let temp = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        console.log(temp)
        let start = 0;
        let end = temp.length -1;
        while(start < end) {
            if(temp[start] !== temp[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;

    }
}
