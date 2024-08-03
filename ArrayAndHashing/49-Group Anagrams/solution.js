// [Hashmap] 使用 sortedStr
// time O(n*mlogm), space O(n*m)
var groupAnagrams1 = function (strs) {
  const anagramsMap = {};
  for (let i = 0; i <= strs.length - 1; i++) {
    const str = strs[i];
    const sortedStr = strs[i].split('').sort().join('');

    if (!anagramsMap[sortedStr]) {
      anagramsMap[sortedStr] = [];
    }
    anagramsMap[sortedStr].push(str);
  }

  return Object.values(anagramsMap);
};

// [Hashmap] 不使用 sortedStr 當 key 的手法，而是用 charArr
// time O(n*m), space O(n*m)
var getGroupKey = function (str) {
  // 紀錄每個字母使用次數的 counter array，index 為字母位置
  // e.g: 'aabccc' 為 [2, 1, 3, 0, 0..]
  const letterCounter = Array(26).fill(0);
  for (let i = 0; i <= str.length - 1; i++) {
    const charIndex = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
    letterCounter[charIndex]++;
  }
  // "2#1#3#0#0#0#0....."
  return letterCounter.join('#');
};

var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i <= strs.length - 1; i++) {
    const str = strs[i];
    const key = getGroupKey(str);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return [...map.values()];
};
