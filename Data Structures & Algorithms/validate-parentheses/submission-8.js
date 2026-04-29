class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for(let c of s) {
            if(c === '[' || c === '(' || c === '{') {
                stack.push(c)
            } else {
                let top = stack[stack.length -1];
                if(c === ']' && top ==='[') {
                    stack.pop()
                } else if(c === ')' && top ==='(') {
                    stack.pop()
                } else if(c === '}' && top ==='{') {
                    stack.pop()
                } else {
                    return false;
                }
            }
        } if(stack.length < 1) return true;
        return false;
    }
}
