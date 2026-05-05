class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for(let str of strs) {
            res+= str.length + "#"+str;
        }
        console.log(res)
        return res;
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = [];
        let l = 0;
        while(l<str.length) {
            let r = l;
            while(str[r] !== "#") r++;
            let length = Number(str.substring(l,r));
            l = r + 1;
            r = l+ length;
            arr.push(str.substring(l,r));
            l = r;
        }
        return arr;
    }
}
