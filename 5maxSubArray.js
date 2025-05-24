// 5. Maximum Subarray (Kadane’s Algorithm)
// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// // Explanation: [4, -1, 2, 1] has the largest sum = 6

// brut Force

const maximumSubArray = (nums) => {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length - 1; j++) {
      sum = sum + nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
};

const maxSubArray = (nums) => {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = nums[i];
    } else {
      currentSum = currentSum + nums[i];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
};
