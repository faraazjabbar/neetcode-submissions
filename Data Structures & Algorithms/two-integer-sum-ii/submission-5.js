class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let numInd = {};
        for(let i = 0; i < numbers.length; i++) {
            numInd[numbers[i]] = i;
        }
        for(let i = 0; i < numbers.length; i++) {
            let diff = target - numbers[i];
            if(numInd[diff] && i < numInd[diff]) {
                return [i+1, numInd[diff] + 1]
            }
        }
    }
}
