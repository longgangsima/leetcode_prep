/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let minHeight = Math.min(height[left], height[right]);
    let width = right - left;
    max = Math.max(max, minHeight * width);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
// @lc code=end
