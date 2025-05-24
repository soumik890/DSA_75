// 8. Longest Substring Without Repeating Characters
// Input: s = "abcabcbb"
// Output: 3
// // Explanation: The answer is "abc", with the length of 3.

const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let maxLen = 0;
  const seen = new Set();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    const windowLength = right - left + 1;
    if (windowLength > maxLen) {
      maxLen = windowLength;
    }
  }

  return maxLen;
};
