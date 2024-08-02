// [sore] 初始想到的
// time O(n log n), space O(n)
var isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
};

// [hash map] 較佳
// time O(n), space O(n)
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;

  const getHashMap = (str) =>
    str.split('').reduce((_acc, _cur) => {
      _acc[_cur] = _acc[_cur] ? _acc[_cur] + 1 : 1;
      return _acc;
    }, {});

  const sHashMap = getHashMap(s);
  const tHashMap = getHashMap(t);

  for (let key in sHashMap) {
    if (sHashMap[key] !== tHashMap[key]) return false;
  }
  return true;
};

// [hash map] 法2改良，只需要生成一張 hash map（法2已足夠）
// time O(n), space O(n)
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;

  const sCounter = {};

  for (let i = 0; i <= s.length - 1; i++) {
    sCounter[s[i]] = (sCounter[s[i]] || 0) + 1;
  }

  for (let i = 0; i <= t.length - 1; i++) {
    const el = t[i];
    if (!sCounter[el]) return false;
    sCounter[el]--;
  }
  return true;
};
