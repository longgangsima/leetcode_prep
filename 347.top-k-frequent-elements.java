/*
 * @lc app=leetcode id=347 lang=java
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
// Bucket Sort?
// Time: O(n)
// Space: O(n)

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    // resolve the problem by using bucket sort
    // 1. count the frequency of each number
    // use count as the index of the bucket
    // then the size of input is max count and the index of the bucket is the frequency of the number -> O(n)
    // the time complexity of this step is O(n)
    //  the space complexity of this step is O(n)
    // 2. put the number into the corresponding bucket
    // 3. get the top k frequent elements
    // start from end to k and add the number to the result 
    
    public int[] topKFrequent(int[] nums, int k) {
        // count the frequency of each number
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        // put the number into the corresponding bucket
        List<Integer>[] bucket = new List[nums.length + 1];
        for (int key : frequencyMap.keySet()) {
            int frequency = frequencyMap.get(key);
            if (bucket[frequency] == null) {
                bucket[frequency] = new ArrayList<>();
            }
            bucket[frequency].add(key);
        }
        // get the top k frequent elements
        List<Integer> res = new ArrayList<>();
        for (int i = bucket.length - 1; i >= 0 && res.size() < k; i--) {
            if (bucket[i] != null) {
                res.addAll(bucket[i]);
            }
        }
        return res.stream().mapToInt(i -> i).toArray();
    }
}
// @lc code=end

