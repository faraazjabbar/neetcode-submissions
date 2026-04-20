class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagramGroup = {};
        for(let str of strs) {
            let ch = Array(26).fill(0);
            for(let c of str) {
                ch[c.codePointAt(0) - 'a'.codePointAt(0)] = (ch[c.codePointAt(0) - 'a'.codePointAt(0)] || 0) + 1;
            }
            console.log(ch)
            if(anagramGroup[ch]) {
                anagramGroup[ch].push(str)
            } else {
                anagramGroup[ch] = [str]
            }
        }
        return Object.values(anagramGroup)
    }
}
