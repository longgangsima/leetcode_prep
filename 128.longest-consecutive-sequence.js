/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const num_set = new Set(nums);
  let longestStreak = 0;
  for (let num of num_set) {
    if (!num_set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (num_set.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak;
};
// @lc code=end
// check if the number has a left neighbor
// if it does, it is not the start of the sequence
// if it does not, then it must be the start of the sequence
//  then we can check if number + 1, number + 2, number + 3, ... exists in the set
//  if it does, we continue to count
//  if it does not, we stop and update our longestStreak
//  if we have checked all numbers, then we are done

var longestConsecutive_1 = function (nums) {
  // what is the optiomal solution?

  // how to create a set from an array?
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  const num_set = new Set(nums);
  let longestStreak = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!num_set.has(nums[i] - 1)) {
      let currentStreak = 1;
      let currentNum = nums[i];
      while (num_set.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    } else {
      longestStreak = Math.max(longestStreak, 1);
    }
  }
  return longestStreak;
};
