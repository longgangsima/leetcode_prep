/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // use two sum II as base to solve this problem
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    let target = -nums[i];
    while (left < right) {
      if (nums[left] + nums[right] === target) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (nums[left] + nums[right] < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
var threeSum_Test = function (nums) {
  // use two sum II as base to solve this problem
  // sort the array
  //
  //   use two pointers to find the other two elements that sum to current negative number
  // for each element, find the other two elements that sum to current negative number
  // skip duplicates

  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    let target = -nums[i];
    while (left < right) {
      if (nums[left] + nums[right] === target) {
        result.push([nums[i], nums[left], nums[right]]);
        // skip duplicates for left and right pointers as well as i pointer to avoid duplicates in the result
        // if we have found a match, we need to skip duplicates for left and right pointers as well
        // as i pointer to avoid duplicates in the result
        // The result can't have duplicates, so we need this
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        // skip duplicates for right pointer as well as i pointer to avoid duplicates in the result

        while (left < right && nums[right] === nums[right - 1]) {
          //  [-2, -2, 0, 0, 2, 2]
          right--;
        }
        // move left and right pointers to the next unique elements to avoid duplicates in the result
        // the above will more right to the next unique element
        left++;
        right--;
      } else if (nums[left] + nums[right] < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

var threeSum_Test2 = function (nums) {
  const results = [];

  // obviously irrelevant if we don't have at least 3 numbers to play with!
  if (nums.length < 3) return results;

  // having the numbers in ascending order will make this problem much easier.
  // also, knowing the overall problem  will take at least O(N^2) time, we can
  // afford the O(NlogN) sort operation
  nums = nums.sort((a, b) => a - b);

  // if the question asks us for a custom target, we can control it here
  let target = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    // `i` represents the "left" most number in our sorted set.
    // once this number hits 0, there's no need to go further since
    // positive numbers cannot sum to a negative number
    if (nums[i] > target) break;

    // we don't want repeats, so skip numbers we've already seen
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // `j` represents the "middle" element between `i` and `k`.
    // we will increment this up through the array while `i` and `k`
    // are anchored to their positions. we will decrement `k` for
    // for each pass through the array, and finally increment `i`
    // once `j` and `k` meet.
    let j = i + 1;

    // `k` represents the "right" most element
    let k = nums.length - 1;

    // to summarize our setup, we have `i` that starts at the beginning,
    // `k` that starts at the end, and `j` that races in between the two.
    //
    // note that `i` is controlled by our outer for-loop and will move the slowest.
    // in the meantime, `j` and `k` will take turns inching towards each other depending
    // on some logic we'll set up below. once they collide, `i` will be incremented up
    // and we'll repeat the process.

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      // if we find the target sum, increment `j` and decrement `k` for
      // other potential combos where `i` is the anchor
      if (sum === target) {
        // store the valid threesum
        results.push([nums[i], nums[j], nums[k]]);

        // this is important! we need to continue to increment `j` and decrement `k`
        // as long as those values are duplicated. in other words, we wanna skip values
        // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
        // [[-2,0,2], [-2,0,2]].
        //
        // (i'm not a fan of this part because we're doing a while loop as we're
        // already inside of another while loop...)
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        // finally, we need to actually move `j` forward and `k` backward to the
        // next unique elements. the previous while loops will not handle this.
        j++;
        k--;

        // if the sum is too small, increment `j` to get closer to the target
      } else if (sum < target) {
        j++;

        // if the sum is too large, decrement `k` to get closer to the target
      } else {
        // (sum > target)
        k--;
      }
    }
  }

  return results;
};

// @lc code=end
