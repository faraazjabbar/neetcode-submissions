class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
 searchMatrix(matrix, target) {
    const ROWS = matrix.length, COLS = matrix[0].length;
    let top = 0, bot = ROWS - 1;
    let row = -1;
    while (top <= bot) {
        const mid = (top + bot) >> 1;
        if (target > matrix[mid][COLS - 1]) top = mid + 1;
        else if (target < matrix[mid][0]) bot = mid - 1;
        else { row = mid; break; }
    }
    if (row === -1) return false;

    let l = 0, r = COLS - 1;
    while (l <= r) {
        const m = (l + r) >> 1;
        if (matrix[row][m] < target) l = m + 1;
        else if (matrix[row][m] > target) r = m - 1;
        else return true;
    }
    return false;
}
}
