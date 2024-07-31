// [hash] 初始想到的
// time O(n), space O(n)
var containsDuplicate1 = function (nums) {
  const counter = {};
  for (let key in nums) {
    const value = nums[key];
    if (counter[value] === undefined) {
      counter[value] = 1;
    } else {
      counter[value] = counter[value] + 1;
    }
  }

  for (let key in counter) {
    const count = counter[key];
    if (count >= 2) return true;
  }
  return false;
};

// [set] 後來思考，關於重複與取唯一值 => set
// time O(n), space O(n)
// 最佳解
var containsDuplicate2 = function (nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
};
