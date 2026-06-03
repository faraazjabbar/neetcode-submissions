class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix.length - 1;
        let x = -1;
        while(l<=r) {
            let m = Math.floor((l+r)/2);
            let midArr = matrix[m];
            if(midArr[0] > target) {
                r = m - 1;
            } else if(midArr[midArr.length -1] < target) {
                l = m + 1;
            } else if(midArr[0] <= target && midArr[midArr.length-1] >= target) {
                x = m;
                break;
            }
        }
        if(x > -1) {
 let arr = matrix[x];
        let left = 0;
        let right = arr.length - 1;
        while(left<=right) {
            let mid = Math.floor((left+right)/2);
            if(arr[mid] === target) return true;
            else if(arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid -1;
            }
        }
        }
       
        return false;
    }
}
