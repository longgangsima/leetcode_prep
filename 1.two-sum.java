/*
 * @lc app=leetcode id=1 lang=java
 *
 * [1] Two Sum
 */

// @lc code=start

import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int [] finalres = new int[2];
        HashMap <Integer, Integer> res =new HashMap<>();
        for(int i=0; i< nums.length;i++){
            int rem = target - nums[i];
            if(res.containsKey(rem)){
                int val = res.get(rem);
                finalres[0] = val;
                finalres[1] = i;
            } else{
                res.put(nums[i], i);
            }
        }
        return finalres;
        
    }
}
// @lc code=end

