## 217. Contains Duplicate
- Link: [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)
- Difficulty: `Easy`
- Topics: `Array`, `Hash Table`, `Sorting`

### UMPIRE Method:
#### Understand

> - Ask clarifying questions and use examples to understand what the interviewer wants out of this problem.
> - Choose a “happy path” test input, different than the one provided, and a few edge case inputs. 
> - Verify that you and the interviewer are aligned on the expected inputs and outputs.
1. input 有可能是 empty array 嗎？（原文描述是 integer array）
2. 是否有 time, space complexity 限制？
3. array 是否有排序？（有排序可降低 space complexity）

### Match
> - See if this problem matches a problem category (e.g. Strings/Arrays) and strategies or patterns within the category


1. Sort
- 如果有排序，只要前後元素進行比較即可，time `O(n)`
- 不需要額外存任何資料，space `O(1)`
```javascript
var containsDuplicate = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;
};
```

2. HashMap/ Sort
- 使用 counter 進行計次

### Plan
> - Sketch visualizations and write pseudocode
> - Walk through a high level implementation with an existing diagram

- HashMap
1. 建立 hash map 統計 array 每個元素的出現次數
2. iterate hash map，一但有元素次數 >=2 return true
3. 反之 return false


- Set
1. 使用 set 取得不重複元素
2. 比較 set 的 size 是否等於 nums 的長度
3. 如果二者不等 return true，反之 return false


### Implement
> - Implement the solution (make sure to know what level of detail the interviewer wants)

...

### Review
> - Re-check that your algorithm solves the problem by running through important examples
> - Go through it as if you are debugging it, assuming there is a bug

...

### Evaluate
> - Finish by giving space and run-time complexity
> - Discuss any pros and cons of the solution

- Time Complexity: O(N)
- Space Complexity: O(N)