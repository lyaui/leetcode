// [Brutal] 初始想到的
// time O(n2), space O(1)
var twoSum1 = function (nums, target) {
  for (let i = 0; i <= nums.length - 2; i++) {
    for (let k = i + 1; k <= nums.length - 1; k++) {
      if (nums[i] + nums[k] === target) {
        return [i, k];
      }
    }
  }
  return [-1, -1];
};

// [Hashmap] Object
// time O(n), space O(n)
var twoSum2 = function (nums, target) {
  const hashmap = {};
  for (let i = 0; i <= nums.length - 1; i++) {
    hashmap[nums[i]] = i;
  }

  for (let i = 0; i <= nums.length - 1; i++) {
    const complement = target - nums[i];
    const complementIdx = hashmap[complement];
    if (complementIdx && complementIdx !== i) {
      return [i, complementIdx];
    }
  }
  return [-1, -1];
};

// [Hashmap] Map
// time O(n), space O(n)
var twoSum3 = function (nums, target) {
  const hashmap = new Map();
  for (let i = 0; i <= nums.length - 1; i++) {
    hashmap.set(nums[i], i);
  }
  for (let i = 0; i <= nums.length - 1; i++) {
    const complement = target - nums[i];
    const complementIdx = hashmap.get(complement);
    if (hashmap.has(complement) && complementIdx !== i) {
      return [i, complementIdx];
    }
  }
  return [-1, -1];
};
