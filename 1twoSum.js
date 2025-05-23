// 1. Two Sum
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// // Because nums[0] + nums[1] == 9

const twoSum = (nums, target) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complement in map) {
      return [i, map[complement]];
    }
    map[nums[i]] = i;
  }

  return [];
};
