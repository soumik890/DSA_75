// 4. Product of Array Except Self

// Input: nums = [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// // Explanation:
// // output[0] = 2 * 3 * 4 = 24
// // output[1] = 1 * 3 * 4 = 12
// // output[2] = 1 * 2 * 4 = 8
// // output[3] = 1 * 2 * 3 = 6

const product = (array) => {
  const n = array.length;
  const output = Array(n).fill(1);

  let prefix = 1;

  for (let i = 0; i < n; i++) {
    output[i] = prefix;
    prefix = prefix * array[i];
  }

  let suffix = 1;

  for (let i = n - 1; i >= 0; i++) {
    output[i] = output[i] * suffix;
    suffix = suffix * nums[i];
  }

  return output;
};
