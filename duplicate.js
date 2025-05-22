// Input: nums = [1, 2, 3, 1]
// Output: true

// Input: nums = [1, 2, 3, 4]
// Output: false

const duplicate = (array) => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] > 1) {
      return true;
    } else {
      map[array[i]] = 1;
    }
  }
  return false;
};

const duplicate_new = (array) => {
  let unique = [...new Set(array)];
  return unique.length !== array.length;
};
