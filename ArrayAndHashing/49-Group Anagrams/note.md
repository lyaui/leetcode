## 49. Group Anagrams
- Link: [Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)
- Difficulty: Medium<br>
- Topics: `Array`, `Hash Table`, `String`, `Sorting`

### UMPIRE Method:
#### Understand

> - Ask clarifying questions and use examples to understand what the interviewer wants out of this problem.
> - Choose a “happy path” test input, different than the one provided, and a few edge case inputs. 
> - Verify that you and the interviewer are aligned on the expected inputs and outputs.
1. input 有可能是 empty array 嗎？（原文描述是 integer array）
2. 是否有 time, space complexity 限制？
   - 初始 time 是 `O(n*mlogm)`，可以優化成 `O(n∗m)`
3. array 是否有排序？（因為是字串元素的 array，排序大小沒那麼重要）
4. 是否有區分大小寫？
 
### Match
> - See if this problem matches a problem category (e.g. Strings/Arrays) and strategies or patterns within the category

1. Sort
   - 利用 sorted string 作為 hash map 的 key 值，擁有相同的 sorted string 就是同組 anagrams 

2. HashMap
   - 儲存組別資訊
   - `{ "sorted string": [str1, str2,...] }`

### Plan
> - Sketch visualizations and write pseudocode
> - Walk through a high level implementation with an existing diagram

- `O(n*mlogm)`：
1. 建立用來儲存的 hashmap 與 result 空陣列
2. iterate strs array，將每個元素 sorted 後建立 sortedStr 變數作為 group key
3. 確認 hashmap 是否存在 key
- 如果無： set `("sorted str", [])`，並 result 建立該 group
- 如果有： 利用 map 取出 group，並在 result 的 group 中加入 str
4. 將 hashmap 的 values 結果轉換為 array 回傳

- 改良 `O(m*n)`：
1. 和一般版的差異在於 group key 的產生方式，使用 sortedStr 的話 sort() 為 O(mlogm)
2. 改用 `getSignature(str)` 取得的 group key 為 O(n*m)
3. 剩餘步驟同原版

```javascript
var getSignature = function(s) {
    // 紀錄每個字母使用次數的 counter array，index 為字母位置
    // e.g: 'aabccc' 為 [2, 1, 3, 0, 0..]
    const count = Array(26).fill(0);
    
    // 利用 charCodeAt 換算位置
    for (const c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // "2#1#3#0#0#0#0....."
    return counter.join('#')
};
```

### Implement
> - Implement the solution (make sure to know what level of detail the interviewer wants)
...

### Review
> - Re-check that your algorithm solves the problem by running through important examples
> - Go through it as if you are debugging it, assuming there is a bug

- 直接使用 sorted string 作為 key，不要使用 `JSON.stringify(counter)` 的方式來當作 hashmap 的 key，因為會有 `"{a:1, b:1}"` 跟 `"{b:1, a:1}"`。
- 善用 hashmap 儲存資訊，例如 result 的 index。
- 可以利用 `map.get(...).push(...)` 來直接改變 map 內部的值，不一定要透過 set

### Evaluate
> - Finish by giving space and run-time complexity
> - Discuss any pros and cons of the solution

1. 一般版
- Time Complexity: O(n*mlogm)，n 是 array 長度，m 是最長的 string 長度
- Space Complexity: O(m*n)

2. 進階改良版
- Time Complexity: O(m*n)，n 是 array 長度，m 是最長的 string 長度
- Space Complexity: O(m*n)