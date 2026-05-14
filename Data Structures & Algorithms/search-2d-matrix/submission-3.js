class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top = 0;
        let bot = matrix.length - 1;
        while(top<=bot) {
            let mid = Math.floor((top + bot) / 2);
            if(target > matrix[mid][matrix[0].length -1]) {
                top = mid + 1;
            } else if(target < matrix[mid][0]) {
                bot = mid - 1;
            } else {
                break;
            }
        }

        if(!(top <= bot)) {
            return false;
        }
            let mid = Math.floor((top + bot) / 2);

        let arr = matrix[mid];
                let l = 0;
                let r = arr.length - 1;
                while(l<=r) {
                    let m = Math.floor((l+r) / 2);
                    if(arr[m] < target) {
                        l = m + 1;
                    } else if(arr[m] > target) {
                        r = m - 1;
                    } else {
                        return true;
                    }
                }
        return false;
    }
}
