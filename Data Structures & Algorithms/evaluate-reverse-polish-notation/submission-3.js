class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let token of tokens) {
            if(token === '+') {
                let second = stack.pop();
                let first = stack.pop();
                stack.push(Math.trunc(first + second));
            } else if(token === '-') {
                let second = stack.pop();
                let first = stack.pop();
                stack.push(first - second);
            } else if(token === '*') {
                let second = stack.pop();
                let first = stack.pop();
                stack.push(Math.trunc(first * second)); 
            } else if(token === '/') {
                let second = stack.pop();
                let first = stack.pop();
                stack.push(Math.trunc(first / second));
            } else {
                stack.push(parseInt(token));
            }
        }
        return stack.pop()
    }
}
