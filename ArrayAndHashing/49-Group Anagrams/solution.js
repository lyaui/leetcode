// [Hashmap] 初始想到的
// time O(n*mlogm), space O(n*m)
var groupAnagrams1 = function (strs) {
  const anagramsMap = {}; // {'{a:1, b:2}':[],...}
  const counterArr = []; // [['{a:1, b:2}', 'abb'],...]
  for (let i = 0; i <= strs.length - 1; i++) {
    const str = strs[i];
    // mlogm
    const sortedStr = strs[i].split('').sort().join('');

    // 直接將排列後的單字作為 key（拿 hashmap 當 key 會有順序問題）
    anagramsMap[sortedStr] = [];
    counterArr.push([sortedStr, str]);
  }
  // 設定 counterArr 這段是冗贅的，建議直接參考法2來改良
  for (let i = 0; i <= counterArr.length - 1; i++) {
    const [mapStr, str] = counterArr[i];
    anagramsMap[mapStr].push(str);
  }

  return Object.values(anagramsMap);
};

// [Hashmap] 法1的改良版
// time O(n*mlogm), space O(n*m)
var groupAnagrams2 = function (strs) {
  const anagramsMap = new Map();
  const result = [];
  for (let i = 0; i <= strs.length - 1; i++) {
    const str = strs[i];
    const sortedStr = strs[i].split('').sort().join('');

    if (anagramsMap.has(sortedStr)) {
      result[anagramsMap.get(sortedStr)].push(str);
    } else {
      // 利用 map 的 value 儲存 result 的 index
      anagramsMap.set(sortedStr, result.length);
      result.push([str]);
    }
  }

  return result;
};
