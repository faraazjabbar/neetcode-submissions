class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let collection = {};
        for (let str of strs) {
            let arr = Array(26).fill(0);
            for (let c of str) {
                const cPoint = c.codePointAt(0) - 'a'.codePointAt(0);
                arr[cPoint] += 1;
            }
            if(collection[arr]) {
                collection[arr].push(str);
            } else {
                collection[arr] = [str];
            }
        }
        return Object.values(collection);
    }
}
