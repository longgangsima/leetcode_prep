/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const total = nums.reduce((acc, cur) => acc * cur, 1);
  return nums.map(num => total / num);
};
// @lc code=end
/**
 * [1,2,3,4]
 * prefix = [1, 1, 2, 6]
 * postfix = [24, 12, 4, 1]
 * time complexity: O(n)
 * space complexity: O(n)
 * another approach: using division
 */

var productExceptSelf_Div = function (nums) {
  const total = nums.reduce((acc, cur) => acc * cur, 1);
  return nums.map(num => total / num);
};
