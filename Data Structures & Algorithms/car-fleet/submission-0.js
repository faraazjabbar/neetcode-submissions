class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let posSpeed = position.map((pos, i ) => [pos, speed[i]]);
        posSpeed.sort((a,b) => b[0] - a[0]);
        let stack = [];
        for(let [p,s] of posSpeed) {
            stack.push((target-p)/s);
            if(
                stack.length >=2 &&
                stack[stack.length-1] <= stack[stack.length-2]
            ) {
                stack.pop()
            }
        }
        return stack.length
    }
}
