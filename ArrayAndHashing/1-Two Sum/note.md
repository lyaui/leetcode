## 217. Two Sum
- Link: [Two Sum](https://leetcode.com/problems/two-sum/description/)
- Difficulty: `Easy`
- Topics: `Array`, `Hash Table`

### UMPIRE Method:
#### Understand

> - Ask clarifying questions and use examples to understand what the interviewer wants out of this problem.
> - Choose a “happy path” test input, different than the one provided, and a few edge case inputs. 
> - Verify that you and the interviewer are aligned on the expected inputs and outputs.
1. 是 empty array 嗎?
2. 是否有 time, space complexity 限制？
3. array 是否排序過?
4. 是否存在重複元素?（重複的數字，後 index 會蓋掉前 index，因此不會發生問題）
5. array.length < 2 的情境可能嗎？

### Match
> - See if this problem matches a problem category (e.g. Strings/Arrays) and strategies or patterns within the category
1. Brutal
- O(n2) 雙迴圈找出符合的配對

2. hashmap
- 使用 hashmap `{ num: index }` 找出相應合為 target 的數字的 index

### Plan
> - Sketch visualizations and write pseudocode
> - Walk through a high level implementation with an existing diagram

- HashMap
1. 建立 `{ num: index }` 結構的 hashmap
2. iterate nums array，設定 `const complement = target - nums[i]` 為要找的值
3. 如果 `hashmap[complement] !== undefined` 則代表 index 存在，回傳結果

### Implement
> - Implement the solution (make sure to know what level of detail the interviewer wants)
...

### Review
> - Re-check that your algorithm solves the problem by running through important examples
> - Go through it as if you are debugging it, assuming there is a bug

1. `索引不能是自己`：例如 target:6,  [3, 4, 2] ，答案不能是 [0, 0] 
2. `注意 hashmap 的 key 值型別`：
- `for...in` 時，key 會被轉型成 string，這樣會出錯所以必須將 key 值轉為數字
```javascript
const hashMap = {}
for (let key in nums) {
    hashMap[nums[key]] = +key; // 轉數字
}
```
- 改用 `for` 就不會有問題了
```javascript
const hashMap = {}
for (let i = 0; i <= nums.length - 1; i++) {
    hashMap[nums[i]] = i; // i 必為數字
}
```

### Evaluate
> - Finish by giving space and run-time complexity
> - Discuss any pros and cons of the solution

- Time Complexity: O(N)
- Space Complexity: O(N)