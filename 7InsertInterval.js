// 7. Insert Interval
// Input:
//   intervals = [[1, 3], [6, 9]]
//   newInterval = [2, 5]
// Output:
//   [[1, 5], [6, 9]]

const insertInterval = (intervals, newInterval) => {
  const result = [];
  let inserted = false;
  
  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];

    if (current[1] < newInterval[0]) {
      result.push(current);
    } else if (current[0] > newInterval[1]) {
      if (!inserted) {
        result.push(newInterval);
        inserted = true;
      }
      result.push(current);
    } else {
      newInterval[0] = Math.min(newInterval[0], current[0]);
      newInterval[1] = Math.max(newInterval[1], current[1]);
    }
  }

  if (!inserted) {
    result.push(newInterval);
  }

  return result;
};
