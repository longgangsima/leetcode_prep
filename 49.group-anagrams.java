/*
 * @lc app=leetcode id=49 lang=java
 *
 * [49] Group Anagrams
 */

// @lc code=start

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> finalRes = new HashMap<>();
        for (String str: strs){
            int[] count = new int [26];
            for (char ele: str.toCharArray()){
                count[ele - 'a']++;
            }
            StringBuilder sb = new StringBuilder();
            for(int i=0; i< 26; i++){
                sb.append("#").append(count[i]);
            }
            String key = sb.toString();
            if(!finalRes.containsKey(key)){
                finalRes.put(key, new ArrayList<>());
            }
            finalRes.get(key).add(str);
        }
        return new ArrayList<>(finalRes.values());
    }
}
// @lc code=end

